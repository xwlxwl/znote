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
    "revision": "29b215d1aba22155df967ca7e63345d8"
  },
  {
    "url": "about/index.html",
    "revision": "117cd55b06b3ff52ad584b8831891391"
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
    "url": "assets/js/1.c7894cf3.js",
    "revision": "9b2e4d7421e20429b52ec5172eaefe0c"
  },
  {
    "url": "assets/js/10.6817ca94.js",
    "revision": "2ee38f0ccbfbf74a1fcbc1ae364a0804"
  },
  {
    "url": "assets/js/11.5b08c199.js",
    "revision": "3f7dad5501d2398434116d6579cbce3f"
  },
  {
    "url": "assets/js/12.fabc335c.js",
    "revision": "8573d73d9fab0870225715678e5b37eb"
  },
  {
    "url": "assets/js/13.dfe530e8.js",
    "revision": "20a9fc6756aabaccade0ae55b8fa55fb"
  },
  {
    "url": "assets/js/14.7414b838.js",
    "revision": "b493ebb056ab527b6c26539d8e9d7de6"
  },
  {
    "url": "assets/js/15.eaa293dc.js",
    "revision": "f20efbd48cc00a4a441c8b19df224327"
  },
  {
    "url": "assets/js/16.b1c63b9d.js",
    "revision": "c77325d7835bdc9d3165347820687131"
  },
  {
    "url": "assets/js/17.8232fe28.js",
    "revision": "f51eb8306a91a643c0ee1800019553fa"
  },
  {
    "url": "assets/js/18.5f652b97.js",
    "revision": "97ab3432716a18825d48d46a92b69ba2"
  },
  {
    "url": "assets/js/19.5af302b9.js",
    "revision": "548a6a5f3b0e01e10433ec56bd6d52bc"
  },
  {
    "url": "assets/js/20.15dc82ae.js",
    "revision": "a88a6fbaf45359378cd8cdeefe3ca27f"
  },
  {
    "url": "assets/js/21.17396977.js",
    "revision": "16ca1f261726e896b49dec0551fd4e3b"
  },
  {
    "url": "assets/js/22.15722f5e.js",
    "revision": "c9fc0681da37db37956bedf0bb4e8ccc"
  },
  {
    "url": "assets/js/23.b90f43df.js",
    "revision": "69ef82bf5a44ee4b4f2f72d571060570"
  },
  {
    "url": "assets/js/24.febb8669.js",
    "revision": "b9c7e1565f217b066af6a29546603f58"
  },
  {
    "url": "assets/js/25.60d0bff3.js",
    "revision": "6de7164f0513d172fcaf4d0e674eaf68"
  },
  {
    "url": "assets/js/26.5e6b011e.js",
    "revision": "f72dc04f34a4826afed17fd55579d8d4"
  },
  {
    "url": "assets/js/27.ec14639e.js",
    "revision": "bd82ab6e4e15605aa03f2f87e6ad3c60"
  },
  {
    "url": "assets/js/28.074df27c.js",
    "revision": "58fe9ff6c53f5726606811b4261ba0b4"
  },
  {
    "url": "assets/js/29.ceeae44b.js",
    "revision": "94a71b950bd3f38211401caf6b3250e4"
  },
  {
    "url": "assets/js/30.e4db3051.js",
    "revision": "3a782140aa11efaccb49cfbc38df678b"
  },
  {
    "url": "assets/js/31.43a2f1ac.js",
    "revision": "38c4fcc7af05dcf26fec3c56e70f7db4"
  },
  {
    "url": "assets/js/32.3142fa50.js",
    "revision": "6e61e65bc40373cd1c4fac89a9361004"
  },
  {
    "url": "assets/js/33.d920ec6b.js",
    "revision": "673214d0f678c6ce5648c5f8e60b5c5f"
  },
  {
    "url": "assets/js/34.45df7306.js",
    "revision": "7e03bb2481f8542a5cf70e66b182339d"
  },
  {
    "url": "assets/js/35.0cee21e3.js",
    "revision": "85edd5bca67548783bdb609fd9cdb34c"
  },
  {
    "url": "assets/js/36.f6ed6de0.js",
    "revision": "5e0a47b1f4a496ecf78be937cc2ddc22"
  },
  {
    "url": "assets/js/37.2b6839c2.js",
    "revision": "77b5c7f1468cb97527c31f7cf50fdbcc"
  },
  {
    "url": "assets/js/38.82135bd6.js",
    "revision": "f57529cbc80af51229de8961bdb79b88"
  },
  {
    "url": "assets/js/39.445d85e9.js",
    "revision": "f0e21b50ba21541bd3e48f4abf06fffd"
  },
  {
    "url": "assets/js/4.a1e13c5f.js",
    "revision": "f75ec820209709d9f5217aa1b932cbaf"
  },
  {
    "url": "assets/js/40.05f6e8cf.js",
    "revision": "e9ce625b3c6cad05e53e37c4d397bd28"
  },
  {
    "url": "assets/js/41.0460d016.js",
    "revision": "617796464a3ea1259eaa89c3dd956112"
  },
  {
    "url": "assets/js/42.a3275df0.js",
    "revision": "2e91cce0dfe95889bdf3643ea03df430"
  },
  {
    "url": "assets/js/43.67e4d9a1.js",
    "revision": "a6cd689589bc107de48f94cf8e3af0ba"
  },
  {
    "url": "assets/js/44.b96d6bcf.js",
    "revision": "7faa129d5069b9174ba8d51a59f272e3"
  },
  {
    "url": "assets/js/45.7d69ba26.js",
    "revision": "f59ffd6c1b7d63c5c6205b3c4248b904"
  },
  {
    "url": "assets/js/46.b77fd0ca.js",
    "revision": "81946752ec1b08dbd09b839198867636"
  },
  {
    "url": "assets/js/47.5cf7c4ed.js",
    "revision": "dcbf13818fb9bbea2242e848cc63fef0"
  },
  {
    "url": "assets/js/48.f4b0d663.js",
    "revision": "391732aa66b94bc4d06181e7a345be31"
  },
  {
    "url": "assets/js/49.bee92fa3.js",
    "revision": "c60dbdf503d5545e40310cdd9ceb1caa"
  },
  {
    "url": "assets/js/5.6bc65a38.js",
    "revision": "22db727a1e51017cea5e48b1207a86db"
  },
  {
    "url": "assets/js/50.bc87e0ca.js",
    "revision": "9ea99605c9fb894002dc39dd052ebea7"
  },
  {
    "url": "assets/js/51.d11d59bd.js",
    "revision": "c2da296aab19247965b33b5088eef218"
  },
  {
    "url": "assets/js/52.56b297d2.js",
    "revision": "b048a6fba4aaa8ab8a1dfeb1044df5d0"
  },
  {
    "url": "assets/js/53.9aa8359e.js",
    "revision": "2d3c9702c942a372eac0f2ac8d4b8829"
  },
  {
    "url": "assets/js/54.b00812be.js",
    "revision": "83f2c712c75a2410b7243c841dbe6959"
  },
  {
    "url": "assets/js/55.c9b3ce56.js",
    "revision": "ab127c349dd7b8ac6bb5019da20613a3"
  },
  {
    "url": "assets/js/56.ecc970de.js",
    "revision": "0af0ae26e4b04f3f3ce973b2675b5698"
  },
  {
    "url": "assets/js/57.23ae1ad1.js",
    "revision": "1b21fcd98b21406b4640fa7628dea2ff"
  },
  {
    "url": "assets/js/58.a986d2cc.js",
    "revision": "e45bbe74d3344268500663e39cc79558"
  },
  {
    "url": "assets/js/6.a4a3720f.js",
    "revision": "f7bfabe6844b3bc50b0d4a1a39bf8a3e"
  },
  {
    "url": "assets/js/7.2eda6744.js",
    "revision": "62245ca17eded9884422bf56fc263b91"
  },
  {
    "url": "assets/js/8.eda2341a.js",
    "revision": "8017835d570b851e0aafed1835e0ed70"
  },
  {
    "url": "assets/js/9.438031ba.js",
    "revision": "4dbfb56c2a72a5c07870b150c8cd859e"
  },
  {
    "url": "assets/js/app.c1ecfc89.js",
    "revision": "1710435ee658e2583bdf2100d7a8ed06"
  },
  {
    "url": "assets/js/vendors~flowchart.81f8ad34.js",
    "revision": "e9bb50cc32a8c83f9dba6dd88a3ef117"
  },
  {
    "url": "categories/index.html",
    "revision": "b2d9ca055ddf92780a490c63c32ad4ca"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "4e75d1d5d7ba38a19561d3022c447e67"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "4e74de685f5a1c5ebb733b3808b71f30"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "3a0ba94bbae99a2e405f5a1f4f4c6006"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "72a3203c814402f9fdd3f2450c37ee23"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "214994a018833b59564ed804119f002a"
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
    "revision": "4a1bd52348ce27f28040b95773ec51dc"
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
    "revision": "f266df3aacbb35da279996bd2736ca5a"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "43da0eaaff87285ff3695f0c4697eece"
  },
  {
    "url": "tags/ECharts/index.html",
    "revision": "b8a4b7baf9c1860e44756333b7002a7d"
  },
  {
    "url": "tags/git/index.html",
    "revision": "998cd720d93947eefb1eb63d6c278024"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "cd52d69845889f0a36ac5aa76fcd0f93"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "a28a471f3cb69d7ee42b11d4fb24b5bb"
  },
  {
    "url": "tags/json/index.html",
    "revision": "9e0f0e7bac16722af248c156dec2e8d0"
  },
  {
    "url": "tags/jvm/index.html",
    "revision": "2d65ded5159cb8e7bd6bee5152df786d"
  },
  {
    "url": "tags/jwt/index.html",
    "revision": "5c967e527ee6db2d9a03484a9523bd91"
  },
  {
    "url": "tags/pdf/index.html",
    "revision": "067ac0014712d39b6bf54bf8c2157899"
  },
  {
    "url": "tags/poi/index.html",
    "revision": "bbfd2402afa1c0b4106b16901dce0b1c"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "b8f4dff84e51ef404a92c7c857214f03"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "7cdb7350397e073f5b847f8e391d3a2d"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "41db0a9c191569ebe95ebb0c5b19700b"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "22d2b66539fc001db5deb1784f6c5179"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "7dc6178087db2763b90a525c72738869"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "fa394b74750e444cd9819deb00ec9f6c"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "ae173daf69cd0d95c031a960f4bde224"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "cf5eb6e85ab4e6b90b06b26187053b03"
  },
  {
    "url": "tags/日志/index.html",
    "revision": "dffbdb479ed768347a91fb6a0e22f36f"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "196b71545bfa1756eb6accbd74560f54"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "deab7f2241e63eb214bba0c8fd386d70"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "75491cdc3071a712a1c1c4f1d7527941"
  },
  {
    "url": "timeline/index.html",
    "revision": "ce10a1b8a7181b7e795e37d32e9c6211"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "07b02455dc3877f6ba00f9b824fe76f7"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "7ed2952a18b3f1be881f59c87349ebc8"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "89fd8c4836b1585c588237931db5a316"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "584e8c4ce96b54304c7210ac505eb16a"
  },
  {
    "url": "views/essay/20200227.html",
    "revision": "fd200a9885b0dab1ad09280af9d01aa7"
  },
  {
    "url": "views/essay/20200301.html",
    "revision": "3069a3c35437a210506ccfd7c2b58769"
  },
  {
    "url": "views/front-end/EChartsStudy.html",
    "revision": "ffb157713265d123bab30e1bd225a4fa"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "330a6e92947de4a57dc350d271ec9392"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "0d4de023556fe7f01ad9e4dea917b88f"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "8219c0b3a6f56ee62086f7f081cd2d6f"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "feec2f289093e32ce09d95a8e9b08be2"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "6c0d9c28af98776429a6d899b5506ac5"
  },
  {
    "url": "views/index.html",
    "revision": "a58487e34b525945cb1d7572987991e1"
  },
  {
    "url": "views/java/annotationLog.html",
    "revision": "617e8b9aa466bfdbc79b531215037f78"
  },
  {
    "url": "views/java/ArrayList.html",
    "revision": "053064d4533cc1dbcffab8b56074dc3b"
  },
  {
    "url": "views/java/docker.html",
    "revision": "238a3bc02ce62544f56b592d0c6a1915"
  },
  {
    "url": "views/java/HashMap.html",
    "revision": "ba3a6a5067adfec8513a5466558186fa"
  },
  {
    "url": "views/java/itext.html",
    "revision": "269990eed9f9934e9d550cce05ace1e6"
  },
  {
    "url": "views/java/jvm.html",
    "revision": "f3de8b5526c74330025a3f86b6632cce"
  },
  {
    "url": "views/java/jwt.html",
    "revision": "e276de87e653045c228007219e3404fe"
  },
  {
    "url": "views/java/poi.html",
    "revision": "185c0b124fc0e85c860b6b7c00718d29"
  },
  {
    "url": "views/java/quartz.html",
    "revision": "da7520232261a1735ab31199d74d9247"
  },
  {
    "url": "views/java/rabbitmq.html",
    "revision": "95511e7b8b4383391628b1b62c961944"
  },
  {
    "url": "views/java/redis.html",
    "revision": "84f4c728a59803a593b7638ff0d94696"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "ad1a9197a2eb559a39974a16b2b49a05"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "1488a5dbec45bff314dbbf6c573603de"
  },
  {
    "url": "views/java/thread.html",
    "revision": "c5a70fc9d7c7e084f807d15d90ba1f37"
  },
  {
    "url": "views/java/ThreadPool.html",
    "revision": "9a2b41ffbab659646ef6a73b0907d786"
  },
  {
    "url": "views/qaq/sum_db_001.html",
    "revision": "5c2c6d4acc001f0942a42aa7da5bc14d"
  },
  {
    "url": "views/qaq/sum_fe_001.html",
    "revision": "3f6b7e5561daf24a3f1d260a4c741047"
  },
  {
    "url": "views/qaq/sum_fe_002.html",
    "revision": "d98671011995921e905a3376b8caf894"
  },
  {
    "url": "views/qaq/sum_java_001.html",
    "revision": "84907758c168d9e7737f02bccd171222"
  },
  {
    "url": "views/qaq/sum_java_002.html",
    "revision": "2f0b83098afb0b275f4a455d5810f834"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "3fb9247305ced1e6bedc7a580b41edd3"
  },
  {
    "url": "views/qaq/sum_spring_001.html",
    "revision": "978ad598fb903c4f7db00b2a0c00d554"
  },
  {
    "url": "views/qaq/sum_spring_002.html",
    "revision": "9b57bf9d945532e3a41b8edb7caef855"
  },
  {
    "url": "views/qaq/sum_spring_003.html",
    "revision": "d390c3fd1be337b94ff790f386873ae1"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "cda58821c0fb42e18ee05380da7048bf"
  },
  {
    "url": "views/specification/git.html",
    "revision": "405a1495dd280bec43dc76e52e13f193"
  },
  {
    "url": "views/todo/JUC.html",
    "revision": "2385a53b883ba984d2d25d21d3d70f62"
  },
  {
    "url": "views/todo/OnlineMonitoring.html",
    "revision": "b95772cf410e700082ad486fa65850a3"
  },
  {
    "url": "views/todo/redis002.html",
    "revision": "dace025a2c32183a5b594e829e00b20a"
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
