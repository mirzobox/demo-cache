// Kesh nomi va keshlashni istagan resurslar ro'yxati
const CACHE_NAME = "v1";
const urlsToCache = ["/", "/index.html", "./style.css", "/app.js"];

// 'install' hodisasi - resurslarni keshga yuklaymiz
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Resurslar keshlanyapti");
      return cache.addAll(urlsToCache);
    })
  );
});

// 'fetch' hodisasi - resurslarni keshdan qaytarish
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Keshdagi ma'lumotni qaytarish yoki tarmoqdan olish
      return response || fetch(event.request);
    })
  );
});
