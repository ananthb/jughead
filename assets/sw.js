const cacheName = self.location.pathname;

const pages = [
{{ if eq .Site.Params.serviceWorker "precache" }}
  {{ range .Site.AllPages -}}
  "{{ .RelPermalink }}",
  {{ end -}}
{{ end }}
];

self.addEventListener("install", async (event) => {
  self.skipWaiting();

  const cache = await caches.open(cacheName)
  await cache.addAll(pages);
});

self.addEventListener("fetch", async (event) => {
  const request = event.request;
  // Don't cache requests to /admin
  if (request.url.startsWith("/admin")) {
    return;
  }
  // Cache only GET requests
  if (request.method !== "GET") {
    return;
  }

  /**
   * @param {Response} response
   * @returns {Promise<Response>}
   */
  async function saveToCache(response) {
    if (cacheable(response)) {
      const cache = await caches.open(cacheName)
      await cache.put(request, response.clone());
    }
    return response;
  }

  /**
   * @param {Error} error
   */
  async function serveFromCache(error) {
    const cache = await caches.open(cacheName)
    return await cache.match(request.url);
  }

  /**
   * @param {Response} response
   * @returns {Boolean}
   */
  function cacheable(response) {
    return response.type === "basic" && response.ok && !response.headers.has("Content-Disposition")
  }

  event.respondWith(fetch(request).then(saveToCache).catch(serveFromCache));
});
