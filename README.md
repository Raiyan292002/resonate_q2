# Contacts App — Resonate Q2 (React + Vite)

Responsive contacts browser using **jsonplaceholder** `/users`.

## Features
- Fetches contacts from https://jsonplaceholder.typicode.com/users
- Search by **name, username, email, phone, company, website, city**
- Filter by **city**
- Responsive, card-based UI with modal details
- Loading skeletons, error handling + retry
- Keyboard & a11y-friendly (aria labels), link actions (tel:, mailto:, website)
- Zero backend; no create/update/delete required

## Tech
- React 18 + Vite
- No CSS frameworks; handcrafted modern CSS

## Run locally
1. **Install Node.js** (>= 18 recommended).
2. In a terminal, install deps:
   ```sh
   npm i
   ```
3. Start dev server:
   ```sh
   npm run dev
   ```
4. Open the printed URL (typically http://localhost:5173).

## Build for production
```sh
npm run build
npm run preview   # serve the built files locally
```

## Deploy
- **Vercel**: import the repo → framework: Vite → build: `npm run build` → output: `dist`
- **Netlify**: build command `npm run build`, publish directory `dist`
- **GitHub Pages**: build then push `dist` to a `gh-pages` branch or use an action

## Notes
- Data is cached in `sessionStorage` for 1 hour to reduce API calls.
- The UI is intentionally lightweight: no routing and no extra dependencies.
