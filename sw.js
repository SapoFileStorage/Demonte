const APP_CACHE="sopralluogo-app-v1";
const TILE_CACHE="sopralluogo-tiles-v1";
const SHELL=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png"];

self.addEventListener("install",function(e){
  e.waitUntil(caches.open(APP_CACHE).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}));
});
self.addEventListener("activate",function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){if(k!==APP_CACHE&&k!==TILE_CACHE)return caches.delete(k)}));
  }).then(function(){return self.clients.claim()}));
});
self.addEventListener("fetch",function(e){
  var url=e.request.url;
  if(url.indexOf("tile.openstreetmap.org")>-1||url.indexOf("server.arcgisonline.com")>-1){
    e.respondWith(caches.open(TILE_CACHE).then(function(c){
      return c.match(e.request).then(function(hit){
        if(hit)return hit;
        return fetch(e.request).then(function(resp){try{c.put(e.request,resp.clone())}catch(_){}return resp;}).catch(function(){return hit;});
      });
    }));
    return;
  }
  if(e.request.mode==="navigate"){
    e.respondWith(caches.match("./index.html").then(function(r){return r||fetch(e.request)}));
    return;
  }
  e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}));
});
