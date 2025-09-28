# DTracker — NO-TAKEOVER variant (UID presence)

**Behavior**
- First writer becomes the **controller** (`controllerUid` is set once).
- **Controller cannot change**; no one can take over, even if offline.
- All other browsers are **VIEWER** (UI disabled), but they mirror timeline/status.
- `?viewer=1` forces read-only mode for that tab.

**Rules**
- Use `firebase_rules.txt` and click **Publish**. These rules enforce immutability of `controllerUid` after it's set and ensure only the controller can update session state.

**Deploy**
1. Copy all files to your repo root (GitHub Pages source = main / root).
2. Firebase → Firestore → Rules → paste `firebase_rules.txt` → **Publish**.
3. (Optional) Open `unregister-sw.html` once to clear old service worker cache.
4. Test with two browsers: `/?customer=Woolworths%20Group`. First tab is HOST; others are VIEWER.

— Generated 1759097140
