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
    "revision": "36e49fee3a1890b7a476bc8ffa21a029"
  },
  {
    "url": "about/index.html",
    "revision": "234dde0f06ac7c1488d8003663fc87d8"
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
    "url": "assets/js/13.77d61b63.js",
    "revision": "4a1f9c062511266eeaf9f70f6b63da69"
  },
  {
    "url": "assets/js/14.bfa2ca2c.js",
    "revision": "2b7dad5a191385f024e85a097079edbe"
  },
  {
    "url": "assets/js/15.eaa293dc.js",
    "revision": "f20efbd48cc00a4a441c8b19df224327"
  },
  {
    "url": "assets/js/16.509b7e1f.js",
    "revision": "cd0f10826079d764cc2e235e4b592b4e"
  },
  {
    "url": "assets/js/17.7e6f49cb.js",
    "revision": "6918b1344ff7ca8aa47966f6e4e62474"
  },
  {
    "url": "assets/js/18.354525b5.js",
    "revision": "1bfdf4fe4b3c46e641d1dc29f90ef1b6"
  },
  {
    "url": "assets/js/19.a3b2e7b1.js",
    "revision": "65a1c4c0eab58b9d3d0776ce0beb8d00"
  },
  {
    "url": "assets/js/20.70208657.js",
    "revision": "b51561a4c4a51c4c40d0e419eaba363f"
  },
  {
    "url": "assets/js/21.9a54b527.js",
    "revision": "e2a776a17d626e1fbac8069febf99ad4"
  },
  {
    "url": "assets/js/22.d559a235.js",
    "revision": "e051769bce5367e21676987b8dff0f52"
  },
  {
    "url": "assets/js/23.40fc7035.js",
    "revision": "4ef9131310f5df1715fd894f218db8d8"
  },
  {
    "url": "assets/js/24.5b1b2209.js",
    "revision": "230cf10f3b14d3dbeee4dfb5c894700c"
  },
  {
    "url": "assets/js/25.0b7f1418.js",
    "revision": "6b95ea3adff09ab94b929184524a33ba"
  },
  {
    "url": "assets/js/26.94c8df2d.js",
    "revision": "7bd675c6373b323cc06d7745f9a8f15e"
  },
  {
    "url": "assets/js/27.7f334c98.js",
    "revision": "11f0104a7c858cfccd37b79f261cd285"
  },
  {
    "url": "assets/js/28.756514da.js",
    "revision": "743d0d1e2b4ebe7996c78ab284ec1217"
  },
  {
    "url": "assets/js/29.f710a93e.js",
    "revision": "a8076daccf3ef6eeac6527c268026adb"
  },
  {
    "url": "assets/js/30.65d898fe.js",
    "revision": "fc594f61a75033705d48f384d84b15bb"
  },
  {
    "url": "assets/js/31.477e7b02.js",
    "revision": "6c12b6cda7066987f2a0d00d55d6a2ad"
  },
  {
    "url": "assets/js/32.0f3e8032.js",
    "revision": "65e085aa071be0712ee55f1c9ff253a0"
  },
  {
    "url": "assets/js/33.bcd23461.js",
    "revision": "134235307d955a6c000d317c8b332aa7"
  },
  {
    "url": "assets/js/34.81dbdba5.js",
    "revision": "59253f078e13ed70724ffc8bc38b686e"
  },
  {
    "url": "assets/js/35.bae1068b.js",
    "revision": "136071cac9b3bb5fcc0fc2cb227c1502"
  },
  {
    "url": "assets/js/36.42243df9.js",
    "revision": "f43bc18a2ef4d7bb3f442a5248f9133d"
  },
  {
    "url": "assets/js/37.9e31b711.js",
    "revision": "2aa4a21a85a99ded5d1cf4124324a15e"
  },
  {
    "url": "assets/js/38.0c63e3bf.js",
    "revision": "d6f68b58b8a533df16f1527f2555318b"
  },
  {
    "url": "assets/js/39.e768be8e.js",
    "revision": "1a59ec417cbd2e4cdb0ec586659a80aa"
  },
  {
    "url": "assets/js/4.a1e13c5f.js",
    "revision": "f75ec820209709d9f5217aa1b932cbaf"
  },
  {
    "url": "assets/js/40.187aa2eb.js",
    "revision": "39d860f9235bde29803ac69db27e600a"
  },
  {
    "url": "assets/js/41.748b4670.js",
    "revision": "4d6e1fd69cc9c33dec71dc153230cff2"
  },
  {
    "url": "assets/js/42.a9841527.js",
    "revision": "098e6d690f43e3405c697d63e5d2f7b8"
  },
  {
    "url": "assets/js/43.c39abd37.js",
    "revision": "7e7137476f62e3f195c8e27500b26dfb"
  },
  {
    "url": "assets/js/44.ff8d1a84.js",
    "revision": "86e725a19f578d721dad9c7cc5a4f8c1"
  },
  {
    "url": "assets/js/45.55f429a3.js",
    "revision": "8b87ca33f5e2c76c49c20ae13e3f1bf3"
  },
  {
    "url": "assets/js/46.126794a7.js",
    "revision": "f62fb2ab32c214746a5ff578dfebadf4"
  },
  {
    "url": "assets/js/47.754b012d.js",
    "revision": "cda3305b69fa45119e2e200004197485"
  },
  {
    "url": "assets/js/48.6ccf80bf.js",
    "revision": "88af6325b6faf25a3ba3ce0e69140b0d"
  },
  {
    "url": "assets/js/49.81f5b5e7.js",
    "revision": "826e5abff33eda91591ca1fbb99b49b6"
  },
  {
    "url": "assets/js/5.6bc65a38.js",
    "revision": "22db727a1e51017cea5e48b1207a86db"
  },
  {
    "url": "assets/js/50.848b61b9.js",
    "revision": "4bb6c913e05f3f8b42bbe1e38bb25579"
  },
  {
    "url": "assets/js/51.d5bd86d0.js",
    "revision": "e89a2469755d238d1ebb48b27f58f016"
  },
  {
    "url": "assets/js/52.5c6eb047.js",
    "revision": "0c8afe79f5a9fa8dc35afd2c07f021ef"
  },
  {
    "url": "assets/js/53.d9c7f481.js",
    "revision": "48e55fd2809a82564e7c04c656e9cdc7"
  },
  {
    "url": "assets/js/54.bf3a2a0d.js",
    "revision": "192dfbae8f12a4ef6b016d3b03d0c1ea"
  },
  {
    "url": "assets/js/55.1e014bb1.js",
    "revision": "3be8fa6e55f1e47963e40a6b0eaf0477"
  },
  {
    "url": "assets/js/56.ff0cfe4b.js",
    "revision": "8ac68560a0d19fdb5d9795c646b52989"
  },
  {
    "url": "assets/js/57.2beed22b.js",
    "revision": "53a2ef8a458418cf44ff74fe5641038f"
  },
  {
    "url": "assets/js/58.3034e225.js",
    "revision": "12f988dd48851714b29fb67fde1b87b8"
  },
  {
    "url": "assets/js/59.e99553f8.js",
    "revision": "37a470a788c9c833e7eb055991ae89d8"
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
    "url": "assets/js/app.d17cd795.js",
    "revision": "537a194a902378744e36723ba3927732"
  },
  {
    "url": "assets/js/vendors~flowchart.81f8ad34.js",
    "revision": "e9bb50cc32a8c83f9dba6dd88a3ef117"
  },
  {
    "url": "categories/index.html",
    "revision": "7ddc28e769e4bfe6aaeb0a068495d6cf"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "412e51efb8b063b9dc6315d30559c13b"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "a081a008a7d2344edeabc22c7453d665"
  },
  {
    "url": "categories/后端/page/2/index.html",
    "revision": "07a0ba127b11a75e8482bd9063909664"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "4104257f900fca2b49b2cbe002540a08"
  },
  {
    "url": "categories/面试/index.html",
    "revision": "821f76a358355f77ff35152ea75d2928"
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
    "revision": "7903bc80c33817801d5b3ebefade14bc"
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
    "revision": "1e4813f6793c88e415018b87abec0195"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "55cee8f76d60af1ba464d16bf4e120ce"
  },
  {
    "url": "tags/ECharts/index.html",
    "revision": "4b04cd7494b335b13d3828970811f6bb"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c9411de2d6a7321538f0cce72f32e10a"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "eaf167b2f5eedb4ea6ae0ba5c791630e"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "722d8f70dae516b3a50f259cf85890ea"
  },
  {
    "url": "tags/json/index.html",
    "revision": "c3beaf7f012328ce4906a3bec53aacf7"
  },
  {
    "url": "tags/jvm/index.html",
    "revision": "c560d869cc4f725517b6cf3c7ef1caee"
  },
  {
    "url": "tags/jwt/index.html",
    "revision": "f08526d90ae04aa6f9119645706e249c"
  },
  {
    "url": "tags/pdf/index.html",
    "revision": "2ee577f42e527469663717915f619e06"
  },
  {
    "url": "tags/poi/index.html",
    "revision": "a7b39cb3f779caf311e8fcb8d6cf2820"
  },
  {
    "url": "tags/RabbitMQ/index.html",
    "revision": "cdbb8d8d8c33b1ccb85dcf074a520fe9"
  },
  {
    "url": "tags/Redis/index.html",
    "revision": "14d55cb1631a62816c74db34b3b1e824"
  },
  {
    "url": "tags/Swagger2/index.html",
    "revision": "27787f3faf88795908e77d2322b47dbc"
  },
  {
    "url": "tags/Via/index.html",
    "revision": "388c9b7b3d727fc8b2db4eb8a24bac23"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "1ee4395b2331bd8931b78d5f6e9ae49c"
  },
  {
    "url": "tags/vuepress/index.html",
    "revision": "ff5864b2a789d6981024fe072c02dcbc"
  },
  {
    "url": "tags/多线程/index.html",
    "revision": "2b0e77c05a4c15c9ac07bc265fd06d59"
  },
  {
    "url": "tags/开发规范/index.html",
    "revision": "255c3477b5d6512ae1cd42d84c80c6a1"
  },
  {
    "url": "tags/日志/index.html",
    "revision": "4269eabec1e5f4224333997d16070b3b"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "bb6025ed2ca1433803517f0dc054d7e0"
  },
  {
    "url": "tags/随笔/index.html",
    "revision": "10175630a6ff6f1001362966e5a33a74"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "f9259543510c7e317360dd40a714ba82"
  },
  {
    "url": "timeline/index.html",
    "revision": "181039b9c83c97c4f6cdc3a0b45f5329"
  },
  {
    "url": "views/essay/20190928.html",
    "revision": "0a5cf10492870d5f0e38e05f51e78905"
  },
  {
    "url": "views/essay/20191109.html",
    "revision": "987ce0b119d033c7fac890c0137cf78a"
  },
  {
    "url": "views/essay/20191116.html",
    "revision": "0f75e8d791d56e6a95c07ed8a1cc201c"
  },
  {
    "url": "views/essay/20191130.html",
    "revision": "d4efe9bc4fbee18433dcb3d767fcfc86"
  },
  {
    "url": "views/essay/20200227.html",
    "revision": "87ed8747562ce702c672e2971cec22e6"
  },
  {
    "url": "views/essay/20200301.html",
    "revision": "85960752bfb6035907690bb423b9f18d"
  },
  {
    "url": "views/front-end/EChartsStudy.html",
    "revision": "9535abae6d3e3039d6d8f649392986ff"
  },
  {
    "url": "views/front-end/js-json.html",
    "revision": "26ba0c61d64748b0345cfdcd9d871d29"
  },
  {
    "url": "views/front-end/reco-info.html",
    "revision": "b1c64e7fc3a4e23974a80279c0138429"
  },
  {
    "url": "views/front-end/viaStart.html",
    "revision": "9c5dc3a519cc83e3d0c4cc46926d7e3b"
  },
  {
    "url": "views/front-end/vue-demo.html",
    "revision": "0677b357aef6669463199a2898b423c4"
  },
  {
    "url": "views/front-end/vuepress-plugin-boxx.html",
    "revision": "5fc6d7d1fbf3bfb981321362c7d58ef2"
  },
  {
    "url": "views/index.html",
    "revision": "6274d3b1d4bc9753e58719e272b9ef08"
  },
  {
    "url": "views/java/annotationLog.html",
    "revision": "fc10e82ec07c8ee50416741be33bd626"
  },
  {
    "url": "views/java/ArrayList.html",
    "revision": "7ff618b8e2af9ec24ab3eb7c24dbba23"
  },
  {
    "url": "views/java/docker.html",
    "revision": "62c7add2672bb93a879ca549dbde99cc"
  },
  {
    "url": "views/java/HashMap.html",
    "revision": "03e6cc82e3d00e924bb3d79f897f7ff3"
  },
  {
    "url": "views/java/itext.html",
    "revision": "eb991473017fd00f02bb9ec47228c01c"
  },
  {
    "url": "views/java/jvm.html",
    "revision": "8c6377b97f232414a99e640feb43fbac"
  },
  {
    "url": "views/java/jwt.html",
    "revision": "101010c19e0be003a84d38c11da22786"
  },
  {
    "url": "views/java/poi.html",
    "revision": "5cef05c74d0d7bd906313e48442de23f"
  },
  {
    "url": "views/java/quartz.html",
    "revision": "e2eba720e20b76debf19165715c3e3bb"
  },
  {
    "url": "views/java/rabbitmq.html",
    "revision": "258b2cae6d6665f261be57ea2698e284"
  },
  {
    "url": "views/java/redis.html",
    "revision": "dfc2efb5e5ed0cf5ffb04c98ce5ca6e9"
  },
  {
    "url": "views/java/SSH.html",
    "revision": "6509b95b08522e20b1a071a46f253868"
  },
  {
    "url": "views/java/swagger2.html",
    "revision": "9c625d2b7ecb014cc7e817aa2b2e483f"
  },
  {
    "url": "views/java/thread.html",
    "revision": "076b53fa01fb89b24187a7a8c048ef3b"
  },
  {
    "url": "views/java/ThreadPool.html",
    "revision": "5f86bf114a4e944aab60f4716a420c6f"
  },
  {
    "url": "views/qaq/sum_db_001.html",
    "revision": "dc10ff5c239e1b843f49494cbd68b6a1"
  },
  {
    "url": "views/qaq/sum_fe_001.html",
    "revision": "8a711e928d3e795e61e366f10a89308c"
  },
  {
    "url": "views/qaq/sum_fe_002.html",
    "revision": "e3ed816c45c792ddc1e32617dc514b6f"
  },
  {
    "url": "views/qaq/sum_java_001.html",
    "revision": "2110dfb8ae0c6c5ca8cbb092ddf41d96"
  },
  {
    "url": "views/qaq/sum_java_002.html",
    "revision": "7e9d54bc7c2dd484c21d9b02e3213098"
  },
  {
    "url": "views/qaq/sum_ms_001.html",
    "revision": "aed3b0bc3f875196342728f819adab9c"
  },
  {
    "url": "views/qaq/sum_spring_001.html",
    "revision": "1aadd5690fd3e2b7342165d21b9b8a6d"
  },
  {
    "url": "views/qaq/sum_spring_002.html",
    "revision": "427e2a426e51591c7c84b5b0da7ed4cf"
  },
  {
    "url": "views/qaq/sum_spring_003.html",
    "revision": "188bbf62e1652832882f015556058bad"
  },
  {
    "url": "views/specification/ali.html",
    "revision": "b898eae4cc2a03d0dc94cfb11e35b190"
  },
  {
    "url": "views/specification/git.html",
    "revision": "effe7b260900e41eb78936a32fb0fc61"
  },
  {
    "url": "views/todo/JUC.html",
    "revision": "55cecd073e357fab0e5575bb6707f56d"
  },
  {
    "url": "views/todo/OnlineMonitoring.html",
    "revision": "5df6cc7683f144b458a9cfab2a3924b1"
  },
  {
    "url": "views/todo/redis002.html",
    "revision": "58486210b0b02686074cec5180816f85"
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
