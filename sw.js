const CACHE_NAME = 'vape-mixer-v3';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];
const FONT_CSS = 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap';

// Install event - cache core assets (and font CSS when online)
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Core assets: install fails if these are missing
    await cache.addAll(CORE_ASSETS);
    // Font CSS is cross-origin and optional; never block install on it
    try {
      await cache.add(FONT_CSS);
    } catch (err) {
      console.log('Font CSS not cached (offline?):', err);
    }
  })());
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheName !== CACHE_NAME) {
          console.log('Deleting old cache:', cacheName);
          return caches.delete(cacheName);
        }
      })
    ))
  );
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  const isFont = event.request.destination === 'font' ||
                 event.request.url.includes('fonts.gstatic.com');

  // Runtime-cache font files so Atkinson Hyperlegible works offline after first load
  if (isFont) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        }).catch(() => cached);
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => console.log('Fetch failed, no cache or network'))
  );
});
