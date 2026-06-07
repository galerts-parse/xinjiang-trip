const CACHE_NAME = 'xinjiang-trip-v24';
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

// Network First strategy to ensure users always see the latest updates when online
self.addEventListener('fetch', event => {
  // Skip cross-origin requests like API calls or dynamically injected leaflet map tiles to prevent CORS issues with cache.put
  if (!event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If successful, update the cache with the new version
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // If network fails (offline), fallback to cache
        return caches.match(event.request);
      })
  );
});
