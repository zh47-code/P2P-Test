const CACHE_NAME = 'p2p-chat-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install Service Worker dan simpan cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Ambil dari cache jika offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return file dari cache jika ada, jika tidak ambil dari internet
        return response || fetch(event.request);
      })
  );
});
