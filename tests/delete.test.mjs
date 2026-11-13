import test from 'node:test';
import assert from 'node:assert/strict';
import {createHmac} from 'node:crypto';
import {POST} from '../api/[action].js';
import {readFileSync} from 'node:fs';

const id='12345678-1234-4123-8123-1234567890ab';
const req=(cookie, body={id})=>new Request('https://study.example/api/delete-response',{
 method:'POST', headers:{'content-type':'application/json', ...(cookie?{'cookie':cookie}:{})},body:JSON.stringify(body)
});

test('delete requires researcher authorization, even when response UUID is known',async()=>{
 const result=await POST(req(null));
 assert.equal(result.status,401);
});

test('authorized delete uses privileged RPC and does not adjust lifetime allocations',async()=>{
 const original={secret:process.env.RESEARCHER_SESSION_SECRET,url:process.env.SUPABASE_URL,key:process.env.SUPABASE_SERVICE_ROLE_KEY,fetch:globalThis.fetch};
 process.env.RESEARCHER_SESSION_SECRET='test-secret-at-least-thirty-two-character-long';
 process.env.SUPABASE_URL='https://example.supabase.co';
 process.env.SUPABASE_SERVICE_ROLE_KEY='sb_secret_test';
 const raw=Buffer.from(JSON.stringify({exp:Date.now()+3600000,n:'abc'})).toString('base64url');
 const sig=createHmac('sha256',process.env.RESEARCHER_SESSION_SECRET).update(raw).digest('base64url');
 const cookie=`sas_research_session=${raw}.${sig}`;
 let calls=0;
 globalThis.fetch=async(url, options)=>{
   calls++;
   assert.match(url,/\/rest\/v1\/rpc\/research_delete_response$/);
   assert.equal(JSON.parse(options.body).p_id,id);
   assert.equal(options.headers.apikey,'sb_secret_test');
   return new Response('true',{status:200,headers:{'Content-Type':'application/json'}});
 };
 try{
  const response=await POST(req(cookie));
  assert.equal(response.status,200);
  assert.deepEqual(await response.json(),{deleted:true});
  assert.equal(calls,1);
  const invalid=await POST(req(cookie,{id:'bad'}));
  assert.equal(invalid.status,400);
  assert.equal(calls,1);
 }finally{
  for(const [k,v] of Object.entries({RESEARCHER_SESSION_SECRET:original.secret,SUPABASE_URL:original.url,SUPABASE_SERVICE_ROLE_KEY:original.key})) {if(v===undefined)delete process.env[k];else process.env[k]=v;}
  globalThis.fetch=original.fetch;
 }
});

test('deletion SQL preserves lifetime assignment counters and dashboard includes Delete control',()=>{
 const sql=readFileSync('database/enable_response_deletion.sql','utf8');
 const js=readFileSync('public/researcher.js','utf8');
 assert.match(sql,/delete from public.study_sessions where id = p_id/);
 assert.doesNotMatch(sql,/update public.study_assignment_totals/i);
 assert.match(js,/delete-response/);
 assert.match(js,/window.confirm/);
});
