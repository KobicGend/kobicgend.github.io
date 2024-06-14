/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b90367311cf9cf3015ff72da2199af97"],["/about/index.html","b8011f9d25480eb8efaf68eb205b9891"],["/archives/2023/09/index.html","50d0da60a207b1d18e5f30ef39671d05"],["/archives/2023/11/index.html","13e204c9aceeb7b26b20c13013f68d41"],["/archives/2023/12/index.html","babaec03a2c655347473f0a5781948f7"],["/archives/2023/index.html","d7601db74194af8aa84dfb88d580de28"],["/archives/2024/01/index.html","43c8db0aa6dd40b2aa784599f7542c4e"],["/archives/2024/02/index.html","f19b4f4d18881f0ec0ad411930947b8a"],["/archives/2024/03/index.html","04ed523cb83f7b12901ac16225873974"],["/archives/2024/03/page/2/index.html","33fdf61632af9ecf32d2642099607ec6"],["/archives/2024/03/page/3/index.html","1aea4ac594e07339ed94cf668666bb7a"],["/archives/2024/04/index.html","3ef170104021bb8db45b35d02996f79e"],["/archives/2024/04/page/2/index.html","2299757aed3faa8baf73766a0846abce"],["/archives/2024/04/page/3/index.html","c8f8f401f474f3e0031a789fd832061e"],["/archives/2024/04/page/4/index.html","352e957333d0582e281f7967b79d0ec9"],["/archives/2024/05/index.html","71fafb2c8bbd723309d9d082077ada99"],["/archives/2024/05/page/2/index.html","6544a027185c7622e018d86eeb5a0075"],["/archives/2024/06/index.html","59e032eae76722328b7aa3a24817d484"],["/archives/2024/index.html","abe4a768b969d1d462101d322d4bb461"],["/archives/2024/page/2/index.html","efbeafa13c4d1504438c7c2973f3204e"],["/archives/2024/page/3/index.html","6fec2fddb2ea78b3bce582802810fb67"],["/archives/2024/page/4/index.html","f04de8575ad0bd3bf4900c7d6903c73d"],["/archives/2024/page/5/index.html","a03ee04398aaa606f533b590be06973f"],["/archives/2024/page/6/index.html","3c3b2a9c118d446ea50c4ddfed2ba033"],["/archives/2024/page/7/index.html","94d3240257d543fa9abd4f0cb0f8d083"],["/archives/2024/page/8/index.html","929ed77bec7167900ae20b42fd4f1ce3"],["/archives/2024/page/9/index.html","5698cac86e8e04fa596f970e36d3f956"],["/archives/index.html","35096145b1feb4d09e05496526a40f20"],["/archives/page/10/index.html","3b4afe43ab6701212472f6f90f44a552"],["/archives/page/2/index.html","ab803fec09577eec3d71908638c15148"],["/archives/page/3/index.html","b6e6fd9018d7a79d0d8fcc1591d5341e"],["/archives/page/4/index.html","28e9e342e488fc981ecba64f2e702768"],["/archives/page/5/index.html","21d8bb398faf626fafbc46f3dd9edfa6"],["/archives/page/6/index.html","2b4ab5eeb9987c61c3daa252c8472c32"],["/archives/page/7/index.html","646c4aa0ac6360020d37864262fa4bfd"],["/archives/page/8/index.html","ac8682d9f29cf833d20697a2c13fe245"],["/archives/page/9/index.html","24190f78be14d72f8f7008eb46c3941c"],["/askbox/index.html","409237af3f99a5c507dc631fced4423c"],["/categories/index.html","e4afeae14f9a0aea6d44e8cf17e6e14e"],["/categories/作品/index.html","a53daa0489576ccd8e89f57c08c020f3"],["/categories/作品/page/2/index.html","b880a753449af50b5a217cbac07a6edc"],["/categories/作品/微信公眾號/index.html","2f9a653daf1bbb54b6ed64af94adb9b4"],["/categories/作品/未分類/index.html","65d82d6f4d88ae81ad3963963a1d3bf9"],["/categories/作品/篆刻/index.html","1a4727c0f2aeb82c0b1062e950f9edcf"],["/categories/日記/index.html","ebbf351bdb264e5118341b2ed15eae8e"],["/categories/日記/page/2/index.html","517ee16f94979334cd78a0b23b1f8b1d"],["/categories/日記/page/3/index.html","ed818930c32df4a2dab438c742af629d"],["/categories/日記/page/4/index.html","77f0960d696bc537d0f49f2c76b71c1c"],["/categories/日記/主机註記/index.html","5c4f4992209e247e9b46396b85390df9"],["/categories/日記/主机註記/page/2/index.html","211d8e1468053d02830a956d3963530c"],["/categories/日記/日常/index.html","0540b1fead5426ee03cd700a00850ab3"],["/categories/日記/日常/page/2/index.html","a5fc627ae7ae730a5595d3a90ba96d50"],["/categories/日記/日常/page/3/index.html","ca027c6d48976a8bd83ef73fa0894050"],["/categories/日記/高中回憶/index.html","b8fa89d043528e1017f3fd35ab25ddce"],["/categories/筆記/index.html","bb5b0a236c7ca61edece21968502245a"],["/categories/筆記/page/2/index.html","c38c88c13395759c118bf271acfea4ca"],["/categories/筆記/page/3/index.html","9befc1bbf4b7a9b0c603c73b2cacdffb"],["/categories/筆記/page/4/index.html","d1623dcc4fa5b9b79217cd7b7a6dc364"],["/categories/筆記/大學筆記/index.html","95c05999ed8b91d410bd7e0cacedc031"],["/categories/筆記/算法筆記/index.html","836babb92a7f9e5f73bd493398fe88f5"],["/categories/筆記/算法筆記/page/2/index.html","fbc9df174327bfa4c5df836e46a5e6f9"],["/categories/筆記/算法習題集/index.html","141e48dcec9c07bc1249c6c99cdb9d59"],["/categories/筆記/練習賽/index.html","4b60d47cfd85e163215744270ca0ad41"],["/categories/筆記/題解/index.html","fc0ea74aa343f573edcdc0d6a2dbe04a"],["/categories/雜/index.html","e818c298d64230b96baea8d8319571b7"],["/categories/雜/學習/index.html","067fb975f87eb4beeaa69bccb1bc1742"],["/categories/雜/閱讀記錄/index.html","e44038df437d80a06fd6fa65f8b49735"],["/css/flipcountdown.css","1dcc737069dea145733b1c0b14e0aaf5"],["/css/fonts.css","3a579e60f66705f8ba69641a13324e0b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","bbb9568773cc76247d2cf522543ccdf6"],["/css/title.css","d4e8bc93015976d5c35a54796a99cd0d"],["/css/transpancy.css","7503ead58dbf7b5ef6531c2b7a8dc9ae"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/diary/diary-stz.html","48f4e831115fdb573b81754a5c75f4ed"],["/diary/hutaolinriji.html","31ac343a6537610d2ee6628cd3ad9571"],["/diary/index.html","b2ed43534fb6dedb38977a1ecc9d15d6"],["/fonts/CaviarDreams.ttf","3670aa493ee09e92c7b8e1e7c2f5b441"],["/fonts/CaviarDreams_Bold.ttf","65ab651cc7cebf7331a4228e830573d1"],["/fonts/CaviarDreams_BoldItalic.ttf","825e49e42ab834f96cf27fc09c82910d"],["/fonts/CaviarDreams_Italic.ttf","e67f5c38635c8f06c286b0c33da927bb"],["/img/11background.png","aa98c2d98ed001d5585a9de2ea65d974"],["/img/1background.png","335447304d69024398aba16092111fe3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/avatar.png","f9dc1cf13eae9645aff26ad1f7511456"],["/img/background.png","57893b0fe31d2e93d78f2969da1b627a"],["/img/city_futurism_scifi_131831_1440x900.jpg","1baacc6570dac8a91307a9d2b578f58b"],["/img/digit-lg.png","b78467f9c9c78b391ecba9d930c49063"],["/img/digit-md.png","09a7c0561597d5432b979abf90890770"],["/img/digit-sm.png","b1ca29605d57153a6a7885be60960b49"],["/img/digit-xs.png","feb9ad425e75bf602bbcca5923df2018"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icon/bilibili.png","9d830bee9f6b0235c97d4842e68a75fe"],["/img/index.png","a1442c61e43967950788cae313514953"],["/img/ocean_surf_foam_117846_1024x768.jpg","8905b31a6dcc780592e4dca6f72e3c29"],["/img/posts/arts_cucradio/arts_cucradio_foot1.gif","7f2f52fdb7adec637a2e67a563543593"],["/img/posts/arts_cucradio/arts_cucradio_foot2.gif","c7348166893abf3eb46a0006f457efcb"],["/img/posts/arts_cucradio/arts_cucradio_head.gif","76712f72672859f02f894e120c4e23a6"],["/img/posts/posts_dawushiyan/IMG_20240410_175630.jpg","be163591c3f7fa039d9c788744d89b07"],["/img/posts/posts_dawushiyan/IMG_20240410_175638.jpg","4a3d99ae7e6f01ba85a203ab199a9a1f"],["/img/posts/posts_dawushiyan/IMG_20240410_181324.jpg","e84936f90e0b8630971a4e312527ed4a"],["/img/posts/posts_dawushiyan/IMG_20240410_194852.jpg","386571f7aea21bf25f3d06d43fec7e6b"],["/img/posts/posts_dawushiyan/IMG_20240410_194902.jpg","97690d5af81a0b55eff0e593d452cf33"],["/img/posts/posts_dawushiyan/IMG_20240410_194916.jpg","28c2cf67e209fc1cea1bee5f15be1372"],["/img/posts/posts_dawushiyan/IMG_20240410_194924.jpg","0293854f87d8d735297575927adb4f21"],["/img/posts/posts_dawushiyan/IMG_20240410_194932.jpg","69e30b4d96c72a3e5bb0751d19c0ad32"],["/img/posts/posts_dawushiyan/IMG_20240410_194939.jpg","c1403c0615e37c4396a80e5dbaa5cece"],["/img/posts/posts_dawushiyan/IMG_20240424_175902.jpg","dda28bc613abf437c4d13e8c4c7b559e"],["/img/posts/posts_dawushiyan/IMG_20240424_175909.jpg","265b689e250a2837c91da077a9c5edeb"],["/img/posts/posts_dawushiyan/IMG_20240424_183317.jpg","34788a74021f915a18e15aa531cb8739"],["/img/posts/posts_dawushiyan/IMG_20240424_193122.jpg","43587e85d6625ef279e95aed46cf55f4"],["/img/posts/posts_dawushiyan/IMG_20240424_193442.jpg","14c348f75d3c004c31e505903351fc11"],["/img/posts/posts_dawushiyan/IMG_20240424_193446.jpg","aa4a672b72418540bc8b5f6a23e22018"],["/img/posts/posts_dawushiyan/IMG_20240424_193453.jpg","44e00b09aed12aba55fa788f18cfcb47"],["/img/posts/posts_dawushiyan/IMG_20240424_200908.jpg","d8d14aa4d588516d5f3cce61c12ef956"],["/img/posts/posts_dawushiyan/IMG_20240424_200920_1.jpg","f2191f681e9332f984f4f65b029bccbf"],["/img/posts/posts_dawushiyan/IMG_20240424_200934.jpg","aa24624343c0e6c541fe85f73b8ccfcb"],["/img/posts/posts_dawushiyan/IMG_20240424_200944.jpg","c7c585d2d2eb6ebc9cfd004a1e61129d"],["/img/posts/posts_dawushiyan/IMG_20240424_200954.jpg","f281eb6dca65c6b312f188eae7a82545"],["/img/posts/posts_dawushiyan/IMG_20240424_201000.jpg","c13df0819fe8f88c587aa3878244a999"],["/img/posts/posts_dawushiyan/IMG_20240424_201223.jpg","9cc69cc024178c138a4ac1fa844f1362"],["/img/posts/posts_dawushiyan/IMG_20240424_201304.jpg","62e884932f28f91a944e1e67d591cfce"],["/img/posts/posts_dawushiyan/IMG_20240515_183159.jpg","7f0bf754ad63c33b4184d0b7074dadde"],["/img/posts/posts_dawushiyan/IMG_20240515_183907.jpg","7285f9550d561b8f610dd07c41ee1e52"],["/img/posts/posts_dawushiyan/IMG_20240515_200131.jpg","2fe28f09d2361c8589d5dda7c1452cc8"],["/img/posts/posts_dawushiyan/IMG_20240515_200139.jpg","fac500ecd87c62024904d24b49d187a7"],["/img/posts/posts_dawushiyan/IMG_20240515_200149.jpg","8024dfd75b9926771ae4c39e0eca723c"],["/img/posts/posts_dawushiyan/IMG_20240515_200155.jpg","dbbc11d2a2451fd923288bebc53622e2"],["/img/posts/posts_dawushiyan/IMG_20240515_200204.jpg","985048d314ad8a93dcc9a5b1b1a5ded3"],["/img/posts/posts_dawushiyan/IMG_20240515_200217.jpg","aac17b90d51b81da9bef13afc536b7b8"],["/img/posts/posts_diary/Screenshot_2024-03-27-03-43-29-776_com.android.deskclock.jpg","6ad12421165dff061b92295193bc599f"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-02-29-128_com.baidu.BaiduMap.jpg","4029f399b95ac20fff376b0e9202aca4"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-05-31-801_com.baidu.BaiduMap.jpg","084286707a4f59ec4d72b41bc2abc7c8"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-06-49-480_com.baidu.BaiduMap.jpg","e8a713e4b0c8c5296286c6a6c6557b3d"],["/img/posts/posts_diary/Screenshot_2024-03-27-04-21-47-115_com.baidu.BaiduMap.jpg","564b7e52a9195fde96dab8ca055cdfaa"],["/img/posts/中國傳媒大學軌道交通線路圖_V1.4.png","400da869e6fadd56ea96e93422dca747"],["/index.html","9d48f235cc7ae174d024b517870a6295"],["/js/flipcountdown.js","8b8feed1e9e9dc954109170e501bd9e6"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/runtime.js","0be0cedd6857eb8963571f56f2e5b61c"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","08815ecc71a41ff7df2f0a18393cb8e5"],["/notes/index.html","b269ab0844a7b6c1d9474dc1d264e4ce"],["/notesacm/index.html","927d00f69529f49912931ae5ea20d5b2"],["/page/10/index.html","4d1b84dfda7804aeff1fb94861129ea9"],["/page/11/index.html","43b8a0c2c0c495002575ab73412e9cd1"],["/page/12/index.html","af543adf9bdc97f1781a9c891eae94ed"],["/page/2/index.html","5cf13d8fc7faa74cf7ab17238e41be99"],["/page/3/index.html","4185e5f780d5161fb884478e3edeff53"],["/page/4/index.html","5457b6c49f663679de09e8aac47d1cec"],["/page/5/index.html","0aa97d5f9f40768328be78495a5d7640"],["/page/6/index.html","d4570d0a615dc947ce3cc87b77c7da3c"],["/page/7/index.html","a22044d84bdb01388a39d1a4aad434fe"],["/page/8/index.html","ec3f14b1d9ea5dd3ab7c27af27edd4bc"],["/page/9/index.html","80bcfa332f85aa2872c0d0bf741bbc7d"],["/posts/0.html","367fb4c3c551eca19138ba726eb4752a"],["/posts/11ac4143.html","46b09effa919fd25b09afa40121f7a94"],["/posts/1259c21a.html","db8c391ded08d8838ec034c49d1cb369"],["/posts/142bd7b9.html","dd9a63482d36a51755e238ccf1c61296"],["/posts/17240182.html","69636e22973b604a24fff568fb8a7d6c"],["/posts/18da9c5.html","30863b201935f3e2b98897fb92fae253"],["/posts/1a0287c3.html","e4df4937def4af16f2d80046fae03c2b"],["/posts/1a45981d.html","f06a09cc3e138eb9a5a3a60f44bc9561"],["/posts/1cd03f4a.html","0de5a50e9ad4961768380a52a2d8e2b5"],["/posts/2bbe1b39.html","6160dbc8eece5c5a3ed3a1d55902941e"],["/posts/2dd304a1.html","1bda7e9326e9ea81ba8193208cc26e3f"],["/posts/34a99b49.html","93fc39fe7c39c9d10c1f20a3d1dae8a6"],["/posts/3691ec22.html","4db7f3866b742f6e7df01d960acc0b5c"],["/posts/370419e5.html","ca777a346b2b52946d112ca1be2b55ef"],["/posts/37c33e2e.html","f2f4ec91b821a878e3ab7476ce5fc460"],["/posts/3c481aa8.html","0a1c40954cc124457fe0e5e49799dfb6"],["/posts/3ced8075.html","6f7ef146b4a97dbdcc3509bca0d70502"],["/posts/4075f5da.html","047b41b173ccc312d06e46c113596406"],["/posts/43a1bd89.html","c5e5102a5b2370fc6becfce9abed9547"],["/posts/43afdee7.html","41322e84d763a79e681eceb2e4072261"],["/posts/44efb5f7.html","7bb2aae0aa2ec85055d5d2027f8e7427"],["/posts/4731e223.html","18e7c8b915dde58b0b7b4c264d7d4e90"],["/posts/4a450160.html","c643e332cba4ea60fe89289a61e6f04a"],["/posts/4ff9541b.html","9534b2576c67ab50c71d8ac1b86d19de"],["/posts/547e5912.html","b6ddd428fadee312bcdc9d0e7aa143f6"],["/posts/55b27f38.html","ccd4569c804d2bfdd5d17fb624d95548"],["/posts/57600f67.html","a22b6ee444b303a4431b5019f24b4b83"],["/posts/595bd7af.html","7df30402a42d41de5afa14287213e9a9"],["/posts/5ba6d4a3.html","49fce3b6c0c3c82eef5a63a625c2a224"],["/posts/5ea0bd0.html","c2d40cfe35893ffb75c7458d18307285"],["/posts/62148c0a.html","9061aca919371a6e4870989bb200454e"],["/posts/62cc1cb9.html","ec0bed0390fd3e3dcadca3542172bcf0"],["/posts/63766c5.html","282c98041ef3a1c91d551fdff04296f8"],["/posts/667c5340.html","92b4213de934e0d242e404dafb7d00b6"],["/posts/6752b01e.html","0776e1bfe42b43453e874b2c046e619c"],["/posts/6d6d0855.html","226caa4dbaa4e6c2d363dbd25b9503a9"],["/posts/6df19715.html","901fca8bff6286f0b06074fcb715a4c4"],["/posts/73608288.html","e8ec864a869f0f6df33dcfded8f986b0"],["/posts/78922b44.html","4e671c92ff63afaa4398a0612e58fc73"],["/posts/78adb1fc.html","ec010c33f25f546600e1ccfe2e523438"],["/posts/78bac4c5.html","f7f8703df8fa5e61a674138980307027"],["/posts/7b4dfaa5.html","ecb68cc9a070d975bdc516cda1711883"],["/posts/7c68afb2.html","865ed3793246a9b268e5862657ebe69a"],["/posts/82897ef2.html","32cf5ba516be6bfa6980b0240a5a2091"],["/posts/82d7d5d1.html","4fed2d6d2af014511304cd650bf3c328"],["/posts/8303a602.html","35815bf3ff3e6b06f912e95d8a1129e0"],["/posts/842d546f.html","3efb0fe29e6f1a33fec5faa3e204b28b"],["/posts/852226fc.html","b89bc64aac2340cc5d562ef0fda1d42f"],["/posts/85d274ad.html","7819792948f060b6e47a3761b9808010"],["/posts/8847c03d.html","5f064bacd523861692e279fa138744ec"],["/posts/8d5610d5.html","5eedbceeb916df148f10db580523f94e"],["/posts/8de1f3f0.html","a6cfb13f5bfae1126b1ea7501bb19ba3"],["/posts/8f4341de.html","5f1509e43d4e708c696049e4897195ac"],["/posts/8fc65cfa.html","bb7f8ba92d325931125bb3a215ced4d4"],["/posts/90959ae6.html","c255de29ba3f5d9611aeda3df3ee2ae0"],["/posts/96aa9b52.html","9050186f4289a1e2addb925331625088"],["/posts/982204b1.html","1cf571bc3540be59fb3742509532a475"],["/posts/a1f015a4.html","a4728b94d7ceff66bc5d69886c43cbcd"],["/posts/a5317783.html","54fedc978e252a8d122fa851b96f7a29"],["/posts/a66dfabb.html","9cee2e5a654f361c6bb813516e25da51"],["/posts/a68b26a8.html","f279a0baff66d91a652ce16f062a561d"],["/posts/a68b7a23.html","02192c4c24027ec0c453dfceccec4668"],["/posts/a900ed48.html","8bb6783a496bdb72ffbb0227e085cebe"],["/posts/a9f0a4bd.html","9406acd108c38c5a267d354bd3f402a3"],["/posts/b29f922a.html","61b8831afa7d70b9669361fe396ab21c"],["/posts/b29f922a.html.html","ae3dd58208e5ba33e4d1404f72b1a40d"],["/posts/b3997bd2.html","01301577d2db735ff21bd4204162f716"],["/posts/b3ad75d5.html","062acd7593b7772e285b8c873d1a126b"],["/posts/b52d579f.html","49994759551b36a71cb8b6d23c4add2c"],["/posts/b76990aa.html","ed95b1d35d7a711584d10977e28fa30d"],["/posts/b82c1c50.html","8f27941abd52e697ef45b9d5a0c182b1"],["/posts/ba3fd34e.html","1de1ad84c30b78d856f2594f994bf111"],["/posts/bbb9f31e.html","dca68540afe17c544f0ee7e24dc081a4"],["/posts/bdbfcb27.html","a5add8fe02f05a4a3aa55c70189ee390"],["/posts/bed9a53a.html","4071861b82a5b896e9b9dfedf776fc8f"],["/posts/c096c313.html","2ad88e6eacc20648296f0c384eee3d9c"],["/posts/c0b9a1bb.html","86428d8737240a4194652d0d89095120"],["/posts/c2e6fb0c.html","4adafc1734a7840ad55bb80fccd5e4c1"],["/posts/c6a51061.html","d7cc766b5456446b2295255c55118387"],["/posts/c96d26b5.html","fd803405a0fc3647d3c425a04764002f"],["/posts/ce9d4cce.html","9a2cbe2d73f6de97bb953516590251a8"],["/posts/cf97dda0.html","24c83658195f040e16f95bf1b6cf276c"],["/posts/cfd1c518.html","f8dadf8ba1216144e6db88a6ab7e3d4e"],["/posts/d415b872.html","9f94c6dc9249b96bda8be3e6feea232f"],["/posts/da5af675.html","fc49ae83ea5edfb36f480e1fa4158542"],["/posts/de4308fb.html","adbb12e4a011c197c0a752afdecac624"],["/posts/dfe8c51f.html","d62eee84c2ec2a71c325ed64e36e9d03"],["/posts/dfec5b51.html","b348e1eae2184e0c48056b460744792a"],["/posts/e63e1643.html","2a377cd976659b11b21aa518f53d3de4"],["/posts/e7f5867a.html","3058aa3b00a711564c979dfb13e569b2"],["/posts/e846e79f.html","70b3e7336c34de68a6e27d2b7c9e4899"],["/posts/e8dfbf5.html","c71c49685582f5df33692d49ae10fdab"],["/posts/ea18c108.html","f6c3b4ced8994bea6e1e1ea2d96246e2"],["/posts/f1fd69df.html","b660c55d2782d8ec028cacc95685ad5a"],["/posts/f38132e4.html","1585dd74556f7500a1c43748e736ebd0"],["/posts/f3fd657e.html","705330880afd00da6c4c88452361ac0f"],["/posts/f40d0f05.html","f7a3f3787d8cbea111a3e1d064935a44"],["/posts/f462e7a0.html","7aefebcba94abb229cda27f168c050fd"],["/posts/f7a3bf5e.html","c7d4456480634f7a66ea241c198829f7"],["/posts/fa098c00.html","d06461c232f18e078837e141f522f5bc"],["/posts/fae23d85.html","eb3c9597d597ca974c136472c1b96c3e"],["/posts/fc81fbfd.html","acc8389ccf4a8e85040f26af53617cc5"],["/sw-register.js","32930f9880fac0dd8c7545020c9e6fa4"],["/tags/ACM/index.html","49dbee612da82a67595e40febfc2ad2b"],["/tags/ACM/page/2/index.html","61e90354e55f7d484e94651a0b32cb33"],["/tags/ACM/page/3/index.html","9c9e56e5da39b1513c0819fb360a70bb"],["/tags/Bilibili/index.html","4db7b07b246a7f41d1e303e11bc6bc0c"],["/tags/Blog/index.html","9572b1d76601621122314334305a9b98"],["/tags/CUC/index.html","26bb06650d241d8541486dd8449a35da"],["/tags/CUC/page/2/index.html","1db4e64244b87114c5ba096629536dd6"],["/tags/CUCRadio/index.html","410d3dab97b13adeff24b90e01ece07a"],["/tags/Canva/index.html","4bfb3252efd380930c121adcb8fc582f"],["/tags/DP/index.html","32fb2d3167b0a1c0bb9ed9f3af8aeb01"],["/tags/English/index.html","4a0dca4e7fdc03a1f292e903cdb3877d"],["/tags/Illustrator/index.html","a91e08717fa145836cbee2b717e3baf2"],["/tags/Photoshop/index.html","f31a9ea5d23916a26bf77076288c272d"],["/tags/Photoshop/page/2/index.html","78c12b41ad1bb44abab6b2cb55e34f8a"],["/tags/Plog/index.html","83f926265b4b5eef394d3cdad1f7b36a"],["/tags/Procreate/index.html","b887234d646d97089767fb1ea703789e"],["/tags/Python/index.html","bb4ed711f2730c7570e7a94b937f0da8"],["/tags/cpp/index.html","0689fb8cc0c23bcbee78f7ff903b1e66"],["/tags/index.html","3543f32496587aa272fb94f7347672a8"],["/tags/中外历史纲要/index.html","8ea8d4b94aae664c3bb174b33a177b1e"],["/tags/主机/index.html","2938746c08e700cda3e0a25a62280544"],["/tags/主机/page/2/index.html","2d5de41f17685a23804536bc15392569"],["/tags/圖論/index.html","ee4333df3b826c6bd52653876f32e68c"],["/tags/字符串/index.html","fc8af2294b20ca0330afd28de383bdad"],["/tags/小明/index.html","75cb47ee38401bea69d34fc8a50eceac"],["/tags/小明/page/2/index.html","ed1e8dac86779c5d5ebbadc8f234d748"],["/tags/小明/page/3/index.html","20a4e18c234e13020607e6dacf092632"],["/tags/小明/page/4/index.html","43f146e879973417aea5c0731016b6c7"],["/tags/微信公眾號/index.html","cacf62ba18ee9517efc14ce197c694de"],["/tags/攝影/index.html","400613fc4c36aadb12de9930b4e09d57"],["/tags/數學/index.html","e2e45564792ac0d9a4349807b672800a"],["/tags/數據結構/index.html","73fb4786a7a4e3f14b365086698629f9"],["/tags/概率論/index.html","03262f92ef9d45d64a1c3d734fc7ed66"],["/tags/筆記/index.html","5dafe7a9503f79fc645deb870e577918"],["/tags/筆記/page/2/index.html","d6dce06824c9c8fa5665513013eba898"],["/tags/筆記/page/3/index.html","6e6bc30b01bf21aa7f215e8ae9791e81"],["/tags/筆記/page/4/index.html","b1df1bcbdd4eded0aa7870576e656cd1"],["/tags/算法/index.html","946454835286ad5f60c2af9a8b71ad7b"],["/tags/算法/page/2/index.html","9ba419b60e7a5cb55a680e90650f2ce7"],["/tags/線性代數/index.html","fdcbc22df98ddd21183b707ea966552a"],["/tags/練習賽/index.html","3a7544bf37bec22ff8ebc6c0fe3814f0"],["/tags/通信2班/index.html","e5dcd61ec7ea112b752a909d8da7a9b5"],["/tags/週日和大雷一起挖石頭/index.html","e38af40b8d03711546210288c95bd6e7"],["/tags/閱讀記錄/index.html","397d6f08e23f1e9904ebcbcbe9266620"],["/tags/隨筆/index.html","7d36f67aee7b1c93e73be4c49b214e4a"],["/tags/電路/index.html","4589c8db049b97e146c1d4f49601299f"],["/tags/題解/index.html","ffe28bd04e7676de6b11a0e8beb655b7"],["/tags/題解/page/2/index.html","2232d7cdfadcc3c6e80d001388d79474"],["/tags/高等數學/index.html","5207c24e3782157da30975a42598ce1f"]];
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
