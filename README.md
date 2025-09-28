# How to run on GitHub Pages with Firebase (beginner)

1) **Create a new GitHub repo** and add these files (`index.html`, `.nojekyll`, `404.html`).
2) **Enable GitHub Pages**: Repo → Settings → Pages → Branch: `main` (root).
3) **Open your site** with a room in the URL, e.g.  
   `https://<your-user>.github.io/<your-repo>/?room=demo`
4) **Share that exact link**. Everyone on the same `?room=...` sees the same timeline, notes, and runbook.
5) Make sure in Firebase you have:
   - **Authentication → Anonymous** enabled
   - **Firestore** created (test rules OK for a quick trial)
6) (Optional) Tighten Firestore rules later (see prior message).

The Firebase config block inside `index.html` uses your provided project settings.
