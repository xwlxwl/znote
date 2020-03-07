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
    "revision": "c07b293beb760b5c9d1f7adc661d7c6e"
  },
  {
    "url": "about/index.html",
    "revision": "a40b969f128fb2fadf146beadef52deb"
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
    "url": "assets/js/19.89e00dcd.js",
    "revision": "7b141c9fe3375011457cc1e717a66333"
  },
  {
    "url": "assets/js/20.63b6756c.js",
    "revision": "6442d420f253aba2328e5ea4b7a94ab3"
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
    "url": "assets/js/30.b4b30932.js",
    "revision": "bd33149134e5cf35ddbac825a42e67fa"
  },
  {
    "url": "assets/js/31.ee151f54.js",
    "revision": "1de3fd6a28d5c9c6f9daee19ad648cd9"
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
    "url": "assets/js/app.741dd093.js",
    "revision": "a7f633c9a72e31a8dcb1cd68a8071234"
  },
  {
    "url": "assets/js/vendors~flowchart.a9cfcbc8.js",
    "revision": "821de33424baf49e7660683f1fe56523"
  },
  {
    "url": "categories/index.html",
    "revision": "27825373f318c00c1d5884e2cc87ead8"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "222f46e69e5a0e1962a77146e9c82d3f"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "c83a76562192aad77f7017df312e87b4"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "901dba8b679f5cced96ea3393e4f8b19"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "36aaa6638c85a40ec2443222763432bd"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "8728b0901fa4459ba62fa5edf4660d77"
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
    "revision": "209e7d8c35bb943e98c57523341a259f"
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
    "revision": "b9e84605638d2313594cea61d5b4cb23"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "08562e4ac707c0923cb7afa13821c0ca"
  },
  {
    "url": "tags/ECharts/index.html",
    "revision": "f80ac13c5a7d563b9e5c9cdd17fde720"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "2bb4e3176f0632d7e7e7d27af00813e1"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "612f2a37fa73af2de000cd62244b4914"
  },
  {
    "url": "tags/json/index.html",
    "revision": "4bc1ce42a90ac1fad6208242eb50438a"
  },
  {
    "url": "tags/jvm/index.html",
    "revision": "53c0042563da182f60da8f874e81aa8f"
  },
  {
    "url": "tags/jwt/index.html",
    "revision": "cd867c0bcdee96c6a534ee32546c2f39"
  },
  {
    "url": "tags/pdf/index.html",
    "revision": "3c02a4d1d97999aaace051d25b23e064"
  },
  {
    "url": "tags/poi/index.html",
    "revision": "5950181fb3ce3877e65dc5208155134e"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "5e5ede3e5a3096398b38d9f25d28ecbb"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "7c34867433508089a459f463f85e1563"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "782f920a76f2cf1bf292b5341f8d950c"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "f61e32b9cf63ed510bc5b3b1c8eb35ef"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "00e95f3bae8f8d17f41c7f88de4f0770"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "1378d5eeabb74cb196c84d23ef3d7a73"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "66ea57945f506b5c42d0bdf3e54ff41a"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "00f1577552f29a0ebf33a4f97bfcf82b"
  },
  {
    "url": "tags/日志/index.html",
    "revision": "b2a73e66f8d8601457c23ca3c18055b6"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "4b13efb597e9acfa273bc3e52b8bbac8"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "57e2e741ae8e561ab0952d359a348887"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "7c9facf3cbc6c0a7e428a3a2d32dc45b"
  },
  {
    "url": "timeline/index.html",
    "revision": "6943ca3088a7a943cbc1ca09e67cdb3a"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "d4e5fafda40d10bae5e196e7f3e4182e"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "ec7ffd966e156559678db43239e99421"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "7d6cb055051216b39d908878328aa867"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "58f9b46c0e6c4724286a1b180b55ff57"
  },
  {
    "url": "views/essay/20200227.html",
    "revision": "3cb8537b28f090103e6120da17428865"
  },
  {
    "url": "views/essay/20200301.html",
    "revision": "0153ae79cdde4710e0c5bc1c64a6817f"
  },
  {
    "url": "views/front-end/EChartsStudy.html",
    "revision": "4bc48f43e9213ce01847ccd9d757da96"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "55fee696aaa82a2ba7489e9a532b281a"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "458e4777ec1291de8bcc6206e9df5cbf"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "f5b91ccd59dac53bcb0993ed949db638"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "2d1ef67068a0ee925e13a625cd73507a"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "89241b18cc9cd879c826aedaea7fcd84"
  },
  {
    "url": "views/index.html",
    "revision": "cd942a5d868cabffc64d64c0036f7d6b"
  },
  {
    "url": "views/java/annotationLog.html",
    "revision": "960893a271348d0c4b00f90ca729afbb"
  },
  {
    "url": "views/java/ArrayList.html",
    "revision": "2246f870cea44167aabb6e4bb3c4ddb4"
  },
  {
    "url": "views/java/docker.html",
    "revision": "411bcdc58746b1d41e313ed097d100b5"
  },
  {
    "url": "views/java/HashMap.html",
    "revision": "3ea2ceac16b46bde68e8185af0af5db2"
  },
  {
    "url": "views/java/itext.html",
    "revision": "18275a110fbd1eccc84c7e212888824e"
  },
  {
    "url": "views/java/jvm.html",
    "revision": "7a376a7a27378f183951530e5d190047"
  },
  {
    "url": "views/java/jwt.html",
    "revision": "7020551d26123bfca5eebdbacfe20c16"
  },
  {
    "url": "views/java/poi.html",
    "revision": "34f122d97a285bb2653ca1de9e7787d6"
  },
  {
    "url": "views/java/quartz.html",
    "revision": "35cb65f62255fc38c2a828b6ff8ccf02"
  },
  {
    "url": "views/java/rabbitmq.html",
    "revision": "a7bfaec48d5c4b49faec12d217e2eafd"
  },
  {
    "url": "views/java/redis.html",
    "revision": "c51ed00a02916b867fe68925f23f2f7a"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "58c49b290111675e8230d1c1c0ec921d"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "5514fab23614ca06227c46928f2edde1"
  },
  {
    "url": "views/java/thread.html",
    "revision": "d43467bec71820ad0103ec9f1ec00045"
  },
  {
    "url": "views/java/ThreadPool.html",
    "revision": "2e24bf3176370c6eb01cb673d36634b2"
  },
  {
    "url": "views/qaq/sum_db_001.html",
    "revision": "6d393d7cb19164c1b933546c7b306966"
  },
  {
    "url": "views/qaq/sum_fe_001.html",
    "revision": "a54335c571c2375a40816ade59d5877d"
  },
  {
    "url": "views/qaq/sum_fe_002.html",
    "revision": "f2fd6e7f77c6d00d52b675fb682b4343"
  },
  {
    "url": "views/qaq/sum_java_001.html",
    "revision": "e22b96e6b473d40024198e4aec6f80f7"
  },
  {
    "url": "views/qaq/sum_java_002.html",
    "revision": "e562c3dd518d3492493c926b3a33af10"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "58de0960f639caf41a344200be530f15"
  },
  {
    "url": "views/qaq/sum_spring_001.html",
    "revision": "5d68b819ab53ae61223c3cf270805fb2"
  },
  {
    "url": "views/qaq/sum_spring_002.html",
    "revision": "c4c53a26c1d6dbdbe8078ff81fa628d0"
  },
  {
    "url": "views/qaq/sum_spring_003.html",
    "revision": "54e40dc7aab25c7d2f84c68166c3fd0f"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "57e6580bf3ae07b61b9406dff0486c41"
  },
  {
    "url": "views/todo/JUC.html",
    "revision": "4399e65812860540dba6c070a5e28fd1"
  },
  {
    "url": "views/todo/OnlineMonitoring.html",
    "revision": "69feba9e36c89745130b0efd8ca8a31d"
  },
  {
    "url": "views/todo/redis002.html",
    "revision": "60fb235a8a5779cba63a95ae2ee2a6ce"
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
