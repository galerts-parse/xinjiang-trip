const itineraryDataD = [
  {
    day: 1,
    date: "2026-06-12",
    title: "西安 (Xi'an) → 天水 (Tianshui)",
    distance: "345km",
    time: "4.5h",
    sights: "大雁塔 (Big Wild Goose Pagoda), 麦积山石窟 (Maijishan Grottoes). <br><br><b>亮点:</b> 从西安大雁塔出发，前往天水麦积山石窟。麦积山石窟在垂直绝壁上开凿，凌空栈道令人震撼。<br><br><b>门票与预订:</b> 麦积山必须提前在微信小程序预约。",
    accommodation: "天水市 (Tianshui)",
    food: "<b>建议晚餐:</b> 天水当地特色小吃如天水呱呱.",
    practical: "提示：麦积山栈道陡峭，注意安全。",
    spots: [
      { name: "大雁塔", type: "sight", lat: 34.2182, lng: 108.9583 },
      { name: "麦积山石窟", type: "sight", lat: 34.3541, lng: 106.0002 },
      { name: "天水市", type: "hotel", lat: 34.5800, lng: 105.7200 }
    ]
  },
  {
    day: 2,
    date: "2026-06-13",
    title: "天水 (Tianshui) → 兰州 (Lanzhou)",
    distance: "320km",
    time: "4h",
    sights: "甘肃省博物馆 (Gansu Provincial Museum), 中山桥 (Zhongshan Bridge). <br><br><b>亮点:</b> 参观著名的“马踏飞燕”。傍晚漫步黄河第一铁桥——中山桥，欣赏黄河夜景。",
    accommodation: "兰州市 (Lanzhou)",
    food: "<b>建议午/晚餐:</b> 兰州正宗牛肉面, 正宁路夜市.",
    practical: "提示：甘肃省博物馆周一闭馆，需提前预约。",
    spots: [
      { name: "甘肃省博物馆", type: "sight", lat: 36.0664, lng: 103.7744 },
      { name: "中山桥", type: "sight", lat: 36.0650, lng: 103.8200 },
      { name: "兰州市", type: "hotel", lat: 36.0600, lng: 103.8300 }
    ]
  },
  {
    day: 3,
    date: "2026-06-14",
    title: "兰州 (Lanzhou) → 武威 (Wuwei) → 张掖 (Zhangye)",
    distance: "510km",
    time: "7h",
    sights: "雷台汉墓 (Leitai Han Tomb), 张掖七彩丹霞 (Zhangye Danxia). <br><br><b>亮点:</b> 途经武威参观雷台汉墓（马踏飞燕出土地），傍晚抵达张掖欣赏壮丽的七彩丹霞日落。",
    accommodation: "张掖市 (Zhangye)",
    food: "<b>建议晚餐:</b> 张掖炒炮.",
    practical: "提示：丹霞景区全露天，日落时分最美，请做好防晒。",
    spots: [
      { name: "雷台汉墓", type: "sight", lat: 37.9400, lng: 102.6400 },
      { name: "张掖七彩丹霞", type: "sight", lat: 38.9772, lng: 100.1264 },
      { name: "张掖市", type: "hotel", lat: 38.9300, lng: 100.4500 }
    ]
  },
  {
    day: 4,
    date: "2026-06-15",
    title: "张掖 (Zhangye) → 嘉峪关 (Jiayuguan)",
    distance: "230km",
    time: "3.5h",
    sights: "嘉峪关城楼 (Jiayuguan Fort), 悬壁长城 (Overhanging Great Wall), 嘉峪关长城博物馆. <br><br><b>亮点:</b> 探访明代万里长城最西端的雄关，登顶悬壁长城俯瞰戈壁风光。",
    accommodation: "嘉峪关市 (Jiayuguan)",
    food: "<b>建议晚餐:</b> 嘉峪关烤肉.",
    practical: "提示：嘉峪关风大，建议佩戴墨镜和帽子。",
    spots: [
      { name: "嘉峪关城楼", type: "sight", lat: 39.8037, lng: 98.2140 },
      { name: "悬壁长城", type: "sight", lat: 39.8600, lng: 98.1500 },
      { name: "嘉峪关市", type: "hotel", lat: 39.7800, lng: 98.2800 }
    ]
  },
  {
    day: 5,
    date: "2026-06-16",
    title: "嘉峪关 (Jiayuguan) → 敦煌 (Dunhuang)",
    distance: "370km",
    time: "4.5h",
    sights: "莫高窟 (Mogao Caves), 鸣沙山月牙泉 (Mingsha Mountain & Crescent Lake). <br><br><b>亮点:</b> 参观世界佛教艺术宝库莫高窟。傍晚前往鸣沙山，骑骆驼并在沙漠中看日落。<br><br><b>门票:</b> 莫高窟旺季一票难求，必须提前1个月在官网抢票！",
    accommodation: "敦煌市 (Dunhuang)",
    food: "<b>建议晚餐:</b> 敦煌沙洲夜市烤肉及杏皮水.",
    practical: "提示：沙漠沙子极细，保护好相机和手机镜头。",
    spots: [
      { name: "莫高窟", type: "sight", lat: 40.0381, lng: 94.8152 },
      { name: "鸣沙山月牙泉", type: "sight", lat: 40.0880, lng: 94.6680 },
      { name: "敦煌市", type: "hotel", lat: 40.1400, lng: 94.6600 }
    ]
  },
  {
    day: 6,
    date: "2026-06-17",
    title: "敦煌西线 (Dunhuang West Route)",
    distance: "180km",
    time: "3h",
    sights: "玉门关 (Yumen Pass), 敦煌雅丹国家地质公园 (Yadan Geopark), 汉代长城遗址 (Han Great Wall Ruins). <br><br><b>亮点:</b> 深入戈壁无人区，感受“春风不度玉门关”的苍凉，并在雅丹魔鬼城欣赏震撼的落日奇观。",
    accommodation: "敦煌市 (Dunhuang)",
    food: "<b>建议午餐:</b> 沿途需自备干粮，西线餐饮极其匮乏。",
    practical: "提示：雅丹地貌风沙极大，西线全程无信号，请提前下载好离线地图。",
    spots: [
      { name: "玉门关", type: "sight", lat: 40.3540, lng: 93.8640 },
      { name: "雅丹国家地质公园", type: "sight", lat: 40.5000, lng: 93.0000 },
      { name: "敦煌市", type: "hotel", lat: 40.1400, lng: 94.6600 }
    ]
  },
  {
    day: 7,
    date: "2026-06-18",
    title: "敦煌 (Dunhuang) → 哈密 (Hami)",
    distance: "410km",
    time: "5.5h",
    sights: "跨越省界进入新疆 (Crossing into Xinjiang). <br><br><b>亮点:</b> 今日行程主要是赶路，穿越星星峡正式进入新疆维吾尔自治区。",
    accommodation: "哈密市 (Hami)",
    food: "<b>建议晚餐:</b> 哈密羊肉焖饼.",
    practical: "提示：星星峡检查站有严格的安检，请备好身份证件下车查验。",
    spots: [
      { name: "哈密市", type: "hotel", lat: 42.8200, lng: 93.5200 }
    ]
  },
  {
    day: 8,
    date: "2026-06-19",
    title: "哈密 (Hami) → 吐鲁番 (Turpan)",
    distance: "400km",
    time: "5h",
    sights: "火焰山 (Flaming Mountains). <br><br><b>亮点:</b> 参观因《西游记》而闻名天下的火焰山，体验中国最热的地方。",
    accommodation: "吐鲁番市 (Turpan)",
    food: "<b>建议晚餐:</b> 吐鲁番葡萄干抓饭, 拌面.",
    practical: "提示：吐鲁番夏季气温极高（可达45度以上），注意防暑降温和大量饮水。",
    spots: [
      { name: "火焰山", type: "sight", lat: 42.9400, lng: 89.5000 },
      { name: "吐鲁番市", type: "hotel", lat: 42.9500, lng: 89.1800 }
    ]
  },
  {
    day: 9,
    date: "2026-06-20",
    title: "吐鲁番 (Turpan) → 乌鲁木齐 (Urumqi)",
    distance: "200km",
    time: "3.5h",
    sights: "天山天池风景区 (Tianchi Lake), 新疆国际大巴扎 (Grand Bazaar). <br><br><b>亮点:</b> 离开火州前往乌鲁木齐，先游览高山湖泊天山天池，随后回到市区逛世界最大的巴扎，感受浓郁的异域风情。",
    accommodation: "乌鲁木齐市 (Urumqi)",
    food: "<b>建议晚餐:</b> 大巴扎附近的新疆正宗烤肉、大盘鸡.",
    practical: "提示：达坂城路段横风大，请谨慎驾驶。",
    spots: [
      { name: "天山天池", type: "sight", lat: 43.8906, lng: 88.1311 },
      { name: "国际大巴扎", type: "sight", lat: 43.7745, lng: 87.6166 },
      { name: "乌鲁木齐市", type: "hotel", lat: 43.8200, lng: 87.6100 }
    ]
  },
  {
    day: 10,
    date: "2026-06-21",
    title: "乌鲁木齐 (Urumqi) → 可可托海 (Keketuohai)",
    distance: "500km",
    time: "6h",
    sights: "可可托海 (Keketuohai Geopark). <br><br><b>亮点:</b> 驶入准噶尔盆地，前往可可托海，欣赏额尔齐斯大峡谷和神钟山。",
    accommodation: "可可托海镇 (Keketuohai Town)",
    food: "<b>建议晚餐:</b> 额河烤鱼.",
    practical: "提示：S21沙漠高速易疲劳，请轮换驾驶。可可托海气温较低，注意保暖。",
    spots: [
      { name: "可可托海", type: "sight", lat: 47.1990, lng: 89.8140 }
    ]
  },
  {
    day: 11,
    date: "2026-06-22",
    title: "可可托海 (Keketuohai) → 阿勒泰 (Altay)",
    distance: "250km",
    time: "4h",
    sights: "阿勒泰市区风光 (Altay City). <br><br><b>亮点:</b> 穿越阿尔泰山脉边缘，抵达“人类滑雪起源地”阿勒泰市进行休整与补给。",
    accommodation: "阿勒泰市 (Altay)",
    food: "<b>建议:</b> 阿勒泰市区美食.",
    practical: "提示：阿勒泰是进入喀纳斯的门户，可在此采购物资。",
    spots: [
      { name: "阿勒泰市", type: "hotel", lat: 47.8300, lng: 88.1300 }
    ]
  },
  {
    day: 12,
    date: "2026-06-23",
    title: "阿勒泰 (Altay) → 喀纳斯 / 禾木 (Kanas / Hemu)",
    distance: "220km",
    time: "4h",
    sights: "禾木古村驿站 (Hemu Village), 观鱼台 (Guanyu Pavilion). <br><br><b>亮点:</b> 探访图瓦人的保留地禾木村，欣赏炊烟袅袅的原始木屋；并登上喀纳斯观鱼台俯瞰变色湖。",
    accommodation: "禾木或喀纳斯景区内 (Hemu/Kanas)",
    food: "<b>建议晚餐:</b> 禾木土火锅.",
    practical: "提示：景区内需乘坐区间车，且早晚极度寒冷，必须带好羽绒服。",
    spots: [
      { name: "禾木村", type: "sight", lat: 48.5670, lng: 87.4330 },
      { name: "观鱼台", type: "sight", lat: 48.6950, lng: 87.0120 }
    ]
  },
  {
    day: 13,
    date: "2026-06-24",
    title: "喀纳斯 (Kanas) → 布尔津 (Burqin) → 奎屯 (Kuitun)",
    distance: "500km",
    time: "7h",
    sights: "布尔津 (Burqin), 沿途风光. <br><br><b>亮点:</b> 离开阿尔泰山脉，途径童话边城布尔津，一路向南驶往奎屯。",
    accommodation: "奎屯市 (Kuitun)",
    food: "<b>建议午餐:</b> 布尔津烤冷水鱼.",
    practical: "提示：今天行车距离较长，请注意休息。",
    spots: [
      { name: "布尔津县", type: "waypoint", lat: 47.7000, lng: 86.8500 },
      { name: "奎屯市", type: "hotel", lat: 44.4200, lng: 84.9000 }
    ]
  },
  {
    day: 14,
    date: "2026-06-25",
    title: "奎屯 (Kuitun) → 赛里木湖 (Sayram Lake) → 伊宁 (Yining)",
    distance: "350km",
    time: "5h",
    sights: "赛里木湖 (Sayram Lake), 果子沟大桥 (Guozigou Bridge). <br><br><b>亮点:</b> 欣赏大西洋的最后一滴眼泪——赛里木湖，之后穿越壮观的果子沟大桥，抵达伊犁州首府伊宁。",
    accommodation: "伊宁市 (Yining)",
    food: "<b>建议午餐:</b> 赛里木湖高白鲑.<br><b>住宿安排:</b> 途经 AC Hotel by Marriott Xinjiang Sayram Lake (万豪AC酒店)。",
    practical: "提示：赛里木湖自驾环湖风景极佳，但风大且冷。",
    spots: [
      { name: "赛里木湖", type: "sight", lat: 44.5960, lng: 81.1610 },
      { name: "果子沟大桥", type: "sight", lat: 44.4283, lng: 80.9130 },
      { name: "伊宁市", type: "hotel", lat: 43.9100, lng: 81.3200 }
    ]
  },
  {
    day: 15,
    date: "2026-06-26",
    title: "伊宁 (Yining) → 昭苏 (Zhaosu) → 夏塔 (Xiata)",
    distance: "180km",
    time: "3.5h",
    sights: "昭苏县 (Zhaosu), 夏塔旅游区 (Xiata). <br><br><b>亮点:</b> 探访天马故乡昭苏，随后进入夏塔古道，这是古代丝绸之路上最为险峻的一条通道，可近距离观赏木扎尔特冰川。",
    accommodation: "夏塔或周边 (Xiata/Tekes)",
    food: "<b>建议晚餐:</b> 昭苏原生态羊肉.",
    practical: "提示：夏塔古道可徒步或骑马，深入冰川地带，需注意安全。",
    spots: [
      { name: "昭苏县", type: "waypoint", lat: 43.1500, lng: 81.1300 },
      { name: "夏塔旅游区", type: "sight", lat: 42.6600, lng: 80.7500 }
    ]
  },
  {
    day: 16,
    date: "2026-06-27",
    title: "夏塔 (Xiata) → 那拉提 (Nalati)",
    distance: "250km",
    time: "4.5h",
    sights: "那拉提草原 (Nalati Grassland). <br><br><b>亮点:</b> 前往世界四大河谷草原之一的那拉提，在空中草原感受游牧民族的自由气息。",
    accommodation: "那拉提镇 (Nalati Town)",
    food: "<b>建议晚餐:</b> 哈萨克风味烤全羊.",
    practical: "提示：那拉提草原自驾需要购买专门的自驾票（约300元/人）。",
    spots: [
      { name: "那拉提草原", type: "sight", lat: 43.2600, lng: 84.1500 }
    ]
  },
  {
    day: 17,
    date: "2026-06-28",
    title: "那拉提 (Nalati) → 独山子 (Dushanzi) → 乌鲁木齐机场 (Urumqi Airport)",
    distance: "450km",
    time: "8h",
    sights: "独库公路北段 (Duku Highway North Section). <br><br><b>亮点:</b> 踏上中国最美公路——独库公路，跨越天山，一天经历四季，途经独山子区、奎屯市，最后直达乌鲁木齐机场。<br><br><b>夜间航班:</b> 今晚乘飞机离开乌鲁木齐 (Fly out from Urumqi at night).",
    accommodation: "无 (N/A - Fly out)",
    food: "<b>建议午餐:</b> 乔尔玛服务区简餐.<br><b>建议晚餐:</b> 机场候机楼.",
    practical: "提示：独库公路只允许7座及以下客车通行。此段山路崎岖，极容易堵车，请务必预留充足时间以免误机！",
    spots: [
      { name: "独山子", type: "waypoint", lat: 44.3200, lng: 84.8800 },
      { name: "乌鲁木齐天山国际机场", type: "waypoint", lat: 43.9036, lng: 87.4735 }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = itineraryDataD;
}
