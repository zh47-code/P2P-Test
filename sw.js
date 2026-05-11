const CACHE_NAME = "p2p-chat-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js"
];

// Install Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Data (Bisa dibuka saat offline)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});