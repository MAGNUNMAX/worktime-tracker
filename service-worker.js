const CACHE_NAME = 'tracker-horas-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Instalar el service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch(() => {
        // Si hay error descargando, continuar de todas formas
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activar el service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia: Network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Solo para GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Si obtenemos respuesta, guardar en cache
        if (!response || response.status !== 200) {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      })
      .catch(() => {
        // Si no hay conexión, usar cache
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          // Fallback a página offline si existe
          return caches.match('./index.html');
        });
      })
  );
});

// Permitir sincronización en segundo plano
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-registros') {
    event.waitUntil(syncRegistros());
  }
});

async function syncRegistros() {
  // Aquí puedes agregar lógica para sincronizar datos con servidor cuando vuelva la conexión
  console.log('Sincronizando registros...');
}
