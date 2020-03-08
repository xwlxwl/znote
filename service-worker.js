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
    "revision": "979bddc7585f9e3e3adc542180d899b5"
  },
  {
    "url": "about/index.html",
    "revision": "8aa238408ce9495a79e3ae80773b9cfb"
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
    "url": "assets/js/14.d8f78338.js",
    "revision": "c67fd89324806c876afcc7a30f6ac66a"
  },
  {
    "url": "assets/js/15.7cb00d1b.js",
    "revision": "afdf5feb87a0b3e2b91d49622306b023"
  },
  {
    "url": "assets/js/16.53269f68.js",
    "revision": "49dfb5f1944dfe11f58f569b25bdb17b"
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
    "url": "assets/js/19.fffc4f56.js",
    "revision": "d4d838045cc9892b421416d3173c10da"
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
    "url": "assets/js/37.b78d0f3f.js",
    "revision": "a249f750f965d37a93494ea1ef7f2538"
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
    "url": "assets/js/54.d3c376d6.js",
    "revision": "4ffa56ee31ff37d180b40a918bfa7c20"
  },
  {
    "url": "assets/js/55.a1585ad9.js",
    "revision": "3e5d0a007a24e203b86a9f4a4c39727d"
  },
  {
    "url": "assets/js/56.68d163e9.js",
    "revision": "eedb943db1d8eb82959d86f60427ab05"
  },
  {
    "url": "assets/js/57.22fd07fb.js",
    "revision": "61125e2ba26fe3fa3f973cf6673fe326"
  },
  {
    "url": "assets/js/58.a986d2cc.js",
    "revision": "e45bbe74d3344268500663e39cc79558"
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
    "url": "assets/js/app.fe19fcb9.js",
    "revision": "7e1b93017f7ced1151b3ed43996639ae"
  },
  {
    "url": "assets/js/vendors~flowchart.a9cfcbc8.js",
    "revision": "821de33424baf49e7660683f1fe56523"
  },
  {
    "url": "categories/index.html",
    "revision": "ebbed36109607b3f5ade8e4923034a17"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2977437a3320f43d8c43c02357b96280"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "8f7927f97a65b375061484445f20f364"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "10df1d8f8fc017d589bcf7eaf50f4255"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "f6b663f7e26c60d42859e08334161223"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "9379be16ac4c8da02b4bd047811c85a5"
  },
  {
    "url": "img/_java/jwt.png",
    "revision": "08f10cff7fa522a07bdb68b8615c23d2"
  },
  {
    "url": "img/_other/git_001.png",
    "revision": "dad7a6694ad6026308d580ada34703f5"
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
    "revision": "bdb810bea1f49821e5f554690823e199"
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
    "revision": "10d14f968d56c8d04d9afa86a36ac437"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "5e0dd9a11c48b495a25b326117c6b1a6"
  },
  {
    "url": "tags/ECharts/index.html",
    "revision": "b668ca62f650b4d9a610ce91b77c227b"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d03b4123707e3e0404db952855a64bed"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "2014b486a2c60c816345c43a8cdb3d3d"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "61509ef55978959876cb9f6d60b346e8"
  },
  {
    "url": "tags/json/index.html",
    "revision": "c3ec2bef4afb9acfea5aff2aad3ff034"
  },
  {
    "url": "tags/jvm/index.html",
    "revision": "4b6d76a2815e4f6273d588c614755362"
  },
  {
    "url": "tags/jwt/index.html",
    "revision": "83b30e04c32de1834da62a7e2804d455"
  },
  {
    "url": "tags/pdf/index.html",
    "revision": "1cc862c8fab595a036b4b9a2dcbbf8ed"
  },
  {
    "url": "tags/poi/index.html",
    "revision": "fb4cfd5c7a487a4719baadaf44835dd2"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "4bc85e0c4edb8aea9585f4bb538fa8cf"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "6caa603c811cebf096abb6b8e8f06ee5"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "69f0726934b497e1a4f57ce0687cdd29"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "7eedf90bd9f00f4793c4db997567445f"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "3ad302574a4175eb644e352ad5aae9a9"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "83dd4dc92d067a0ec15d4c215a4bf162"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "4bd48d82095477b3c6d7b049e38d0989"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "8036fe378b90bdcbb44de1bdd4182370"
  },
  {
    "url": "tags/日志/index.html",
    "revision": "65c922a9dfe5fea6354417127af28114"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "233e4b5bf4eb3219c56d28a1984b92e7"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "0d1ddc25d7d424088ba231d0a67278bc"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "246349a02e0adbbf5ad3fc2b3d83d4b0"
  },
  {
    "url": "timeline/index.html",
    "revision": "4ec402055d9719dd47cac13fc8044e44"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "434e532f1da6f1e4bd76a4fe9868006a"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "1a59fe2025f77badf1933fae32fd16d8"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "3c7cfcfe155f1d40479034b41baae4ab"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "90cb3ec980f41802a1145887acd7d464"
  },
  {
    "url": "views/essay/20200227.html",
    "revision": "0f8ac34d42860df3f732ccc80d7f242b"
  },
  {
    "url": "views/essay/20200301.html",
    "revision": "6d266d44b3a3c0f8e69e8b938c2245c3"
  },
  {
    "url": "views/front-end/EChartsStudy.html",
    "revision": "ed2163825ae5b7c5e1018d9852aac1e2"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "691c1a390dd5e7a02312bd165f85b170"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "83f11bb293f5f11fdabb74385b4b8a5c"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "37b90581305e58ce603dc4a3460afd2f"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "e18a818cc24494975e1d63e759fd6ecb"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "d62b49e284add6a0b0cf28e986db2fca"
  },
  {
    "url": "views/index.html",
    "revision": "a002e5b42aa5108c3ebb32f832c8a9b8"
  },
  {
    "url": "views/java/annotationLog.html",
    "revision": "084d5e22d9d60abd381a251a3c9186f0"
  },
  {
    "url": "views/java/ArrayList.html",
    "revision": "6667d0cfd5d4c607a5fccd61bdbb649f"
  },
  {
    "url": "views/java/docker.html",
    "revision": "81e78e5f9306767c8f302ed8d2d56ea8"
  },
  {
    "url": "views/java/HashMap.html",
    "revision": "7607dafed04c14b47c13977f19ebe3d1"
  },
  {
    "url": "views/java/itext.html",
    "revision": "01c197f9c4a2c08e29fe31162bdcadfd"
  },
  {
    "url": "views/java/jvm.html",
    "revision": "10f5b99a732d426ebdb2bcb35755d4ee"
  },
  {
    "url": "views/java/jwt.html",
    "revision": "1127044f577c97f09e99609c59bc3a78"
  },
  {
    "url": "views/java/poi.html",
    "revision": "6cbf44be47de0728594ceabe1094ce77"
  },
  {
    "url": "views/java/quartz.html",
    "revision": "441a4677b98df1925d077665c4f2fd4c"
  },
  {
    "url": "views/java/rabbitmq.html",
    "revision": "c6cd5fb1cdc480814a13571d91d98de4"
  },
  {
    "url": "views/java/redis.html",
    "revision": "8ef69dae691a43ba550aad7061f8dca3"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "0b5ab6a9c888bef5d6a0cdf8e9475690"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "6a69e9974a1bdca1a3a3c665e905f9df"
  },
  {
    "url": "views/java/thread.html",
    "revision": "7bf08b297f4cd7bad63fe7fb1bf428b7"
  },
  {
    "url": "views/java/ThreadPool.html",
    "revision": "17206e380d05f0b50125dc3dbf113d36"
  },
  {
    "url": "views/qaq/sum_db_001.html",
    "revision": "46c299a58c153b6e8c760aae2fd2b54d"
  },
  {
    "url": "views/qaq/sum_fe_001.html",
    "revision": "372f3228a4758812483b470b5b0a1055"
  },
  {
    "url": "views/qaq/sum_fe_002.html",
    "revision": "41e04e11a35c0aaa287130b19b1bd8e5"
  },
  {
    "url": "views/qaq/sum_java_001.html",
    "revision": "6927fb4d54eacaae4b111f2dcab66c0c"
  },
  {
    "url": "views/qaq/sum_java_002.html",
    "revision": "1322ddf9ed1f24147f879c30b62fd51e"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "ae8cd3aba5d423bd2e979b3a7ed1346c"
  },
  {
    "url": "views/qaq/sum_spring_001.html",
    "revision": "730e81cf0cfd64f4c36b96244a06486a"
  },
  {
    "url": "views/qaq/sum_spring_002.html",
    "revision": "43e7e5112c8a8a772a4b9675df82e6e8"
  },
  {
    "url": "views/qaq/sum_spring_003.html",
    "revision": "25f6114918f0dcf9aa0110a2341d497e"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "507d9678a1cb1a671825635d2423f55e"
  },
  {
    "url": "views/specification/git.html",
    "revision": "6a9635982d270f7e81645380ecf1f5f7"
  },
  {
    "url": "views/todo/JUC.html",
    "revision": "d6bae0ffedd014d105dc41a64487d840"
  },
  {
    "url": "views/todo/OnlineMonitoring.html",
    "revision": "ff193b21054e129506dd2fd5902a426d"
  },
  {
    "url": "views/todo/redis002.html",
    "revision": "833687cb179129aeae897dcfa2cb1a20"
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
