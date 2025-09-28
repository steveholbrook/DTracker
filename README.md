# DTracker — GitHub Pages + Firebase (UID presence)

**What this build does**
- Presence docs use **plain UID**: `/sessions/{customer}/presence/{UID}` (matches strict rules).
- Shared session state (timeline/runbooks) syncs via `/sessions/{customer}`.
- Non-caching service worker to avoid stale/blank pages.

**Deploy**
1. Copy all files in this folder to your repo root (e.g. `DTracker/`).
2. GitHub → Settings → Pages → Source = **main / root**.
3. Open: `https://<user>.github.io/<repo>/?customer=Woolworths%20Group`

**Verify**
- (Optional) Open `unregister-sw.html` once to clear old SW caches.
- Open `diag.html?customer=Woolworths%20Group` in two different browsers/profiles:
  - Auth = OK, Presence write = OK, Online increments to 2.

**Firebase prerequisites**
- Authentication → Sign-in method → **Anonymous = Enabled**
- Authentication → Settings → Authorized domains → add `steveholbrook.github.io`
- Firestore → Rules → publish the rules in `firebase_rules.txt`

— Generated 1759093596
