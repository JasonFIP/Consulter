# Dairy Nutrition Consult

A guided 8-step seasonal-planning workflow for dairy nutrition sales reps. Captures the conversation step-by-step, calculates orders from herd size and dose rates, and exports a polished summary as PDF, plain-text, copy-paste, or email.

Built with React + Vite + Tailwind CSS.

---

## Run locally

You need **Node.js 18+** installed. Then:

```bash
npm install
npm run dev
```

The app opens at `http://localhost:5173`. Edits hot-reload.

---

## Build for production

```bash
npm run build
```

The full site lands in `dist/` as static HTML/JS/CSS. No server needed — just upload that folder to any static host.

To preview the built site locally:

```bash
npm run preview
```

---

## Deploy

The app is a fully static single-page app. Any static host works:

### Vercel (easiest)
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com → "Add New Project" → import the repo.
3. Vercel auto-detects Vite. Click Deploy. Done.

### Netlify
1. Push to GitHub.
2. https://app.netlify.com/start → connect repo.
3. Build command: `npm run build` · Publish directory: `dist`.

### Cloudflare Pages
1. Push to GitHub.
2. Cloudflare Dashboard → Pages → Create → connect repo.
3. Framework preset: Vite. Build command: `npm run build` · Output dir: `dist`.

### GitHub Pages
1. `npm run build` locally.
2. Push the contents of `dist/` to a `gh-pages` branch (or use the `peaceiris/actions-gh-pages` GitHub Action).
3. Enable Pages in repo settings.

### Any other host
Upload everything in `dist/` to your web root after `npm run build`. That's it.

---

## How data is stored

Each rep's in-progress consult is saved in the **browser's localStorage** on their device. There is no backend — the platform works fully offline once loaded. Data is not synced between devices and is cleared if the user clears site data.

If you need shared/team data, CRM integration, or a persistent backend, that's a separate addition (Supabase, Firebase, or a custom API).

---

## Project structure

```
web-app/
├── index.html              ← Vite entry HTML
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx            ← React mount
    ├── App.jsx             ← The full application
    └── index.css           ← Tailwind directives
```

The bulk of the app — including all product catalogs, dose calculators, summary rendering, and PDF export — lives in `src/App.jsx`. To adjust products, doses, or step copy, edit the relevant `const` block at the top of that file (e.g. `BEDDING_PRODUCTS`, `TRANSITION_PRODUCTS`, `STEPS`).

---

## Browser support

Modern evergreen browsers — Chrome, Edge, Firefox, Safari (incl. iOS). The PDF export uses an in-page hidden iframe + `window.print()`, which works without popup permissions in all modern browsers.
