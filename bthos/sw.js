const CACHE = 'bth-terminal-v3';
const ASSETS = [
  './index.html',
  './manifest.json',
  './images/multichart.webp',
  './images/indicator.webp',
  './images/option-chain.webp',
  './images/replay-trading.webp',
  './images/pro-tools.webp',
  './images/telegram.webp'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // Network-first for navigations/HTML so updates show immediately
  if (e.request.mode === 'navigate' || (e.request.headers.get('accept')||'').includes('text/html')) {
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone)).catch(()=>{});
        return res;
      }).catch(() => caches.match(e.request).then(c => c || caches.match('./index.html')))
    );
    return;
  }
  // Cache-first for other assets, update in background
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone)).catch(()=>{});
        return res;
      }).catch(()=>cached);
      return cached || fetchPromise;
    })
  );
});
// Notify clients of update
self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
