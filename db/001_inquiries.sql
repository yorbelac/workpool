-- Contact form submissions from workpool.app
create table if not exists inquiries (
  id          bigint generated always as identity primary key,
  name        text        not null,
  email       text        not null,
  company     text,
  message     text        not null,
  ip_hash     text,
  emailed     boolean     not null default false,
  created_at  timestamptz not null default now()
);

create index if not exists inquiries_ip_hash_created_at_idx on inquiries (ip_hash, created_at desc);
