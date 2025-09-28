# DTracker on GitHub Pages (customer param + Firebase)

Open with a customer parameter:
`https://<user>.github.io/<repo>/?customer=ACME`

Everyone on the same `?customer=ACME` sees identical state.

Steps:
1) Commit these files to the repo root (`index.html`, `service-worker.js`, `manifest.webmanifest`, `.nojekyll`, `404.html`).
2) Settings → Pages → Source: `main` (root).
3) Ensure Firebase Authentication: **Anonymous** is enabled, and **Firestore** is created.
4) Share your app link with a `?customer=` param.

Starter Firestore rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /sessions/{customer} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /sessions/{customer}/presence/{uid} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```
