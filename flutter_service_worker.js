'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7a1fee04c62140379b1c0bff8858666b",
".git/config": "c25b4f64f36045edf34959d9c02b5b6e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8dd90f90653499d2dba0be478669a23e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ba68ca99abc26358c7e2903413a18e3e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e4d9b45ae9b61f4b79f92ce3956ce33e",
".git/logs/refs/heads/master": "e4d9b45ae9b61f4b79f92ce3956ce33e",
".git/logs/refs/remotes/origin/HEAD": "4686bfa70752bd95399a9b0e0105045f",
".git/logs/refs/remotes/origin/master": "68f53a912f5cf0dd9fbe24bec447db34",
".git/objects/00/2dc544a86883a3cf60bb7ef3cedfd56448cb21": "a3a5d3df4cbaee5028a19a48cf6f0a08",
".git/objects/00/85e6f885c5f37ea8447a92f22b2578f30156a0": "3f1cc3048a891443c65273bbb8c08273",
".git/objects/03/bd3ca7a143f3a971bc32d52e0d66da2e88bd7d": "4268fd637657ef33cbdaca1857004da5",
".git/objects/04/e7b050fdbd736b03dfb2e6311e1a75f8b362fd": "a7b2cecee3e0ec8e197a520f3aa3eb89",
".git/objects/0d/ec38dec4a3f8d0b4f839999385f26c5722b491": "7cd50f26fe4eb3ba0329b4dff0e07cdf",
".git/objects/11/91eac395413f21e289e89f6ea37f4baa878b92": "ab08db0f88553016ae40f74bf5e6b724",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/11e6a89089e15de4134275ad192af271e95fc5": "20e763b156e02d174c37c691a352a2ad",
".git/objects/1c/c8a527c3cf6cf494db77b23aebd609107a73df": "c8433cea3676005a9833e0269230535a",
".git/objects/1e/45d42e8152d4fb4dc06e064ba42e27b8221835": "40fabf197e8af8dcd63fc58b8a94cc6d",
".git/objects/29/8d1087acb5299606df948e20eea0e7dfa5edb2": "dce269551a2964d80319eccd4f84abcc",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/e39e21524bc01f43469b8a981d5655513fa134": "2138d3adae5231c9ec98bc2c6e707296",
".git/objects/2f/312f1cfd45ed7de6389411568203dcca6ddc5f": "f6280305cb19bea6bbd69452a17ddb2a",
".git/objects/2f/e15e2678dc347b605c361a423fed4dc5d73081": "7f92d93a4f01aab2e677813c0a158ceb",
".git/objects/36/ac1aed677dbb1e9a334047f369f7839114d39a": "88624f1764e3acaee3032150f5f45216",
".git/objects/3c/f495cb994df350d23952d985c0a8def90e11a3": "4d734d5c5e2e1abe39ef201655951c30",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/5aa9fece9ba5c13e7ca2397132670a45ec72d5": "58ff866199e94afc2e1e4b277eb7b121",
".git/objects/49/1093ce14d809df1d787397fb5a020b6536c82a": "2376add4f9cc8ede44c6e1518c8d9dd3",
".git/objects/52/3d11981a88caa8d758254c24dd50460f143287": "0d432b060e385fa395de671530387020",
".git/objects/53/2e30e4a3681ab8896eb8d7c1ae1d791f2068bf": "9f28e970f4f9e31ee4db7278ca7b8303",
".git/objects/57/8ffc38e206aa5bb2f4265d1c7477e749098f24": "b1ed51ebf23ea48d67a19ce3d88ab994",
".git/objects/5f/c7c7765c3e425bc9a3a18d765cef2cbabde0ac": "3e1472c25e9de540f4ca54ed154c92c1",
".git/objects/6c/e9ffb2619f6b05c67770e2eea40624557bfc79": "f5e195cbccc06212443286763322eafd",
".git/objects/70/8869dabea65f694418cb478502e3d60012ab64": "f966f40de914ebaff5ebd375a0a16aac",
".git/objects/73/40a40aab55849fd94d6d8c4ec9ce64e0200e92": "0b436585251592ab3b7d3bbd61b0a050",
".git/objects/76/3ab1d422c15040e6709d1c74bf2c8d2f125602": "702a21536f7bf5fc136810f0bdd4e93a",
".git/objects/78/810dfd500fb2f7914bae4976ba847c54824b55": "38c686ef713a3281daa941ad66d49e7e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/241023d0c5e9a742a3d74d745d00f05fef27a3": "9cb782664f50b85b06af9dfb53d1738b",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/82/9c4cb921149f752c7d16fb97af6b5688c3cd4c": "175a21445a05a6446235357d7ac90dd9",
".git/objects/84/b0de8a5487301d1bccf2e1daee555aec19a1f5": "51d882d2b804edaeb6a0674298ff18b7",
".git/objects/8a/46807747671484008a69ff852945f467193660": "2154a695b81b555081e378ad93bb29a5",
".git/objects/8b/4a0f24223752a44912989e9a0317a4e1cd4f94": "a54a180b0e9822cda1d353e3ca7734b2",
".git/objects/8c/5bee74d557a77e0e46c3f9cc49d8b42c75bc0b": "d62606faf7a354e1514cbbe0306050ce",
".git/objects/8e/92ae8530f2caa228b470c38cb50306b3cca57f": "5a29bca9b786334ff7da4cb3234c2bd0",
".git/objects/8e/d96c42cc4690994381aba7aef9e4be4f2339a7": "0ae597e483c88a7bdf5646729fc640d4",
".git/objects/90/73c0b03962990e7c300960f117b6ce7fae37dd": "ef2927c817ff132ebc20faba6cad6e62",
".git/objects/93/06b415e45793f64cb5268b7e5946563ba75286": "1c06d8104254531a29212c1f014272a4",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/99244e79446216fc0b5b1cf70a21b1e5cff53d": "af51b1f42185b31cb4a431ebfb58391b",
".git/objects/a8/1c2da0c8eac9716884d74affb4b49970dadae5": "0c2b3c4969d5416ae583e5111d3cdf6a",
".git/objects/ad/0741b4a478bd391cdb606839109312c1a08982": "fdc457a5b748e7543e9f3d19f497f8dd",
".git/objects/af/5b8d34615eb597014bc298a51adef9c3bbc43b": "a5de529a63458a37207217c52e030f44",
".git/objects/af/e5e366334717f99c0a5256045163f19842b5b6": "d5bb298526c10768758386492ab083a8",
".git/objects/b0/1deaea95e3403a45a609c511ec7de97119eb4a": "0015dd79938b41bc953237d51e3f790b",
".git/objects/b0/d4e63b40467c8d1437a424195951c1c136992a": "34d48aeb96e0c9e4e9a06ad9e7152041",
".git/objects/b3/10d150ba19e8fc359ed1a41450c547c9afab8e": "484aa75c819dda583ffe824cc92a86c2",
".git/objects/b3/5019aa62223eb1d359139cd5e784402f62c855": "ea05e79f3f0ab5ddef4645d7e19ec3db",
".git/objects/b4/13f9afa7333a230c8b65dca4986b656962636f": "23d15828cb2e23310ca818f680c1ce68",
".git/objects/c2/293d5c8b81de044a73eeb80e461d7df177e726": "015cfeec435cdff4a547c1416f2cee14",
".git/objects/c2/3b0f4b28cb9e8ed7eb7fde0e7a84be65dc6c1f": "03eb4ca21f01641ba141ee188e08e813",
".git/objects/c3/4d0e08f27f1065b3c178341de40b22a2592312": "60349e019b26eb90567f2875d7eb7d74",
".git/objects/c7/79a4a915a01a4240cccb41e03fad2c8cec6f4e": "2a8e5954206eed289a6da609143f92e4",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/6e784df3601616dcf4415dd6570a65572264d2": "adc6d823109a6fcd13c43cb28e38b717",
".git/objects/d1/becf3b6c6216f0bdba6f03011ce5cfe7a23d4b": "ff2aa885e340957e8ec8edd8af7d970f",
".git/objects/d4/67c4f7dce8e3e10195a855a7b43b2f44f1e59c": "befe15e55ff052e1fcc241f2b5f0be9f",
".git/objects/d5/757739671c9732e8f946ce745419eeb096dd02": "5e906a9fbf05cf7af5c3fa056f9d3474",
".git/objects/d5/deb8dfa4325ad01d65a31e0d3c31cc24816681": "9fc93164e6aa7a819108e703a59cadcd",
".git/objects/d6/b80b97fbed6582a3507af8039b6e93cc85227e": "5a3d51918c5fec40361ea97608675fc8",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/33bb47ee8e64c5d97ea7cb44e272ea7a64ae48": "b455dcef5bd5d8b62e659f24f44f387c",
".git/objects/ef/faadfcf8b664e566da10bab0b47b6977986797": "02117d6aa7f990ecb1696deefec5587e",
".git/objects/f8/5cf9b3047b8873c177262be4e94e54bea270f3": "b4608ede566c78b67a730fce7e688bfa",
".git/objects/f9/8a2dab85c9bbec24ba3351b3def565b23bb6cb": "2ad9dc288fa3d6e4c7fb364592814b6d",
".git/objects/fc/b86c28a5a773546e3253bdf7b6cf1c968d3199": "1a67e38c107641af7d3b8e61cc50c90b",
".git/objects/fd/620e7df5505ee6740c4651f183fe60b5b3b506": "ec3c75c031e148359fa966f2d8889c60",
".git/objects/fd/6d30e8972a8ff8aeb8efee9ccc5a262a79d334": "d81df3f83fc51ec28fc13e76a32bf167",
".git/objects/ff/f336bb9fd0baef929694b7276adf22ed38b28b": "8b4fb2c1bcda2e4911f6496760e4701a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "d437bfe87dd36cd742465a88bd9fd37d",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "d437bfe87dd36cd742465a88bd9fd37d",
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
"index.html": "5c633cd0fa365c2dbd390f365ccdf587",
"/": "5c633cd0fa365c2dbd390f365ccdf587",
"main.dart.js": "284d91be1e8219482ff949f241cf5874",
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
