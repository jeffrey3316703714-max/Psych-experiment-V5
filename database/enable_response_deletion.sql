-- Run this once in Supabase SQL Editor if you already installed schema.sql.

-- Researcher-initiated deletion. The Vercel server checks the signed researcher
-- session before calling this privileged RPC; direct browser access is revoked.
-- Historical A/B allocation counters are intentionally NOT decremented.
create or replace function public.research_delete_response(p_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  delete from public.study_sessions where id = p_id;
  return found;
end;
$$;
revoke all on function public.research_delete_response(uuid) from public, anon, authenticated;
grant execute on function public.research_delete_response(uuid) to service_role;
