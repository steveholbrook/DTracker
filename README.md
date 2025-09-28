# DTracker (GitHub Pages + Firebase) — ?customer with locked UI

- If the URL includes `?customer=XYZ`, the **Customer Name** input is **read-only** (🔒) and the session syncs to `sessions/xyz`.
- If there’s **no** param, you can type a name and the URL will update and start syncing to that customer key.

## Deploy
1) Add these files to your repo root: `index.html`, `service-worker.js`, `manifest.webmanifest`, `.nojekyll`, `404.html`.
2) Settings → Pages → Source: `main` (root).
3) Open: `https://<user>.github.io/<repo>/?customer=SNP` and share that link.

## Firebase
- Enable **Authentication → Anonymous**
- Create **Firestore** (starter rules allow public reads + authenticated writes)
