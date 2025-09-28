
// Force-unregister any service workers on this origin
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    regs.forEach(r => r.unregister().then(() => console.log('[SW] Unregistered', r.scope)));
  });
  // Clear caches (best-effort)
  if (window.caches && caches.keys) {
    caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
  }
}
