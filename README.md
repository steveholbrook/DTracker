# DTracker — NO-TAKEOVER + Field Locks (UID presence)

**Behavior**
- First writer becomes **HOST** (`controllerUid` set once, immutable).
- All other browsers are **VIEWER** (read-only), mirroring timeline/status.
- When the timeline starts, **Customer Name** (`#customerName`) and **Transform Cycle** (`#transformCycle`) become read-only for **everyone**, including HOST.
- Those two fields are mirrored through Firestore state so all tabs display the same values.
- `?viewer=1` still forces a tab into viewer mode.

**Deploy**
1. Copy all files to your repo root (GitHub Pages source = main / root).
2. Firebase → Firestore → Rules → paste `firebase_rules.txt` → **Publish**.
3. Optional: open `unregister-sw.html` once to clear old service worker cache.
4. Test with two browsers: `/?customer=Woolworths%20Group`. HOST can edit name/phase until **Start**; after that, both fields are display-only and mirrored.

— Generated 1759097993
