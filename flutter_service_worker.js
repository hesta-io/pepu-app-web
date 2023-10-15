'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f26884938037f4cb1ed60803e22dac84",
"favicon.ico": "21b4028b4676181c7e1f30d790db1f45",
"index.html": "204664951e17065a4b48acf859def70e",
"/": "204664951e17065a4b48acf859def70e",
"main.dart.js": "dc51eb84101790bf6a68daf190a1c41a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "523004e513f31f78256e99a170b3ad32",
"assets/AssetManifest.json": "ec2f85bfd94d367894430aa48f831d44",
"assets/NOTICES": "0ba812d9069c1c3e623b3b2860f64fbf",
"assets/FontManifest.json": "d945eb218f9fae0fc11b44093c6cbdfa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "eda6345b30d267b824e4201d6ffef46d",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "638b38a19b14579d2a396f6437e32ead",
"assets/fonts/MaterialIcons-Regular.otf": "83eab85cf4cb7ec1d721ae8d75971252",
"assets/assets/images/iraq_flag_icon.png": "105e5711e2ac69685aea156a25deae11",
"assets/assets/images/app_icon.png": "ea76d718fcf6b28b31f50042610c8a4b",
"assets/assets/images/pepu_text_krd.svg": "0786835c9fbc1fccb01a73d66de930e2",
"assets/assets/images/kurdistan_flag_icon.png": "f3c97a18b48b5f6fe5f260c0d9b8d379",
"assets/assets/images/pepu_on_branch.png": "912ebad0fc8ac76c7ce309e152929f6b",
"assets/assets/images/pepu_splash.jpg": "3450f24e35e071070980583ee67cf254",
"assets/assets/images/pepu_onboarding.png": "983a9dbf6c5fcba442c5f85ee12fede5",
"assets/assets/images/placeholder.png": "cf272676d367036d604c7e1b4840447a",
"assets/assets/images/fast_pay.png": "1c0392d8fb0ab104d5d501ed7fa64240",
"assets/assets/images/pepu_looking_up_in_corner.svg": "a11d321adcc3ddcb0ec5d9cae1e737d5",
"assets/assets/images/app_icon_rounded.png": "e1410ba39aea11d9cf45c0046e4c4160",
"assets/assets/images/star_sky.svg": "9bb0bf9e67a3df3be94f545d46b871c3",
"assets/assets/svgs/pepuwhiteboard.svg": "0f4ee4b13e2a52673a24d76f8abb9297",
"assets/assets/svgs/pepu_splash.svg": "b485b121f99bf9e1dba08cd5e58dc15c",
"assets/assets/svgs/pepu_saying_hi.svg": "f3abcf3eb5779502104201f69b2e3090",
"assets/assets/svgs/pepu_night_no_pepu.svg": "f6542f66deaf0f3664ee24567b4c2da6",
"assets/assets/svgs/sad_pepu_illustration.svg": "aeac125e806a99cdd338c83a49297542",
"assets/assets/svgs/pepu_logo.svg": "16d33678aa6230c66ec10f003a51c34a",
"assets/assets/svgs/pepu_on_branch.svg": "79cddb5905dca355b9e0a7f0efc350e1",
"assets/assets/svgs/pepu_on_desk.svg": "efea443f19f4485f7e6388ad7444ae32",
"assets/assets/svgs/pepunight.svg": "82364c78a0b8ef9b51192994d1d7cc92",
"assets/assets/svgs/offline_pepu.svg": "f675e27019a0931d488624b42d9ab570",
"assets/assets/svgs/pepu_text.svg": "d85504bcb8b450de3eeecace5215f780",
"assets/assets/svgs/calender.svg": "344f7454f97581a21846c67326a52bb4",
"assets/assets/svgs/facebook_logo.svg": "67d0bada74d2975fe927bcb931a7e5fb",
"assets/assets/svgs/login_wave.svg": "fce6025c09164b00ce47d0878c30f343",
"assets/assets/svgs/note.svg": "b6271a61a689cdc741e511cbd58fe648",
"assets/assets/svgs/pepuwithboard.svg": "cd3ad847624b34dd2337091a18f45f0e",
"assets/assets/svgs/coming_soon.svg": "b31677d6ba2cbb006efae97fe338f701",
"assets/assets/svgs/no_data.svg": "136fce4fe3ecd7aea6fe066660224d83",
"assets/assets/svgs/pepu_girl_logo.svg": "998b362453df363d197fe3648c95b675",
"assets/assets/svgs/edit.svg": "1dab56bae19cbd6ade93ec43f95e9def",
"assets/assets/svgs/new_exam.svg": "e91cb92b44a11d22f063bf5aa8c9bfa9",
"assets/assets/svgs/pepuwhiteboard_2.svg": "1ba2c77d0efc949629187fca34a52db2",
"assets/assets/svgs/pepu_looking_up.svg": "786bf08e4695d431a2f34e047787c900",
"assets/assets/svgs/clock.svg": "42889de88428a9660a9aa263add45c11",
"assets/assets/svgs/intro_wave.svg": "0e7a822fd34e5dd49bad28394ab95196",
"assets/assets/svgs/google_logo.svg": "b7727941c0e8a117b6cfd8f06a1cb7ed",
"assets/assets/svgs/facebook_messenger.svg": "aefb0bcb1a28deb391836857473e0c79",
"assets/assets/svgs/pepu_new_splash.svg": "26523a2b067ee1622f3240858e0d5d85",
"assets/assets/svgs/reviewing.svg": "7af4433aad622088821ede052f608686",
"assets/assets/svgs/splash_night.svg": "779565435e7dd967981641ded8ffe7ac",
"assets/assets/fonts/kurdish/Rabar_014.ttf": "4c388e5b5097622cc1c346c7916bdb03",
"assets/assets/fonts/kurdish/Rabar_015.ttf": "e2e30bede8cd0ec8ea741ecaa8fb2a12",
"assets/assets/fonts/kurdish/Rabar_013.ttf": "feb65e7e64300884bb9231a641f390b7",
"assets/assets/fonts/english/Barlow-Light.ttf": "2f88cf8762c53a8be3c3ec53b8e01edf",
"assets/assets/fonts/english/SFPRODISPLAYSEMIBOLDITALIC.OTF": "fce0a93d0980a16d75a2f71173c80838",
"assets/assets/fonts/english/Barlow-SemiBoldItalic.ttf": "089c2031b86f3a8575428e825ab26dbf",
"assets/assets/fonts/english/SFPRODISPLAYHEAVYITALIC.OTF": "d70a8b7adbe065dd69b16459ffab4231",
"assets/assets/fonts/english/Barlow-BoldItalic.ttf": "4b570971567053b1204438e248a88b30",
"assets/assets/fonts/english/SFPRODISPLAYLIGHTITALIC.OTF": "bee8986f3bf3e269e81e7b64996e423c",
"assets/assets/fonts/english/Barlow-ExtraLight.ttf": "f7e57760641fada9e5bbab93c12e3614",
"assets/assets/fonts/english/Barlow-ThinItalic.ttf": "8f3831b74d2837bafff3b3b802929c49",
"assets/assets/fonts/english/Barlow-MediumItalic.ttf": "4257d524ad11d173176df62fc3c03c60",
"assets/assets/fonts/english/SFPRODISPLAYBLACKITALIC.OTF": "647ad7b734271f858d61a94283fd0502",
"assets/assets/fonts/english/SFPRODISPLAYREGULAR.OTF": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/fonts/english/Barlow-Italic.ttf": "ed7d4bb9c5638c38a28ccd3149b334fb",
"assets/assets/fonts/english/Barlow-ExtraLightItalic.ttf": "98958f423d96a38619408113e1a423de",
"assets/assets/fonts/english/Barlow-ExtraBoldItalic.ttf": "b9bbe6d5299b39c2c272653a245e8d60",
"assets/assets/fonts/english/SFPRODISPLAYTHINITALIC.OTF": "9d5ed420ac3a432eb716c670ce00b662",
"assets/assets/fonts/english/Barlow-Thin.ttf": "72e9db32bda6dbdfd6da0e9d74420ad0",
"assets/assets/fonts/english/Barlow-ExtraBold.ttf": "12075155b398a9e6cc43cb03300e00de",
"assets/assets/fonts/english/Barlow-LightItalic.ttf": "2a4be013f41213c4cca8db8449754665",
"assets/assets/fonts/english/Barlow-Bold.ttf": "72871854aabdd7a79c4fc5038cb4faaf",
"assets/assets/fonts/english/OFL.txt": "46cbde1f44ff31807ec209f1b72acad2",
"assets/assets/fonts/english/Barlow-Medium.ttf": "bdffb48240a3383080812d6830ff6f54",
"assets/assets/fonts/english/SFPRODISPLAYBOLD.OTF": "644563f48ab5fe8e9082b64b2729b068",
"assets/assets/fonts/english/Barlow-Regular.ttf": "9373fb661b5c2954ab84d1b7f42774fe",
"assets/assets/fonts/english/SFPRODISPLAYMEDIUM.OTF": "51fd7406327f2b1dbc8e708e6a9da9a5",
"assets/assets/fonts/english/Barlow-BlackItalic.ttf": "24404d87029dab428f1102872581bd7f",
"assets/assets/fonts/english/Barlow-SemiBold.ttf": "29527ab52af2334e2bcb6290c8692f70",
"assets/assets/fonts/english/Barlow-Black.ttf": "3259b9d5da281613ed918c9d165c20a5",
"assets/assets/fonts/english/SFPRODISPLAYULTRALIGHTITALIC.OTF": "fa570fc4ded697c72608eae4e3675959",
"assets/assets/translations/ku.json": "20e5d810a5def72b6e213765469fb7b6",
"assets/assets/translations/ar-IQ.json": "9d91b7c122e6ae1454212dcf2682d619",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
