/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "009f939bb0159df0c10b66dbdee0e373"
  },
  {
    "url": "about/index.html",
    "revision": "dc979190e3c44f47ab25d825eb8a7cb8"
  },
  {
    "url": "assets/css/0.styles.a2927e8b.css",
    "revision": "b332f433308b8db4e67d2c024f850d29"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/js/1.79d5383a.js",
    "revision": "7b24ec30fa6b782a5643c994a7a3b220"
  },
  {
    "url": "assets/js/10.4d410cfe.js",
    "revision": "ff107855638474007f676fe16e94da4f"
  },
  {
    "url": "assets/js/11.b2b0e107.js",
    "revision": "47fa17447b0d3200418590c1ec7bfb8f"
  },
  {
    "url": "assets/js/12.f96d0dc3.js",
    "revision": "bc811078d879fd85ce0b534922208805"
  },
  {
    "url": "assets/js/13.6e7ed666.js",
    "revision": "6e4072551834a7b36c75cfc688336a37"
  },
  {
    "url": "assets/js/14.0de1465d.js",
    "revision": "b1f3b44b97ea7760d61bde7396af938f"
  },
  {
    "url": "assets/js/15.60ddfb94.js",
    "revision": "afdf5feb87a0b3e2b91d49622306b023"
  },
  {
    "url": "assets/js/16.50f432f5.js",
    "revision": "b3ae426a075a79b4ecba83b903c4dbeb"
  },
  {
    "url": "assets/js/17.2a50a391.js",
    "revision": "5a9bb196e0b5eba39185724ae9f69e84"
  },
  {
    "url": "assets/js/18.a89ea127.js",
    "revision": "07cb88dd7d02a71b1c5f19917e483446"
  },
  {
    "url": "assets/js/19.3505abb5.js",
    "revision": "c6f61b980bb586e6556d5d1e76561302"
  },
  {
    "url": "assets/js/20.5b0b98df.js",
    "revision": "e0bf94ca49b0ddf7a701451d2c33efde"
  },
  {
    "url": "assets/js/21.07b00114.js",
    "revision": "279fdf80ac2c5d2caf5f8a8faf43e6f7"
  },
  {
    "url": "assets/js/22.008fecd2.js",
    "revision": "fa42c868d89dba8714f6cf968295cebd"
  },
  {
    "url": "assets/js/23.4329985f.js",
    "revision": "be6828ee87ade942d792d71c4ca58c43"
  },
  {
    "url": "assets/js/24.155dcd78.js",
    "revision": "c7b262ba276874afa214599dd1016ea4"
  },
  {
    "url": "assets/js/25.0595c994.js",
    "revision": "8b53ab4665e595318fe48d90fe9cad33"
  },
  {
    "url": "assets/js/26.e6959475.js",
    "revision": "2ab38d5f885ddde32d1e1cf380ded4b8"
  },
  {
    "url": "assets/js/27.ed1b0cc3.js",
    "revision": "a40d920928ae303c9c7635ba693bce53"
  },
  {
    "url": "assets/js/28.79e2e490.js",
    "revision": "432c5381cdc21f0ecb81b0f795648e25"
  },
  {
    "url": "assets/js/29.fe27f92a.js",
    "revision": "cd9c673e10eac4f9d9366e23f85638dc"
  },
  {
    "url": "assets/js/30.951d5298.js",
    "revision": "111213f68d83b6d43b737ed34efbb5dd"
  },
  {
    "url": "assets/js/31.4422bd17.js",
    "revision": "5f80030f7a717023ac163399cd444ae3"
  },
  {
    "url": "assets/js/32.638c176c.js",
    "revision": "6d8eea4f20d455d68d462b52933ea9b9"
  },
  {
    "url": "assets/js/33.711e2a61.js",
    "revision": "aeebfa76eb6d061cf903ed65334dd183"
  },
  {
    "url": "assets/js/34.576c2a76.js",
    "revision": "69bab903005519927faaec0421534ff3"
  },
  {
    "url": "assets/js/35.00fd561d.js",
    "revision": "9747abd026e455dfb0d7b3c1736ee848"
  },
  {
    "url": "assets/js/36.ffe3686f.js",
    "revision": "318b95f6a9dcc466ecc57fc0d5adac59"
  },
  {
    "url": "assets/js/37.a3202cc5.js",
    "revision": "8ab7f1f855d2d36a8e647d3bab766903"
  },
  {
    "url": "assets/js/38.03e8afd7.js",
    "revision": "4285d6d13d4197cb4457f0c6e76d62a5"
  },
  {
    "url": "assets/js/39.2faca55a.js",
    "revision": "d9fed3a3ca54221a7b60a7fa3d122e2d"
  },
  {
    "url": "assets/js/4.c719d0df.js",
    "revision": "4688ec161050cf6800bd8d10cee75ac5"
  },
  {
    "url": "assets/js/40.394724a3.js",
    "revision": "a842d8c07549b4542882ee2abf1ab19c"
  },
  {
    "url": "assets/js/41.77817825.js",
    "revision": "cd8bce6ac43277ee81491907f6e7d978"
  },
  {
    "url": "assets/js/42.1fc7c3ca.js",
    "revision": "5f68a87535cb17769a2e5f35619d2a80"
  },
  {
    "url": "assets/js/43.7cd70f6b.js",
    "revision": "f03ba4cd587ab93fa40f6b7322a68b13"
  },
  {
    "url": "assets/js/44.0fa22f4e.js",
    "revision": "91e5683e8f26601850141e76bcb4c457"
  },
  {
    "url": "assets/js/45.3ba97a62.js",
    "revision": "2533747b7ae94ae216f90f3329e92ca2"
  },
  {
    "url": "assets/js/46.d0ddf11f.js",
    "revision": "de266f92eb97da49d586dbd40ceef15c"
  },
  {
    "url": "assets/js/47.90c5840a.js",
    "revision": "e37556bc30ceb00ab72fc74bb2cbb31c"
  },
  {
    "url": "assets/js/48.0b14b1c9.js",
    "revision": "e2069c70c2187447113968a9ce7e7190"
  },
  {
    "url": "assets/js/49.00886e4f.js",
    "revision": "c217540802ace8a0f369bb67f256d27e"
  },
  {
    "url": "assets/js/5.f5c291b1.js",
    "revision": "9b6f5e3573519bd7beddae2c49add5ee"
  },
  {
    "url": "assets/js/50.c0957c13.js",
    "revision": "9394ccd954050e6b9f4b32a9787c72a5"
  },
  {
    "url": "assets/js/51.640dcfd6.js",
    "revision": "b9b8810436d6669ea0a3fcefa05c0d95"
  },
  {
    "url": "assets/js/52.9d44f889.js",
    "revision": "fae17948d2e16d98a209d940e9b62401"
  },
  {
    "url": "assets/js/53.b6a982a6.js",
    "revision": "125c1dfde87f9438b838f3d845744a67"
  },
  {
    "url": "assets/js/54.2079fe0e.js",
    "revision": "1d26c262d55921f6dddeaf741e377453"
  },
  {
    "url": "assets/js/55.501ee3d3.js",
    "revision": "29b8e20546c754c9465eaf3fe846b608"
  },
  {
    "url": "assets/js/56.d5e327f8.js",
    "revision": "e913617618baa43f4c1bcb57e4238fad"
  },
  {
    "url": "assets/js/57.3219f1e5.js",
    "revision": "5c6934ee281732a2f4fd9d115337b88f"
  },
  {
    "url": "assets/js/6.97db0f58.js",
    "revision": "5659d500f9d19d4fec0a947dddef4105"
  },
  {
    "url": "assets/js/7.761e7ca3.js",
    "revision": "b832ba6571b2cbc4797b214aac9f9cdd"
  },
  {
    "url": "assets/js/8.81382b57.js",
    "revision": "ddcf2edbf0ea6e05a05decc99a1f5912"
  },
  {
    "url": "assets/js/9.84078734.js",
    "revision": "28163ca4f2223f461449dea0900073ad"
  },
  {
    "url": "assets/js/app.77adfe86.js",
    "revision": "ddeae156459f5dc489a1dc1f81dbfbe2"
  },
  {
    "url": "assets/js/vendors~flowchart.2136dff3.js",
    "revision": "821de33424baf49e7660683f1fe56523"
  },
  {
    "url": "categories/index.html",
    "revision": "91ea4dc001ee1ba2c2e3ce4729ed86af"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2465e2770612a3d8f9cd9db0ccd74682"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "07df2233891c44c30089657d7e6fa3df"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "4c0ad5caf6112eb31ffd7f70889eab27"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "e15c5002b405ce3e69e0f636d146240b"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "5c0aa1dd328096010b6673fbf9861aa2"
  },
  {
    "url": "img/ali/app_layout.png",
    "revision": "014d0cfed63df7dee08863aad495507d"
  },
  {
    "url": "img/docker/搜狗截图20180303145450.png",
    "revision": "b72094f2dc137f642b258d659ba7c5de"
  },
  {
    "url": "img/docker/搜狗截图20180303145531.png",
    "revision": "0192e016514ae6de37acb335483c6365"
  },
  {
    "url": "img/docker/搜狗截图20180303165113.png",
    "revision": "57658a824fedd4daf6c46fb28ddf9a2e"
  },
  {
    "url": "img/EChartsStudy/接入百度地图.png",
    "revision": "6536c736188c9ea30914de1c6f09e68c"
  },
  {
    "url": "img/EChartsStudy/柱+折线图.png",
    "revision": "012d1f48b8e15cf20e763ed5310210b0"
  },
  {
    "url": "img/EChartsStudy/迁徙图.png",
    "revision": "f9079e675926a79a70417595adf6ce6e"
  },
  {
    "url": "img/EChartsStudy/饼图.png",
    "revision": "5394c36784b787fd477693968c133693"
  },
  {
    "url": "img/essay/lmNRgg.png",
    "revision": "fd3cc2df1c32d13e911fc6349b4dc164"
  },
  {
    "url": "img/essay/lmUIQe.png",
    "revision": "b4204c68b6174c07220733dcaf165c3b"
  },
  {
    "url": "img/essay/lmUjW8.png",
    "revision": "1b4e086bec1e1c053c726cd7ba14b480"
  },
  {
    "url": "img/essay/lmUkxe.png",
    "revision": "ee27e01c1867214c85ea23a998707e7c"
  },
  {
    "url": "img/essay/lmUQG8.png",
    "revision": "4551e4806b560715c4910501cd4c756e"
  },
  {
    "url": "img/essay/NiceBlogExamples.png",
    "revision": "4ae74d1a112937624ddcb289604d9d2b"
  },
  {
    "url": "img/essay/ToDo.png",
    "revision": "6aa4b2d90ea09c3cbb13dbc24b5d3947"
  },
  {
    "url": "img/HashMap/20180423002750407.png",
    "revision": "f35b7d5feca86f51427b731dd5310e6e"
  },
  {
    "url": "img/itext/pdf2.png",
    "revision": "f557069c584ea0c2bf4031d2306beb5f"
  },
  {
    "url": "img/itext/pdf3.png",
    "revision": "18753afbd11acf6c3864eab6b2e2dd16"
  },
  {
    "url": "img/jvm/gc001.png",
    "revision": "9096a5c1aa708e99e4a0eb011c39f110"
  },
  {
    "url": "img/jvm/gc002.png",
    "revision": "04f03419851adab68f221464d5f236fe"
  },
  {
    "url": "img/jvm/gc003.png",
    "revision": "7c61067e76f98493875fb0318535706f"
  },
  {
    "url": "img/jvm/gc004.png",
    "revision": "fb57425f659c93e108b52848734291a5"
  },
  {
    "url": "img/jvm/gc005.png",
    "revision": "39041532371209775ba5bcf397604011"
  },
  {
    "url": "img/jvm/jvm001.png",
    "revision": "645747e72e6790bb9a70ae6166a61a33"
  },
  {
    "url": "img/jvm/jvm002.png",
    "revision": "f46c1bb2f52ba3826599cf6a5959313e"
  },
  {
    "url": "img/jvm/jvm003.png",
    "revision": "8cfa470daab1e9cde72e91a564182b95"
  },
  {
    "url": "img/jvm/jvm004.png",
    "revision": "53c75a6570d0adf443287266c0fe7efe"
  },
  {
    "url": "img/rabbitmq/rabbitmq.png",
    "revision": "f8ed6faa42fcdba67c8ed7b2c59ac495"
  },
  {
    "url": "img/rabbitmq/topic.png",
    "revision": "76d56b40d2a16592fef156f73f228d20"
  },
  {
    "url": "img/rabbitmq/队列模型.png",
    "revision": "805d0059bd3df57f88b1fb5e0631a654"
  },
  {
    "url": "img/redis/缓存更新.png",
    "revision": "29bb26641ac9ff576cffab4de9b0a4f7"
  },
  {
    "url": "img/redis/缓存查询.png",
    "revision": "2fc82232bd83608e50aa29ecba90b733"
  },
  {
    "url": "img/swagger2/swagger2.png",
    "revision": "0ac3840245a81620a4365409ce608e81"
  },
  {
    "url": "img/viaStart/thumb.png",
    "revision": "0d4c9d70e021216c051bf1ce37a37da3"
  },
  {
    "url": "img/vuedemo/1.png",
    "revision": "ebc5b5e16665f1d3494b9ca7afce270f"
  },
  {
    "url": "img/vuedemo/2.png",
    "revision": "8c7a40b960334a58a097b1c2292a8fa4"
  },
  {
    "url": "img/vuedemo/3.png",
    "revision": "acb3adcb4752f27bc621c244252a63ae"
  },
  {
    "url": "img/vuedemo/4.png",
    "revision": "e0600647cb12f4f3a100383f91baa7c2"
  },
  {
    "url": "img/vuedemo/5.png",
    "revision": "c0b6c66dd9e8df10c0dda568268ff314"
  },
  {
    "url": "img/vuedemo/6.png",
    "revision": "2ccae59d8c1134edc7fdaf0a6e41e78d"
  },
  {
    "url": "index.html",
    "revision": "a4769a355429fb8a590d7e2ee010f20e"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "love/love.html",
    "revision": "68de52e48f4306179d313c0604d4ef57"
  },
  {
    "url": "love/比心.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "tag/index.html",
    "revision": "66adab6d7531b508cdcd0c9a91ab3530"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "6e6bb79252fdeb68734047480764232c"
  },
  {
    "url": "tags/ECharts/index.html",
    "revision": "0aafb57e9c12648372121f50b8607802"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "3bc53b4e7bfdf0d8ac4b4bbfd9774201"
  },
  {
    "url": "tags/Java/page/2/index.html",
    "revision": "d2fa232a82ce22ca406dc5582f22d495"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "e86dd73b4eff2ae818fb3299290d0cda"
  },
  {
    "url": "tags/json/index.html",
    "revision": "e16504de4e7966d0db6cc2228fd6ca72"
  },
  {
    "url": "tags/jvm/index.html",
    "revision": "a65a9bd3179473477d0e474bb72ab38a"
  },
  {
    "url": "tags/jwt/index.html",
    "revision": "c11ce1b8f0a97c48e86688803fc435bf"
  },
  {
    "url": "tags/pdf/index.html",
    "revision": "44f172a68252ff3911e97fe39f0e6897"
  },
  {
    "url": "tags/poi/index.html",
    "revision": "499a5564891083c81b830455270f0446"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "123cff81f215c8875998cf17598c6059"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "adcfe03a813092f1f55d2c7d68fc3a1a"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "2c0a8d8a9f4b493e2ebb1f098ddf3260"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "f47aed5a9295bb95cc1e787546bfbc51"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "0ac0a2b8504a7a23ec3a222023be9e29"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "b7fc2ef6f0d9e887e722d4cd2fb09e0b"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "bda956aa2a5928e6b51112db39975039"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "22029e0e00374781abb3469d85c5ea2c"
  },
  {
    "url": "tags/日志/index.html",
    "revision": "28955f077f2c0ae6af926361643e0d71"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "1c28f7d5b9ecdb8f2764c812a54e9b59"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "58aaa7486cb00e6fcbdf34479cfa6f26"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "cb1d3105d32068a0cf90397ae1aa8ca5"
  },
  {
    "url": "timeline/index.html",
    "revision": "f666cdd8676833dd7229f7e3631c5a15"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "0894cc2a680184ec03208ab96a3c1223"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "7a5eafc926b1c7d0b5af80b094d32e46"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "4e8d65227ef68c854795eab733abae34"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "431b9b7f244efdd405b99ea21d582721"
  },
  {
    "url": "views/essay/20200227.html",
    "revision": "293516d92b011dccdfe5ae80dd5eeceb"
  },
  {
    "url": "views/essay/20200301.html",
    "revision": "8fa74f2e262b1d5e6269046fb72fb192"
  },
  {
    "url": "views/front-end/EChartsStudy.html",
    "revision": "a3c5850d97143177f06253e1c55da40e"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "cad9645f4c34dc18464ae57e70e54cba"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "40a05c08af88b2b6c0f5e3e07d574820"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "f2803fcf4c998699956df5fcee536c06"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "0e41064ad423064ac41de0f07d1920c2"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "c1b131f868f9ecff58e4cac1e2f817c9"
  },
  {
    "url": "views/index.html",
    "revision": "1b72ffa9e75b7ce477be506ad5292075"
  },
  {
    "url": "views/java/annotationLog.html",
    "revision": "07d83c357aae0b6bd6aa4f595324e0a6"
  },
  {
    "url": "views/java/ArrayList.html",
    "revision": "2e7952879e9b94df9a58ea25fc8d1811"
  },
  {
    "url": "views/java/docker.html",
    "revision": "81a655a9821594efe46bf16576073666"
  },
  {
    "url": "views/java/HashMap.html",
    "revision": "5484cf612908cc6b73e96ef15ba3658c"
  },
  {
    "url": "views/java/itext.html",
    "revision": "ec294f186a40bf1b659e02c173956feb"
  },
  {
    "url": "views/java/jvm.html",
    "revision": "b23a0b10a4a32c305acf8bfac15a09b6"
  },
  {
    "url": "views/java/jwt.html",
    "revision": "cf053851a47f5432aba05abc9afaefc8"
  },
  {
    "url": "views/java/poi.html",
    "revision": "9199e976ea2692dfeaf0345b4f83d598"
  },
  {
    "url": "views/java/quartz.html",
    "revision": "80071f8a83f0c9f1cb1f1eedaf7b2feb"
  },
  {
    "url": "views/java/rabbitmq.html",
    "revision": "047f85234b32252a2d0ad8107c1cc22b"
  },
  {
    "url": "views/java/redis.html",
    "revision": "2414999ce1b7ecab55e290f6efaee8c2"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "63f50617f04bdc93ff310268b4f5c5dc"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "67e47cb332c4112b82d2a82d1945d2fb"
  },
  {
    "url": "views/java/thread.html",
    "revision": "8634165ee899eb2632fa6a009e83c8fa"
  },
  {
    "url": "views/qaq/sum_db_001.html",
    "revision": "30f478dafa566afa4d7602b38060bd39"
  },
  {
    "url": "views/qaq/sum_fe_001.html",
    "revision": "4d9c628bf69ddbbb25f9f12c5eae89bb"
  },
  {
    "url": "views/qaq/sum_fe_002.html",
    "revision": "c8a0f9a194e8188ac551af813b7fb4c4"
  },
  {
    "url": "views/qaq/sum_java_001.html",
    "revision": "ec664236853fab4338be8897956884f6"
  },
  {
    "url": "views/qaq/sum_java_002.html",
    "revision": "f4db6e9eb6ae6086eda7df40d8c5dd89"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "260eaea895f98a57b6e55236958f56a8"
  },
  {
    "url": "views/qaq/sum_spring_001.html",
    "revision": "c9eb516f9f03ac2902295fe5b560adaa"
  },
  {
    "url": "views/qaq/sum_spring_002.html",
    "revision": "1a2edf216e92945165d74f7e39866a5f"
  },
  {
    "url": "views/qaq/sum_spring_003.html",
    "revision": "cd29f292443ab396fe6684680cdf39e3"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "b99e766d757be8599137fb5451281e9b"
  },
  {
    "url": "views/todo/JUC.html",
    "revision": "a9324109a0b1e40eaf8a7a23219c1d8b"
  },
  {
    "url": "views/todo/OnlineMonitoring.html",
    "revision": "1478f36717b2462b0c17627305b3022d"
  },
  {
    "url": "views/todo/RedisAdvanced.html",
    "revision": "10a3c94e03795aa073ba0ae6a310dcc2"
  },
  {
    "url": "views/todo/ThreadPool.html",
    "revision": "1ffeb44f05515864ae78b9fda8ce3bd4"
  },
  {
    "url": "vuepress/head.png",
    "revision": "8919827e695ae6a739b646f05bb5d991"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "bf80a6f75ed6aff874261bb1d13ff529"
  },
  {
    "url": "vuepress/znote.png",
    "revision": "0098af9084c619fae94c3d593c609bbd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
