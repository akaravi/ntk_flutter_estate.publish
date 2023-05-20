'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4f5fbd084f07b41f4cbc1624623a760b",
"assets/assets/drawable/about_us2.png": "82b571fb6340ec9c900176459e9ffcc8",
"assets/assets/drawable/app_logo.png": "d5391b83fa93d1f038210641d0e17d92",
"assets/assets/drawable/article_place_holder.png": "b18d165861ae1ad5868e6a3674f789dd",
"assets/assets/drawable/captcha_holder.png": "a0fae8d8f681fd8bcbdcffd36dc13a30",
"assets/assets/drawable/confused-face.png": "8aebfa295b2ec15df197f865af8ddf0b",
"assets/assets/drawable/constructor.png": "4c371f9f2fc7b8ac2e2a523997c185c1",
"assets/assets/drawable/empty-box.png": "7945cc7430b4cf85a634714c965ea12e",
"assets/assets/drawable/error_captcha.png": "70a6de9e4bb049dd3d874e3eeb8a62cb",
"assets/assets/drawable/exit.png": "5fb66b575efd4928e500f42138606e85",
"assets/assets/drawable/faq2.png": "21f568dd0965cf501ae3e9d66f359303",
"assets/assets/drawable/favorites_folder.png": "51062a0ddaf54eef70bf831076cce042",
"assets/assets/drawable/feedback2.png": "1123f3e0d19731476201009b159c34eb",
"assets/assets/drawable/frustrated-face.png": "385e8b7cd34a8e8959d84771df48c6f3",
"assets/assets/drawable/inbox.png": "513b6a29265bc78f7fae0347fe6fb13b",
"assets/assets/drawable/intro2.png": "a256eab72bb32b28e681561508adab9c",
"assets/assets/drawable/invite2.png": "b33e14eebcfea3e23e41131610399155",
"assets/assets/drawable/my_estate.png": "441fcc9e8d3d15b769f6526556e4af10",
"assets/assets/drawable/news2.png": "4bba27189894ee6b0c7b400c12c5047b",
"assets/assets/drawable/notification2.png": "0a440667a30f0d7e126126cc27ceec81",
"assets/assets/drawable/order2.png": "d44a9d64fe66fba27bfc4ae88423c9a6",
"assets/assets/drawable/polling2.png": "d9e369295a997fc6aa8f8c1645c1deeb",
"assets/assets/drawable/projects.png": "db52af9978545c990c7a448cdd77512d",
"assets/assets/drawable/splash_background.jpg": "4e8bafd64a2a9b072034b6e69652fb2e",
"assets/assets/lottie/auth_confirm_sms.json": "6cb1dd5364b6b4f892c432967e285bf2",
"assets/assets/lottie/auth_sms.json": "a2df4a9da67401bda33d4ee64bca17fe",
"assets/assets/lottie/circle_reval.json": "55d8d3b7fc5627640642146a157a9c59",
"assets/assets/lottie/splash_logo.json": "571a11e9e43b21e1e6ca30fa4be5e13b",
"assets/assets/lottie/sub_empty.json": "2dcf084a1b6322cbdb4a61aa69f719b6",
"assets/assets/lottie/sub_error.json": "56448c60d917271b7687a692dc36b094",
"assets/assets/lottie/sub_loading.json": "78f6c8ed3ba8f6146278d66dfda6a957",
"assets/FontManifest.json": "f4216eb27f24e72f05887b7ac936623f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e965500a9ff897f2ae9637ca1dd734fe",
"assets/packages/base/assets/drawable/app_logo.png": "d5391b83fa93d1f038210641d0e17d92",
"assets/packages/base/assets/drawable/captcha_holder.png": "a0fae8d8f681fd8bcbdcffd36dc13a30",
"assets/packages/base/assets/drawable/confused-face.png": "8aebfa295b2ec15df197f865af8ddf0b",
"assets/packages/base/assets/drawable/empty-box.png": "7945cc7430b4cf85a634714c965ea12e",
"assets/packages/base/assets/drawable/error_captcha.png": "70a6de9e4bb049dd3d874e3eeb8a62cb",
"assets/packages/base/assets/drawable/frustrated-face.png": "385e8b7cd34a8e8959d84771df48c6f3",
"assets/packages/base/assets/drawable/load_captcha.png": "b1dbc8e9ac8ebfbd771f941c107ec6b1",
"assets/packages/base/assets/drawable/splash_background.jpg": "4e8bafd64a2a9b072034b6e69652fb2e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/expandable_widgets/assets/background.png": "f1f2b9f95d2c2bb481acc14f4fad8196",
"assets/packages/flutter_font_awesome_web_names/lib/fonts/fa-brands-400.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_font_awesome_web_names/lib/fonts/fa-regular-400.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_font_awesome_web_names/lib/fonts/fa-solid-900.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "46e666f726a09ac5c409d94608807c02",
"/": "46e666f726a09ac5c409d94608807c02",
"main.dart.js": "34236d353893aca71964b58377bc84df",
"manifest.json": "a3012f043bf2ad8f6a95b9c74b8948c3",
"version.json": "78dcd7beca36811e34347e79bad4a289"
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
