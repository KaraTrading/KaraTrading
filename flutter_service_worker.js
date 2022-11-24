'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "39b4d2d17feda42471700149c9fee92d",
"assets/assets/fonts/ubuntu_bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/assets/fonts/ubuntu_boldItalic.ttf": "c16e64c04752a33fc51b2b17df0fb495",
"assets/assets/fonts/ubuntu_italic.ttf": "9f353a170ad1caeba1782d03dd8656b5",
"assets/assets/fonts/ubuntu_light.ttf": "c9d68f61bf89fde6a24da697bc45d6f9",
"assets/assets/fonts/ubuntu_lightItalic.ttf": "b242f3fdf0e61d01f35f0dec0170b200",
"assets/assets/fonts/ubuntu_medium.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/fonts/ubuntu_mediumItalic.ttf": "89af35d9567dcc3a76f3db4f9544658b",
"assets/assets/fonts/ubuntu_regular.ttf": "84ea7c5c9d2fa40c070ccb901046117d",
"assets/assets/images/DSC02915.jpg": "9d8bcc5fbdfc3f63a0af5a16bc9620ae",
"assets/assets/images/DSC02968.jpg": "06d5a944709e555e2aee19300f3c23b3",
"assets/assets/images/DSC02979.jpg": "63023f072d0a1aadcfc4cfae03bda248",
"assets/assets/images/Fotolia_37706505_Subscription_XL.jpg": "68f06a930eb20a5b5b9c844c61be5ce6",
"assets/assets/images/Fotolia_60549670_Subscription_XL.jpg": "fec602f2dbb7b3312264e54f6eb13a40",
"assets/assets/images/Fotolia_65063906_Subscription_XXL.jpg": "bc4e555505431224eb64e9e9a28962e4",
"assets/assets/images/kara_logo.png": "03be1c2fdd399de8ca93056ee8ae2234",
"assets/assets/translations/en.json": "afc1b876e2f10c2cf14a593a1256a7c8",
"assets/FontManifest.json": "87ba65e4bcebc12844394dc51079a21e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ec6f39438442ef660bebbbc4522e9a0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/shaders/ink_sparkle.frag": "30c0ae5536cee386415a4f2d6d4fee51",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "3d0173cd122593b5f2ba8417b1b023f6",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "c5cd1aae36bb238dec8bb5926dc510f5",
"icons/Icon-512.png": "e23e5b5ef4c798c8f1e3ff760a2854b3",
"icons/Icon-maskable-192.png": "ecc01cb2b84427e275c1c9196fd59912",
"icons/Icon-maskable-512.png": "18919aac647de7aafdfdf873fc0b6cb3",
"index.html": "8dfc3adf7ba08c415cd501ee0ab326ca",
"/": "8dfc3adf7ba08c415cd501ee0ab326ca",
"main.dart.js": "673638ceab242a30b8b0d2ee8a2f4754",
"manifest.json": "d871ef1f10d446e6958766c3a1cdcd41",
"version.json": "6306917a8dc7e4da60ef630a74760d5e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
