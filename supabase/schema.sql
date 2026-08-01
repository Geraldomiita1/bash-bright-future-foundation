-- BBFF Supabase schema
-- Run in the Supabase SQL Editor once the project is provisioned.
-- Source: BBFF Website Requirements Document, Section E.

create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  body text not null,
  status text not null default 'new' check (status in ('new', 'read', 'responded')),
  created_at timestamptz not null default now()
);

-- Allow anonymous inserts (public contact form), but not reads/updates/deletes.
alter table messages enable row level security;

create policy "Public can submit messages"
  on messages for insert
  to anon
  with check (true);

-- Admin-only tables are added in later Supabase stages (Users, Projects,
-- Beneficiaries, Donations, Volunteers, News, Reports) once Authentication
-- (Stage: Auth) is in place, so they can be scoped to authenticated admins.
