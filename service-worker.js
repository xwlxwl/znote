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
    "revision": "1be0788e34392f60d3465d1dd47af7c6"
  },
  {
    "url": "about/index.html",
    "revision": "7e0046bccd0094418b0dc8a1638aedd0"
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
    "url": "assets/js/10.b464641d.js",
    "revision": "effef91a9b44da84a9a0f44c5f8f0452"
  },
  {
    "url": "assets/js/11.e63c5be2.js",
    "revision": "e480457544a76aa27d9eca59fc7892e8"
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
    "url": "assets/js/14.e67a8af0.js",
    "revision": "54db67c1cb075289182b4fa13deaaffe"
  },
  {
    "url": "assets/js/15.6702b12e.js",
    "revision": "7b360ce9d50df1c70091a9e46922c5f7"
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
    "url": "assets/js/28.84d776f6.js",
    "revision": "cdd031a92a3d0031ee388220620b1088"
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
    "url": "assets/js/35.c0efc622.js",
    "revision": "bfda235e3a29aa43e1a2557765b21183"
  },
  {
    "url": "assets/js/36.7d49d7ea.js",
    "revision": "54814dd5ef3f9bf9242b896ade5dc11e"
  },
  {
    "url": "assets/js/37.2b6839c2.js",
    "revision": "77b5c7f1468cb97527c31f7cf50fdbcc"
  },
  {
    "url": "assets/js/38.a254a30a.js",
    "revision": "e7886064c298ea0ffedb02aaed872833"
  },
  {
    "url": "assets/js/39.348b93f6.js",
    "revision": "b22b6d90cc6dc69300ef3eb81575a8c2"
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
    "url": "assets/js/app.7649d9ac.js",
    "revision": "48dcdc181cb56344713c321c0f220242"
  },
  {
    "url": "assets/js/vendors~flowchart.81f8ad34.js",
    "revision": "e9bb50cc32a8c83f9dba6dd88a3ef117"
  },
  {
    "url": "categories/index.html",
    "revision": "15f8d7a66b7ae4e5bdef79f39a9e47d4"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "053493c8cbd4fc97980146348f196f85"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "cc33c94134440d1c9b6739419f572300"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "752d0724cb59d0e9d9d4d08c848d149d"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "b4712a011181b2e41f716ebfd9b9d1ba"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "fd0df0ad7fd0c1f3542d2ae070337951"
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
    "revision": "b3f45b119e33c6a763b657cb08d125b1"
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
    "revision": "601ff58685bd53f42379bdc32dfa6ff9"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "4c54b914b60a8bdb9c4b71455d01ffcf"
  },
  {
    "url": "tags/ECharts/index.html",
    "revision": "1446da7320fc2d2c7a9f6b8efce556a4"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d39eb316c3cd14f9a6c7295d346da63d"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "33b009ebf82bee9f0812ccd0787c0169"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "237bf5109b8d5f560c500c9aa374643b"
  },
  {
    "url": "tags/json/index.html",
    "revision": "a8ab753ec57d5e081c3918e534b37754"
  },
  {
    "url": "tags/jvm/index.html",
    "revision": "b43b0fe60ad2bc0d22cdbdbc6dd6492f"
  },
  {
    "url": "tags/jwt/index.html",
    "revision": "9f7a0e721d5752396fdc5accbc873c4a"
  },
  {
    "url": "tags/pdf/index.html",
    "revision": "9f7862763d7dae53cd4bc15be6cd377a"
  },
  {
    "url": "tags/poi/index.html",
    "revision": "2596f0d5db414a848d47dd9715384c52"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "f5e9e27c8e6d96e16e371a660fecfa04"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "02c4ac24754cee8989a291e75749de6e"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "58764bb8e9acdab5c38bd3af8a911dc9"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "05170626b088323d4aabbf74fd0d6846"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "8d7a574e082fbb9da885a5b9f1c3cf9e"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "186446e105b93d4e9de4175ddf57dcfd"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "5ed312c66908bcea21550ecb53a9422b"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "2b560faba08d57a99b7fd8a534c3bf7c"
  },
  {
    "url": "tags/日志/index.html",
    "revision": "1394b7570f9ee29ec8db1ae927f308a5"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "f5a1f5b2660b229d418b99bfbaa55439"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "02736df9852b212baac2e9740e891b34"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "c3de38b1749a3a8c3db0fcebf8a6e675"
  },
  {
    "url": "timeline/index.html",
    "revision": "495f3d7f62761df6d2dbdfd11b9750bf"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "d696789c56c211aec15a9774742b3db7"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "67cf7a8aabf13c9b52f4224447cf1059"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "2a242eefa0a379801c6b46754b1e57d0"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "a626f9f9e0bf12567bf880504e63a12b"
  },
  {
    "url": "views/essay/20200227.html",
    "revision": "b0a546c35e00d3f470c9db6f871a66d9"
  },
  {
    "url": "views/essay/20200301.html",
    "revision": "95375ce1b8fa916cc318dac2332babd6"
  },
  {
    "url": "views/front-end/EChartsStudy.html",
    "revision": "5c97ce0e34e4c7c15006d71900dd7b78"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "67803f8c9c96eee1180630b0e82841a3"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "bdbde4baed982a68f86ec67f436b1cd0"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "880855ac2c0733a09e302da048cb0b51"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "c7a08896bbf94b999d608860b434d8a5"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "650abb053acafd705a948c640d861f6a"
  },
  {
    "url": "views/index.html",
    "revision": "14dea3d1026e71923b986acb002e0af5"
  },
  {
    "url": "views/java/annotationLog.html",
    "revision": "96d58f161697004a136388aebce37dea"
  },
  {
    "url": "views/java/ArrayList.html",
    "revision": "17cce8fe4f09fafd86c043791db24898"
  },
  {
    "url": "views/java/docker.html",
    "revision": "17a143c64c7da39b8cdd6f25aba24d6b"
  },
  {
    "url": "views/java/HashMap.html",
    "revision": "18613049b49614f30447f0ef37a4cb67"
  },
  {
    "url": "views/java/itext.html",
    "revision": "102f7988c041059f3159db7919f11ce0"
  },
  {
    "url": "views/java/jvm.html",
    "revision": "1b5e5c9ac0c1033c44ffdba4cc8364b5"
  },
  {
    "url": "views/java/jwt.html",
    "revision": "804a74e7acaac4f65565bb3c8ca306aa"
  },
  {
    "url": "views/java/poi.html",
    "revision": "34fd468936005237b288cca67398d140"
  },
  {
    "url": "views/java/quartz.html",
    "revision": "1e6c7825b7a892fe65aa81c4ac2a83de"
  },
  {
    "url": "views/java/rabbitmq.html",
    "revision": "922055552790c67fa9ffef6d79ea2109"
  },
  {
    "url": "views/java/redis.html",
    "revision": "2f363e0be2bc9327d2e58c9ece6e6862"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "5e9800e5f3ed878bf4bf04afb02c0503"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "3b962624816920cb17ad4bcac8150824"
  },
  {
    "url": "views/java/thread.html",
    "revision": "9673a9a07ec5b5deb487f530bd3231dc"
  },
  {
    "url": "views/java/ThreadPool.html",
    "revision": "3aa321121ae2df1e44fe0c1578cd4550"
  },
  {
    "url": "views/qaq/sum_db_001.html",
    "revision": "92d9e19a98993ae5c58e69dd4bdf06b5"
  },
  {
    "url": "views/qaq/sum_fe_001.html",
    "revision": "51e47e3d9d5fd2d74bf23b6b32133123"
  },
  {
    "url": "views/qaq/sum_fe_002.html",
    "revision": "6cdfec3d6e661b9276bbf07f82c31e6c"
  },
  {
    "url": "views/qaq/sum_java_001.html",
    "revision": "8f4433ce09f4d2e04f73e8072184aa6a"
  },
  {
    "url": "views/qaq/sum_java_002.html",
    "revision": "d7010c346383eda10ea8f8385409f041"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "20d5624135342cd8a6072291b911d191"
  },
  {
    "url": "views/qaq/sum_spring_001.html",
    "revision": "a86345963d3e9ec153fab77685368a2b"
  },
  {
    "url": "views/qaq/sum_spring_002.html",
    "revision": "2cd0a36f12baf7e34654cbfadc800433"
  },
  {
    "url": "views/qaq/sum_spring_003.html",
    "revision": "ee874cf0c6155380c7dc210c4dadde5c"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "3508f60b4333eac528b180593ec75dc8"
  },
  {
    "url": "views/specification/git.html",
    "revision": "e20c48816f282904ff2840824135b313"
  },
  {
    "url": "views/todo/JUC.html",
    "revision": "8fb4c3d5b7138c75ee39ae0871e47b79"
  },
  {
    "url": "views/todo/OnlineMonitoring.html",
    "revision": "5d0362aa83c07a42754ec2035651f5ca"
  },
  {
    "url": "views/todo/redis002.html",
    "revision": "160220411ca111ad8009b13a1e610e7f"
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
