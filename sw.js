/**
 * Parlay Hedge Calculator - service worker.
 *
 * Summary:
 *   Makes the installed app work offline. On install it caches the app
 *   shell (page, manifest, icons). Requests are answered from the cache
 *   immediately while a fresh copy is fetched in the background
 *   (stale-while-revalidate), so updates appear the next time the app opens.
 *   Bump CACHE_VERSION whenever the file list changes to drop old caches.
 *
 * Input files (cached from this folder):
 *   index.html, manifest.webmanifest, icons/*.png
 * Output files:
 *   None. Responses are stored in the browser's Cache Storage only.
 *
 * Location: D:\OneDrive\Code\DFS_direct\Parlay_Calculator\sw.js
 */

const CACHE_VERSION = 'parlay-hedge-v1';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.open(CACHE_VERSION).then(async (cache) => {
      const cached = await cache.match(request, { ignoreSearch: true });
      const network = fetch(request)
        .then((response) => {
          if (response.ok) cache.put(request, response.clone());
          return response;
        })
        .catch(() => cached);
      return cached || network;
    }),
  );
});
