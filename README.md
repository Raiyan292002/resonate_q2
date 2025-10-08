# Contacts App — Resonate Q2 (React + Vite)

Responsive contacts browser using **jsonplaceholder** `/users`.

## Features
- Fetches contacts from https://jsonplaceholder.typicode.com/users
- Search by **name, username, email, phone, company, website, city**
- Filter by **city**
- Responsive, card-based UI with modal details
- Loading skeletons, error handling + retry

## Tech
- React 18 + Vite
- Handcrafted CSS

## Run locally
1. **Install Node.js**
2. In a terminal, install deps:
   ```sh
   npm i
   ```
3. Start dev server:
   ```sh
   npm run dev
   ```
4. Open the printed URL

## Build for production
```sh
npm run build
npm run preview   # serve the built files locally
```

## Deploy
- Using Vercel: https://resonate-q2-virid.vercel.app/

## Notes
- Data is cached in `sessionStorage` for 1 hour to reduce API calls.
- The UI is intentionally lightweight: no routing and no extra dependencies.
