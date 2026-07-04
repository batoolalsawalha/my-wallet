const CACHE_NAME = 'mahfazti-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon.svg',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Install Event - Caching Assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Caching Files');
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Serve Cached Assets when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      // Return cache if found, else fetch from network
      return cachedResponse || fetch(e.request).catch(() => {
        // Optional fallback if both fail (e.g. offline page)
        return caches.match('./index.html');
      });
    })
  );
});
