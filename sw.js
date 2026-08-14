// R-PIX-711 - Service Worker
// Objetivo unico: permitir que el navegador ofrezca "Instalar app".
// A PROPOSITO no guarda el HTML/JS en cache, para que SIEMPRE cargues
// la version mas nueva de la app (evita el problema de "version vieja pegada").
const SW_VERSION = 'rpix711-v2';

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(nombres) {
      return Promise.all(nombres.map(function(nombre) {
        return caches.delete(nombre);
      }));
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Passthrough total: siempre va a la red. No intercepta ni cachea nada.
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
