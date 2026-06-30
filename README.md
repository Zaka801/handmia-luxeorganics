# H & Mia Luxe Organics

Premium mobile-first ecommerce site for H & Mia handmade soaps.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Supabase Setup

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local`.
3. Add your project values:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. In Supabase SQL Editor, run:

```bash
supabase/orders.sql
```

The cart works in the browser, but live sign-in and order saving require those Supabase values.

## Checkout Flow

- Customers add products to cart.
- Checkout asks the customer to sign in with Supabase.
- The site generates an invoice with product names, quantities, prices, delivery note, and total.
- A WhatsApp button appears with the invoice message prefilled for payment confirmation.

## Quick Edits

- WhatsApp number: `src/config/whatsapp.js`
- Email and social links: `src/config/contact.js`
- Products, pricing, copy, and images: `src/data/products.js`
- Product images: `public/images/`

## Deploy

Deploy to Vercel and add the same Supabase environment variables in the Vercel project settings.
