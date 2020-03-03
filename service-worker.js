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
    "revision": "e807cfed29b70178fd526f5e7cd74dea"
  },
  {
    "url": "about/index.html",
    "revision": "f02e0a3649f3a3c301d3deee3e2922a0"
  },
  {
    "url": "assets/css/0.styles.eb373ac1.css",
    "revision": "541b7d2adadaf019976464e9abbec347"
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
    "url": "assets/js/32.3680d2fe.js",
    "revision": "370785bf3f8173c622c4f2cb2934c40f"
  },
  {
    "url": "assets/js/33.0f6d961d.js",
    "revision": "7cb5aeb7ef971d0e361078ca63bd57c7"
  },
  {
    "url": "assets/js/34.3ecbb42d.js",
    "revision": "6631667bf1617b35773b79fd739ab591"
  },
  {
    "url": "assets/js/35.f80d9120.js",
    "revision": "4b5948869f0108338f0b4521e907e60e"
  },
  {
    "url": "assets/js/36.09c0ace5.js",
    "revision": "7cf5f6f95e42adceac9b33b1776e004f"
  },
  {
    "url": "assets/js/37.a5d2e004.js",
    "revision": "21c54f2d6032bbd10e713372d8dfc13d"
  },
  {
    "url": "assets/js/38.bf33e956.js",
    "revision": "95946b46e9083bd47571ce93083d7c01"
  },
  {
    "url": "assets/js/39.ddb56088.js",
    "revision": "8c80a9e1d4a2d624b88a76658d2321a9"
  },
  {
    "url": "assets/js/4.c719d0df.js",
    "revision": "4688ec161050cf6800bd8d10cee75ac5"
  },
  {
    "url": "assets/js/40.5e22cc41.js",
    "revision": "520670b6029044a41fa0a30547bf508b"
  },
  {
    "url": "assets/js/41.f45e5108.js",
    "revision": "32ce488233231aac53ec6259fdf953cf"
  },
  {
    "url": "assets/js/42.6f4ded7c.js",
    "revision": "c01e8a5afddf8d0366d143a28721cb58"
  },
  {
    "url": "assets/js/43.2799a01d.js",
    "revision": "66114d46b5358153337281f8aeb00105"
  },
  {
    "url": "assets/js/44.dcf2538f.js",
    "revision": "7fe802200ef349d0cf28898738471762"
  },
  {
    "url": "assets/js/45.4ac60cf6.js",
    "revision": "43488d8b11e0f5d61e263e4ba117a20b"
  },
  {
    "url": "assets/js/46.112e7a40.js",
    "revision": "d62d64f29b31a818970948e450df435e"
  },
  {
    "url": "assets/js/47.5a7b1d9d.js",
    "revision": "c068177287552f8c34d6f503295fb51f"
  },
  {
    "url": "assets/js/48.623995f8.js",
    "revision": "d95f5850fe540a4c1bed31ca2af4ad32"
  },
  {
    "url": "assets/js/49.6e038a12.js",
    "revision": "c6d9f10d5814dcbd23ec03c32459eabb"
  },
  {
    "url": "assets/js/5.f5c291b1.js",
    "revision": "9b6f5e3573519bd7beddae2c49add5ee"
  },
  {
    "url": "assets/js/50.19557026.js",
    "revision": "930f2385170a8b001abf9eb082f61c04"
  },
  {
    "url": "assets/js/51.ab85540e.js",
    "revision": "5fdc87b6e125d1172fdcdf4c5e7a1037"
  },
  {
    "url": "assets/js/52.dc7bcd5b.js",
    "revision": "faba6797f84ac043930c675b29e8f275"
  },
  {
    "url": "assets/js/53.b02fb3cd.js",
    "revision": "f1b7bc686da0a52ecd04e6b42d468337"
  },
  {
    "url": "assets/js/54.488374b8.js",
    "revision": "7902891f5175e3a2b478657c5945bb14"
  },
  {
    "url": "assets/js/55.121e9b86.js",
    "revision": "4c21f574ea7394d9f2231d7a5ced3884"
  },
  {
    "url": "assets/js/56.b3a6a6d8.js",
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
    "revision": "cb3670ae72c9ce62126514a595fdaa21"
  },
  {
    "url": "assets/js/9.84078734.js",
    "revision": "28163ca4f2223f461449dea0900073ad"
  },
  {
    "url": "assets/js/app.43958994.js",
    "revision": "d97e305019b06573f086ccefd22f7bf1"
  },
  {
    "url": "assets/js/vendors~flowchart.2136dff3.js",
    "revision": "821de33424baf49e7660683f1fe56523"
  },
  {
    "url": "categories/index.html",
    "revision": "bded16a05d761bb96f629e184add0ea5"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8554e4fba255af25d13c39e5b507dd32"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "99c29dd6741c1b930597ad56ba483dd8"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "bf3f52b4f87d84cdf89d7971c0cc7da9"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "19ea1f0a08f5fa227594cd418298d6ac"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "863c9951d7d8383f4c2783e604c5f745"
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
    "revision": "37c7d013f2c6a94e748257e55a874f40"
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
    "revision": "4714a48d94aeaef722665e7eb1a5bccf"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "c178de6a1588e272efb58e5dd1876a7f"
  },
  {
    "url": "tags/ECharts/index.html",
    "revision": "319fec2eac4e0f5c8b3a51e5c48ad88d"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "b7682186dfbcf3fab020e708d89d9ffa"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "29a87edb520be594de3701cd1ab394e5"
  },
  {
    "url": "tags/json/index.html",
    "revision": "70ffda1758cdbfaafc745403c026a1cf"
  },
  {
    "url": "tags/jvm/index.html",
    "revision": "1b72ea22a11a7e47255882de9ffc1512"
  },
  {
    "url": "tags/jwt/index.html",
    "revision": "4193c7bed24f8d73bdbcf2e53905df63"
  },
  {
    "url": "tags/pdf/index.html",
    "revision": "4171c3a8c23d90ec84a0b7d29c0c137c"
  },
  {
    "url": "tags/poi/index.html",
    "revision": "81af233e517629e9cdbffebb3992f2cd"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "c0a6e32ea2896ca95d61ce2e8f2fcc18"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "5ecc2d788dc2ac7d62231f5b278fafdf"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "8d9e49a550ac63070adc977eeb794131"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "6820f7cedf3f67843b6afecd77ef0175"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "c4c8009362ae9d14665a4e9a2ad42c76"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "6e0645859b860255c5bc3de377a508c5"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "120a9ae214e1e73a2fb6a7dba4f67a89"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "66f27a3565abdfcbce091ce685e9dafc"
  },
  {
    "url": "tags/日志/index.html",
    "revision": "5fd71b2b9fa98b3b2bb2c4bd5ff99637"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "82100a732e3b37747c9c59eb03d4355a"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "8f3c5e09ee1751ac2ba2e825f26ddf2c"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "1ca81897c99a17878e441a224bc739a3"
  },
  {
    "url": "timeline/index.html",
    "revision": "7123e78e023c7f17af556782e6c33af7"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "b475d511ef81be3c97efb3104a9245cd"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "f7132151cf7bface61cd436c2a3eead0"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "5341eff707c2ba47326e7d000a7fbfea"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "a998c83884ecbeb17adcaabaea75e5d4"
  },
  {
    "url": "views/essay/20200227.html",
    "revision": "2393a5e4bcfa86da83ee5d4590ba91c6"
  },
  {
    "url": "views/essay/20200301.html",
    "revision": "bcc8f338d3180662f32c7ddfd420a201"
  },
  {
    "url": "views/front-end/EChartsStudy.html",
    "revision": "f2c061fb93631ffc69e35c6023fcc777"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "4f65e4309e85041ed4721eaf3b75c372"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "151d913f4bff2494363721d0652c0471"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "b9ef8cd844880a09a8d61e241e121c0c"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "3da369f526b8dc795e9da0b31e3dd4b7"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "590f67a13cfd6a887978f1f9ee47ad43"
  },
  {
    "url": "views/index.html",
    "revision": "3f696ff2200daad63dbe8fc4ec5fdac8"
  },
  {
    "url": "views/java/annotationLog.html",
    "revision": "3b9c22727012baf361ca3e78b3391b98"
  },
  {
    "url": "views/java/ArrayList.html",
    "revision": "677e184f79cb0a57d1de3fa9bf6711a2"
  },
  {
    "url": "views/java/docker.html",
    "revision": "ef734b03f59cfdf505c2379be8829a1e"
  },
  {
    "url": "views/java/HashMap.html",
    "revision": "439d92392ff39bc763e098bbcea6152f"
  },
  {
    "url": "views/java/itext.html",
    "revision": "44f5f60fa270363d9d96f84d3c7c64e0"
  },
  {
    "url": "views/java/jvm.html",
    "revision": "59214d1a3495c8a90bf468cf32af7b53"
  },
  {
    "url": "views/java/jwt.html",
    "revision": "bf637dd9c6ef5ffea8f7099ec7464dc3"
  },
  {
    "url": "views/java/poi.html",
    "revision": "c56a3b6e0d0ffe0a786b600aaa562890"
  },
  {
    "url": "views/java/quartz.html",
    "revision": "63b0185ac46d5d125570cf53dd140222"
  },
  {
    "url": "views/java/rabbitmq.html",
    "revision": "991b3a3817130ff0bb1db37a85b5975d"
  },
  {
    "url": "views/java/redis.html",
    "revision": "05634459881c6c47778c923ccc573fac"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "ceece23f9a9ddaff642d1a7ba3c77e54"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "e88a210d4e8ee61049fa9d0ade4bbaca"
  },
  {
    "url": "views/java/thread.html",
    "revision": "bcc8ff35af1fd213e40a66ebd8dbc30c"
  },
  {
    "url": "views/java/ThreadPool.html",
    "revision": "41fa526f77a639ec2821590cdc10e9a3"
  },
  {
    "url": "views/qaq/sum_db_001.html",
    "revision": "de148c038fcf2d1132d4bc0fbb184645"
  },
  {
    "url": "views/qaq/sum_fe_001.html",
    "revision": "3b24035d777ecd9224ad5650a33907bb"
  },
  {
    "url": "views/qaq/sum_fe_002.html",
    "revision": "2b34e30aee0cfb5d5a769fc0fada2519"
  },
  {
    "url": "views/qaq/sum_java_001.html",
    "revision": "1634293c3fc84e88e0c2e96a72c871ef"
  },
  {
    "url": "views/qaq/sum_java_002.html",
    "revision": "3eb6dad5a53fba82862253415a43ecf8"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "2080f52e338d80a759405ab6f47b2fde"
  },
  {
    "url": "views/qaq/sum_spring_001.html",
    "revision": "baae71fefe22c0577fcc95d8a672826a"
  },
  {
    "url": "views/qaq/sum_spring_002.html",
    "revision": "6c7a2c993105114e9861be3c89fd641c"
  },
  {
    "url": "views/qaq/sum_spring_003.html",
    "revision": "2beb7bcd319da5ff9891ea3cb7afddb0"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "d409593d47240589d9c71075f69c1c67"
  },
  {
    "url": "views/todo/JUC.html",
    "revision": "bf010eb57cb116c35dd2ae8bba8b9e98"
  },
  {
    "url": "views/todo/OnlineMonitoring.html",
    "revision": "3f17f58c4c6eb6cb5ffa836e12e83cd2"
  },
  {
    "url": "views/todo/redis002.html",
    "revision": "0ecfcc88a15ddebe29d268b0fdfaeaf5"
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
