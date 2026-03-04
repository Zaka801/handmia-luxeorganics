# H & Mia Luxe Organics Website (React + Vite)

## 1) Run locally
1. Install Node.js (LTS)
2. Open this folder in VS Code
3. Run:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## 2) Change WhatsApp number (one place)
Edit:
`src/config/whatsapp.js`

## 3) Replace product images
Right now the project uses placeholders. Later you can replace them by:
- Putting images in `/public/images/` or `src/assets/`
- Updating `src/data/products.js`
- Updating `ProductCard` & `ProductDetail` to use `<img />` tags

(Ask ChatGPT and we’ll do it step-by-step.)

## 4) Deploy (Vercel)
- Push this repo to GitHub
- On Vercel: New Project → Import GitHub repo → Deploy
- This project includes `vercel.json` so React Router pages work on refresh.


## Quick edits (non-technical)

### 1) Change Email (Gmail)
Open: `src/config/contact.js`
Edit:
- `CONTACT_EMAIL`

### 2) Add / Replace Images
Put your images here:
- `public/images/`

Suggested filenames (you can change them, but keep consistent with `src/data/products.js`):
- `hero.jpg`
- `stress-relief-soap.jpg`
- `collagen-booster-soap.jpg`
- `baby-bear-soap.jpg`
- `baby-kitty-soap.jpg`
- `whitening-soap.jpg`

### 3) Add / Edit Products
Open: `src/data/products.js`
Each product has:
- `name`, `shortDescription`, `ingredients`, `benefits`, `howToUse`, `goodFor`, `image`
