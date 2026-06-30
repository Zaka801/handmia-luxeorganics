create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  invoice_no text not null unique,
  user_id uuid not null references auth.users(id) on delete cascade,
  customer_name text not null,
  customer_email text,
  customer_phone text,
  delivery_address text,
  delivery_city text,
  delivery_notes text,
  items jsonb not null,
  item_count integer not null,
  subtotal integer not null,
  total integer not null,
  delivery_note text,
  status text not null default 'whatsapp_pending',
  whatsapp_message text,
  created_at timestamptz not null default now()
);

alter table public.orders add column if not exists delivery_address text;
alter table public.orders add column if not exists delivery_city text;
alter table public.orders add column if not exists delivery_notes text;

alter table public.orders enable row level security;

drop policy if exists "Users can create their own orders" on public.orders;
create policy "Users can create their own orders"
  on public.orders
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can view their own orders" on public.orders;
create policy "Users can view their own orders"
  on public.orders
  for select
  to authenticated
  using (auth.uid() = user_id);

grant select, insert on public.orders to authenticated;
