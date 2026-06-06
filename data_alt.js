const itineraryDataAlt = [
  {
    day: 1,
    date: "2026-06-12",
    title: "西安 (Xi'an) → 宝鸡 (Baoji) → 天水 (Tianshui)",
    distance: "345km",
    time: "4.5h - 5h",
    sights: "麦积山石窟 (Maijishan Grottoes). <br><br><b>历史与奇观 (Why it's fascinating):</b> 麦积山石窟并非普通的地面建筑，而是在高达142米的垂直麦垛状孤峰绝壁上，硬生生开凿出来的。最令人震撼的是它那层层叠叠、凌空盘旋在悬崖上的“凌空栈道”。<br><br><b>门票与预订 (CRITICAL PERMIT INFO):</b> 约90元。<b>必须提前7天</b>在微信搜索小程序“麦积山石窟”预约A类票。否则无法登上悬崖栈道！<a href='https://baike.baidu.com/item/%E9%BA%A6%E7%A7%AF%E5%B1%B1%E7%9F%B3%E7%AA%9F' target='_blank'>百度百科: 麦积山</a>",
    accommodation: "天水万豪福朋喜来登酒店 (Four Points Tianshui). <a href='https://www.marriott.com/en-us/hotels/tian-four-points-tianshui/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 宝鸡周礼大食堂 (Baoji Zhouli Canteen). <a href='https://uri.amap.com/search?keyword=%E5%AE%9D%E9%B8%A1%E5%91%A8%E7%A4%BC%E5%A4%A7%E9%A3%9F%E5%A0%82' target='_blank'>高德地图 (Baidu Maps)</a><br><b>晚餐 (Dinner):</b> 天水常记呱呱 (Changji Guagua). <a href='https://uri.amap.com/search?keyword=%E5%A4%A9%E6%B0%B4%E5%B8%B8%E8%AE%B0%E5%91%B1%E5%91%B1' target='_blank'>高德地图 (Baidu Maps)</a>",
    practical: "提示：麦积山绝壁栈道非常陡峭，恐高者需做好心理准备。",
    spots: [
      { name: "西安出发 (Depart Xi'an)", type: "waypoint", lat: 34.3416, lng: 108.9398 },
      { name: "宝鸡周礼大食堂 (Lunch)", type: "restaurant", lat: 34.3643, lng: 107.1444 },
      { name: "麦积山石窟 (Maijishan Grottoes)", type: "sight", lat: 34.3541, lng: 106.0002 },
      { name: "天水常记呱呱 (Dinner)", type: "restaurant", lat: 34.5772, lng: 105.7231 },
      { name: "天水万豪福朋喜来登 (Four Points Tianshui)", type: "hotel", lat: 34.5612, lng: 105.7483 }
    ]
  },
  {
    day: 2,
    date: "2026-06-13",
    title: "天水 (Tianshui) → 兰州 (Lanzhou)",
    distance: "320km",
    time: "4.5h",
    sights: "甘肃省博物馆 (Gansu Provincial Museum). <br><br><b>历史与奇观:</b> 收藏着著名的“马踏飞燕”（铜奔马），不仅造型优美，更是巧妙地将马全身的重量集中在超越飞燕的一足之上。<br><br><b>门票与预订:</b> 免费。微信搜索“甘肃省博物馆”提前1-3天预约。<a href='https://baike.baidu.com/item/%E7%94%98%E8%82%83%E7%9C%81%E5%8D%9A%E7%89%A9%E9%A6%86' target='_blank'>百度百科: 博物馆</a>",
    accommodation: "兰州安宁喜来登酒店 (Sheraton Lanzhou Anning). <a href='https://www.marriott.com/en-us/hotels/lhwsi-sheraton-lanzhou-anning/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 马子禄牛肉面. <a href='https://uri.amap.com/search?keyword=%E5%85%B0%E5%B7%9E%E9%A9%AC%E5%AD%90%E7%A6%84%E7%89%9B%E8%82%89%E9%9D%A2' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 正宁路夜市老马家. <a href='https://uri.amap.com/search?keyword=%E5%85%B0%E5%B7%9E%E6%AD%A3%E5%AE%81%E8%B7%AF%E5%A4%9C%E5%B8%82' target='_blank'>高德地图</a>",
    practical: "提示：黄河穿城而过，晚上可前往中山桥（黄河第一铁桥）欣赏夜景。",
    spots: [
      { name: "甘肃省博物馆", type: "sight", lat: 36.0664, lng: 103.7744 },
      { name: "马子禄牛肉面", type: "restaurant", lat: 36.0615, lng: 103.8211 },
      { name: "正宁路夜市", type: "restaurant", lat: 36.0526, lng: 103.8242 },
      { name: "兰州安宁喜来登", type: "hotel", lat: 36.1032, lng: 103.7145 }
    ]
  },
  {
    day: 3,
    date: "2026-06-14",
    title: "兰州 (Lanzhou) → 武威 (Wuwei) → 张掖 (Zhangye)",
    distance: "510km",
    time: "7h",
    sights: "张掖七彩丹霞 (Zhangye Danxia). <br><br><b>历史与奇观:</b> 数百万年地质运动的杰作，富含铁的岩层在氧化后呈现出如油画般绚烂的红、黄、橙色调，在夕阳下仿佛燃烧起来。<br><br><b>活动与门票:</b> 丹霞热气球体验。微信小程序“张掖七彩丹霞旅游景区”提前1-3天购票。<a href='https://baike.baidu.com/item/%E5%BC%A0%E6%8E%96%E4%B8%83%E5%BD%A9%E4%B8%B9%E9%9C%9E%E6%97%85%E6%B8%B8%E6%99%AF%E5%8C%BA/19597288' target='_blank'>百度百科: 丹霞</a>",
    accommodation: "张掖金阳国际饭店 (Zhangye Jinyang International Hotel). <a href='https://www.trip.com/hotels/zhangye-hotel-detail-7607770/zhangye-jinyang-international-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 武威北关市场三套车. <a href='https://uri.amap.com/search?keyword=%E6%AD%A6%E5%A8%81%E5%8C%97%E5%85%B3%E5%B8%82%E5%9C%BA%E4%B8%89%E5%A5%97%E8%BD%A6' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 孙记炒炮. <a href='https://uri.amap.com/search?keyword=%E5%BC%A0%E6%8E%96%E5%AD%99%E8%AE%B0%E7%82%92%E7%82%AE' target='_blank'>高德地图</a>",
    practical: "提示：河西走廊紫外线极强，丹霞景区全露天，务必做好硬核防晒。",
    spots: [
      { name: "武威北关市场", type: "restaurant", lat: 37.9331, lng: 102.6310 },
      { name: "张掖七彩丹霞", type: "sight", lat: 38.9772, lng: 100.1264 },
      { name: "孙记炒炮", type: "restaurant", lat: 38.9281, lng: 100.4566 },
      { name: "张掖金阳国际", type: "hotel", lat: 38.9328, lng: 100.4517 }
    ]
  },
  {
    day: 4,
    date: "2026-06-15",
    title: "张掖 (Zhangye) → 马蹄寺 (Mati Temple) → 嘉峪关 (Jiayuguan)",
    distance: "290km",
    time: "4.5h",
    sights: "马蹄寺, 嘉峪关. <br><br><b>历史与奇观:</b> 嘉峪关是明代万里长城的最西端。站在高达十余米的城墙上，看着关外苍茫的戈壁，你能深刻体会古人“西出阳关无故人”的苍凉与悲壮。<br><br><b>门票与预订:</b> 嘉峪关约110元。可提前1天美团购票。<a href='https://baike.baidu.com/item/%E5%98%89%E5%B3%AA%E5%85%B3' target='_blank'>百度百科: 嘉峪关</a>",
    accommodation: "嘉峪关广场假日酒店 (Plaza Holiday Hotel Jiayuguan). <a href='https://www.trip.com/hotels/jiayuguan-hotel-detail-1234909/plaza-holiday-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 马蹄寺裕固族帐篷餐厅. <a href='https://uri.amap.com/search?keyword=%E9%A9%AC%E8%B9%84%E5%AF%BA%E9%A4%90%E9%A5%AE' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 大唐美食街-眼镜烤肉. <a href='https://uri.amap.com/search?keyword=%E5%98%89%E5%B3%AA%E5%85%B3%E7%9C%BC%E9%95%9C%E7%83%A4%E8%82%89' target='_blank'>高德地图</a>",
    practical: "提示：嘉峪关城楼风极大。",
    spots: [
      { name: "马蹄寺", type: "sight", lat: 38.4831, lng: 100.4192 },
      { name: "嘉峪关关城", type: "sight", lat: 39.8037, lng: 98.2140 },
      { name: "眼镜烤肉", type: "restaurant", lat: 39.7750, lng: 98.2710 },
      { name: "广场假日酒店", type: "hotel", lat: 39.7825, lng: 98.2785 }
    ]
  },
  {
    day: 5,
    date: "2026-06-16",
    title: "嘉峪关 (Jiayuguan) → 哈密 (Hami)",
    distance: "580km",
    time: "7h",
    sights: "星星峡 (Xingxingxia). <br><br><b>历史与奇观 (Why it's fascinating):</b> 星星峡不仅是一个地理概念，更是心理上的“新疆大门”。晚清时期，左宗棠抬棺出征收复新疆，大军便是从此入疆。这条路线我们直接越过敦煌，直奔新疆腹地，以节省时间去更北方的阿勒泰森林。<br><br><b>门票与预订:</b> 自然风光与检查站，无需门票。<a href='https://baike.baidu.com/item/%E6%98%9F%E6%98%9F%E5%B3%A1' target='_blank'>百度百科: 星星峡</a>",
    accommodation: "哈密建国酒店 (Jianguo Hotel Hami). <a href='https://www.trip.com/hotels/hami-hotel-detail-1237956/jianguo-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 柳园服务区简餐 (Liuyuan Rest Stop).<br><b>晚餐 (Dinner):</b> 大营盘羊肉焖饼 (Dayingpan Mutton Pancakes) - 哈密当地不可错过的非遗美食。 <a href='https://uri.amap.com/search?keyword=%E5%93%88%E5%AF%86%E5%A4%A7%E8%90%A5%E7%9B%98%E7%BE%8A%E8%82%89%E7%84%96%E9%A5%BC' target='_blank'>高德地图 (Baidu Maps)</a>",
    practical: "提示：<b>极其严格的边防安检：</b>星星峡检查站要求所有乘员下车查验护照。可能会耗时1-2小时，请保持耐心。",
    spots: [
      { name: "星星峡检查站", type: "sight", lat: 41.8021, lng: 95.2155 },
      { name: "大营盘羊肉焖饼", type: "restaurant", lat: 42.8310, lng: 93.5180 },
      { name: "哈密建国酒店", type: "hotel", lat: 42.8252, lng: 93.5230 }
    ]
  },
  {
    day: 6,
    date: "2026-06-17",
    title: "哈密 (Hami) → 吐鲁番 (Turpan)",
    distance: "400km",
    time: "5.5h",
    sights: "交河故城 (Jiaohe Ruins), 坎儿井. <br><br><b>历史与奇观:</b> 交河故城是世界上最大、最古老、保存最完好的生土建筑城市。古人硬生生从高30米的黄土台地上“向下雕刻”出来的。坎儿井则是干旱沙漠中创造的伟大水利奇迹。<br><br><b>门票与预订:</b> 提前1天在微信搜索“交河故城”小程序购票。<a href='https://baike.baidu.com/item/%E4%BA%A4%E6%B2%B3%E6%95%85%E5%9F%8E' target='_blank'>百度百科: 交河故城</a>",
    accommodation: "吐鲁番美居酒店 (Mercure Turpan Downtown). <a href='https://all.accor.com/hotel/B9G7/index.en.shtml' target='_blank'>Accor Booking</a>",
    food: "<b>午餐 (Lunch):</b> 吐鲁番市区拌面.<br><b>晚餐 (Dinner):</b> 海尔巴格 (Herembagh) - 吐鲁番极具异域风情的高端维吾尔族餐厅，碎肉抓饭极佳。 <a href='https://uri.amap.com/search?keyword=%E5%90%90%E9%B2%81%E7%95%AA%E6%B5%B7%E5%B0%94%E5%B7%B4%E6%A0%BC' target='_blank'>高德地图</a>",
    practical: "提示：吐鲁番素有“火州”之称，6月气温可能高达45°C。交河故城全露天，强烈建议傍晚游览以免中暑。",
    spots: [
      { name: "坎儿井", type: "sight", lat: 42.9431, lng: 89.1415 },
      { name: "交河故城", type: "sight", lat: 42.9557, lng: 89.0664 },
      { name: "海尔巴格餐厅", type: "restaurant", lat: 42.9420, lng: 89.1800 },
      { name: "吐鲁番美居", type: "hotel", lat: 42.9550, lng: 89.1865 }
    ]
  },
  {
    day: 7,
    date: "2026-06-18",
    title: "吐鲁番 (Turpan) → 乌鲁木齐 (Urumqi)",
    distance: "200km",
    time: "3.5h",
    sights: "新疆博物馆, 新疆国际大巴扎. <br><br><b>历史与奇观:</b> 博物馆藏有震惊世界的距今3800年的“楼兰美女”干尸。大巴扎则是世界上规模最大的大巴扎，重现了古代丝路集市的繁华景象。<br><br><b>门票与预订:</b> 博物馆免费，需提前1-3天在微信搜索“新疆维吾尔自治区博物馆”预约。<a href='https://baike.baidu.com/item/%E6%96%B0%E7%96%86%E7%BB%B4%E5%90%BE%E5%B0%94%E8%87%AA%E6%B2%BB%E5%8C%BA%E5%8D%9A%E7%89%A9%E9%A6%86' target='_blank'>百度百科: 新疆博物馆</a>",
    accommodation: "乌鲁木齐万怡酒店 (Fairfield by Marriott Urumqi). <a href='https://www.marriott.com/en-us/hotels/urcfi-fairfield-by-marriott-urumqi-beijing-road/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 丝路有约 - 大巴扎附近的高端新疆菜。 <a href='https://uri.amap.com/search?keyword=%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E4%B8%9D%E8%B7%AF%E6%9C%89%E7%BA%A6' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 血站大盘鸡 - 乌鲁木齐大盘鸡的泰斗。 <a href='https://uri.amap.com/search?keyword=%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E8%A1%80%E7%AB%99%E5%A4%A7%E7%9B%98%E9%B8%A1' target='_blank'>高德地图</a>",
    practical: "提示：达坂城风区横风极强，请双手紧握方向盘。",
    spots: [
      { name: "新疆博物馆", type: "sight", lat: 43.8166, lng: 87.5752 },
      { name: "大巴扎", type: "sight", lat: 43.7745, lng: 87.6166 },
      { name: "血站大盘鸡", type: "restaurant", lat: 43.8120, lng: 87.5850 },
      { name: "万怡酒店", type: "hotel", lat: 43.8560, lng: 87.5620 }
    ]
  },
  {
    day: 8,
    date: "2026-06-19",
    title: "乌鲁木齐 (Urumqi) → S21阿乌高速 → 可可托海 (Keketuohai)",
    distance: "500km",
    time: "6h",
    sights: "S21沙漠高速公路, 可可托海国家地质公园 (Keketuohai Geopark). <br><br><b>历史与奇观:</b> S21是中国首条横穿古尔班通古特沙漠的高速公路。可可托海的额尔齐斯大峡谷有着震撼的花岗岩地貌，还有神秘的“三号矿坑”——这里曾为中国偿还了苏联巨额债务，并为“两弹一星”提供了稀有金属。<br><br><b>安全与门票:</b> 可可托海门票+区间车约126元，微信小程序购票。<b>警告：沙漠高速横风极大，请务必两人轮换开车！</b>",
    accommodation: "富蕴可可托海镇特色酒店 (Keketuohai Town Hotel).",
    food: "<b>午餐 (Lunch):</b> 克拉美丽服务区简餐.<br><b>晚餐 (Dinner):</b> 可可托海镇额河烤鱼 (Ertix River Roasted Fish). <a href='https://uri.amap.com/search?keyword=%E5%8F%AF%E5%8F%AF%E6%89%98%E6%B5%B7%E9%95%87%E7%83%A4%E9%B1%BC' target='_blank'>高德地图</a>",
    practical: "提示：可可托海早晚温差极大，即使在6月也可能需要薄羽绒服。",
    spots: [
      { name: "S21沙漠高速", type: "waypoint", lat: 44.1200, lng: 87.5000 },
      { name: "可可托海国家地质公园", type: "sight", lat: 47.1990, lng: 89.8140 },
      { name: "可可托海镇酒店", type: "hotel", lat: 47.1900, lng: 89.8000 }
    ]
  },
  {
    day: 9,
    date: "2026-06-20",
    title: "可可托海 (Keketuohai) → 喀纳斯 (Kanas)",
    distance: "320km",
    time: "5h",
    sights: "阿勒泰山脉风光. <br><br><b>路线:</b> 离开可可托海，沿着阿尔泰山脉向西北方向驶入喀纳斯腹地。<br><br><b>门票与提示:</b> 喀纳斯景区实行实名预约。",
    accommodation: "喀纳斯老村特色木屋 (Kanas Old Village Wooden Cabin). <b>(住景区需二进+70元)</b>",
    food: "<b>午餐 (Lunch):</b> 沿途北屯或布尔津简餐.<br><b>晚餐 (Dinner):</b> 喀纳斯老村土火锅.",
    practical: "提示：阿勒泰地区区间测速极多，请务必遵守限速。由于阿勒泰海拔较高，晚间气温剧降，请准备保暖衣物。",
    spots: [
      { name: "喀纳斯老村 (Kanas Old Village)", type: "hotel", lat: 48.7050, lng: 87.0100 }
    ]
  },
  {
    day: 10,
    date: "2026-06-21",
    title: "喀纳斯 (Kanas) → 禾木 (Hemu)",
    distance: "70km",
    time: "2h",
    sights: "喀纳斯湖 (Kanas Lake), 禾木村 (Hemu Village). <br><br><b>历史与奇观 (Why it's fascinating):</b> 喀纳斯被称为“东方瑞士”，这里有着如同调色板一样的西伯利亚泰加林和变色湖泊。观鱼台是俯瞰喀纳斯湖水怪传说的最佳地点。下午前往禾木村，这是图瓦人的保留地，一排排原木搭建的小木屋散布在白桦林中，晨雾缭绕时宛如仙境。<br><br><b>活动与门票:</b> 喀纳斯一进门票+区间车 230元/人 (住景区需二进+70元)。微信小程序“喀纳斯景区”购票。<a href='https://baike.baidu.com/item/%E5%96%80%E7%BA%B3%E6%96%AF%E6%B9%96' target='_blank'>百度百科: 喀纳斯</a>",
    accommodation: "禾木村特色木屋民宿 (Hemu Village Wooden Cabin).",
    food: "<b>午餐 (Lunch):</b> 喀纳斯换乘中心简餐.<br><b>晚餐 (Dinner):</b> 禾木村土火锅 (Hemu Local Hotpot) - 在木屋里吃着热腾腾的火锅，感受山林寒夜。 <a href='https://uri.amap.com/search?keyword=%E7%A6%BE%E6%9C%A8%E6%9D%91%E5%9C%9F%E7%81%AB%E9%94%85' target='_blank'>高德地图</a>",
    practical: "提示：禾木村清晨极为寒冷，观赏晨雾需要穿冲锋衣或羽绒服。",
    spots: [
      { name: "喀纳斯湖 (Kanas Lake)", type: "sight", lat: 48.7166, lng: 87.0333 },
      { name: "观鱼台 (Guanyu Pavilion)", type: "sight", lat: 48.6950, lng: 87.0120 },
      { name: "禾木村 (Hemu Village)", type: "hotel", lat: 48.5670, lng: 87.4330 }
    ]
  },
  {
    day: 11,
    date: "2026-06-22",
    title: "禾木 (Hemu) → 五彩滩 (Wucaitan) → 魔鬼城 (Ghost City) → 克拉玛依",
    distance: "450km",
    time: "7h",
    sights: "五彩滩 (Five-color Beach), 世界魔鬼城 (World Ghost City). <br><br><b>历史与奇观:</b> 下午先前往五彩滩看日落(门票50元/人)，这里是典型的雅丹地貌，一河隔两岸，南北两重天。随后驶入苍茫的准噶尔盆地，到达魔鬼城。魔鬼城千万年的风蚀形成了无数如同古堡般的土丘，风穿过缝隙时发出令人毛骨悚然的嘶吼声。<br><br><b>门票与预订:</b> 魔鬼城门票+小火车 62元/人，微信小程序购票。<a href='https://baike.baidu.com/item/%E4%B9%8C%E5%B0%94%E7%A6%BE%E9%AD%94%E9%AC%BC%E5%9F%8E' target='_blank'>百度百科: 魔鬼城</a>",
    accommodation: "克拉玛依玛依塔柯酒店 (Mayitake Hotel Karamay).",
    food: "<b>午餐 (Lunch):</b> 乌尔禾镇阿吾斯奇羊肉 (Urho Mutton).<br><b>晚餐 (Dinner):</b> 克拉玛依市区烤鱼 (Karamay Roasted Fish). <a href='https://uri.amap.com/search?keyword=%E5%85%8B%E6%8B%89%E7%8E%9B%E4%BE%9D%E7%83%A4%E9%B1%BC' target='_blank'>高德地图</a>",
    practical: "提示：魔鬼城全露天，紫外线极强且极度干热。克拉玛依是中国最富裕的石油城之一，夜晚城市景观非常现代。",
    spots: [
      { name: "五彩滩 (Wucaitan)", type: "sight", lat: 47.8220, lng: 86.8110 },
      { name: "世界魔鬼城 (Ghost City)", type: "sight", lat: 46.1040, lng: 85.3050 },
      { name: "乌尔禾镇 (Lunch)", type: "restaurant", lat: 46.0850, lng: 85.3000 },
      { name: "克拉玛依玛依塔柯酒店", type: "hotel", lat: 45.5800, lng: 84.8800 }
    ]
  },
  {
    day: 12,
    date: "2026-06-23",
    title: "克拉玛依 (Karamay) → 赛里木湖 (Sayram Lake)",
    distance: "450km",
    time: "5.5h",
    sights: "赛里木湖, 果子沟大桥. <br><br><b>历史与奇观:</b> 赛里木湖被称为“大西洋最后一滴眼泪”，因为它是大西洋暖湿气流长途跋涉7000多公里后，最后受天山阻挡而形成的降水。果子沟大桥则是新疆第一座斜拉桥，极其雄伟。<br><br><b>门票与预订:</b> 赛里木湖自驾票 143元/人/天 (如果徒步门票70元，区间车60元)。提前在微信小程序购票。<a href='https://baike.baidu.com/item/%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96/161477' target='_blank'>百度百科: 赛里木湖</a>",
    accommodation: "新疆赛里木湖万豪AC酒店 (AC Hotel Xinjiang Sayram Lake). <a href='https://www.marriott.com/en-us/hotels/urcac-ac-hotel-xinjiang-sayram-lake/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 沿途精河县服务区简餐.<br><b>晚餐 (Dinner):</b> 酒店内餐厅品尝“高白鲑” (Coregonus fish introduced from Russia).",
    practical: "提示：赛里木湖海拔高达2000米，即使在6月，湖边风大且极寒。务必准备冲锋衣或薄羽绒服。",
    spots: [
      { name: "赛里木湖", type: "sight", lat: 44.5960, lng: 81.1610 },
      { name: "果子沟大桥", type: "sight", lat: 44.4283, lng: 80.9130 },
      { name: "AC酒店餐厅", type: "restaurant", lat: 44.5710, lng: 81.1650 },
      { name: "AC酒店", type: "hotel", lat: 44.5710, lng: 81.1650 }
    ]
  },
  {
    day: 13,
    date: "2026-06-24",
    title: "赛里木湖 (Sayram Lake) → 伊宁 (Yining) → 昭苏 (Zhaosu)",
    distance: "240km",
    time: "5h",
    sights: "伊宁喀赞其 (Yining Kazanqi), 昭苏草原 (Zhaosu Grasslands). <br><br><b>历史与奇观:</b> 伊宁喀赞其保留了原汁原味的维吾尔族传统生活方式。而昭苏则是汉武帝梦寐以求的“天马”（乌孙马）的故乡。公元前105年，汉武帝为了结盟西域抗击匈奴，将细君公主远嫁乌孙国（都城即在昭苏一带）。<br><br><b>活动与门票:</b> 昭苏天马文化园观看“万马奔腾”表演。现场购票即可。<a href='https://baike.baidu.com/item/%E6%98%AD%E8%8B%8F%E5%8E%BF%E5%A4%A9%E9%A9%AC%E6%96%87%E5%8C%96%E5%9B%AD' target='_blank'>百度百科: 天马园</a>",
    accommodation: "昭苏万豪福朋喜来登酒店 (Four Points by Sheraton Zhaosu). <a href='https://www.marriott.com/en-us/hotels/urczq-four-points-by-sheraton-zhaosu/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 喀赞其百年冰淇淋及烤包子.<br><b>晚餐 (Dinner):</b> 昭苏牧民原生态手抓肉.",
    practical: "提示：昭苏气候湿润，夏季常有阵雨，常能见到双彩虹。",
    spots: [
      { name: "喀赞其", type: "sight", lat: 43.9061, lng: 81.3365 },
      { name: "天马文化园", type: "sight", lat: 43.1480, lng: 80.9520 },
      { name: "万豪福朋昭苏", type: "hotel", lat: 43.1558, lng: 81.1256 }
    ]
  },
  {
    day: 14,
    date: "2026-06-25",
    title: "昭苏 (Zhaosu) → 特克斯 (Tekes)",
    distance: "60km",
    time: "1.5h",
    sights: "特克斯八卦城 (Tekes Bagua City). <br><br><b>历史与奇观:</b> 特克斯是世界上唯一保存完整、建筑正规的“八卦城”。传说最早由南宋道教全真七子之一的丘处机在此定下风水。特克斯在20世纪90年代取消了红绿灯，成为中国唯一没有红绿灯的城市。<br><br><b>活动:</b> 乘坐摩天轮或太极眼热气球俯瞰八卦城全貌。<a href='https://baike.baidu.com/item/%E7%89%B9%E5%85%8B%E6%96%AF%E5%85%AB%E5%8D%A6%E5%9F%8E' target='_blank'>百度百科: 八卦城</a>",
    accommodation: "特克斯天麓酒店 (Tianlu Hotel).",
    food: "<b>午餐 (Lunch):</b> 特克斯八卦城内羊排揪片子.<br><b>晚餐 (Dinner):</b> 离街特色民宿区烧烤. <a href='https://uri.amap.com/search?keyword=%E7%89%B9%E5%85%8B%E6%96%AF%E7%A6%BB%E8%A1%97' target='_blank'>高德地图</a>",
    practical: "提示：特克斯是前往喀拉峻的唯一大本营，物资补充请在此完成。",
    spots: [
      { name: "特克斯八卦城", type: "sight", lat: 43.2185, lng: 81.8385 },
      { name: "特克斯天麓酒店", type: "hotel", lat: 43.2205, lng: 81.8400 }
    ]
  },
  {
    day: 15,
    date: "2026-06-26",
    title: "特克斯 (Tekes) → 喀拉峻 (Kalajun) → 那拉提 (Nalati)",
    distance: "250km",
    time: "4.5h",
    sights: "喀拉峻大草原 (Kalajun Grassland) / 那拉提 (Nalati). <br><br><b>历史与奇观:</b> 相较于平坦草原，喀拉峻保留了最原始的立体高山草甸地貌，沟壑纵横，在光影下如同人体曲线，被称为“人体草原”。这里曾是古代乌孙国的夏牧场。<br><br><b>门票与预订:</b> 喀拉峻提前在小程序购票。<b>如果前往那拉提景区游玩，那拉提自驾票 300元/人/天。</b>",
    accommodation: "那拉提文旅度假酒店 (Nalati Wenlu Resort).",
    food: "<b>午餐 (Lunch):</b> 喀拉峻景区内毡房简餐.<br><b>晚餐 (Dinner):</b> 那拉提镇哈萨克正宗烤全羊. <a href='https://uri.amap.com/search?keyword=%E9%82%A3%E6%8B%89%E6%8F%90%E9%95%87%E7%83%A4%E5%85%A8%E7%BE%8A' target='_blank'>高德地图</a>",
    practical: "提示：喀拉峻面积巨大，游览需大量步行，请带好防雨外套。",
    spots: [
      { name: "喀拉峻草原", type: "sight", lat: 43.0450, lng: 82.0160 },
      { name: "那拉提度假酒店", type: "hotel", lat: 43.2662, lng: 84.1485 }
    ]
  },
  {
    day: 16,
    date: "2026-06-27",
    title: "那拉提 (Nalati) → 独库公路 (Duku) → 乌鲁木齐 (Urumqi)",
    distance: "400km",
    time: "7.5h",
    sights: "独库公路北段 (Duku Highway North). <br><br><b>历史与奇观:</b> 独库公路（G217）被称为“中国最美公路”。上世纪70年代，为了打通天山南北的国防战略通道，数万名解放军官兵在极端恶劣的冰川和悬崖上奋战了近10年。跨越天山让你一天经历四季。<br><br><b>门票与预订:</b> 免费。<a href='https://baike.baidu.com/item/%E7%8B%AC%E5%BA%93%E5%85%AC%E8%B7%AF' target='_blank'>百度百科: 独库公路</a>",
    accommodation: "乌鲁木齐万怡酒店 (Fairfield by Marriott Urumqi). <a href='https://www.marriott.com/en-us/hotels/urcfi-fairfield-by-marriott-urumqi-beijing-road/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 乔尔玛服务区简餐.<br><b>晚餐 (Dinner):</b> 乌鲁木齐市区烤肉.",
    practical: "提示：<b>绝对禁忌：</b>仅限7座及以下客车。山区悬崖多，随时可能因降雪封闭。必须在那拉提加满油！",
    spots: [
      { name: "哈希勒根达坂", type: "sight", lat: 44.0720, lng: 84.4530 },
      { name: "万怡酒店", type: "hotel", lat: 43.8560, lng: 87.5620 }
    ]
  },
  {
    day: 17,
    date: "2026-06-28",
    title: "乌鲁木齐 (Urumqi) → 天山天池 (Tianchi) → 机场",
    distance: "120km",
    time: "2.5h",
    sights: "天山天池 (Heavenly Lake of Tianshan). <br><br><b>历史与奇观:</b> 古称“瑶池”，在中国古代神话中，这里是西王母沐浴的地方。背靠常年积雪的博格达峰，湛蓝的湖水映衬着雪山，是新疆最具标志性的名片。<br><br><b>门票与预订:</b> 提前1天在微信小程序“天山天池”购票即可。<a href='https://baike.baidu.com/item/%E5%A4%A9%E5%B1%B1%E5%A4%A9%E6%B1%A0%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C%E5%8C%BA' target='_blank'>百度百科: 天池</a>",
    accommodation: "无 (N/A - Flight out)",
    food: "<b>午餐 (Lunch):</b> 天池景区内游客中心简餐.<br><b>晚餐 (Dinner):</b> 机场候机楼内就餐。",
    practical: "提示：<b>安全红线：</b>乌鲁木齐安检极严，请提前3小时抵达机场。",
    spots: [
      { name: "天山天池", type: "sight", lat: 43.8906, lng: 88.1311 },
      { name: "地窝堡国际机场", type: "waypoint", lat: 43.9036, lng: 87.4735 }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = itineraryDataAlt;
}
