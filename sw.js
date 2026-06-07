const CACHE_NAME = 'xinjiang-trip-v35';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data.js',
  './data_alt.js',
  './data_route_c.js',
  './data_route_d.js',
  './data_route_e.js',
  './data_route_x.js',
  './route_d_tour_package.html',
  './route_x_tour_package.html',
  './ticketing.html',
  './deep_dives.html',
  './icon.png',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', event => {
  self.skipWaiting(); // Force the waiting service worker to become the active service worker.
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Claim clients immediately
  );
});

// Stale-While-Revalidate strategy for lightning fast loads
self.addEventListener('fetch', event => {
  // Skip cross-origin requests like API calls or dynamically injected leaflet map tiles
  if (!event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        // Update the cache in the background
        const responseClone = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return networkResponse;
      }).catch(() => {
        // Network failed, do nothing as we already returned the cached response (or will fail gracefully)
      });

      // Return cached response immediately if available, otherwise wait for network
      return cachedResponse || fetchPromise;
    })
  );
});
