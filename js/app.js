if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function () {
      console.log("Service Worker muvaffaqiyatli registratsiya qilindi!");
    })
    .catch(function (error) {
      console.log("Service Worker registratsiyasi muvaffaqiyatsiz:", error);
    });
}
