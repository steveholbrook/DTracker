# DTracker (GitHub Pages + Firebase) — ?customer parameter

1) Commit these to the repo root: `index.html`, `service-worker.js`, `manifest.webmanifest`, `.nojekyll`, `404.html`.
2) Settings → Pages → Source: `main` (root).
3) Open `https://<user>.github.io/<repo>/?customer=ACME` and share that link.
4) In Firebase: enable **Anonymous** auth and create **Firestore**.
5) Use the starter rules in README to allow authenticated writes and public reads.
