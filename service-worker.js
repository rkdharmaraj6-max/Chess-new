const CACHE_NAME = 'tamil-chess-v1';
const APP_SHELL = ['./', './index.html', './manifest.json', './icons/chess-icon.svg'];
const CHESS_LIB = 'https://cdn.jsdelivr.net/npm/chess.js@1.4.0/+esm';
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    try { const response = await fetch(CHESS_LIB, {mode:'cors'}); if(response.ok) await cache.put(CHESS_LIB, response.clone()); } catch(e) {}
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys(); await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin === self.location.origin || url.href === CHESS_LIB){
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(req);
      if(cached) return cached;
      try { const fresh = await fetch(req); if(fresh.ok) cache.put(req, fresh.clone()); return fresh; }
      catch(err) { return cached || Response.error(); }
    })());
  }
});
