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
    "revision": "973cd6b525370b9de8eb431d70232e3d"
  },
  {
    "url": "about/index.html",
    "revision": "30e5d95dd7294b5d11017b1186e72290"
  },
  {
    "url": "assets/css/0.styles.91bd2aab.css",
    "revision": "cea1382e85127de9028d5cfd95ce3093"
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
    "url": "assets/js/1.175c3b6c.js",
    "revision": "7b24ec30fa6b782a5643c994a7a3b220"
  },
  {
    "url": "assets/js/10.fbe1112e.js",
    "revision": "ff107855638474007f676fe16e94da4f"
  },
  {
    "url": "assets/js/11.32c578a0.js",
    "revision": "47fa17447b0d3200418590c1ec7bfb8f"
  },
  {
    "url": "assets/js/12.33ad179b.js",
    "revision": "bc811078d879fd85ce0b534922208805"
  },
  {
    "url": "assets/js/13.a6df9fe9.js",
    "revision": "6e4072551834a7b36c75cfc688336a37"
  },
  {
    "url": "assets/js/14.e487bc12.js",
    "revision": "b1f3b44b97ea7760d61bde7396af938f"
  },
  {
    "url": "assets/js/15.7cb00d1b.js",
    "revision": "afdf5feb87a0b3e2b91d49622306b023"
  },
  {
    "url": "assets/js/16.26a74890.js",
    "revision": "25847ba525c16b2d91790850ac9f4d73"
  },
  {
    "url": "assets/js/17.f84a4c9c.js",
    "revision": "5a9bb196e0b5eba39185724ae9f69e84"
  },
  {
    "url": "assets/js/18.56db9533.js",
    "revision": "07cb88dd7d02a71b1c5f19917e483446"
  },
  {
    "url": "assets/js/19.d3d48654.js",
    "revision": "c6f61b980bb586e6556d5d1e76561302"
  },
  {
    "url": "assets/js/20.f33a1ecd.js",
    "revision": "e0bf94ca49b0ddf7a701451d2c33efde"
  },
  {
    "url": "assets/js/21.f2398e75.js",
    "revision": "279fdf80ac2c5d2caf5f8a8faf43e6f7"
  },
  {
    "url": "assets/js/22.653273d0.js",
    "revision": "fa42c868d89dba8714f6cf968295cebd"
  },
  {
    "url": "assets/js/23.d6cd793b.js",
    "revision": "be6828ee87ade942d792d71c4ca58c43"
  },
  {
    "url": "assets/js/24.60c2c650.js",
    "revision": "c7b262ba276874afa214599dd1016ea4"
  },
  {
    "url": "assets/js/25.f4dc0558.js",
    "revision": "8b53ab4665e595318fe48d90fe9cad33"
  },
  {
    "url": "assets/js/26.ee5a8ece.js",
    "revision": "2ab38d5f885ddde32d1e1cf380ded4b8"
  },
  {
    "url": "assets/js/27.4b987953.js",
    "revision": "a40d920928ae303c9c7635ba693bce53"
  },
  {
    "url": "assets/js/28.5ccbe8ad.js",
    "revision": "432c5381cdc21f0ecb81b0f795648e25"
  },
  {
    "url": "assets/js/29.da06dc51.js",
    "revision": "cd9c673e10eac4f9d9366e23f85638dc"
  },
  {
    "url": "assets/js/30.227f7945.js",
    "revision": "111213f68d83b6d43b737ed34efbb5dd"
  },
  {
    "url": "assets/js/31.ba2ea812.js",
    "revision": "5f80030f7a717023ac163399cd444ae3"
  },
  {
    "url": "assets/js/32.d35b7eef.js",
    "revision": "370785bf3f8173c622c4f2cb2934c40f"
  },
  {
    "url": "assets/js/33.42d8f51e.js",
    "revision": "7cb5aeb7ef971d0e361078ca63bd57c7"
  },
  {
    "url": "assets/js/34.2535c21b.js",
    "revision": "6631667bf1617b35773b79fd739ab591"
  },
  {
    "url": "assets/js/35.0ebb42ea.js",
    "revision": "4b5948869f0108338f0b4521e907e60e"
  },
  {
    "url": "assets/js/36.f907d63b.js",
    "revision": "7cf5f6f95e42adceac9b33b1776e004f"
  },
  {
    "url": "assets/js/37.e6f35b52.js",
    "revision": "bb3ad49a45c4b8a981e1d10ef453d9af"
  },
  {
    "url": "assets/js/38.7b3f5176.js",
    "revision": "95946b46e9083bd47571ce93083d7c01"
  },
  {
    "url": "assets/js/39.d4a14085.js",
    "revision": "8c80a9e1d4a2d624b88a76658d2321a9"
  },
  {
    "url": "assets/js/4.fffcb915.js",
    "revision": "4688ec161050cf6800bd8d10cee75ac5"
  },
  {
    "url": "assets/js/40.de913a92.js",
    "revision": "520670b6029044a41fa0a30547bf508b"
  },
  {
    "url": "assets/js/41.e5e391d1.js",
    "revision": "32ce488233231aac53ec6259fdf953cf"
  },
  {
    "url": "assets/js/42.8eb6c5f4.js",
    "revision": "c01e8a5afddf8d0366d143a28721cb58"
  },
  {
    "url": "assets/js/43.97d4640e.js",
    "revision": "66114d46b5358153337281f8aeb00105"
  },
  {
    "url": "assets/js/44.355872d4.js",
    "revision": "7fe802200ef349d0cf28898738471762"
  },
  {
    "url": "assets/js/45.d6273e28.js",
    "revision": "43488d8b11e0f5d61e263e4ba117a20b"
  },
  {
    "url": "assets/js/46.ae647524.js",
    "revision": "d62d64f29b31a818970948e450df435e"
  },
  {
    "url": "assets/js/47.67a92cfd.js",
    "revision": "c068177287552f8c34d6f503295fb51f"
  },
  {
    "url": "assets/js/48.aeed3716.js",
    "revision": "d95f5850fe540a4c1bed31ca2af4ad32"
  },
  {
    "url": "assets/js/49.193f2c29.js",
    "revision": "c6d9f10d5814dcbd23ec03c32459eabb"
  },
  {
    "url": "assets/js/5.e6734708.js",
    "revision": "9b6f5e3573519bd7beddae2c49add5ee"
  },
  {
    "url": "assets/js/50.921201be.js",
    "revision": "930f2385170a8b001abf9eb082f61c04"
  },
  {
    "url": "assets/js/51.ee2e032d.js",
    "revision": "5fdc87b6e125d1172fdcdf4c5e7a1037"
  },
  {
    "url": "assets/js/52.1a1ea7fb.js",
    "revision": "faba6797f84ac043930c675b29e8f275"
  },
  {
    "url": "assets/js/53.1083b489.js",
    "revision": "f1b7bc686da0a52ecd04e6b42d468337"
  },
  {
    "url": "assets/js/54.61fcfb34.js",
    "revision": "cb0a8e91f1a63faf715b968037b613d6"
  },
  {
    "url": "assets/js/55.6d2f6f5e.js",
    "revision": "4c21f574ea7394d9f2231d7a5ced3884"
  },
  {
    "url": "assets/js/56.451aec28.js",
    "revision": "e913617618baa43f4c1bcb57e4238fad"
  },
  {
    "url": "assets/js/57.0debe97c.js",
    "revision": "5c6934ee281732a2f4fd9d115337b88f"
  },
  {
    "url": "assets/js/6.38d6efcc.js",
    "revision": "5659d500f9d19d4fec0a947dddef4105"
  },
  {
    "url": "assets/js/7.4fb71fc8.js",
    "revision": "b832ba6571b2cbc4797b214aac9f9cdd"
  },
  {
    "url": "assets/js/8.7a0b0ae8.js",
    "revision": "cb3670ae72c9ce62126514a595fdaa21"
  },
  {
    "url": "assets/js/9.477035ec.js",
    "revision": "28163ca4f2223f461449dea0900073ad"
  },
  {
    "url": "assets/js/app.2776cf94.js",
    "revision": "732b72bfc799f9945f48b8e8c504a1b5"
  },
  {
    "url": "assets/js/vendors~flowchart.a9cfcbc8.js",
    "revision": "821de33424baf49e7660683f1fe56523"
  },
  {
    "url": "categories/index.html",
    "revision": "73b508ae3d9d3888adb9a88d58bbb8bd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "d98d72faea9cbddb136e272fb86e0a82"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "d2ec96aa5c23795bb2296e70abf4be44"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "ccb1f7cb0eae403002bfb9a28c294694"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "c9462c62348e9c6c68d10fb85d46849a"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "edf3c4ee73eeab978094a1033e7d52a3"
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
    "url": "img/java/jwt.png",
    "revision": "08f10cff7fa522a07bdb68b8615c23d2"
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
    "revision": "ef8ec291e461de4e1d386f8e1d4186a5"
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
    "revision": "df75d200aac9d1468c55e5300f206f79"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "3d2434fcd89b5f11d8b9ca11ef6e75a9"
  },
  {
    "url": "tags/ECharts/index.html",
    "revision": "e7ce62cd30e94fae8d921861926ca9b2"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "03e2a4f9b4388789ccdca9fdbc239bd4"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "0a46c7247f20ad2eaaa8155ac0686832"
  },
  {
    "url": "tags/json/index.html",
    "revision": "a799308c9bd7431fc67005445267bc25"
  },
  {
    "url": "tags/jvm/index.html",
    "revision": "945135f9a7395d1550d79a5ecc8b3383"
  },
  {
    "url": "tags/jwt/index.html",
    "revision": "d8b88eb01fd714ed133667d4637aba6e"
  },
  {
    "url": "tags/pdf/index.html",
    "revision": "0add17ff0d9d724335ec6507dc2dfda7"
  },
  {
    "url": "tags/poi/index.html",
    "revision": "bcfae195e61981a1fb3f401e49d56b44"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "2d052fa27283383eb4c956340ef72529"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "086cec71542e9194f74500fd220d30f5"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "17d8365777f6cc979f550f0bac6f3f3b"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "4c469189593b3940c11f0fba7db0b753"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "184c4fa70879940d434b8b24adf41b24"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "4b80c732af851fc218a34785a0d54fa3"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "5302fd33f7ed4d9ad6acaa6fb9393bd4"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "fc7b1f6e2426dc8da24a01e4c286a2f6"
  },
  {
    "url": "tags/日志/index.html",
    "revision": "9e88c8fcee45126014226195148a57da"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "9dee38bf3cf7677d72de4fcbbe8f5d47"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "fd51dc9a9a69674a2ccaca8133ac27d5"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "a31395eceddeaa1bcbaba6d2d90db2ce"
  },
  {
    "url": "timeline/index.html",
    "revision": "cc3efed7a54baffd26d66921064a3eae"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "f7babc67b25abbba21d37035fd7ea324"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "6c7e620e7809ca4a49f2a1fed9c62296"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "8fe00f292f4c309085ac03a0c74cf5ea"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "19a5780ce02fb524104e0b351e8eec0f"
  },
  {
    "url": "views/essay/20200227.html",
    "revision": "f7322ceafdd86cdffd39f3eba236bab4"
  },
  {
    "url": "views/essay/20200301.html",
    "revision": "d5b323243bf0c6f65af1d38efdac3dba"
  },
  {
    "url": "views/front-end/EChartsStudy.html",
    "revision": "0fcd48cd90666a98f7fa88685769dca0"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "272df929d783d600b1002f4fd17cb6da"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "13e072a09e35b4a0ab6e4fe05e2261d9"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "b31ffe2a1d6d377f56ba7f4e1a7d9db3"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "a299ee1de1cd8f1c92b063f377799b9f"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "c91e5b3e007f29a8a4aad1dd8545321c"
  },
  {
    "url": "views/index.html",
    "revision": "8a95e726394f5cc3e1ee4fedd38910eb"
  },
  {
    "url": "views/java/annotationLog.html",
    "revision": "71f26cfcf19e660c3fd2d07fd7e8bbfb"
  },
  {
    "url": "views/java/ArrayList.html",
    "revision": "e486d2cb3ee580bb73d9954a8bdc8d50"
  },
  {
    "url": "views/java/docker.html",
    "revision": "b1a9d18702889e025349c2b49d8105d2"
  },
  {
    "url": "views/java/HashMap.html",
    "revision": "d5cb27a8cfb56126c37f376027c2d77b"
  },
  {
    "url": "views/java/itext.html",
    "revision": "db5f17a4115bf7c574391b2caade67b2"
  },
  {
    "url": "views/java/jvm.html",
    "revision": "ac3e960a4e0b8932252ae028eadf76e3"
  },
  {
    "url": "views/java/jwt.html",
    "revision": "8af8360ab4f71a083bc17145695b32de"
  },
  {
    "url": "views/java/poi.html",
    "revision": "a9951c0157d761e17d4d7d25810c0c56"
  },
  {
    "url": "views/java/quartz.html",
    "revision": "b814238ba7fbd617bdcde4daca8ee697"
  },
  {
    "url": "views/java/rabbitmq.html",
    "revision": "ad283a937e182e4ed36826b26cf6081d"
  },
  {
    "url": "views/java/redis.html",
    "revision": "2ce7bee188d316b4aa9275d3898af7f2"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "96b5b7721b8c53885cf29b1f74ba7a11"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "e3526ef646732549f0f059210751c400"
  },
  {
    "url": "views/java/thread.html",
    "revision": "f08da0705d2761448f2cf01a95fc0b8a"
  },
  {
    "url": "views/java/ThreadPool.html",
    "revision": "4a7f39d85bb8d620f2c5cfb46c35cb9b"
  },
  {
    "url": "views/qaq/sum_db_001.html",
    "revision": "c866b91f8432fc68444b8dca59b53ebc"
  },
  {
    "url": "views/qaq/sum_fe_001.html",
    "revision": "338eee247741e530da4a92a2480551d8"
  },
  {
    "url": "views/qaq/sum_fe_002.html",
    "revision": "18de584e2558feec63b587545cbdb0ef"
  },
  {
    "url": "views/qaq/sum_java_001.html",
    "revision": "b42a161745bcb2a78c26b31e61d7e6e5"
  },
  {
    "url": "views/qaq/sum_java_002.html",
    "revision": "187208a085f7cfee1ecaeb08d712def5"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "29c0477ae09076674bc918272d225345"
  },
  {
    "url": "views/qaq/sum_spring_001.html",
    "revision": "759d07071a2400bf9d438b56a1d2b4d7"
  },
  {
    "url": "views/qaq/sum_spring_002.html",
    "revision": "b9ae2c41a7f53a8eab633c9b66dbcf19"
  },
  {
    "url": "views/qaq/sum_spring_003.html",
    "revision": "3129f1ad6805a07e4a31c2feb9a52f4f"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "80e8b40aba993cf63dcbf0561e9fa599"
  },
  {
    "url": "views/todo/JUC.html",
    "revision": "b6d1acc839d0daf4feda499bcc524160"
  },
  {
    "url": "views/todo/OnlineMonitoring.html",
    "revision": "8fcc0d7a8281f53a8d578c25b357a0a5"
  },
  {
    "url": "views/todo/redis002.html",
    "revision": "dc82c0cb08ded55c5945b39ad51e6d20"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "3cb672033db83620e4e024c9c747e13f"
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
  },
  {
    "url": "vuepress/zpj80231-logo.png",
    "revision": "dbe08c0ce47cb056ae6a229aa421e2ee"
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
