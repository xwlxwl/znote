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
    "revision": "2fb90bf6690b59449ee484218a30af56"
  },
  {
    "url": "about/index.html",
    "revision": "a94e4dba1f836cb2a0b08a009b24a60a"
  },
  {
    "url": "assets/css/0.styles.3bc03f33.css",
    "revision": "b4311e488843198e9012f14653de065f"
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
    "url": "assets/js/16.88842bdf.js",
    "revision": "b3ae426a075a79b4ecba83b903c4dbeb"
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
    "url": "assets/js/8.f1512bbb.js",
    "revision": "cb3670ae72c9ce62126514a595fdaa21"
  },
  {
    "url": "assets/js/9.477035ec.js",
    "revision": "28163ca4f2223f461449dea0900073ad"
  },
  {
    "url": "assets/js/app.64bf8500.js",
    "revision": "ce0a38ff3f3bded9eb187d9494f711ee"
  },
  {
    "url": "assets/js/vendors~flowchart.a9cfcbc8.js",
    "revision": "821de33424baf49e7660683f1fe56523"
  },
  {
    "url": "categories/index.html",
    "revision": "bd8ca70759e195a8e2285f0676d84056"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a46608bc9af6fc9f7a8099a2cbdaea56"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "616a367b304c9e8997045a58855e8c96"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "7f02ef5daf3d9f5867c6c8ff6b56a71f"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "d36f71066dee89b0a4504cdfa6818a23"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "e8e1d64cf7fbc1b08787d6964dd37657"
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
    "revision": "c0d9e43ee5b95c669d0f7d845c34cd7e"
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
    "revision": "1ce8979788029e5a6f4a93ae9590baca"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "fe9ceb987c115c043b8c56d214975df6"
  },
  {
    "url": "tags/ECharts/index.html",
    "revision": "4d3c9e54d41faa0ced26dc367a610af8"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "73ed41a9b8dd26db34edeb8b626c44e7"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "97ec758e1cff1ba93b829c161cdddfa4"
  },
  {
    "url": "tags/json/index.html",
    "revision": "bca75a60b6bda1f6806c6591088da814"
  },
  {
    "url": "tags/jvm/index.html",
    "revision": "cb2a991b5379398657bb1ffb36624653"
  },
  {
    "url": "tags/jwt/index.html",
    "revision": "31aed8ac0d43c3766c54dc733e577722"
  },
  {
    "url": "tags/pdf/index.html",
    "revision": "6bf9ec28d1265d41d2c68a343f7ace0e"
  },
  {
    "url": "tags/poi/index.html",
    "revision": "16f2fc2091c88f9aec5b0f6833951801"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "9771b86c911803bcce851b9ffe763fb6"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "0b85a927de6b31c071a0c2e986eb9936"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "5373d7b6bf96bc3bfe76b45bd9b48b94"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "c8dda8c3049a5e608d5f0248c7f11bd9"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "55391e60702fa58135cc63a23d2b790f"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "391c524f32ac947c81dab95369c080f8"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "b53dcb68b2aaf346c995bdb9fa9367b3"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "9c12a69801fe5567f69f16d9c5171a4c"
  },
  {
    "url": "tags/日志/index.html",
    "revision": "d7a69925bc5018381d573491340ccc68"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "37d5a36289760c9bb5ff69e12aa08523"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "c3227ffd471efdd3384f359779e2880a"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "b1aa24df64502de0f46f957a6dcf51da"
  },
  {
    "url": "timeline/index.html",
    "revision": "9397477041b7d28bedf0b86a1b9d81c6"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "23d76fc072a4ce6441d29c09cfb703ad"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "0bb3a9db6392f50c4ba61ca915e44f49"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "9d3afef5a6dd000812c8a8c9b457fd06"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "2a67aebba117c4d43aa4c9d512e6f46f"
  },
  {
    "url": "views/essay/20200227.html",
    "revision": "7026541a72dd8863c6e2ef159dbfff10"
  },
  {
    "url": "views/essay/20200301.html",
    "revision": "477c85e19e276c1b6603a14ec1e0028c"
  },
  {
    "url": "views/front-end/EChartsStudy.html",
    "revision": "87394d5d20b6cd6d77b47db545c8637f"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "857c67aa1ee35d4ef588f7e59f9324cd"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "c297673d44af4980e039837f7cac0c60"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "733ee0162a6ab4f74aebefa0758ed00b"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "be297c10b24d5d25683a05f9615b5c41"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "21554431ebc9602e6c42ba7dda2b4810"
  },
  {
    "url": "views/index.html",
    "revision": "4cc8632638c0530134a258d1dda43d47"
  },
  {
    "url": "views/java/annotationLog.html",
    "revision": "dd2d5e70f278f39d64c3ecd99c1ffbf1"
  },
  {
    "url": "views/java/ArrayList.html",
    "revision": "8b6feab85c9a4fef71313d37164859bf"
  },
  {
    "url": "views/java/docker.html",
    "revision": "0d2a00c88dd69496cde68154c158dee5"
  },
  {
    "url": "views/java/HashMap.html",
    "revision": "fb598ca5e879784694676900f9593850"
  },
  {
    "url": "views/java/itext.html",
    "revision": "048cb6359b628856d4a26d440e7b566c"
  },
  {
    "url": "views/java/jvm.html",
    "revision": "e3343fc3a3fb438e2e5ace114adb953c"
  },
  {
    "url": "views/java/jwt.html",
    "revision": "aa44439d2552829faa67388ab298018b"
  },
  {
    "url": "views/java/poi.html",
    "revision": "1f4369edfeb7cb8d667d5014b6f49092"
  },
  {
    "url": "views/java/quartz.html",
    "revision": "064223c5e4eb0a43a429c8b1a741655b"
  },
  {
    "url": "views/java/rabbitmq.html",
    "revision": "0d4f5eaf1aff337d8882d93c224bd82d"
  },
  {
    "url": "views/java/redis.html",
    "revision": "032bf0d919f2f40e94cecc829109bdf9"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "76c2275a775eef2166b871127d42f275"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "6b260610f9c2cedc2dc2af3180c2b08a"
  },
  {
    "url": "views/java/thread.html",
    "revision": "2203bb6b039b876e3de4e5eaf3095aa0"
  },
  {
    "url": "views/java/ThreadPool.html",
    "revision": "bfe9d4b88a9d64c869f473305f8f505a"
  },
  {
    "url": "views/qaq/sum_db_001.html",
    "revision": "b9dbb21baff4b832fc2d73594686ae0c"
  },
  {
    "url": "views/qaq/sum_fe_001.html",
    "revision": "e9b066ec08db08457989a55117aa77b4"
  },
  {
    "url": "views/qaq/sum_fe_002.html",
    "revision": "3bb9a57a65ba532fba4f323e01b8e7fd"
  },
  {
    "url": "views/qaq/sum_java_001.html",
    "revision": "325e1be2ac2f3df05157b23784e0e18c"
  },
  {
    "url": "views/qaq/sum_java_002.html",
    "revision": "8f6499067744111c3d57a8f3d3ae1824"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "f06e842abdd477323f5c2a8647abbeba"
  },
  {
    "url": "views/qaq/sum_spring_001.html",
    "revision": "0fbaa5ec0cf10700862174448f7dcc91"
  },
  {
    "url": "views/qaq/sum_spring_002.html",
    "revision": "105b8b4476ddbda6c3cc4ae814562e29"
  },
  {
    "url": "views/qaq/sum_spring_003.html",
    "revision": "12f1638eb0083ba43cf31e7230b70c3e"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "e495426b6fb836d75eb50c7bb04834a9"
  },
  {
    "url": "views/todo/JUC.html",
    "revision": "b870e0c3d37720afbce0c05635aef23d"
  },
  {
    "url": "views/todo/OnlineMonitoring.html",
    "revision": "b35f2bbc7ef20b38b4913ca648b959bb"
  },
  {
    "url": "views/todo/redis002.html",
    "revision": "e912787efbca4a840b13b09e0ba02489"
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
