const VERSION = 'memechimp-v4';
const CORE = ['/', '/index.html', '/app.js', '/style.css', '/fonts.css', '/library.json', '/manifest.webmanifest', '/assets/chimp.svg'];
const isAsset = (path) => CORE.includes(path) || path.startsWith('/assets/');
const isDocument = (path) => path === '/' || /\.(?:html|css|js|json|webmanifest)$/.test(path);
async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  if (response) return response;
  const fetched = await fetch(request);
  if (fetched.ok) await cache.put(request, fetched.clone());
  return fetched;
}
async function networkResponse(request) {
  try {
    const response = await fetch(request);
    if (response.ok && isAsset(new URL(request.url).pathname)) await (await caches.open(VERSION)).put(request, response.clone());
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw new Error('Network unavailable');
  }
}
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin || u.pathname === '/api/health') return;
  e.respondWith(isDocument(u.pathname) ? networkResponse(e.request) : cachedResponse(e.request));
});
