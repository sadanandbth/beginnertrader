const CACHE = 'bth-terminal-v3.2';
const ASSETS = [
  './manifest.json',
  './images/multichart.webp',
  './images/indicator.webp',
  './images/option-chain.webp',
  './images/replay-trading.webp',
  './images/pro-tools.webp',
  './images/noise-orderflow.webp',
  './images/institutional-heatmap.webp',
  './images/extra-1.webp',
  './images/telegram.webp',
  './images/dhan-logo.webp',
  './images/angel-one-logo.webp'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(()=>{}));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Never intercept download URLs or external URLs
  if (url.pathname.includes('/download') || url.origin !== self.location.origin) {
    return;
  }

  // Network-first for navigations/HTML so updates show immediately without cache lock
  if (e.request.mode === 'navigate' || (e.request.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Cache-first with network fallback for static assets
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone)).catch(()=>{});
        }
        return res;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});

// Notify clients of update
self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
