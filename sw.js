const CACHE_NAME = 'mathio-cache-v1';
const urlsToCache = [
  './index.html',
  './styles.css',
  './ios27.css',
  './app.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Instrument+Serif:ital@1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;700;900&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Clone the response before returning it
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });
        return response;
      })
      .catch(() => {
        // If network fails, fallback to cache
        return caches.match(event.request);
      })
  );
});
