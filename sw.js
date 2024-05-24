/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","28e5ae150f9953baa229aee5c67e8a3a"],["/about/index.html","e9991f0b291654874fadfc45090fb770"],["/archives/2023/09/index.html","a04ba2ae4603a32d956dcc7b78271b99"],["/archives/2023/11/index.html","ca50bba6aa9192c462dc0168441ce1ac"],["/archives/2023/12/index.html","397b925ad746bd232a69f638a70b5adb"],["/archives/2023/index.html","b94c6b1983fa2879a14c0295de8459a5"],["/archives/2024/01/index.html","0899377f417d2c83a8c3629af2a46232"],["/archives/2024/02/index.html","bae4ace861cf7298e20a0bbe09985d7d"],["/archives/2024/03/index.html","a155d23e02261a55fdb9a2c053fe1f2e"],["/archives/2024/03/page/2/index.html","c0fadd269da32fdaf458ff5634a7e03f"],["/archives/2024/03/page/3/index.html","7aad2034bb63c9895f71ac5c6108e2fe"],["/archives/2024/04/index.html","0ad7173f2dd1bdf73c2f8cbc095eab8c"],["/archives/2024/04/page/2/index.html","86423b5a18e9d8a8302e1608f76d0024"],["/archives/2024/04/page/3/index.html","c6b953d58921a5b8461ef7c084e3fcca"],["/archives/2024/05/index.html","3dcb44287370aa1189e4df94fbf9c37e"],["/archives/2024/05/page/2/index.html","c0ff82cfe2fbcd7eaf22e98f7b49f0d4"],["/archives/2024/index.html","c4557de8135dc0e7192e9d8e53278d62"],["/archives/2024/page/2/index.html","42dc601f78c9d99e26b7740d183399f4"],["/archives/2024/page/3/index.html","f753e52f3343fa975e64ec1ad4ae9c3c"],["/archives/2024/page/4/index.html","f521de9b4f72746acf3a4ec895e78988"],["/archives/2024/page/5/index.html","14bc7fb7a7ba7e485381d1237e14ed46"],["/archives/2024/page/6/index.html","fa14d9182eeb4b36449375be66d7966b"],["/archives/2024/page/7/index.html","d7785c1aaf4aa9d73323434fa0efefce"],["/archives/2024/page/8/index.html","bde651c8bdd13434ad28934a1a6ebaac"],["/archives/index.html","d57a75f857e58855371c06bcc58a8712"],["/archives/page/2/index.html","5f2938da1d58bc9c95fa3af788177f6b"],["/archives/page/3/index.html","a7d40939b857e640eb7aa544d798cb28"],["/archives/page/4/index.html","a79887d8bed4a63aa26259b24724da05"],["/archives/page/5/index.html","cad9b29c771835945483e07aaa8a1efd"],["/archives/page/6/index.html","1b7b57e3d5b14219a1356b4cf44caba1"],["/archives/page/7/index.html","6ff3233c76239ff522a1f12b89c84736"],["/archives/page/8/index.html","64115e1063f5675db359395f466ca69f"],["/archives/page/9/index.html","cb01f4fb5e563f1ffc9636b63df1bd8d"],["/askbox/index.html","083ad86205c01d42bd744773ed7e326c"],["/categories/index.html","e4966fa76d0fa9d26c80e8b5d583f8dd"],["/categories/作品/index.html","013e247be810f7f00aa63f93deba4f97"],["/categories/作品/微信公眾號/index.html","30f17a928c50b824e6e28da672c39d40"],["/categories/作品/未分類/index.html","5e7b60f650e1d6ca511a891366267d33"],["/categories/作品/篆刻/index.html","3a291dd22724ba7c962ea01fa46cbba8"],["/categories/日記/index.html","c385e8b35008e5be714faa3159b59614"],["/categories/日記/page/2/index.html","5e5e505d1ab9f6cb8a1349c2bd0444af"],["/categories/日記/page/3/index.html","9223aa3c3961ed7759a7d6e9dc5985c2"],["/categories/日記/page/4/index.html","dd170bb5dbddd92da7e174eddf1a8830"],["/categories/日記/主机註記/index.html","64a42438b2d0cf4538cb6ac1fd6b3af2"],["/categories/日記/主机註記/page/2/index.html","cd19566991f1592eed72584a035604f2"],["/categories/日記/日常/index.html","5ded36701bd37903f92f6e7f7a3b7d45"],["/categories/日記/日常/page/2/index.html","d15a2b5fb65dacdfb2467e6246365ce3"],["/categories/日記/日常/page/3/index.html","b71ecf0f00ea0aa2950178bbccfbb00a"],["/categories/日記/高中回憶/index.html","2e164ae1f7505933739043167fc912bd"],["/categories/筆記/index.html","ea4473ee62016f58fbf2610749dd39e3"],["/categories/筆記/page/2/index.html","0d23a8044a7812051a649fdd5cf4ea04"],["/categories/筆記/page/3/index.html","5c0bdfed5a8691c83dc2a2514e6b35a0"],["/categories/筆記/page/4/index.html","e8384543df0e610cd20df24fc0959fbe"],["/categories/筆記/大學筆記/index.html","7e9c669afd1569a9e4f08ab53e88d04a"],["/categories/筆記/算法筆記/index.html","c77a99df6a908a92e2409b17d514e509"],["/categories/筆記/算法筆記/page/2/index.html","05f1bb2c0f1e9c825a1cf535dd5fe471"],["/categories/筆記/算法習題集/index.html","ada4f5eab0b51c5be397aa8d98149092"],["/categories/筆記/練習賽/index.html","80aef64b4769b0ee8ee14fafc974cfff"],["/categories/筆記/題解/index.html","2eafd995f373a194c9ff1bf3930dae3a"],["/categories/雜/index.html","5301088e79567bfe145d1fe1a1d0b536"],["/categories/雜/學習/index.html","3ac081e8db0644a91f0e48944c2004b3"],["/categories/雜/閱讀記錄/index.html","3409a59733f949448c9028740bc7448c"],["/css/flipcountdown.css","1dcc737069dea145733b1c0b14e0aaf5"],["/css/fonts.css","3a579e60f66705f8ba69641a13324e0b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","dbcc5bec5f0c0457baee9c9cff14e44c"],["/css/title.css","d4e8bc93015976d5c35a54796a99cd0d"],["/css/transpancy.css","7503ead58dbf7b5ef6531c2b7a8dc9ae"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/diary/diary-stz.html","dedcf1bbcf7d8501cf2c9eb05dd60827"],["/diary/hutaolinriji.html","29e2045b75c9da0b5b24a0a0ba77109c"],["/diary/index.html","ab6560dd055a0d1126b28a894c7097c5"],["/fonts/CaviarDreams.ttf","3670aa493ee09e92c7b8e1e7c2f5b441"],["/fonts/CaviarDreams_Bold.ttf","65ab651cc7cebf7331a4228e830573d1"],["/fonts/CaviarDreams_BoldItalic.ttf","825e49e42ab834f96cf27fc09c82910d"],["/fonts/CaviarDreams_Italic.ttf","e67f5c38635c8f06c286b0c33da927bb"],["/img/11background.png","aa98c2d98ed001d5585a9de2ea65d974"],["/img/1background.png","335447304d69024398aba16092111fe3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.png","f9dc1cf13eae9645aff26ad1f7511456"],["/img/background.png","57893b0fe31d2e93d78f2969da1b627a"],["/img/city_futurism_scifi_131831_1440x900.jpg","1baacc6570dac8a91307a9d2b578f58b"],["/img/digit-lg.png","b78467f9c9c78b391ecba9d930c49063"],["/img/digit-md.png","09a7c0561597d5432b979abf90890770"],["/img/digit-sm.png","b1ca29605d57153a6a7885be60960b49"],["/img/digit-xs.png","feb9ad425e75bf602bbcca5923df2018"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon/bilibili.png","9d830bee9f6b0235c97d4842e68a75fe"],["/img/index.png","a1442c61e43967950788cae313514953"],["/img/ocean_surf_foam_117846_1024x768.jpg","8905b31a6dcc780592e4dca6f72e3c29"],["/img/posts/arts_cucradio/arts_cucradio_foot1.gif","7f2f52fdb7adec637a2e67a563543593"],["/img/posts/arts_cucradio/arts_cucradio_foot2.gif","c7348166893abf3eb46a0006f457efcb"],["/img/posts/arts_cucradio/arts_cucradio_head.gif","76712f72672859f02f894e120c4e23a6"],["/img/posts/posts_dawushiyan/IMG_20240410_175630.jpg","be163591c3f7fa039d9c788744d89b07"],["/img/posts/posts_dawushiyan/IMG_20240410_175638.jpg","4a3d99ae7e6f01ba85a203ab199a9a1f"],["/img/posts/posts_dawushiyan/IMG_20240410_181324.jpg","e84936f90e0b8630971a4e312527ed4a"],["/img/posts/posts_dawushiyan/IMG_20240410_194852.jpg","386571f7aea21bf25f3d06d43fec7e6b"],["/img/posts/posts_dawushiyan/IMG_20240410_194902.jpg","97690d5af81a0b55eff0e593d452cf33"],["/img/posts/posts_dawushiyan/IMG_20240410_194916.jpg","28c2cf67e209fc1cea1bee5f15be1372"],["/img/posts/posts_dawushiyan/IMG_20240410_194924.jpg","0293854f87d8d735297575927adb4f21"],["/img/posts/posts_dawushiyan/IMG_20240410_194932.jpg","69e30b4d96c72a3e5bb0751d19c0ad32"],["/img/posts/posts_dawushiyan/IMG_20240410_194939.jpg","c1403c0615e37c4396a80e5dbaa5cece"],["/img/posts/posts_dawushiyan/IMG_20240424_175902.jpg","dda28bc613abf437c4d13e8c4c7b559e"],["/img/posts/posts_dawushiyan/IMG_20240424_175909.jpg","265b689e250a2837c91da077a9c5edeb"],["/img/posts/posts_dawushiyan/IMG_20240424_183317.jpg","34788a74021f915a18e15aa531cb8739"],["/img/posts/posts_dawushiyan/IMG_20240424_193122.jpg","43587e85d6625ef279e95aed46cf55f4"],["/img/posts/posts_dawushiyan/IMG_20240424_193442.jpg","14c348f75d3c004c31e505903351fc11"],["/img/posts/posts_dawushiyan/IMG_20240424_193446.jpg","aa4a672b72418540bc8b5f6a23e22018"],["/img/posts/posts_dawushiyan/IMG_20240424_193453.jpg","44e00b09aed12aba55fa788f18cfcb47"],["/img/posts/posts_dawushiyan/IMG_20240424_200908.jpg","d8d14aa4d588516d5f3cce61c12ef956"],["/img/posts/posts_dawushiyan/IMG_20240424_200920_1.jpg","f2191f681e9332f984f4f65b029bccbf"],["/img/posts/posts_dawushiyan/IMG_20240424_200934.jpg","aa24624343c0e6c541fe85f73b8ccfcb"],["/img/posts/posts_dawushiyan/IMG_20240424_200944.jpg","c7c585d2d2eb6ebc9cfd004a1e61129d"],["/img/posts/posts_dawushiyan/IMG_20240424_200954.jpg","f281eb6dca65c6b312f188eae7a82545"],["/img/posts/posts_dawushiyan/IMG_20240424_201000.jpg","c13df0819fe8f88c587aa3878244a999"],["/img/posts/posts_dawushiyan/IMG_20240424_201223.jpg","9cc69cc024178c138a4ac1fa844f1362"],["/img/posts/posts_dawushiyan/IMG_20240424_201304.jpg","62e884932f28f91a944e1e67d591cfce"],["/img/posts/posts_dawushiyan/IMG_20240515_183159.jpg","7f0bf754ad63c33b4184d0b7074dadde"],["/img/posts/posts_dawushiyan/IMG_20240515_183907.jpg","7285f9550d561b8f610dd07c41ee1e52"],["/img/posts/posts_dawushiyan/IMG_20240515_200131.jpg","2fe28f09d2361c8589d5dda7c1452cc8"],["/img/posts/posts_dawushiyan/IMG_20240515_200139.jpg","fac500ecd87c62024904d24b49d187a7"],["/img/posts/posts_dawushiyan/IMG_20240515_200149.jpg","8024dfd75b9926771ae4c39e0eca723c"],["/img/posts/posts_dawushiyan/IMG_20240515_200155.jpg","dbbc11d2a2451fd923288bebc53622e2"],["/img/posts/posts_dawushiyan/IMG_20240515_200204.jpg","985048d314ad8a93dcc9a5b1b1a5ded3"],["/img/posts/posts_dawushiyan/IMG_20240515_200217.jpg","aac17b90d51b81da9bef13afc536b7b8"],["/img/posts/posts_diary/Screenshot_2024-03-27-03-43-29-776_com.android.deskclock.jpg","6ad12421165dff061b92295193bc599f"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-02-29-128_com.baidu.BaiduMap.jpg","4029f399b95ac20fff376b0e9202aca4"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-05-31-801_com.baidu.BaiduMap.jpg","084286707a4f59ec4d72b41bc2abc7c8"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-06-49-480_com.baidu.BaiduMap.jpg","e8a713e4b0c8c5296286c6a6c6557b3d"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-21-47-115_com.baidu.BaiduMap.jpg","564b7e52a9195fde96dab8ca055cdfaa"],["/img/posts/中國傳媒大學軌道交通線路圖_V1.4.png","400da869e6fadd56ea96e93422dca747"],["/index.html","e654f149a2af586fdc508bc9f6974433"],["/js/flipcountdown.js","8b8feed1e9e9dc954109170e501bd9e6"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/runtime.js","0be0cedd6857eb8963571f56f2e5b61c"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","60b695c6a7a78e8a7a7178660c1c8bbe"],["/notes/index.html","b9abbd2800d2d5523d7e92d281552b7b"],["/notesacm/index.html","365d64c9fd44ef3d5fc258e52e5087d5"],["/page/10/index.html","696664a2d02f7fbafe52377e453beaf9"],["/page/11/index.html","7450ea00a556a8da39049effec512155"],["/page/2/index.html","dc84e1f18784076fb809e58f45fa06cd"],["/page/3/index.html","73b8633d0b004edd5eaed1323245e9e6"],["/page/4/index.html","80604b4d3ffd5c313d0cf434274b96d5"],["/page/5/index.html","a501cdb4c4d35f7dbf065c314678bd81"],["/page/6/index.html","2aa87414f5e490b5fcbd47804ce8e4e1"],["/page/7/index.html","b6929643a3f9cb09620316c0a3e96479"],["/page/8/index.html","ea871e851f9493a95723d131f4db6e7b"],["/page/9/index.html","dfdfb47ea0ebc9b1ec45af81a4e95410"],["/posts/0.html","fb6738486de8eff069e50d2dd21ee34b"],["/posts/11ac4143.html","5ac8cd7561a8df7419dcc7e76445e21d"],["/posts/1259c21a.html","b198ab1fd83154b675a55e28f16204e7"],["/posts/142bd7b9.html","099fc9877d15dee27928e1ff797f16fa"],["/posts/18da9c5.html","44c83dcc70417cb7ea76cb4bfc9ab60b"],["/posts/1a0287c3.html","8a0b4007585a73590b449deb34b91f58"],["/posts/1a45981d.html","72fed2ea37ed419d6db2545d37d5aa09"],["/posts/1cd03f4a.html","0c86ca235dcee8a6a7c1ee8bb62444f6"],["/posts/2bbe1b39.html","da1812e9da6a8f374ce7867e78d11aa2"],["/posts/2dd304a1.html","3a1a86d610ec512fa4cc689631f62f61"],["/posts/34a99b49.html","4c901f7cc1e2bc65cdeca44e9de77c6f"],["/posts/3691ec22.html","3b78c41d229d068363b6a2f0014d8a7e"],["/posts/370419e5.html","9dad78337473a20b5cbf1f26baa4b9a9"],["/posts/37c33e2e.html","cdac6e33891374d113a8e2d62dedbe79"],["/posts/3c481aa8.html","b25a50a8e91776de1ce85422d4c8268a"],["/posts/3ced8075.html","01eb83c5617c5863db8fecd383267574"],["/posts/4075f5da.html","4c297328e99d2bdd8171f21145ef4c0f"],["/posts/43a1bd89.html","93aac67487c7dcea05bbd7bc576b2852"],["/posts/43afdee7.html","e6b603d27e376320db2babdfeb5d5a8e"],["/posts/44efb5f7.html","5155571415c6128dd819de3ead3133bd"],["/posts/4731e223.html","c32874a00a66ec29133b43ef5adaec39"],["/posts/4a450160.html","6441f81c82250cb0c5ff551c3e8065c8"],["/posts/4ff9541b.html","dc5405c06a69c405338a89deedb842e1"],["/posts/547e5912.html","8648da633bfaaaeaea1c90e6e7d78183"],["/posts/55b27f38.html","769f08962ab01f55a1e8f935aaa2e439"],["/posts/57600f67.html","ecd3e06f02cf4bacbe4ce296b9266fe9"],["/posts/595bd7af.html","e1e9c17462f47df636d08040f2fe00e8"],["/posts/5ba6d4a3.html","0245ee89c07bed437fda26709dd516e9"],["/posts/5ea0bd0.html","4d6dc692b1204bda195b61d61145d9b0"],["/posts/62cc1cb9.html","81ccb4b7e73bbf7c86a1d65644a03e8a"],["/posts/63766c5.html","87d974f12f8ce283c1b333ab00c29aec"],["/posts/667c5340.html","2d9fd973ed7334b818faf17f613a20f2"],["/posts/6752b01e.html","5801664191bde8c9a7509e0d3c54e4e6"],["/posts/6d6d0855.html","86b53c41fb56ac378421d19c9874342e"],["/posts/6df19715.html","548ff4c0bdec18b35634ecb6ede253d2"],["/posts/73608288.html","42cb69b3d454521c1a882c78cf6567bc"],["/posts/78922b44.html","0bec45179f4fbad713666626e8b742ac"],["/posts/78adb1fc.html","a36b15971b71e3093a037b8f2e6d463f"],["/posts/7b4dfaa5.html","868579d28794cdf14377d98be758e8c9"],["/posts/7c68afb2.html","599710a91f0fa5e7782b67565d5ecf66"],["/posts/82897ef2.html","0fd5f89103aae4290824214236d60bd0"],["/posts/82d7d5d1.html","328e159db5e6351bab772efa8ad7ded0"],["/posts/8303a602.html","2d6db9f64b42737137b0c68b63e6ed35"],["/posts/842d546f.html","4777cbd4a8635517e8babf659d7d242f"],["/posts/852226fc.html","60c3345de237ba9920f01fe85d59156f"],["/posts/85d274ad.html","33240b14d68f2ae3a2979e5ebeb58911"],["/posts/8d5610d5.html","6ce405ca32577e702d8825c54e5429cd"],["/posts/8de1f3f0.html","bcb362a0f6aa5feb647eb203cda7bfd2"],["/posts/8f4341de.html","cfdfb6017b9fae288ca513d2bfc31464"],["/posts/8fc65cfa.html","e223d6b9a3dc470649849e58d4abfd31"],["/posts/90959ae6.html","685c2b3013efed01c33ec578720f39fa"],["/posts/96aa9b52.html","4c967e7224dbfb6b7113e9a22c91fa79"],["/posts/982204b1.html","5510a86511fc75aecb071ae1691bb38d"],["/posts/a1f015a4.html","090e9d094e766dfc42b325ba5f6a5e75"],["/posts/a5317783.html","3982156244c52a42613ab0c80831e034"],["/posts/a66dfabb.html","d58c1cac7e91a69b748ee44f0a86c849"],["/posts/a68b26a8.html","e5e6f3f9c106a4207feeaca037060f7c"],["/posts/a68b7a23.html","2738541f7a04f00decb18d5e54cda535"],["/posts/a900ed48.html","b5dd32a0a8c3e886f73bdcd9d9f074e1"],["/posts/a9f0a4bd.html","ba337faf53b3f835bbe99933b10e723a"],["/posts/b29f922a.html","ba335c20f7521c7e2b915050c4831303"],["/posts/b29f922a.html.html","7af88804ca87a99a15998b84008b7c2a"],["/posts/b3997bd2.html","635a3a7f6359d3e28f47d68fa65be502"],["/posts/b3ad75d5.html","45127d3de8968f2ea8355a4f52eab5f7"],["/posts/b52d579f.html","0cedcedd5e81a55c37c0269bc4d075f1"],["/posts/b76990aa.html","ad9f4e10139c72c9a7e79cdf27c4e2fe"],["/posts/ba3fd34e.html","c1b3da878c6908e8fe54e4ca4dfc7eef"],["/posts/bbb9f31e.html","a8d36bc847c136eb8bcc8d4a440e2a2b"],["/posts/bdbfcb27.html","1bfc54e4dc635e87050e4d205add7d9d"],["/posts/bed9a53a.html","12b6f0866d769ba939b3c35950d21eae"],["/posts/c096c313.html","6dae76628413c07c59ea46788a71d632"],["/posts/c0b9a1bb.html","97b9074a238314d527524050d6800280"],["/posts/c2e6fb0c.html","e1ec355daea7b585323c8e1072dc6c10"],["/posts/c6a51061.html","99d59ea643c886b483599b63541d2bd1"],["/posts/c96d26b5.html","94898102b0a5237b9859cbf951bbec48"],["/posts/ce9d4cce.html","6edab7020756b3bdeb08fc238c56d856"],["/posts/cfd1c518.html","44b15087363e889158d0c2d8627a71df"],["/posts/da5af675.html","0d4472d324c8ec8dc69707819b0252ad"],["/posts/de4308fb.html","27ecf4be779e660d0b80f202065fef98"],["/posts/dfe8c51f.html","96ec97d9df4c34ff47d7d25dca754920"],["/posts/dfec5b51.html","4fa9020ac09efff94276725b8a48fcff"],["/posts/e63e1643.html","76c95f0f4204c28fb18c2d9c15eb838d"],["/posts/e7f5867a.html","2b70d5eee4d67800fc2c0e2dec8fc78b"],["/posts/e846e79f.html","f30dc4878061555b9cf812b6d39042d2"],["/posts/e8dfbf5.html","a7127e90c062fbfe77f3458a0253be01"],["/posts/ea18c108.html","4f5702d845f38b9982636080ceb857a7"],["/posts/f38132e4.html","ff6004309315ad00dd23cafa167bf8c7"],["/posts/f3fd657e.html","898e544b45620751ce4cb863865e3693"],["/posts/f40d0f05.html","6492ed3cd2ef78dae4df0e21a0d07bca"],["/posts/f7a3bf5e.html","992e0de4f26bf0dfae35d72eee6d75ad"],["/posts/fae23d85.html","9cda99797f2d7ae37c5b8489e7df870f"],["/posts/fc81fbfd.html","019be11a13a3959e44ca5275d927c6a3"],["/sw-register.js","deeab70226cff5c3ddbe805544e97ef3"],["/tags/ACM/index.html","fc20429d78efef571ca8282093d74d4e"],["/tags/ACM/page/2/index.html","e6ecd024a7ec28e3421f5898eb10b524"],["/tags/ACM/page/3/index.html","d74349a3e10bda9af660174515088eeb"],["/tags/Bilibili/index.html","9373afcaa51fc8e5c806615eba6a0e21"],["/tags/Blog/index.html","07971c992e4ef98d6343b953653c9fd0"],["/tags/CUC/index.html","0bb73f63ea3d1cd2c697c78308da20e9"],["/tags/CUC/page/2/index.html","71b3d25904c29696b05a51ce07f9cad9"],["/tags/CUCRadio/index.html","8f9cf044b48ecdd2a9ca7c4290ea997f"],["/tags/Canva/index.html","9f7b0e2b0f29315ed6599660ad66c7e6"],["/tags/DP/index.html","a1e531e45afd48bb29b6a6cb63932a50"],["/tags/English/index.html","1758239a4e442db255dc706ca150e7ba"],["/tags/Illustrator/index.html","c102c1acf84af3b3540bcb914437779c"],["/tags/Photoshop/index.html","440e9dfd17f00886713ac78e2669f190"],["/tags/Plog/index.html","ff178c6c5f89aa9989fb37a573b093cb"],["/tags/Procreate/index.html","7f82ec0aa16fcb526e683dc9e2d0b239"],["/tags/Python/index.html","770a540397f190c79889c547c6c9c291"],["/tags/cpp/index.html","6ad2ec1ffbd81ceb090b94ede8840509"],["/tags/index.html","367903d6b9766fa305009dd6f3ee8c9d"],["/tags/中外历史纲要/index.html","5e8464f3aa03c5d6e127c37d16be2e28"],["/tags/主机/index.html","d03a645ec488dcb14655f9297883f5d7"],["/tags/主机/page/2/index.html","c7d8048b520812efd9febe436f9e9a18"],["/tags/圖論/index.html","aa3416aa6815e48a441da413de40f868"],["/tags/字符串/index.html","54b35ed5f61dcd1597065c3c1997b252"],["/tags/小明/index.html","4fdf56cac461afb25ecd4eb84fa0f5f1"],["/tags/小明/page/2/index.html","10cfd387fde35c54089cda2dab723e1a"],["/tags/小明/page/3/index.html","d04e301f65b0cfe43123bef88406b43a"],["/tags/小明/page/4/index.html","7b5835c5a1e9625ceec000b7f67d045c"],["/tags/微信公眾號/index.html","2ab728b08ff04d5be0c4efafb5e860f4"],["/tags/攝影/index.html","f7bb794013a0f47fdf17336d588c56a5"],["/tags/數學/index.html","8c168a2324c26db29dba47ade6a48f50"],["/tags/數據結構/index.html","42cbb8c511d5272e9e82cb1806901995"],["/tags/筆記/index.html","ce06dc9eaecd73d595a94ae87a44705e"],["/tags/筆記/page/2/index.html","7a94a7cc2edf8352fc78739137b02e80"],["/tags/筆記/page/3/index.html","a719a8705d7aa6fd7930a2c2130fb15b"],["/tags/筆記/page/4/index.html","326b598359f6a2724f97e62dae647213"],["/tags/算法/index.html","c9ead44b88f8bba27e8b4119b846bb2b"],["/tags/算法/page/2/index.html","4f5f904d141b3f4b63c18fc408111845"],["/tags/線性代數/index.html","cbc7f42d8034cde45815fdd03a3a7e8e"],["/tags/練習賽/index.html","80f7d2dd8cf0ff69bb94fa777aec4232"],["/tags/通信2班/index.html","a75ee42a044ef7f287c707efc10fc460"],["/tags/週日和大雷一起挖石頭/index.html","3288879cb51879f2a875a59ade29b8b6"],["/tags/閱讀記錄/index.html","3ccacac292b1bce5a81e5042ceed6d87"],["/tags/隨筆/index.html","b5ad79adb6e0a991b432ed72d65f8c85"],["/tags/題解/index.html","90a9b3d7b2a5b718301a476c5087f121"],["/tags/題解/page/2/index.html","09fa35715934b39715bd89141ed09ca6"],["/tags/高等數學/index.html","f19a65bdab2ab06ecf548b3b693d0067"]];
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
