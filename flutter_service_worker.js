'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bd2d1382a9dce55a9d4df17b62a04e19",
".git/config": "456e45e891cf3fc81feff10189bf9fab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b8299913299e70499c68d96a81d914f3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9105733acf68d8c8d887ad9b2f0179c4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3684b073129dc8e46948f4705e5d3ed4",
".git/logs/refs/heads/main": "6f45a8524f0625fbba4799da8ccc67c7",
".git/logs/refs/remotes/origin/HEAD": "5dce2ea8ac9516622687d408782de0f9",
".git/logs/refs/remotes/origin/main": "ed166d532ba7481eabd042452bb6d838",
".git/logs/refs/remotes/origin/master": "a6c64f6fc13ded38fddb79d258266c93",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0f/05ae1bbcd0e4b4500aea6e543187d5533e7d31": "c4c5d20608456d96c310a2ac524cfb2a",
".git/objects/0f/44212eec59b0a9344bd35f07e345674f862aba": "d6187336f7ac019e2d62ccc59835764f",
".git/objects/10/73a7c3033d296a0a48ffe0e7493cbc33bb5a4c": "0cb58a35456cd4f8344518a29f5d4662",
".git/objects/12/5240c9dc74450a80b9780923a9343432975ead": "d177ca2e6ceb34206ab325b6b37957db",
".git/objects/1d/bd5dc2837038b3e0df0cf3d9d6b265dfe04475": "78cec55d0822e4039d85164715c15595",
".git/objects/2a/c6f7d1b10eb0e7838195915dc295ea8655faa3": "64fa3bff3124285af089e44742d1a951",
".git/objects/2d/b30ed5684b0a2018b4e63b628561cfb6d42fc3": "166e1e0f61f162fa3278810df9be97ea",
".git/objects/30/70150746739056bb28c684e2527e94610b8727": "6739c12f2c03ec9e5f3bbede4fb1a1e0",
".git/objects/39/ae0ec11483518386f101ca5427324b04df9c21": "88b2e361a0407c56dabdc24cb6b8547e",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/41/f03a15f9c8eb4e8f7b37de1cd6646b70fe0cc9": "ad128a3c27fc974f35993b4da0b94a4c",
".git/objects/44/43205afb05139f2a31a606b62514e5dc41a8da": "120ade4aaf6dafa1a9ccf980aaf0c79b",
".git/objects/45/bed19d74c7cb75e92901b02ab5fe484ed1c14a": "077353cf734cd7c23819a4e83e54ad22",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/d63edf6603b2cfe39b44b095c7074610dccd45": "83a93c3820da55fcf7586be48ba58684",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/5e/c03bad71aeb1f4a03c65f6da8b3b00208281b9": "1ac6f50051b448c730c9d41aa61cebe1",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/b6df315d1b35139228eedc74d11e6588ce885d": "14a73d1b79f2debfdc11d2d526e83b11",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/c7fcccd22d16d56ecec5ff10bfd54b94a29e2e": "27bcd75a5fb3dca02b9a152205b613f6",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/92/c50060d97aa2154d3bb924f3ced15bc083ffcb": "ecf7468594824aabd0ee98f951ea4bc7",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/f38facc7b5bc956f6a7cb873a9b1a27102313f": "6975f1aff134a422216e79273184a72e",
".git/objects/96/3b10d0751d7cd2f73c902c37c4644da6c36fd4": "7251310a73d359dead43c11ac7e8152f",
".git/objects/a6/6d0588af935b337062a8ce6384c917bd569d00": "35b14ee2dc6aab4610d4d65c7721bfcf",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/4b99b1be3a2870bc8f8b1ecac56907c7117795": "1d3e54b37a73f74c2df24dee59360268",
".git/objects/a9/77f1dee87fd20c6f7cb0c4bbf8fb2d698b2067": "d8145a225dade46efa422b72cf6fe97f",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/660209be7ba4bb88398cd0e5c07b1d09669402": "72e0607f58ff75b045231217b896ed93",
".git/objects/b4/b708ac5af6d814cd6d2ae1c3d627efe197b9ad": "4724f5057ec93b3e560a63db138ae2e0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c1/6d98d09670fe7c87c0c435566c2bf1f65df309": "922cc4911dad5bde055afb405715d4f1",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/93f19eb2d7699ffe19842ab3acc813dcaa44d8": "975c841beaff217100419633a6cccce2",
".git/objects/d0/b7520477d827a9c076fc7eb238c6ee5e7b84f1": "3fa1edd51d9b28691af2a4edb6525a84",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/db/9d8a817ac07d6000caa14d3c01ca671e3f31e9": "af54732330348f59e651f8d7c201a290",
".git/objects/dd/59d005db5e33bd7684af60bdc12c8d6a383d9a": "1ada03d803a4739ba4adf693851707a4",
".git/objects/df/507c3efd25e7eba26da364a63066f4d5ad8b28": "144db4aa69d44e6dd28975ec44cfaa74",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/dc2958e1227c1532a7b0801f05d09922d94953": "b2cd09a833db30980f87b107e4f5d24e",
".git/objects/e1/18b85f213b34f1f4f755d8c23b0aaa4f76241a": "5e8d57371e7ab6beabf3c62fc3c9d974",
".git/objects/e1/c199a678f614e0474d7247629fb4441194fefa": "584bb99c46d466f425a244f74a8d9d51",
".git/objects/e2/d3512ccaf8e89cc41a4f20d51540192074d6e2": "0d198ee03026b7ed87659bec6f7f6ea4",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/ef6eaaae12a7adc67f7a2d43ae39baaf0356d5": "0c6a2315a0a73ff6d33df049034e2ea1",
".git/objects/ef/ffc1faaca1729e7f028f89a90f5e8c6ff79638": "13551c5185504603ab5e24ce1349ba87",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/fe/d4ffb10b8301caaf5840cd9dc960db0cc0ef0f": "997393a6d0a23ab374852e30332fa80c",
".git/ORIG_HEAD": "c131a06cb616c662f3d0a18deb09b604",
".git/refs/heads/main": "f19ed434dbb3bdbedf6e07d93f8b87aa",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f19ed434dbb3bdbedf6e07d93f8b87aa",
".git/refs/remotes/origin/master": "b23cf564ee676d96ca3f28815923910c",
"assets/AssetManifest.bin": "a53491ba33870e68dce7c820b0867cda",
"assets/AssetManifest.bin.json": "bb5daa477ab092a8c1a34a960dc05d3a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0cd5bedc3410be3f4f9b620c29322c48",
"assets/NOTICES": "37d4ea08a343b5814d1c397f1d0ee775",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "e174655c464870f97c860f6e9e7f348b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "980c9815d5ecd5a4bc4a264b12bfabbf",
"/": "980c9815d5ecd5a4bc4a264b12bfabbf",
"main.dart.js": "8900eb9766ae4bb416c5fedb272fbfb6",
"manifest.json": "cb881aedde00a0c3036084a4699ee5ba",
"version.json": "52a16e48984932b6eac35361e24aa206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
