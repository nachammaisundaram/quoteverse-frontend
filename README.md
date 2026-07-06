# QuoteVerse Frontend

React (Vite) app that displays random quotes fetched from the QuoteVerse backend API.

## Folder Structure
```
src/
  components/QuoteCard.jsx  -> UI component
  services/api.js           -> API call logic
  App.jsx                   -> main app logic
  main.jsx                  -> React entry point
  index.css                 -> styling
```

## Run locally
```bash
npm install
cp .env.example .env   # set VITE_API_URL to your backend URL
npm run dev
```

## Deployment
Hosted on Vercel. Build command: `npm run build`, Output directory: `dist`.
Environment variable `VITE_API_URL` must be set in Vercel dashboard to the Render backend URL.
