/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8c4af44493a09a08d4eeb5db417b50f0"],["/about/index.html","b33207ca2b34222378202b12c4351e62"],["/archives/2023/09/index.html","af781879bcaf426fcd07bbd013e808e5"],["/archives/2023/11/index.html","dd6df907e94f8de11a697a8edb5f71a4"],["/archives/2023/12/index.html","acf41353c48010ba2177af2fa86eed86"],["/archives/2023/index.html","f13cc0f3260b95c15373d5a5227fef3c"],["/archives/2024/01/index.html","7c873f618f2ac548c8b0681870bd82b5"],["/archives/2024/02/index.html","b51bad389c616005e8f534b813bdd05f"],["/archives/2024/03/index.html","667d53d89736ff6672265f3f8613d542"],["/archives/2024/03/page/2/index.html","465fc8a12739333aa2bac337eb890add"],["/archives/2024/03/page/3/index.html","b16ceebf3089c1fd44ffbf247bda6e53"],["/archives/2024/04/index.html","79543483230c654138d28c350d521ad0"],["/archives/2024/04/page/2/index.html","caea9e8eb6436a9ec2208e0671db159b"],["/archives/2024/04/page/3/index.html","ba3c3cd28374ee91f47c8085ef829456"],["/archives/2024/05/index.html","216ab7fe372d5ef0d35ea34517c3e65d"],["/archives/2024/05/page/2/index.html","294ac6c6fe6c2212e598710296158174"],["/archives/2024/index.html","e33314226f1a275595c988bc6f8b9062"],["/archives/2024/page/2/index.html","9c5ab0523c501f0865ed7b9de077db3a"],["/archives/2024/page/3/index.html","e62c4068c2086dfffb0c5a1846f850cc"],["/archives/2024/page/4/index.html","1626e956b41ca094398e579501f85bf0"],["/archives/2024/page/5/index.html","8eecdee25fa90897e4bf297e74c23335"],["/archives/2024/page/6/index.html","52b46a3b12bbe37eccd9e5396c58c3a1"],["/archives/2024/page/7/index.html","7af071f4fe239aa34dae65a61a5873ee"],["/archives/2024/page/8/index.html","d34ef0ac9eb1775ab6ba633ca2975091"],["/archives/index.html","f2f5d588301d4c1a24c6c4c48460ad27"],["/archives/page/2/index.html","90861d7b3cc07473a8344b49798b9bfe"],["/archives/page/3/index.html","bda7411eb6cce50e288bc2ea75f4704c"],["/archives/page/4/index.html","493929e2df3e25e0d07f973fd03d32f2"],["/archives/page/5/index.html","4299b0dca27c7bc8ea824f37e3376c85"],["/archives/page/6/index.html","c7ddc5574a67e3751878ebc09196930a"],["/archives/page/7/index.html","df054d561028ec3fe8155b7b1d5c4b3a"],["/archives/page/8/index.html","3734c5c99fb964197c51782c6f44fd66"],["/archives/page/9/index.html","ef1f60a2342defe5b0cbea14525019a1"],["/askbox/index.html","2da1d2a9c5e74d4c79613a2eb92aaaec"],["/categories/index.html","a842dd245133655f105439bb40406b3f"],["/categories/作品/index.html","c872b19ae11ada0b35ccebb94093ed6b"],["/categories/作品/微信公眾號/index.html","10daeee8f05b5ce477e109bfef2bc7ea"],["/categories/作品/未分類/index.html","122f0f453fccc5c009c81b18229c0082"],["/categories/作品/篆刻/index.html","9b56e7c1ddcacd7896e4d4b1a435b2ef"],["/categories/日記/index.html","b8b83f4d80124bc2c6a9a131098f54df"],["/categories/日記/page/2/index.html","f6296dcf7931cb82ca4a534fce8ef411"],["/categories/日記/page/3/index.html","8ac23261b6ac42fd2ffd106499687715"],["/categories/日記/page/4/index.html","5e8463d2b5449505bd28d308cdb56b9e"],["/categories/日記/主机註記/index.html","4f5b833e2048e508696942af4dc31089"],["/categories/日記/主机註記/page/2/index.html","93f6590fc6fb012c463ca268070d2226"],["/categories/日記/日常/index.html","c424dd7da8685dca970180e22eb19988"],["/categories/日記/日常/page/2/index.html","235d8afb67c19c8d9934b5c656081c4b"],["/categories/日記/日常/page/3/index.html","22025a2aecbd1de5d414df8cf208c6dc"],["/categories/日記/高中回憶/index.html","da2c18c7f3d6e39420ab2a16b3cfe44c"],["/categories/筆記/index.html","ba8323625a9fd09e7ea7ae4bb0376d79"],["/categories/筆記/page/2/index.html","a8c158b386176e512c9e0ac8355a07c8"],["/categories/筆記/page/3/index.html","702f5f790a9cdf951fd726e0658808fe"],["/categories/筆記/page/4/index.html","e89de561d875fda1f5539e3b07b156ed"],["/categories/筆記/大學筆記/index.html","c2f6f308272039c1f759819d679dcd27"],["/categories/筆記/算法筆記/index.html","ce3ecdfd60f3d5ca1fab12b600b72d3c"],["/categories/筆記/算法筆記/page/2/index.html","ced1d3c98dc30db601e02ed228b08b54"],["/categories/筆記/算法習題集/index.html","4b27ec006dcfaac36297d5a061c2ba9b"],["/categories/筆記/練習賽/index.html","d1be0301c98e0d449e4209420bdc6398"],["/categories/筆記/題解/index.html","426383e04128fdb88b4ac953901d4a28"],["/categories/雜/index.html","4b3c14a74fd2ef0cd209e27c0161d396"],["/categories/雜/學習/index.html","c9e39ddb0f0f762a7a0bcf1cadc417ed"],["/categories/雜/閱讀記錄/index.html","1645fd888dd50d5d7f94a0ee114ac253"],["/css/flipcountdown.css","1dcc737069dea145733b1c0b14e0aaf5"],["/css/fonts.css","3a579e60f66705f8ba69641a13324e0b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","dbcc5bec5f0c0457baee9c9cff14e44c"],["/css/title.css","d4e8bc93015976d5c35a54796a99cd0d"],["/css/transpancy.css","7503ead58dbf7b5ef6531c2b7a8dc9ae"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/diary/diary-stz.html","6c47a0b57c3d96d6a0df1082cdd2fa59"],["/diary/hutaolinriji.html","db540804612d9c285a46ba963cc1ea6a"],["/diary/index.html","ac90c5860f1f0c72045eb9dc27511573"],["/fonts/CaviarDreams.ttf","3670aa493ee09e92c7b8e1e7c2f5b441"],["/fonts/CaviarDreams_Bold.ttf","65ab651cc7cebf7331a4228e830573d1"],["/fonts/CaviarDreams_BoldItalic.ttf","825e49e42ab834f96cf27fc09c82910d"],["/fonts/CaviarDreams_Italic.ttf","e67f5c38635c8f06c286b0c33da927bb"],["/img/11background.png","aa98c2d98ed001d5585a9de2ea65d974"],["/img/1background.png","335447304d69024398aba16092111fe3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.png","f9dc1cf13eae9645aff26ad1f7511456"],["/img/background.png","57893b0fe31d2e93d78f2969da1b627a"],["/img/city_futurism_scifi_131831_1440x900.jpg","1baacc6570dac8a91307a9d2b578f58b"],["/img/digit-lg.png","b78467f9c9c78b391ecba9d930c49063"],["/img/digit-md.png","09a7c0561597d5432b979abf90890770"],["/img/digit-sm.png","b1ca29605d57153a6a7885be60960b49"],["/img/digit-xs.png","feb9ad425e75bf602bbcca5923df2018"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon/bilibili.png","9d830bee9f6b0235c97d4842e68a75fe"],["/img/index.png","a1442c61e43967950788cae313514953"],["/img/ocean_surf_foam_117846_1024x768.jpg","8905b31a6dcc780592e4dca6f72e3c29"],["/img/posts/arts_cucradio/arts_cucradio_foot1.gif","7f2f52fdb7adec637a2e67a563543593"],["/img/posts/arts_cucradio/arts_cucradio_foot2.gif","c7348166893abf3eb46a0006f457efcb"],["/img/posts/arts_cucradio/arts_cucradio_head.gif","76712f72672859f02f894e120c4e23a6"],["/img/posts/posts_dawushiyan/IMG_20240410_175630.jpg","be163591c3f7fa039d9c788744d89b07"],["/img/posts/posts_dawushiyan/IMG_20240410_175638.jpg","4a3d99ae7e6f01ba85a203ab199a9a1f"],["/img/posts/posts_dawushiyan/IMG_20240410_181324.jpg","e84936f90e0b8630971a4e312527ed4a"],["/img/posts/posts_dawushiyan/IMG_20240410_194852.jpg","386571f7aea21bf25f3d06d43fec7e6b"],["/img/posts/posts_dawushiyan/IMG_20240410_194902.jpg","97690d5af81a0b55eff0e593d452cf33"],["/img/posts/posts_dawushiyan/IMG_20240410_194916.jpg","28c2cf67e209fc1cea1bee5f15be1372"],["/img/posts/posts_dawushiyan/IMG_20240410_194924.jpg","0293854f87d8d735297575927adb4f21"],["/img/posts/posts_dawushiyan/IMG_20240410_194932.jpg","69e30b4d96c72a3e5bb0751d19c0ad32"],["/img/posts/posts_dawushiyan/IMG_20240410_194939.jpg","c1403c0615e37c4396a80e5dbaa5cece"],["/img/posts/posts_dawushiyan/IMG_20240424_175902.jpg","dda28bc613abf437c4d13e8c4c7b559e"],["/img/posts/posts_dawushiyan/IMG_20240424_175909.jpg","265b689e250a2837c91da077a9c5edeb"],["/img/posts/posts_dawushiyan/IMG_20240424_183317.jpg","34788a74021f915a18e15aa531cb8739"],["/img/posts/posts_dawushiyan/IMG_20240424_193122.jpg","43587e85d6625ef279e95aed46cf55f4"],["/img/posts/posts_dawushiyan/IMG_20240424_193442.jpg","14c348f75d3c004c31e505903351fc11"],["/img/posts/posts_dawushiyan/IMG_20240424_193446.jpg","aa4a672b72418540bc8b5f6a23e22018"],["/img/posts/posts_dawushiyan/IMG_20240424_193453.jpg","44e00b09aed12aba55fa788f18cfcb47"],["/img/posts/posts_dawushiyan/IMG_20240424_200908.jpg","d8d14aa4d588516d5f3cce61c12ef956"],["/img/posts/posts_dawushiyan/IMG_20240424_200920_1.jpg","f2191f681e9332f984f4f65b029bccbf"],["/img/posts/posts_dawushiyan/IMG_20240424_200934.jpg","aa24624343c0e6c541fe85f73b8ccfcb"],["/img/posts/posts_dawushiyan/IMG_20240424_200944.jpg","c7c585d2d2eb6ebc9cfd004a1e61129d"],["/img/posts/posts_dawushiyan/IMG_20240424_200954.jpg","f281eb6dca65c6b312f188eae7a82545"],["/img/posts/posts_dawushiyan/IMG_20240424_201000.jpg","c13df0819fe8f88c587aa3878244a999"],["/img/posts/posts_dawushiyan/IMG_20240424_201223.jpg","9cc69cc024178c138a4ac1fa844f1362"],["/img/posts/posts_dawushiyan/IMG_20240424_201304.jpg","62e884932f28f91a944e1e67d591cfce"],["/img/posts/posts_dawushiyan/IMG_20240515_183159.jpg","7f0bf754ad63c33b4184d0b7074dadde"],["/img/posts/posts_dawushiyan/IMG_20240515_183907.jpg","7285f9550d561b8f610dd07c41ee1e52"],["/img/posts/posts_dawushiyan/IMG_20240515_200131.jpg","2fe28f09d2361c8589d5dda7c1452cc8"],["/img/posts/posts_dawushiyan/IMG_20240515_200139.jpg","fac500ecd87c62024904d24b49d187a7"],["/img/posts/posts_dawushiyan/IMG_20240515_200149.jpg","8024dfd75b9926771ae4c39e0eca723c"],["/img/posts/posts_dawushiyan/IMG_20240515_200155.jpg","dbbc11d2a2451fd923288bebc53622e2"],["/img/posts/posts_dawushiyan/IMG_20240515_200204.jpg","985048d314ad8a93dcc9a5b1b1a5ded3"],["/img/posts/posts_dawushiyan/IMG_20240515_200217.jpg","aac17b90d51b81da9bef13afc536b7b8"],["/img/posts/posts_diary/Screenshot_2024-03-27-03-43-29-776_com.android.deskclock.jpg","6ad12421165dff061b92295193bc599f"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-02-29-128_com.baidu.BaiduMap.jpg","4029f399b95ac20fff376b0e9202aca4"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-05-31-801_com.baidu.BaiduMap.jpg","084286707a4f59ec4d72b41bc2abc7c8"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-06-49-480_com.baidu.BaiduMap.jpg","e8a713e4b0c8c5296286c6a6c6557b3d"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-21-47-115_com.baidu.BaiduMap.jpg","564b7e52a9195fde96dab8ca055cdfaa"],["/img/posts/中國傳媒大學軌道交通線路圖_V1.4.png","400da869e6fadd56ea96e93422dca747"],["/index.html","4f8a94b222cdf7c7dbdca3f53f0548c5"],["/js/flipcountdown.js","8b8feed1e9e9dc954109170e501bd9e6"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/runtime.js","0be0cedd6857eb8963571f56f2e5b61c"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","ddc06f08ddd44b0d8acfac5684d0e39a"],["/notes/index.html","f9a539a027c473c58913b5af6fdc12d9"],["/notesacm/index.html","c103e23bb37a1248fbc9805e61fe8e6f"],["/page/10/index.html","a2cbc46fa6e2b870d4c509297a59bf56"],["/page/11/index.html","4ff8a177ff4b9564f3b6ce7448313667"],["/page/2/index.html","dae0aafe176a7d44d02a0c7bc076c01d"],["/page/3/index.html","514d5d4dab8123853076a978d4deb06d"],["/page/4/index.html","543005d099705e34b3f8f6961113d884"],["/page/5/index.html","35f50e83fc3174ef192be2b75880dce3"],["/page/6/index.html","70b6aa72be0b546555bf2aece98e2835"],["/page/7/index.html","7c988b7c8b53d4b9c492163ea3ce1d61"],["/page/8/index.html","e85459405687dbbd1c759d1ece2bf2e8"],["/page/9/index.html","b4a75a34c6d480fdd90b841c2fc8f4cb"],["/posts/0.html","b8d3ded39e0725f8df1b499b39586b9f"],["/posts/11ac4143.html","b3fffe8717bc1a653b1a3e4688f99454"],["/posts/1259c21a.html","ae76ac9dd37d733bf7d171fa07b8cf7b"],["/posts/142bd7b9.html","9b3dd3192112a82c6a24f00de2680420"],["/posts/18da9c5.html","b40791b15c26e14ed818cb2187160069"],["/posts/1a0287c3.html","1fc65a4d36deb925d0b83f71aab71927"],["/posts/1a45981d.html","49f3f0d97c492465a5c43f91d513f475"],["/posts/1cd03f4a.html","51dc4a11ac192ae860243c9fbe13bb2e"],["/posts/2bbe1b39.html","7fdbcc1ea29d8e1f759036c334cd1b7e"],["/posts/2dd304a1.html","efca4ba5a05a2c4d25abd235d504d82d"],["/posts/34a99b49.html","04d3b0ebb8fed4ca383cc742372a6639"],["/posts/3691ec22.html","cdd7ea6c964db10291f2ca408f7f7d3d"],["/posts/370419e5.html","8d9c433d63a0752601751408fed8bdcc"],["/posts/37c33e2e.html","cbd31620eaa217da8c3bf5b300905a26"],["/posts/3c481aa8.html","d6d244abf92fdbec7757bf986dbc31ef"],["/posts/3ced8075.html","ba7479043e06dba56e9df9da7ce1e2e8"],["/posts/4075f5da.html","7f93b74de542e99441713eef874e8007"],["/posts/43a1bd89.html","cb0a5f78b16d6f61f9b298e43bb60280"],["/posts/43afdee7.html","3273419cbaac50a46142457c0f7dedcb"],["/posts/44efb5f7.html","03ce642146c003514136283250454b21"],["/posts/4731e223.html","67e76ae380e71c31d05478a4f364c591"],["/posts/4a450160.html","39b35db4f59af5ca36dc4c0393b2735b"],["/posts/4ff9541b.html","743fbc8aeaf4c2f98865f15b6ea933e1"],["/posts/547e5912.html","6d6a9200cb63aab3e2d0c5e6bc14377f"],["/posts/55b27f38.html","359854946102671b66b0d654434678c4"],["/posts/57600f67.html","b652cf3c0da0e6d383b1995029f91f70"],["/posts/595bd7af.html","7ef9f95a0db8739f9aa02ab24d961fa2"],["/posts/5ba6d4a3.html","ffa330795f29bbf0776f9787a923102b"],["/posts/5ea0bd0.html","8122e54c5642ac7241b703e7893ad036"],["/posts/62cc1cb9.html","46ece613931d7647cfbc31b57e332e5c"],["/posts/63766c5.html","ca244bdad1b415f6f34e2038a077efe2"],["/posts/667c5340.html","b1e6a81f3089b81d810690f6824a3809"],["/posts/6752b01e.html","7ff65318ca0bd0bfa06fdf14eb3cfa70"],["/posts/6d6d0855.html","f11a8b0a3d52563420d6eeee8a24abc2"],["/posts/6df19715.html","16f18ae7a023a537333cf0dcaeaf2bad"],["/posts/73608288.html","66fd484fb5d84d22dc66a42145e032bc"],["/posts/78922b44.html","6d3a0344fe00e79ffe0098b39da98b70"],["/posts/78adb1fc.html","d7cd4b4ccb152e4a298e441e93439452"],["/posts/7b4dfaa5.html","630784f1d4295f56054d5f8b67c97c03"],["/posts/7c68afb2.html","5348edfb62f11f726b0a57091c0ccd28"],["/posts/82897ef2.html","147cc614e56e488f803dc1caa6a5ec1d"],["/posts/82d7d5d1.html","2c6c2efb3e07edc8f8ce4a6bf85b7b7e"],["/posts/8303a602.html","e2dc9185a19916a3b60e280fd62cd93d"],["/posts/842d546f.html","5d0eee7df6ba95b76414a761097ef035"],["/posts/852226fc.html","80ff9d8e050ff3eed3e0ae97d2efc7b0"],["/posts/85d274ad.html","bcff1e63db74f15c60b5840c69f422cd"],["/posts/8d5610d5.html","fd50542976f0a0d6e311469aa29f1a03"],["/posts/8de1f3f0.html","4c6fc15f7723f7af74d02e6c4b81c59f"],["/posts/8f4341de.html","4b685000eb761bece42446bfb4acd67d"],["/posts/8fc65cfa.html","94445d4df91a65a668471e011cd77402"],["/posts/90959ae6.html","4f86390e23e11e5262565659c67dbbc5"],["/posts/96aa9b52.html","2ac4b64da5ba74da834147722b2254b7"],["/posts/982204b1.html","1ccadb9da4cc380a9d92bc2401396a6e"],["/posts/a1f015a4.html","c3f290e6b342f7b284bad14bc8c7c349"],["/posts/a5317783.html","a2ea9d0c8ca05d7e42ec9637e733a1b7"],["/posts/a66dfabb.html","d617840eef7577851475369c0cb85014"],["/posts/a68b26a8.html","e3933690bee77b351b0499275c4a5732"],["/posts/a68b7a23.html","1754789cd1388c442a9ed8763fec5e2e"],["/posts/a900ed48.html","b10ead955efa93083ecfe691d701ce68"],["/posts/a9f0a4bd.html","5dc7a54234536b3dfb2c1bec04298b3b"],["/posts/b29f922a.html","a660458e02b894c2e53fefe9c2463260"],["/posts/b29f922a.html.html","68a03a4c88ab5c4fa3cdda808a5f19c9"],["/posts/b3997bd2.html","8c7aafc1eec9145bf0507ab9d31721bf"],["/posts/b3ad75d5.html","9f8c5f20bcd769177489d1683f50d9bd"],["/posts/b52d579f.html","0dfece3f7ec2f0d8b2a26b0321994f38"],["/posts/b76990aa.html","1ac5d2456d7750c38e0ef1bc75106ce9"],["/posts/ba3fd34e.html","64b9ca058b175611659845535b4e271e"],["/posts/bbb9f31e.html","220354624ec282a4bb10cb6994d70996"],["/posts/bdbfcb27.html","b546caf9e9520043a49c9d05915c5f3e"],["/posts/bed9a53a.html","d4039d77c28a6bd4f88c4343884383d1"],["/posts/c096c313.html","9424424a9cb3907abe955c11645b118b"],["/posts/c0b9a1bb.html","fab94ecf9a8d27369c23484e61742117"],["/posts/c2e6fb0c.html","d703d9693bca79899c1ace2e518e27b6"],["/posts/c6a51061.html","ec9c5803bb3181fc84e63c75633d0faf"],["/posts/c96d26b5.html","4276f968eb75d38b8e70f8615b978b53"],["/posts/ce9d4cce.html","9fe61e126cd28bfcb1884b581a71d2b9"],["/posts/cfd1c518.html","7e32a6fd0c6f2cb4a79d6cfead9bc88f"],["/posts/da5af675.html","35c3283e8c83a9799c9a76c739b139a8"],["/posts/de4308fb.html","951e7f3c252dfa79fb1e3fc886b3ebef"],["/posts/dfe8c51f.html","9146d417d88e98bdee55be4038cb8a84"],["/posts/dfec5b51.html","9d212f550759df05942dd08f3e9db793"],["/posts/e63e1643.html","f4f115794452bc55b4b5eb38be833c05"],["/posts/e7f5867a.html","055ebc9b7456e439f86337a0003c9cf9"],["/posts/e846e79f.html","e5b7265b46c4f904e74d442258617f27"],["/posts/e8dfbf5.html","f71a289b8486dd4175b4d8e1e36f71fc"],["/posts/ea18c108.html","fcc7153def3888c5f5019844d32d9a0d"],["/posts/f38132e4.html","60d6fa383ce5109f143b00f83aa49e99"],["/posts/f3fd657e.html","9d5f9162ff04956bd3e5137ba0b4bdd3"],["/posts/f40d0f05.html","3fefdfae323b086739b5fd2f04a0833a"],["/posts/f7a3bf5e.html","373b6520cc99863bab4b7cecd41e3bbe"],["/posts/fae23d85.html","61b2c3a84435f26933413d5123f0bfa8"],["/posts/fc81fbfd.html","2103a292b04b3184e0b2e1c492802c14"],["/sw-register.js","07430609d27e6d22006f84ac5b282c19"],["/tags/ACM/index.html","33146b9727c143b84e6c9d453bab6d21"],["/tags/ACM/page/2/index.html","d6e763120da59b090dbb76003c9870e2"],["/tags/ACM/page/3/index.html","15fd85fbedd86e4cfd042d3f88926b25"],["/tags/Bilibili/index.html","439017e84c960f289b6f4d755c4c6759"],["/tags/Blog/index.html","bb7f4d93e629aad00f3a9b980dd3a453"],["/tags/CUC/index.html","3782de731d15e887b4555fbc90e5e593"],["/tags/CUC/page/2/index.html","935a8c4a0c9ca0d98291a6eda13d4156"],["/tags/CUCRadio/index.html","1903912a505bde1a77d021f76b359c91"],["/tags/Canva/index.html","5f5c2bdbda3aa906126430b9b3ad2b1c"],["/tags/DP/index.html","2f7e3123c209ae7605c288ada5aa7a40"],["/tags/English/index.html","abe5c9a539c42a52dd38c4bbfe73a86b"],["/tags/Illustrator/index.html","12e3ccfaff67ede5af378cb0351cf576"],["/tags/Photoshop/index.html","08ac1dcee7ee215385170cd2a8df33d4"],["/tags/Plog/index.html","21236dd7b8999c8945187086c02b48cd"],["/tags/Procreate/index.html","d47be1d7270222553f8ce60de578b420"],["/tags/Python/index.html","f8ec181683413315c79fdc6ecc98f57d"],["/tags/cpp/index.html","a716d83329c4625e77c9f0a871f4bd41"],["/tags/index.html","4157ea34f7ada9fb609d57d725becdc2"],["/tags/中外历史纲要/index.html","e0c52aad652c9f030c78bbf8db728c10"],["/tags/主机/index.html","88cf15e4c20f71eff21303cf14d012f4"],["/tags/主机/page/2/index.html","90f178f7a4a0da3b3a2836223029ccd4"],["/tags/圖論/index.html","a50bb6d145ea7238a36b47915078b5a6"],["/tags/字符串/index.html","ae9e429ccd828429686a07478b839b0b"],["/tags/小明/index.html","d65fede1ad06eb470e81db73311707c4"],["/tags/小明/page/2/index.html","bcf6aec17fa56049766e37b9ffd13245"],["/tags/小明/page/3/index.html","4a2752a1d9b6523c5e841ef23f092e98"],["/tags/小明/page/4/index.html","30f1c352ca75a40073c35bcde2b821d8"],["/tags/微信公眾號/index.html","a40bb024ef41e044d2c9ea79e9e6ecec"],["/tags/攝影/index.html","b2c247fbcf57d12ec353921afb281dce"],["/tags/數學/index.html","93c7f1eec60ebcc86d96593e4198eb02"],["/tags/數據結構/index.html","6099753f70582ea084ddc2f5db263177"],["/tags/筆記/index.html","1111e28b9484d2674d887d56d5f7eaba"],["/tags/筆記/page/2/index.html","e739c50b1230d6f926ea6e0b003d4f62"],["/tags/筆記/page/3/index.html","eac1d0793a986b92f7973a2631b0c1e8"],["/tags/筆記/page/4/index.html","ea57e31acbd3a5bb75b79950fc255743"],["/tags/算法/index.html","6fcd24cdeac992f99ee8d9086ae5de44"],["/tags/算法/page/2/index.html","f0ec38dce4ce4ac1393faed96c199b4d"],["/tags/線性代數/index.html","ca605a4d69adc8232736cd71c2b1635a"],["/tags/練習賽/index.html","24c6e2bdd8aa42578d38faef247b5c53"],["/tags/通信2班/index.html","2ab1d9a4662126fa86b6163331c334e3"],["/tags/週日和大雷一起挖石頭/index.html","fe132ca524c79111701f10bbc04601f9"],["/tags/閱讀記錄/index.html","0c7b05daedf9c8b8729be90e62eb7083"],["/tags/隨筆/index.html","094767e9fa5e9ee96a11980b2e719e3b"],["/tags/題解/index.html","794954beb752e818cd2d53aa71912d6d"],["/tags/題解/page/2/index.html","01bc46cbb704977e73b3f6683478c22c"],["/tags/高等數學/index.html","8761ecc3b122859682d2f1a37eb68eef"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
