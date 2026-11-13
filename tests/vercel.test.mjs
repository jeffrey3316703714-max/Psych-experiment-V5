import test from 'node:test';
import assert from 'node:assert/strict';
import {GET, POST} from '../api/[action].js';

function req(path,method='GET',body){return new Request('https://study.example'+path,{method,headers:body?{'content-type':'application/json'}:undefined,body:body?JSON.stringify(body):undefined});}
test('Vercel function exports web-standard handlers',async()=>{
 const r=await GET(req('/api/fake'));
 assert.equal(r.status,404);
 assert.deepEqual(await r.json(),{error:'Not found'});
 const refused=await POST(req('/api/start','POST',{consent:false}));
 assert.equal(refused.status,400);
});
test('new Supabase secret keys are sent as apikey, not a JWT bearer token',async()=>{
 const oldFetch=globalThis.fetch;
 const oldUrl=process.env.SUPABASE_URL;
 const oldKey=process.env.SUPABASE_SERVICE_ROLE_KEY;
 process.env.SUPABASE_URL='https://example.supabase.co';
 process.env.SUPABASE_SERVICE_ROLE_KEY='sb_secret_example';
 let called=false;
 globalThis.fetch=async(url,init)=>{
  called=true;assert.match(url,/rpc\/start_study$/);
  assert.equal(init.headers.apikey,'sb_secret_example');
  assert.equal(init.headers.Authorization,undefined);
  return new Response(JSON.stringify({id:'00000000-0000-4000-8000-000000000001',version:'B',step:0}),{status:200});
 };
 try{
  const r=await POST(req('/api/start','POST',{consent:true}));
  assert.equal(r.status,201);
  assert.equal((await r.json()).version,'B');
  assert.equal(called,true);
 }finally{
  globalThis.fetch=oldFetch;
  if(oldUrl===undefined)delete process.env.SUPABASE_URL;else process.env.SUPABASE_URL=oldUrl;
  if(oldKey===undefined)delete process.env.SUPABASE_SERVICE_ROLE_KEY;else process.env.SUPABASE_SERVICE_ROLE_KEY=oldKey;
 }
});
