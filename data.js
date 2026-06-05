const itineraryData = [
  {
    day: 1,
    date: "2026-06-12",
    title: "西安 (Xi'an) → 宝鸡 (Baoji) → 天水 (Tianshui)",
    distance: "345km",
    time: "4.5h - 5h",
    sights: "麦积山石窟 (Maijishan Grottoes). <br><br><b>历史与奇观 (Why it's fascinating):</b> 麦积山石窟并非普通的地面建筑，而是在高达142米的垂直麦垛状孤峰绝壁上，硬生生开凿出来的。它始建于公元384年的后秦，历经千年。最令人震撼的是它那层层叠叠、凌空盘旋在悬崖上的“凌空栈道”，古人称之为“三十三天”。不同于莫高窟的壁画，麦积山以“泥塑”名冠天下，这里保留了7200多尊精美的北魏泥塑，佛像面容带着神秘的“东方微笑”，深受古印度犍陀罗艺术与中原汉文化的双重影响。<br><br><b>门票与预订 (CRITICAL PERMIT INFO):</b> 约90元。<b>必须提前7天</b>在微信搜索小程序“麦积山石窟”预约A类票。否则无法登上悬崖栈道！<a href='https://baike.baidu.com/item/%E9%BA%A6%E7%A7%AF%E5%B1%B1%E7%9F%B3%E7%AA%9F' target='_blank'>百度百科: 麦积山</a>",
    accommodation: "天水万豪福朋喜来登酒店 (Four Points Tianshui). <a href='https://www.marriott.com/en-us/hotels/tian-four-points-tianshui/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 宝鸡周礼大食堂 (Baoji Zhouli Canteen) - 西府小吃集合地。 <a href='https://map.baidu.com/search/%E5%AE%9D%E9%B8%A1%E5%91%A8%E7%A4%BC%E5%A4%A7%E9%A3%9F%E5%A0%82' target='_blank'>百度地图 (Baidu Maps)</a><br><b>晚餐 (Dinner):</b> 天水常记呱呱 (Changji Guagua) - 天水非遗美食，用荞麦面做的特色小吃。 <a href='https://map.baidu.com/search/%E5%A4%A9%E6%B0%B4%E5%B8%B8%E8%AE%B0%E5%91%B1%E5%91%B1' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：麦积山绝壁栈道非常陡峭，恐高者需做好心理准备。天水是古代“陇右”咽喉，三国迷不可错过。",
    spots: [
      { name: "西安出发 (Depart Xi'an)", type: "waypoint", lat: 34.3416, lng: 108.9398 },
      { name: "宝鸡周礼大食堂 (Lunch: Zhouli Canteen)", type: "restaurant", lat: 34.3643, lng: 107.1444 },
      { name: "麦积山石窟 (Maijishan Grottoes)", type: "sight", lat: 34.3541, lng: 106.0002 },
      { name: "天水常记呱呱 (Dinner: Changji Guagua)", type: "restaurant", lat: 34.5772, lng: 105.7231 },
      { name: "天水万豪福朋喜来登 (Four Points Tianshui)", type: "hotel", lat: 34.5612, lng: 105.7483 }
    ]
  },
  {
    day: 2,
    date: "2026-06-13",
    title: "天水 (Tianshui) → 兰州 (Lanzhou)",
    distance: "320km",
    time: "4.5h",
    sights: "甘肃省博物馆 (Gansu Provincial Museum). <br><br><b>历史与奇观 (Why it's fascinating):</b> 甘肃省博物馆是丝绸之路文物的顶级殿堂。最绝对的焦点是“马踏飞燕”（铜奔马），这尊东汉时期的青铜器不仅造型优美，更是巧妙地将马全身的重量集中在超越飞燕的一足之上，展现了古人惊人的力学计算。此外，这里还有中国最早的邮政信使“驿使图”画像砖。站在这些文物前，你能感受到汉武帝击破匈奴、凿空西域后，汉帝国那股张扬、奔放、无可匹敌的国家自信。<br><br><b>门票与预订:</b> 免费。微信搜索“甘肃省博物馆”提前1-3天预约。<a href='https://baike.baidu.com/item/%E7%94%98%E8%82%83%E7%9C%81%E5%8D%9A%E7%89%A9%E9%A6%86' target='_blank'>百度百科: 博物馆</a>",
    accommodation: "兰州安宁喜来登酒店 (Sheraton Lanzhou Anning). <a href='https://www.marriott.com/en-us/hotels/lhwsi-sheraton-lanzhou-anning/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 马子禄牛肉面 (Mazi Lu Beef Noodles) - 兰州牛肉面的泰斗，曾上过《舌尖上的中国》。 <a href='https://map.baidu.com/search/%E5%85%B0%E5%B7%9E%E9%A9%AC%E5%AD%90%E7%A6%84%E7%89%9B%E8%82%89%E9%9D%A2' target='_blank'>百度地图 (Baidu Maps)</a><br><b>晚餐 (Dinner):</b> 正宁路夜市老马家 (Zhengning Market) - 必吃牛奶鸡蛋醪糟。 <a href='https://map.baidu.com/search/%E5%85%B0%E5%B7%9E%E6%AD%A3%E5%AE%81%E8%B7%AF%E5%A4%9C%E5%B8%82' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：黄河穿城而过，晚上可前往中山桥（黄河第一铁桥）欣赏夜景。",
    spots: [
      { name: "甘肃省博物馆 (Gansu Provincial Museum)", type: "sight", lat: 36.0664, lng: 103.7744 },
      { name: "马子禄牛肉面 (Lunch: Mazi Lu)", type: "restaurant", lat: 36.0615, lng: 103.8211 },
      { name: "中山桥 (Zhongshan Bridge)", type: "sight", lat: 36.0645, lng: 103.8188 },
      { name: "正宁路夜市 (Dinner: Zhengning Market)", type: "restaurant", lat: 36.0526, lng: 103.8242 },
      { name: "兰州安宁喜来登 (Sheraton Lanzhou)", type: "hotel", lat: 36.1032, lng: 103.7145 }
    ]
  },
  {
    day: 3,
    date: "2026-06-14",
    title: "兰州 (Lanzhou) → 武威 (Wuwei) → 张掖 (Zhangye)",
    distance: "510km",
    time: "7h",
    sights: "武威雷台汉墓, 张掖七彩丹霞. <br><br><b>历史与奇观 (Why it's fascinating):</b> 今天你将驶入著名的“河西走廊”。公元前121年，年仅19岁的霍去病大破匈奴，夺取祁连山，汉武帝在此设武威、张掖、酒泉、敦煌四郡，彻底改变了亚洲的地缘政治。张掖七彩丹霞是数百万年地质运动的杰作，富含铁的岩层在氧化后呈现出如油画般绚烂的红、黄、橙色调，在夕阳下，整片山脉仿佛燃烧起来，是地球上最震撼的彩色丘陵。<br><br><b>活动与门票:</b> 丹霞热气球体验。微信小程序“张掖七彩丹霞旅游景区”提前1-3天购票，约93元。<a href='https://baike.baidu.com/item/%E5%BC%A0%E6%8E%96%E4%B8%83%E5%BD%A9%E4%B8%B9%E9%9C%9E%E6%97%85%E6%B8%B8%E6%99%AF%E5%8C%BA/19597288' target='_blank'>百度百科: 丹霞</a>",
    accommodation: "张掖金阳国际饭店 (Zhangye Jinyang International Hotel). <a href='https://www.trip.com/hotels/zhangye-hotel-detail-7607770/zhangye-jinyang-international-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 武威北关市场三套车 (Wuwei Three-Piece Meal) - 行面、腊肉、冰糖茯茶。 <a href='https://map.baidu.com/search/%E6%AD%A6%E5%A8%81%E5%8C%97%E5%85%B3%E5%B8%82%E5%9C%BA%E4%B8%89%E5%A5%97%E8%BD%A6' target='_blank'>百度地图 (Baidu Maps)</a><br><b>晚餐 (Dinner):</b> 孙记炒炮 (Sunji Chaopao) - 张掖非遗美食，炮仗一样的短面条。 <a href='https://map.baidu.com/search/%E5%BC%A0%E6%8E%96%E5%AD%99%E8%AE%B0%E7%82%92%E7%82%AE' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：河西走廊紫外线极强，丹霞景区全露天，务必做好硬核防晒。",
    spots: [
      { name: "武威雷台汉墓 (Wuwei Leitai)", type: "sight", lat: 37.9405, lng: 102.6415 },
      { name: "北关市场三套车 (Lunch: Wuwei Noodles)", type: "restaurant", lat: 37.9331, lng: 102.6310 },
      { name: "张掖七彩丹霞 (Zhangye Danxia)", type: "sight", lat: 38.9772, lng: 100.1264 },
      { name: "孙记炒炮 (Dinner: Sunji Chaopao)", type: "restaurant", lat: 38.9281, lng: 100.4566 },
      { name: "张掖金阳国际 (Zhangye Jinyang Hotel)", type: "hotel", lat: 38.9328, lng: 100.4517 }
    ]
  },
  {
    day: 4,
    date: "2026-06-15",
    title: "张掖 (Zhangye) → 马蹄寺 (Mati Temple) → 嘉峪关 (Jiayuguan)",
    distance: "290km",
    time: "4.5h",
    sights: "马蹄寺, 嘉峪关. <br><br><b>历史与奇观 (Why it's fascinating):</b> 马蹄寺最令人叫绝的是“三十三天”石窟，古人直接掏空了整座红砂岩山体，在内部凿出了七层迷宫般的垂直暗道。你需要手脚并用，在漆黑的岩体内部向上攀爬才能到达顶层，探险体验满分。嘉峪关则是明代万里长城的最西端。明朝因国力收缩，不再像汉朝那样将国门推至敦煌玉门关，而是退守此处。站在高达十余米的城墙上，看着关外苍茫的戈壁，你能深刻体会古人“西出阳关无故人”的苍凉与悲壮。<br><br><b>门票与预订:</b> 嘉峪关约110元。可提前1天美团购票。<a href='https://baike.baidu.com/item/%E5%98%89%E5%B3%AA%E5%85%B3' target='_blank'>百度百科: 嘉峪关</a>",
    accommodation: "嘉峪关广场假日酒店 (Plaza Holiday Hotel Jiayuguan). <a href='https://www.trip.com/hotels/jiayuguan-hotel-detail-1234909/plaza-holiday-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 马蹄寺裕固族帐篷餐厅 (Yugur tent restaurant for roasted lamb). <a href='https://map.baidu.com/search/%E9%A9%AC%E8%B9%84%E5%AF%BA%E9%A4%90%E9%A5%AE' target='_blank'>百度地图 (Baidu Maps)</a><br><b>晚餐 (Dinner):</b> 大唐美食街-眼镜烤肉 (Yan Jing BBQ) - 必点烤羊皮。 <a href='https://map.baidu.com/search/%E5%98%89%E5%B3%AA%E5%85%B3%E7%9C%BC%E9%95%9C%E7%83%A4%E8%82%89' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：马蹄寺攀爬极度消耗体力，建议穿防滑运动鞋。嘉峪关城楼风极大。",
    spots: [
      { name: "马蹄寺 (Mati Temple)", type: "sight", lat: 38.4831, lng: 100.4192 },
      { name: "裕固族帐篷 (Lunch: Yugur Tent)", type: "restaurant", lat: 38.4880, lng: 100.4210 },
      { name: "嘉峪关关城 (Jiayuguan Pass)", type: "sight", lat: 39.8037, lng: 98.2140 },
      { name: "眼镜烤肉 (Dinner: Yan Jing BBQ)", type: "restaurant", lat: 39.7750, lng: 98.2710 },
      { name: "广场假日酒店 (Plaza Holiday Hotel)", type: "hotel", lat: 39.7825, lng: 98.2785 }
    ]
  },
  {
    day: 5,
    date: "2026-06-16",
    title: "嘉峪关 (Jiayuguan) → 敦煌 (Dunhuang)",
    distance: "380km",
    time: "4.5h - 5h",
    sights: "莫高窟 (Mogao Caves), 鸣沙山月牙泉 (Echoing-Sand Mountain). <br><br><b>历史与奇观 (Why it's fascinating):</b> 莫高窟是人类历史上最伟大的文化遗址之一。洞窟内保留着大量北魏、唐代等时期的精美壁画。鸣沙山月牙泉则是世界地质奇观，千年以来，周围的狂风从未将这汪新月般的泉水掩埋。<br><br><b>门票与预订 (CRITICAL PERMIT INFO):</b> 莫高窟常规A类票需提前30天预订。由于时间紧迫，<b>请购买“B类应急票”(100元)</b>。B类票提前1天发售，可参观4个大型经典洞窟（不含数字电影），足以体验莫高窟的震撼，避免了取消敦煌行程的遗憾。<a href='https://www.mgk.org.cn/' target='_blank'>莫高窟官网</a>",
    accommodation: "敦煌万豪福朋喜来登酒店 (Four Points by Sheraton Dunhuang). <a href='https://www.marriott.com/en-us/hotels/dhqfp-four-points-by-sheraton-dunhuang/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 莫高窟数字中心餐厅简餐 (Digital Center Cafe).<br><b>晚餐 (Dinner):</b> 靖远尕六羊羔肉 (Jingyuan Galiu Lamb) - 敦煌最火爆的羊肉店。 <a href='https://map.baidu.com/search/%E6%95%A6%E7%85%8C%E9%9D%96%E8%BF%9C%E5%B0%95%E5%85%AD%E7%BE%8A%E7%BE%94%E8%82%89' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：鸣沙山的沙子极细，会损坏相机的机械结构。日落晚至晚上9点半。",
    spots: [
      { name: "莫高窟数字中心 (Mogao Digital Center)", type: "sight", lat: 40.1551, lng: 94.7915 },
      { name: "数字中心餐厅 (Lunch: Mogao Cafe)", type: "restaurant", lat: 40.1560, lng: 94.7920 },
      { name: "莫高窟实体洞窟 (Mogao Caves)", type: "sight", lat: 40.0381, lng: 94.8159 },
      { name: "鸣沙山月牙泉 (Crescent Lake)", type: "sight", lat: 40.0881, lng: 94.6685 },
      { name: "靖远尕六羊羔肉 (Dinner: Galiu Lamb)", type: "restaurant", lat: 40.1415, lng: 94.6651 },
      { name: "敦煌万豪 (Four Points Dunhuang)", type: "hotel", lat: 40.1465, lng: 94.6790 }
    ]
  },
  {
    day: 6,
    date: "2026-06-17",
    title: "敦煌 (Dunhuang) → 玉门关 (Yumenguan) → 瓜州 (Guazhou)",
    distance: "260km",
    time: "4.5h",
    sights: "玉门关 (Jade Gate Pass), 雅丹魔鬼城. <br><br><b>历史与奇观 (Why it's fascinating):</b> “春风不度玉门关”——汉武帝设立的玉门关是中原政权控制西域的绝对前哨。出了这道土门，便是荒无人烟的罗布泊无人区。雅丹魔鬼城则是由于几千万年极端的风蚀作用，将地面雕刻成了类似舰队、古堡的奇特地貌。这里地磁场异常，指南针常常失灵，大风刮过时声音如魔鬼呼啸。<br><br><b>门票与预订:</b> 雅丹魔鬼城约120元。现场购票。<a href='https://baike.baidu.com/item/%E7%8E%89%E9%97%A8%E5%85%B3' target='_blank'>百度百科: 玉门关</a>",
    accommodation: "瓜州融金酒店 (Guazhou Rong Jin Hotel).",
    food: "<b>午餐 (Lunch):</b> 玉门关游客中心简餐 (Yumenguan Cafe).<br><b>晚餐 (Dinner):</b> 瓜州夜市 (Guazhou Night Market) - 吃烤肉，并尽情享用全国最甜的瓜州蜜瓜。 <a href='https://map.baidu.com/search/%E7%93%9C%E5%B7%9E%E5%A4%9C%E5%B8%82' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：深入无人区，手机信号可能极弱，务必提前下载离线地图。出发前在敦煌加满油。",
    spots: [
      { name: "玉门关 (Jade Gate Pass)", type: "sight", lat: 40.3540, lng: 93.8643 },
      { name: "玉门关餐厅 (Lunch: Yumenguan Cafe)", type: "restaurant", lat: 40.3545, lng: 93.8650 },
      { name: "雅丹魔鬼城 (Yadan Park)", type: "sight", lat: 40.5050, lng: 93.2427 },
      { name: "瓜州夜市 (Dinner: Guazhou Night Market)", type: "restaurant", lat: 40.5200, lng: 95.7720 },
      { name: "瓜州融金酒店 (Rong Jin Hotel)", type: "hotel", lat: 40.5220, lng: 95.7765 }
    ]
  },
  {
    day: 7,
    date: "2026-06-18",
    title: "瓜州 (Guazhou) → 当金山口 (Dangjin Pass) → 哈密 (Hami)",
    distance: "420km",
    time: "7h",
    sights: "当金山口, 星星峡 (Xingxingxia). <br><br><b>历史与奇观 (Why it's fascinating):</b> 星星峡不仅是一个地理概念，更是心理上的“新疆大门”。玄奘法师当年偷渡玉门关后，便是九死一生穿过这片被称为“八百里瀚海”的莫贺延碛。晚清时期，左宗棠抬棺出征收复新疆，大军也是从此入疆。<br><br><b>门票与预订:</b> 自然风光与检查站，无需门票。<a href='https://baike.baidu.com/item/%E6%98%9F%E6%98%9F%E5%B3%A1' target='_blank'>百度百科: 星星峡</a>",
    accommodation: "哈密建国酒店 (Jianguo Hotel Hami). <a href='https://www.trip.com/hotels/hami-hotel-detail-1237956/jianguo-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 柳园服务区简餐 (Liuyuan Rest Stop).<br><b>晚餐 (Dinner):</b> 大营盘羊肉焖饼 (Dayingpan Mutton Pancakes) - 哈密当地绝对不可错过的非遗美食。 <a href='https://map.baidu.com/search/%E5%93%88%E5%AF%86%E5%A4%A7%E8%90%A5%E7%9B%98%E7%BE%8A%E8%82%89%E7%84%96%E9%A5%BC' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：<b>极其严格的边防安检：</b>星星峡检查站要求所有乘员下车查验护照。可能会耗时1-2小时，请保持耐心。",
    spots: [
      { name: "当金山口 (Dangjin Pass)", type: "sight", lat: 39.3175, lng: 94.2701 },
      { name: "柳园服务区 (Lunch: Liuyuan Rest Stop)", type: "restaurant", lat: 40.8521, lng: 95.0341 },
      { name: "星星峡检查站 (Xingxingxia Checkpoint)", type: "sight", lat: 41.8021, lng: 95.2155 },
      { name: "大营盘羊肉焖饼 (Dinner: Dayingpan Mutton)", type: "restaurant", lat: 42.8310, lng: 93.5180 },
      { name: "哈密建国酒店 (Jianguo Hotel)", type: "hotel", lat: 42.8252, lng: 93.5230 }
    ]
  },
  {
    day: 8,
    date: "2026-06-19",
    title: "哈密 (Hami) → 吐鲁番 (Turpan)",
    distance: "400km",
    time: "5.5h",
    sights: "交河故城 (Jiaohe Ruins), 坎儿井. <br><br><b>历史与奇观 (Why it's fascinating):</b> 交河故城是世界上最大、最古老、保存最完好的生土建筑城市。古人硬生生从高30米的黄土台地上“向下雕刻”出来的。唐朝曾在此设立最高级别的军政机构“安西都护府”。坎儿井则是新疆人民在干旱沙漠中创造的伟大水利奇迹，利用地下暗渠将天山雪水引入绿洲，全长高达5000多公里。<br><br><b>门票与预订:</b> 提前1天在微信搜索“交河故城”小程序购票。<a href='https://baike.baidu.com/item/%E4%BA%A4%E6%B2%B3%E6%95%85%E5%9F%8E' target='_blank'>百度百科: 交河故城</a>",
    accommodation: "吐鲁番美居酒店 (Mercure Turpan Downtown). <a href='https://all.accor.com/hotel/B9G7/index.en.shtml' target='_blank'>Accor Booking</a>",
    food: "<b>午餐 (Lunch):</b> 吐鲁番市区拌面 (Local Laghman).<br><b>晚餐 (Dinner):</b> 海尔巴格 (Herembagh) - 吐鲁番极具异域风情的高端维吾尔族餐厅，碎肉抓饭极佳。 <a href='https://map.baidu.com/search/%E5%90%90%E9%B2%81%E7%95%AA%E6%B5%B7%E5%B0%94%E5%B7%B4%E6%A0%BC' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：吐鲁番素有“火州”之称，6月气温可能高达45°C。交河故城全露天，强烈建议傍晚游览以免中暑。",
    spots: [
      { name: "火焰山 (Flaming Mountains)", type: "sight", lat: 42.9818, lng: 89.5936 },
      { name: "吐鲁番市区拌面 (Lunch: Laghman)", type: "restaurant", lat: 42.9410, lng: 89.1750 },
      { name: "坎儿井 (Karez Wells)", type: "sight", lat: 42.9431, lng: 89.1415 },
      { name: "交河故城 (Jiaohe Ruins)", type: "sight", lat: 42.9557, lng: 89.0664 },
      { name: "海尔巴格餐厅 (Dinner: Herembagh)", type: "restaurant", lat: 42.9420, lng: 89.1800 },
      { name: "吐鲁番美居 (Mercure Turpan)", type: "hotel", lat: 42.9550, lng: 89.1865 }
    ]
  },
  {
    day: 9,
    date: "2026-06-20",
    title: "吐鲁番 (Turpan) → 乌鲁木齐 (Urumqi)",
    distance: "200km",
    time: "3.5h",
    sights: "新疆博物馆, 新疆国际大巴扎. <br><br><b>历史与奇观 (Why it's fascinating):</b> 新疆维吾尔自治区博物馆的考古发掘震惊了世界。由于新疆极端干燥的气候，这里保存着大量古代干尸。最著名的是距今3800年的“楼兰美女”，不仅保存了完整的面容，甚至能看清她长长的睫毛。这里还藏有汉代的“五星出东方利中国”织锦。大巴扎则是世界上规模最大的大巴扎，重现了古代丝路集市的繁华景象。<br><br><b>门票与预订:</b> 博物馆免费，需提前1-3天在微信搜索“新疆维吾尔自治区博物馆”预约。<a href='https://baike.baidu.com/item/%E6%96%B0%E7%96%86%E7%BB%B4%E5%90%BE%E5%B0%94%E8%87%AA%E6%B2%BB%E5%8C%BA%E5%8D%9A%E7%89%A9%E9%A6%86' target='_blank'>百度百科: 新疆博物馆</a>",
    accommodation: "乌鲁木齐万怡酒店 (Fairfield by Marriott Urumqi). <a href='https://www.marriott.com/en-us/hotels/urcfi-fairfield-by-marriott-urumqi-beijing-road/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 丝路有约 (Silu Youyue) - 大巴扎附近的高端新疆菜。 <a href='https://map.baidu.com/search/%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E4%B8%9D%E8%B7%AF%E6%9C%89%E7%BA%A6' target='_blank'>百度地图 (Baidu Maps)</a><br><b>晚餐 (Dinner):</b> 血站大盘鸡 (Xuezhan Dapanji) - 乌鲁木齐大盘鸡的泰斗。 <a href='https://map.baidu.com/search/%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E8%A1%80%E7%AB%99%E5%A4%A7%E7%9B%98%E9%B8%A1' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：达坂城风区横风极强，请双手紧握方向盘。",
    spots: [
      { name: "新疆博物馆 (Xinjiang Museum)", type: "sight", lat: 43.8166, lng: 87.5752 },
      { name: "丝路有约 (Lunch: Silu Youyue)", type: "restaurant", lat: 43.7780, lng: 87.6180 },
      { name: "大巴扎 (Grand Bazaar)", type: "sight", lat: 43.7745, lng: 87.6166 },
      { name: "血站大盘鸡 (Dinner: Xuezhan Dapanji)", type: "restaurant", lat: 43.8120, lng: 87.5850 },
      { name: "万怡酒店 (Fairfield Urumqi)", type: "hotel", lat: 43.8560, lng: 87.5620 }
    ]
  },
  {
    day: 10,
    date: "2026-06-21",
    title: "乌鲁木齐 (Urumqi) → 赛里木湖 (Sayram Lake)",
    distance: "550km",
    time: "7.5h - 8h",
    sights: "赛里木湖, 果子沟大桥. <br><br><b>历史与奇观 (Why it's fascinating):</b> 赛里木湖是新疆海拔最高、面积最大的高山冷水湖。它被称为“大西洋最后一滴眼泪”，因为它是大西洋暖湿气流长途跋涉7000多公里后，最后受天山阻挡而形成的降水。果子沟则是伊犁的天然门户，成吉思汗西征时曾率军在此凿山开道。果子沟大桥是新疆第一座斜拉桥，极其雄伟。<br><br><b>门票与预订:</b> 提前1-2天在微信搜索“赛里木湖”小程序购票（约145元含自驾）。<a href='https://baike.baidu.com/item/%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96/161477' target='_blank'>百度百科: 赛里木湖</a>",
    accommodation: "新疆赛里木湖万豪AC酒店 (AC Hotel Xinjiang Sayram Lake). <a href='https://www.marriott.com/en-us/hotels/urcac-ac-hotel-xinjiang-sayram-lake/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> G30高速奎屯服务区简餐 (Kuitun Rest Stop).<br><b>晚餐 (Dinner):</b> 酒店内餐厅品尝“高白鲑” (Coregonus fish introduced from Russia).",
    practical: "提示：赛里木湖海拔高达2000米，即使在6月，湖边风大且极度寒冷。务必准备冲锋衣或薄羽绒服。",
    spots: [
      { name: "奎屯服务区 (Lunch: Kuitun Rest Stop)", type: "restaurant", lat: 44.4251, lng: 84.9010 },
      { name: "赛里木湖 (Sayram Lake)", type: "sight", lat: 44.5960, lng: 81.1610 },
      { name: "果子沟大桥 (Guozigou Bridge)", type: "sight", lat: 44.4283, lng: 80.9130 },
      { name: "AC酒店餐厅 (Dinner: AC Hotel)", type: "restaurant", lat: 44.5710, lng: 81.1650 },
      { name: "AC酒店 (AC Hotel Sayram Lake)", type: "hotel", lat: 44.5710, lng: 81.1650 }
    ]
  },
  {
    day: 11,
    date: "2026-06-22",
    title: "赛里木湖 (Sayram Lake) → 伊宁 (Yining) → 昭苏 (Zhaosu)",
    distance: "240km",
    time: "5h",
    sights: "伊宁喀赞其 (Yining Kazanqi), 昭苏草原 (Zhaosu Grasslands). <br><br><b>历史与奇观 (Why it's fascinating):</b> 伊宁喀赞其保留了原汁原味的维吾尔族传统生活方式，天蓝色的庭院和马车极具中亚风情。而昭苏则是汉武帝梦寐以求的“天马”（乌孙马）的故乡。公元前105年，汉武帝为了结盟西域抗击匈奴，将细君公主远嫁乌孙国（都城即在昭苏一带），开启了中原王朝与西域的政治联姻。<br><br><b>活动与门票:</b> 昭苏天马文化园观看“万马奔腾”表演。无需长时间提前预订，现场或提前1天购买。<a href='https://baike.baidu.com/item/%E6%98%AD%E8%8B%8F%E5%8E%BF%E5%A4%A9%E9%A9%AC%E6%96%87%E5%8C%96%E5%9B%AD' target='_blank'>百度百科: 天马园</a>",
    accommodation: "昭苏万豪福朋喜来登酒店 (Four Points by Sheraton Zhaosu). <a href='https://www.marriott.com/en-us/hotels/urczq-four-points-by-sheraton-zhaosu/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 喀赞其百年冰淇淋及烤包子 (Kazanqi local ice cream & baked buns). <a href='https://map.baidu.com/search/%E4%BC%8A%E5%AE%81%E5%96%80%E8%B5%9E%E5%85%B6%E5%86%B0%E6%B7%87%E6%B7%8B' target='_blank'>百度地图 (Baidu Maps)</a><br><b>晚餐 (Dinner):</b> 昭苏牧民原生态手抓肉 (Zhaosu Kazakh Hand-grabbed mutton).",
    practical: "提示：昭苏被称为“天山乡”，气候湿润，夏季常有阵雨，常能见到双彩虹。",
    spots: [
      { name: "喀赞其 (Kazanqi)", type: "sight", lat: 43.9061, lng: 81.3365 },
      { name: "喀赞其冰淇淋 (Lunch: Kazanqi Ice Cream)", type: "restaurant", lat: 43.9070, lng: 81.3375 },
      { name: "天马文化园 (Zhaosu Horse Park)", type: "sight", lat: 43.1480, lng: 80.9520 },
      { name: "昭苏牧民餐厅 (Dinner: Zhaosu Mutton)", type: "restaurant", lat: 43.1500, lng: 81.1200 },
      { name: "万豪福朋 (Four Points Zhaosu)", type: "hotel", lat: 43.1558, lng: 81.1256 }
    ]
  },
  {
    day: 12,
    date: "2026-06-23",
    title: "昭苏 (Zhaosu) → 特克斯 (Tekes)",
    distance: "60km",
    time: "1.5h",
    sights: "特克斯八卦城 (Tekes Bagua City). <br><br><b>历史与奇观 (Why it's fascinating):</b> 特克斯是世界上唯一保存完整、建筑正规的“八卦城”。传说最早由南宋道教全真七子之一的丘处机（曾受成吉思汗西征时邀请前往西域）在此定下八卦风水。特克斯在20世纪90年代取消了红绿灯，成为中国唯一没有红绿灯的城市，车辆运行却依然井然有序。<br><br><b>活动:</b> 乘坐摩天轮或太极眼热气球俯瞰八卦城全貌。现场购票即可。<a href='https://baike.baidu.com/item/%E7%89%B9%E5%85%8B%E6%96%AF%E5%85%AB%E5%8D%A6%E5%9F%8E' target='_blank'>百度百科: 八卦城</a>",
    accommodation: "特克斯天麓酒店 (Tianlu Hotel - No international chains).",
    food: "<b>午餐 (Lunch):</b> 特克斯八卦城内羊排揪片子 (Mutton rib noodles).<br><b>晚餐 (Dinner):</b> 离街特色民宿区烧烤 (Barbecue at Li Street). <a href='https://map.baidu.com/search/%E7%89%B9%E5%85%8B%E6%96%AF%E7%A6%BB%E8%A1%97' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：特克斯是前往喀拉峻大草原的唯一大本营，物资补充请在此完成。",
    spots: [
      { name: "特克斯八卦城 (Tekes Bagua City)", type: "sight", lat: 43.2185, lng: 81.8385 },
      { name: "羊排揪片子 (Lunch: Tekes Noodles)", type: "restaurant", lat: 43.2190, lng: 81.8390 },
      { name: "特克斯离街 (Dinner: Li Street BBQ)", type: "restaurant", lat: 43.2150, lng: 81.8350 },
      { name: "特克斯天麓酒店 (Tianlu Hotel)", type: "hotel", lat: 43.2205, lng: 81.8400 }
    ]
  },
  {
    day: 13,
    date: "2026-06-24",
    title: "特克斯 (Tekes) → 喀拉峻 (Kalajun) → 那拉提 (Nalati)",
    distance: "250km",
    time: "4.5h",
    sights: "喀拉峻大草原 (Kalajun Grassland). <br><br><b>历史与奇观 (Why it's fascinating):</b> 喀拉峻在哈萨克语中意为“黑色的莽原”，它是西天山世界自然遗产的重要组成部分。相较于高度商业化的平坦草原，喀拉峻保留了最原始的立体高山草甸地貌，沟壑纵横，在光影下如同人体曲线，被称为“人体草原”。这里曾是古代乌孙国的夏牧场。<br><br><b>活动与门票:</b> 深度骑马体验。提前1-2天在微信小程序“喀拉峻旅游区”购全景游票（约275元）。<a href='https://baike.baidu.com/item/%E5%96%80%E6%8B%89%E5%B3%BB%E5%A4%A7%E8%8D%89%E5%8E%9F' target='_blank'>百度百科: 喀拉峻</a>",
    accommodation: "那拉提文旅度假酒店 (Nalati Wenlu Resort - Local premium).",
    food: "<b>午餐 (Lunch):</b> 喀拉峻景区内毡房简餐 (Yurt lunch inside Kalajun).<br><b>晚餐 (Dinner):</b> 那拉提镇哈萨克正宗烤全羊 (Authentic roasted lamb in Nalati town). <a href='https://map.baidu.com/search/%E9%82%A3%E6%8B%89%E6%8F%90%E9%95%87%E7%83%A4%E5%85%A8%E7%BE%8A' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：喀拉峻面积巨大，游览需大量步行，请穿戴舒适的徒步鞋，并带好防雨外套。",
    spots: [
      { name: "喀拉峻草原 (Kalajun Grassland)", type: "sight", lat: 43.0450, lng: 82.0160 },
      { name: "草原毡房 (Lunch: Kalajun Yurt)", type: "restaurant", lat: 43.0460, lng: 82.0170 },
      { name: "那拉提镇烤全羊 (Dinner: Nalati Lamb)", type: "restaurant", lat: 43.2650, lng: 84.1450 },
      { name: "那拉提度假酒店 (Nalati Resort)", type: "hotel", lat: 43.2662, lng: 84.1485 }
    ]
  },
  {
    day: 14,
    date: "2026-06-25",
    title: "那拉提 (Nalati) → 独库公路北段 (Duku Highway) → 独山子 (Dushanzi)",
    distance: "260km",
    time: "7h",
    sights: "独库公路北段 (Duku Highway North Section). <br><br><b>历史与奇观 (Why it's fascinating):</b> 独库公路（G217）被称为“中国最美公路”。上世纪70年代，为了打通天山南北的国防战略通道，数万名解放军官兵在极端恶劣的冰川和悬崖上奋战了近10年，168名官兵长眠于此。这条路跨越天山近10条主要河流，让你在一天内经历春夏秋冬四季，不仅是地质奇观，更是一座英雄的丰碑。<br><br><b>门票与预订:</b> 公路免费，无需门票。<a href='https://baike.baidu.com/item/%E7%8B%AC%E5%BA%93%E5%85%AC%E8%B7%AF' target='_blank'>百度百科: 独库公路</a>",
    accommodation: "独山子玛依塔柯酒店 (Mayitake Hotel Dushanzi).",
    food: "<b>午餐 (Lunch):</b> 乔尔玛服务区简餐 (Qiaoerma Service Area).<br><b>晚餐 (Dinner):</b> 奎屯大盘辣子鸡 (Kuitun Spicy Chicken) - 独山子周边特色。 <a href='https://map.baidu.com/search/%E5%A5%8E%E5%B1%AF%E5%A4%A7%E7%9B%98%E9%B8%A1' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：<b>绝对禁忌：</b>仅限7座及以下客车。山区悬崖极多，天气多变，即使是6月也可能因突然降雪而临时封闭。必须在那拉提加满油！",
    spots: [
      { name: "乔尔玛烈士陵园 (Qiaoerma)", type: "sight", lat: 43.9185, lng: 84.2882 },
      { name: "乔尔玛服务区 (Lunch: Qiaoerma Rest Stop)", type: "restaurant", lat: 43.9190, lng: 84.2890 },
      { name: "哈希勒根达坂 (Hasilegen Pass)", type: "sight", lat: 44.0720, lng: 84.4530 },
      { name: "奎屯大盘鸡 (Dinner: Kuitun Spicy Chicken)", type: "restaurant", lat: 44.3350, lng: 84.8850 },
      { name: "玛依塔柯酒店 (Mayitake Hotel)", type: "hotel", lat: 44.3315, lng: 84.8810 }
    ]
  },
  {
    day: 15,
    date: "2026-06-26",
    title: "独山子 (Dushanzi) → 乌鲁木齐 (Urumqi)",
    distance: "250km",
    time: "3.5h",
    sights: "安集海大峡谷 (Anjihai Grand Canyon). <br><br><b>历史与奇观 (Why it's fascinating):</b> 安集海大峡谷并非历史人文景点，而是天山雪水融化后经过亿万年冲刷形成的大地裂缝。它是新疆极少数尚未被完全商业化开发的野生摄影圣地。富含矿物质的泥质岩石呈现出鲜艳的红色，与深渊中碧绿色的安集海河交织在一起，形成极度震撼的视觉冲击力，仿佛大地的巨大伤口。<br><br><b>门票与预订:</b> 属于未完全开发野景点，目前多为免费或收取小额卫生费。无需提前预约。<a href='https://baike.baidu.com/item/%E5%AE%89%E9%9B%86%E6%B5%B7%E5%A4%A7%E5%B3%A1%E8%B0%B7' target='_blank'>百度百科: 安集海</a>",
    accommodation: "乌鲁木齐万怡酒店 (Fairfield by Marriott Urumqi). <a href='https://www.marriott.com/en-us/hotels/urcfi-fairfield-by-marriott-urumqi-beijing-road/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 安集海镇农家乐 (Farmhouse food in Anjihai town).<br><b>晚餐 (Dinner):</b> 胖老汉清真餐饮 (Panglaohan Halal Restaurant) - 乌鲁木齐著名的椒麻鸡，极度火爆。 <a href='https://map.baidu.com/search/%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E8%83%96%E8%80%81%E6%B1%89' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：大峡谷边缘没有护栏，风大，拍照时务必远离悬崖边缘。",
    spots: [
      { name: "安集海大峡谷 (Anjihai Canyon)", type: "sight", lat: 44.2052, lng: 85.1630 },
      { name: "安集海镇农家乐 (Lunch: Anjihai Farmhouse)", type: "restaurant", lat: 44.2150, lng: 85.1680 },
      { name: "胖老汉清真餐饮 (Dinner: Panglaohan)", type: "restaurant", lat: 43.8350, lng: 87.5950 },
      { name: "万怡酒店 (Fairfield Urumqi)", type: "hotel", lat: 43.8560, lng: 87.5620 }
    ]
  },
  {
    day: 16,
    date: "2026-06-27",
    title: "乌鲁木齐 (Urumqi) → 天山天池 (Tianchi) → 机场",
    distance: "120km",
    time: "2.5h",
    sights: "天山天池 (Heavenly Lake of Tianshan). <br><br><b>历史与奇观 (Why it's fascinating):</b> 天山天池是联合国教科文组织世界自然遗产。古称“瑶池”，在中国古代神话中，这里是西王母沐浴的地方。清乾隆四十八年（1783年），乌鲁木齐都统明亮在此开渠引水，并在《灵山天池统凿水渠碑记》中将之定名为“天池”。背靠常年积雪的博格达峰，湛蓝的湖水映衬着雪山，是新疆最具标志性的名片。<br><br><b>门票与预订:</b> 约155元。提前1天在微信小程序“天山天池”购票即可。<a href='https://baike.baidu.com/item/%E5%A4%A9%E5%B1%B1%E5%A4%A9%E6%B1%A0%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C%E5%8C%BA' target='_blank'>百度百科: 天池</a>",
    accommodation: "无 (N/A - Flight out)",
    food: "<b>午餐 (Lunch):</b> 天池景区内游客中心简餐 (Tianchi visitor center).<br><b>晚餐 (Dinner):</b> 机场候机楼内就餐。",
    practical: "提示：<b>安全红线：</b>乌鲁木齐地窝堡机场（URC）安检级别是全中国最高。搭乘国际航班请务必提前3-4小时抵达机场。",
    spots: [
      { name: "天山天池 (Tianchi)", type: "sight", lat: 43.8906, lng: 88.1311 },
      { name: "天池游客中心 (Lunch: Tianchi Cafe)", type: "restaurant", lat: 43.8910, lng: 88.1320 },
      { name: "地窝堡国际机场 (Urumqi Airport)", type: "waypoint", lat: 43.9036, lng: 87.4735 }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = itineraryData;
}
