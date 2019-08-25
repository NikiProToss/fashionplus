importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "assets/css/all.css",
    "revision": "08199e08f4113bdc648d01b171db20f7"
  },
  {
    "url": "assets/css/visible.css",
    "revision": "b6c4c7b7ed91459e2046f079cbf67c1c"
  },
  {
    "url": "assets/js/lazy.js",
    "revision": "170455c1d6f6df57d2ea6853e5abb4d1"
  },
  {
    "url": "assets/js/main.js",
    "revision": "7405648ab6ab8a0432641fbd48c70729"
  },
  {
    "url": "assets/js/service-worker.js",
    "revision": "8192cc37c2776ed14b74939d3ca08ca0"
  },
  {
    "url": "assets/sass/all.scss",
    "revision": "f4dfe47db76815b58ce6ff7e29c4203d"
  },
  {
    "url": "image/008c5d3ab03f8c4a592a3f0bbfaf5d2f.jpg",
    "revision": "f3ca552d2a47b13a097f51858ec02737"
  },
  {
    "url": "image/06-favorite_selects050.jpg",
    "revision": "d9cd4fcb98db2ff0fc05d807c8430e73"
  },
  {
    "url": "image/1-big.jpg",
    "revision": "2ec0dff1cfe1426cf7078cef75c55050"
  },
  {
    "url": "image/2-big.jpg",
    "revision": "7a7692c42b952b6bc77ddb241fe9e153"
  },
  {
    "url": "image/3.jpg",
    "revision": "e48b9731e4d1dc9d08b5fef6a2d0e809"
  },
  {
    "url": "image/4.jpg",
    "revision": "035310939aa96d4646dc73601b38e73d"
  },
  {
    "url": "image/4bde5fb9ee3399a5d365b82f04516f56.jpg",
    "revision": "01f89e3f801205644197ca52a27969ab"
  },
  {
    "url": "image/5.jpg",
    "revision": "c30ea64cb30844cd138a2106cc07373f"
  },
  {
    "url": "image/54598806_2.jpg",
    "revision": "fbef630f56363f5426640ca917572b1a"
  },
  {
    "url": "image/ac7dcc7f34209de07ab7935c14c61d48.jpg",
    "revision": "acb99b6acc33fec4cb8a770fc6a08c59"
  },
  {
    "url": "image/b8bbedeb6cb603e74310ae3be9e1f2b4.jpg",
    "revision": "b50a0e1f6220cb7a464e07595858db7a"
  },
  {
    "url": "image/Blonde-woman-with-curly-beauti-212418862.jpg",
    "revision": "22804b0306681e3f1bf90f155411a198"
  },
  {
    "url": "image/c700x420.jpg",
    "revision": "9041d3c5b4152d793ffc6d1e0ea0cb48"
  },
  {
    "url": "image/dcf68e75285e6ac48e4b.jpg",
    "revision": "6d5c1ca9a7675032762cfb6ec791c854"
  },
  {
    "url": "image/facebook.svg",
    "revision": "9d79cad402530cdd62e14e0ee365fb2a"
  },
  {
    "url": "image/favicon.ico",
    "revision": "45c162bc8918b5d564527040c5cacc38"
  },
  {
    "url": "image/favicon.png",
    "revision": "ffa846baab9743fe08e7ae63adab9854"
  },
  {
    "url": "image/goldwell.jpg",
    "revision": "71a7598d816458c45cddc921467d7ca2"
  },
  {
    "url": "image/instagram-logo-png-2427.png",
    "revision": "514e6d10dabcc266d8ec0360cfc6ba4e"
  },
  {
    "url": "image/instagram.svg",
    "revision": "b459c01293bd278097078a7b6fe11846"
  },
  {
    "url": "image/kudri.jpg",
    "revision": "a51b7057f49637bab3220d146ef74b8c"
  },
  {
    "url": "image/lazy/008c5d3ab03f8c4a592a3f0bbfaf5d2f.jpg",
    "revision": "e4ec35e279c6f294c6c9505acd840b19"
  },
  {
    "url": "image/lazy/06-favorite_selects050.jpg",
    "revision": "da8a36cbbc636f6db81c43760e924832"
  },
  {
    "url": "image/lazy/1-big.jpg",
    "revision": "4e739d9ac29433899073b46d05345cf3"
  },
  {
    "url": "image/lazy/2-big.jpg",
    "revision": "5a1879f475f6f2235637c97357d03065"
  },
  {
    "url": "image/lazy/4bde5fb9ee3399a5d365b82f04516f56.jpg",
    "revision": "3015b153d8a957923eb753c06c684c74"
  },
  {
    "url": "image/lazy/54598806_2.jpg",
    "revision": "9d7de37eb471185ce78ddc07e086f84f"
  },
  {
    "url": "image/lazy/ac7dcc7f34209de07ab7935c14c61d48.jpg",
    "revision": "e0d2290df5f95137eea34d222c0badd4"
  },
  {
    "url": "image/lazy/b8bbedeb6cb603e74310ae3be9e1f2b4.jpg",
    "revision": "c728577f8fa114a79bbfe7964f4f8650"
  },
  {
    "url": "image/lazy/Blonde-woman-with-curly-beauti-212418862.jpg",
    "revision": "528789dcee3bf5dbaa65f23977cda22f"
  },
  {
    "url": "image/lazy/c700x420.jpg",
    "revision": "a68a0e860470247310a9ff1a40960e16"
  },
  {
    "url": "image/lazy/dcf68e75285e6ac48e4b.jpg",
    "revision": "d9029205859f013a2a78395a75774197"
  },
  {
    "url": "image/lazy/goldwell.jpg",
    "revision": "26e88afbd1c66a6ec91718e46d5e1203"
  },
  {
    "url": "image/lazy/kudri.jpg",
    "revision": "be6935563ee381748ea40b1820bce2e9"
  },
  {
    "url": "image/lazy/manicure.jpg",
    "revision": "45a0de94c1273061536dc5de115c4739"
  },
  {
    "url": "image/lazy/moda-696x437.jpg",
    "revision": "7957cde17ec7adab721bcb293b54e0a4"
  },
  {
    "url": "image/lazy/pricheski_2019.jpg",
    "revision": "9efbf9071ade168afbf4eec6729ab851"
  },
  {
    "url": "image/lazy/pricheski-s-kosami.jpg",
    "revision": "5ab6cc9d7494d23b343934f1c6d71b18"
  },
  {
    "url": "image/lazy/Prodluzovani-rasy-beautyshape.jpg",
    "revision": "d37583f8ae72001f96a44a2bcc349197"
  },
  {
    "url": "image/lazy/Tatoo.jpg",
    "revision": "3b6dd5ee3eea1fb63b6ec2a0b868fa0b"
  },
  {
    "url": "image/lazy/tourPlaceholder.jpg",
    "revision": "801fc7d00758276e48b782e8f1250bb2"
  },
  {
    "url": "image/lazy/Web_1920–1.jpg",
    "revision": "01d5e8a45e9a7e5996619dee8eefddcd"
  },
  {
    "url": "image/lazy/Кадр_масочка_на_лице1.jpg",
    "revision": "d420c340582a5981f8b898641ed5db53"
  },
  {
    "url": "image/lazy/Кадр_масочка_на_лице2.jpg",
    "revision": "d164f45af18bf10eeeead06ba271b5bc"
  },
  {
    "url": "image/lazy/Кадр_фото_кліента.jpg",
    "revision": "7bfe72c8ad8b99b247616c3fc1e2f0d4"
  },
  {
    "url": "image/manicure.jpg",
    "revision": "67e4e0ae9780e58ca66591cc8c97f207"
  },
  {
    "url": "image/marker.svg",
    "revision": "e3f8c2c0c2b92456b4b1412c2b9b8430"
  },
  {
    "url": "image/Mobile_Maximum.jpg",
    "revision": "5a81127052edaef8eb95ae9620917b4a"
  },
  {
    "url": "image/Mobile-Maximum_2.jpg",
    "revision": "6419594b7ccbf6bc74353fa277e8ceea"
  },
  {
    "url": "image/moda-696x437.jpg",
    "revision": "09e2e6b9e4650f3da0bbfc86e43b05a6"
  },
  {
    "url": "image/pricheski_2019.jpg",
    "revision": "7b380c8fd7f7c174e94f5570b7afe532"
  },
  {
    "url": "image/pricheski-s-kosami.jpg",
    "revision": "d0898c3dcf75d592d25a5e748eae86c1"
  },
  {
    "url": "image/Prodluzovani-rasy-beautyshape.jpg",
    "revision": "ac701e47521c387f73aeb958b16e24f0"
  },
  {
    "url": "image/Tab_Maximum.jpg",
    "revision": "b5f41aeebc38f8e574b8ee3c85cc0894"
  },
  {
    "url": "image/Tab-Maximum_2.jpg",
    "revision": "ec724b09d00f483fb5ac9f0a6baf672b"
  },
  {
    "url": "image/Tatoo.jpg",
    "revision": "4842e8d1ae209aa89806472a48cbbd3f"
  },
  {
    "url": "image/telegram.svg",
    "revision": "c19b2cff2c52f923dec9f738dc238911"
  },
  {
    "url": "image/tourPlaceholder.jpg",
    "revision": "f865e2fbcebd6962167378c2d3c36de8"
  },
  {
    "url": "image/viber.svg",
    "revision": "d536808e89863eb398440a4d8afefc15"
  },
  {
    "url": "image/Web_1920–1.jpg",
    "revision": "4d171533f25f8b80eea1d5f80c615394"
  },
  {
    "url": "image/Web-1920-–-2.jpg",
    "revision": "f4352e7efa7a8bbbf6a0128cef572817"
  },
  {
    "url": "image/Кадр_масочка_на_лице1.jpg",
    "revision": "b2041d3cd958ce74f3312b0022756eae"
  },
  {
    "url": "image/Кадр_масочка_на_лице2.jpg",
    "revision": "4eb3379d2baec1f8458ca7d136b61ed7"
  },
  {
    "url": "image/Кадр_фото_кліента.jpg",
    "revision": "80f2455fb8a0250071d496cddcd95d39"
  },
  {
    "url": "index.html",
    "revision": "306f7efe1a7bbcc90dd7e2d45defdf7f"
  },
  {
    "url": "package-lock.json",
    "revision": "aa1e7b6d3ccad1511534697376006bcc"
  },
  {
    "url": "package.json",
    "revision": "ab820cf6fdd3ad16ea2818bead655b65"
  },
  {
    "url": "README.md",
    "revision": "a5eb81e7dc2cc3d9d8f9ea05cfd30366"
  },
  {
    "url": "workbox-config.js",
    "revision": "cb9c37d1b998a5c1313cfa3e1b201433"
  }
]);

workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);
