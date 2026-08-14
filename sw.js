const CACHE_NAME = 'rpix711-v1';
self.addEventListener('install', function(event){
  self.skipWaiting();
});
self.addEventListener('activate', function(event){
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function(event){
  if(event.request.method !== 'GET') return;
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache){
      return fetch(event.request).then(function(resp){
        cache.put(event.request, resp.clone());
        return resp;
      }).catch(function(){
        return cache.match(event.request);
      });
    })
  );
});
