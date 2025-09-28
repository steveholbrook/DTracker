# DTracker — listen-first sync (UID presence)

**What changed**
- Uses UID as presence doc id (matches strict rules).
- **Listen-first**: loads remote state first and only then allows writes.
  - Prevents a second browser from overwriting the session with defaults.

**Deploy**
1. Copy these files to repo root (GitHub Pages source = **main / root**).
2. Publish Firestore rules from `firebase_rules.txt`.
3. Optional: open `unregister-sw.html` once to clear old service workers.

**Test**
- Open `/?customer=Woolworths%20Group` in two browsers (or Incognito).
- Online should become 2; Start Timeline in one; the other mirrors.

— Generated 1759094192
