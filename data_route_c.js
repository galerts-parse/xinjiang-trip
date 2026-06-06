const itineraryDataRouteC = [
  {
    day: 1,
    date: "2026-06-12",
    title: "西安 (Xi'an) → 宝鸡 (Baoji) → 天水 (Tianshui)",
    distance: "345km",
    time: "4.5h",
    sights: "麦积山石窟 (Maijishan Grottoes). 早发可顺路看西安城墙/大雁塔。<br><br><b>历史与奇观:</b> 麦积山石窟并非普通的地面建筑，而是在绝壁上开凿出来的。<br><br><b>门票与预订 (CRITICAL PERMIT INFO):</b> 约100元。<b>必须提前7天</b>在微信搜索小程序预约A类票。否则无法登上悬崖栈道！<a href='https://baike.baidu.com/item/%E9%BA%A6%E7%A7%AF%E5%B1%B1%E7%9F%B3%E7%AA%9F' target='_blank'>百度百科: 麦积山</a>",
    accommodation: "天水万豪福朋喜来登酒店 (Four Points Tianshui). <a href='https://www.marriott.com/en-us/hotels/tian-four-points-tianshui/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 宝鸡周礼大食堂. <a href='https://map.baidu.com/search/%E5%AE%9D%E9%B8%A1%E5%91%A8%E7%A4%BC%E5%A4%A7%E9%A3%9F%E5%A0%82' target='_blank'>百度地图 (Baidu Maps)</a><br><b>晚餐 (Dinner):</b> 天水常记呱呱. <a href='https://map.baidu.com/search/%E5%A4%A9%E6%B0%B4%E5%B8%B8%E8%AE%B0%E5%91%B1%E5%91%B1' target='_blank'>百度地图 (Baidu Maps)</a>",
    practical: "提示：麦积山绝壁栈道非常陡峭，恐高者需做好心理准备。海拔↑1100m。",
    spots: [
      { name: "西安出发 (Depart Xi'an)", type: "waypoint", lat: 34.3416, lng: 108.9398 },
      { name: "麦积山石窟 (Maijishan Grottoes)", type: "sight", lat: 34.3541, lng: 106.0002 },
      { name: "天水万豪福朋喜来登 (Four Points Tianshui)", type: "hotel", lat: 34.5612, lng: 105.7483 }
    ]
  },
  {
    day: 2,
    date: "2026-06-13",
    title: "天水 (Tianshui) → 兰州 (Lanzhou)",
    distance: "320km",
    time: "4h",
    sights: "甘肃省博物馆 (Gansu Provincial Museum), 黄河中山桥, 正宁路夜市.<br><br><b>历史与奇观:</b> 省博收藏着著名的“马踏飞燕”（铜奔马）。<br><br><b>门票与预订:</b> 免费。微信搜索“甘肃省博物馆”提前1-3天预约。<a href='https://baike.baidu.com/item/%E7%94%98%E8%82%83%E7%9C%81%E5%8D%9A%E7%89%A9%E9%A6%86' target='_blank'>百度百科: 博物馆</a>",
    accommodation: "兰州安宁喜来登酒店 (Sheraton Lanzhou Anning). <a href='https://www.marriott.com/en-us/hotels/lhwsi-sheraton-lanzhou-anning/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 正宁路夜市老马家. <a href='https://map.baidu.com/search/%E5%85%B0%E5%B7%9E%E6%AD%A3%E5%AE%81%E8%B7%AF%E5%A4%9C%E5%B8%82' target='_blank'>百度地图</a>",
    practical: "提示：黄河穿城而过，晚上可前往中山桥（黄河第一铁桥）欣赏夜景。海拔↑1520m。",
    spots: [
      { name: "甘肃省博物馆", type: "sight", lat: 36.0664, lng: 103.7744 },
      { name: "中山桥", type: "sight", lat: 36.0645, lng: 103.8188 },
      { name: "兰州安宁喜来登", type: "hotel", lat: 36.1032, lng: 103.7145 }
    ]
  },
  {
    day: 3,
    date: "2026-06-14",
    title: "兰州 (Lanzhou) → 武威 (Wuwei) → 张掖 (Zhangye)",
    distance: "510km",
    time: "6~6.5h",
    sights: "武威雷台汉墓, 张掖七彩丹霞. <br><br><b>历史与奇观:</b> 傍晚看七彩丹霞日落。数百万年地质运动的杰作，在夕阳下仿佛燃烧起来。<br><br><b>活动与门票:</b> 微信小程序“张掖七彩丹霞旅游景区”提前1-3天购票。<a href='https://baike.baidu.com/item/%E5%BC%A0%E6%8E%96%E4%B8%83%E5%BD%A9%E4%B8%B9%E9%9C%9E%E6%97%85%E6%B8%B8%E6%99%AF%E5%8C%BA/19597288' target='_blank'>百度百科: 丹霞</a>",
    accommodation: "张掖御景国际 (Zhangye Yujing International Hotel). <a href='https://www.trip.com/hotels/zhangye-hotel-detail-6478954/zhangye-yujing-international-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 武威北关市场三套车. <a href='https://map.baidu.com/search/%E6%AD%A6%E5%A8%81%E5%8C%97%E5%85%B3%E5%B8%82%E5%9C%BA%E4%B8%89%E5%A5%97%E8%BD%A6' target='_blank'>百度地图</a><br><b>晚餐 (Dinner):</b> 孙记炒炮. <a href='https://map.baidu.com/search/%E5%BC%A0%E6%8E%96%E5%AD%99%E8%AE%B0%E7%82%92%E7%82%AE' target='_blank'>百度地图</a>",
    practical: "提示：丹霞景区全露天，务必做好硬核防晒。海拔↑1480m (丹霞↑1850m)。",
    spots: [
      { name: "武威雷台汉墓", type: "sight", lat: 37.9405, lng: 102.6415 },
      { name: "张掖七彩丹霞", type: "sight", lat: 38.9772, lng: 100.1264 },
      { name: "张掖御景国际", type: "hotel", lat: 38.9328, lng: 100.4517 }
    ]
  },
  {
    day: 4,
    date: "2026-06-15",
    title: "张掖 (Zhangye) → 嘉峪关 (Jiayuguan)",
    distance: "230km",
    time: "3h",
    sights: "嘉峪关关城, 悬臂长城, 长城博物馆. <br><br><b>历史与奇观:</b> 嘉峪关是明代万里长城的最西端。站在城墙上，看着关外苍茫的戈壁，感受“西出阳关无故人”的苍凉。<br><br><b>门票与预订:</b> 约110元。可提前1天美团购票。<a href='https://baike.baidu.com/item/%E5%98%89%E5%B3%AA%E5%85%B3' target='_blank'>百度百科: 嘉峪关</a>",
    accommodation: "嘉峪关远东华伦酒店 (Yuandong Hualun Hotel). <a href='https://www.trip.com/hotels/jiayuguan-hotel-detail-7607759/yuandong-hualun-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 大唐美食街-眼镜烤肉. <a href='https://map.baidu.com/search/%E5%98%89%E5%B3%AA%E5%85%B3%E7%9C%BC%E9%95%9C%E7%83%A4%E8%82%89' target='_blank'>百度地图</a>",
    practical: "提示：嘉峪关城楼风极大。海拔↑1610m。",
    spots: [
      { name: "嘉峪关关城", type: "sight", lat: 39.8037, lng: 98.2140 },
      { name: "悬臂长城", type: "sight", lat: 39.8650, lng: 98.1500 },
      { name: "嘉峪关远东华伦酒店", type: "hotel", lat: 39.7825, lng: 98.2785 }
    ]
  },
  {
    day: 5,
    date: "2026-06-16",
    title: "嘉峪关 (Jiayuguan) → 敦煌 (Dunhuang)",
    distance: "380km",
    time: "4.5h",
    sights: "莫高窟 (Mogao Caves), 鸣沙山月牙泉看日落. <br><br><b>历史与奇观:</b> 莫高窟是人类历史上最伟大的文化遗址之一。鸣沙山月牙泉则是世界地质奇观。<br><br><b>门票与预订 (CRITICAL PERMIT INFO):</b> 莫高窟A类票(260元)<b>必须提前7~15天官网预约！</b><a href='https://www.mgk.org.cn/' target='_blank'>莫高窟官网</a>",
    accommodation: "敦煌万豪福朋喜来登酒店 (Four Points by Sheraton Dunhuang). <a href='https://www.marriott.com/en-us/hotels/dhqfp-four-points-by-sheraton-dunhuang/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 靖远尕六羊羔肉. <a href='https://map.baidu.com/search/%E6%95%A6%E7%85%8C%E9%9D%96%E8%BF%9C%E5%B0%95%E5%85%AD%E7%BE%8A%E7%BE%94%E8%82%89' target='_blank'>百度地图</a>",
    practical: "提示：鸣沙山的沙子极细，会损坏相机的机械结构。海拔↑1140m。",
    spots: [
      { name: "莫高窟", type: "sight", lat: 40.0381, lng: 94.8159 },
      { name: "鸣沙山月牙泉", type: "sight", lat: 40.0881, lng: 94.6685 },
      { name: "敦煌万豪福朋", type: "hotel", lat: 40.1465, lng: 94.6790 }
    ]
  },
  {
    day: 6,
    date: "2026-06-17",
    title: "敦煌 → 玉门关 → 返回敦煌",
    distance: "260km",
    time: "4h",
    sights: "玉门关, 汉长城遗址, 雅丹魔鬼城. <br><br><b>历史与奇观:</b> “春风不度玉门关”——汉武帝设立的玉门关是中原政权控制西域的绝对前哨。今天建议返回敦煌住宿，路程更近，住宿条件更好。<br><br><b>门票与预订:</b> 雅丹魔鬼城约120元。现场购票。<a href='https://baike.baidu.com/item/%E7%8E%89%E9%97%A8%E5%85%B3' target='_blank'>百度百科: 玉门关</a>",
    accommodation: "敦煌万豪福朋喜来登酒店 (Four Points by Sheraton Dunhuang).",
    food: "<b>午餐 (Lunch):</b> 玉门关游客中心简餐.",
    practical: "提示：深入无人区，手机信号可能极弱，务必提前下载离线地图。",
    spots: [
      { name: "玉门关", type: "sight", lat: 40.3540, lng: 93.8643 },
      { name: "雅丹魔鬼城", type: "sight", lat: 40.5050, lng: 93.2427 },
      { name: "敦煌万豪福朋", type: "hotel", lat: 40.1465, lng: 94.6790 }
    ]
  },
  {
    day: 7,
    date: "2026-06-18",
    title: "敦煌 (Dunhuang) → 哈密 (Hami)",
    distance: "420km",
    time: "6h",
    sights: "星星峡入疆. <br><br><b>路线说明:</b> 这天不会途径当金山口（如果去当金山口会折返多几百公里，不可能实现）。配合检查站查验，见站加油。<br><br><b>历史与奇观:</b> 星星峡不仅是一个地理概念，更是心理上的“新疆大门”。",
    accommodation: "哈密宾馆 (Hami Hotel). <a href='https://www.trip.com/hotels/hami-hotel-detail-1234910/hami-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 大营盘羊肉焖饼. <a href='https://map.baidu.com/search/%E5%93%88%E5%AF%86%E5%A4%A7%E8%90%A5%E7%9B%98%E7%BE%8A%E8%82%89%E7%84%96%E9%A5%BC' target='_blank'>百度地图</a>",
    practical: "提示：<b>极其严格的边防安检：</b>星星峡检查站要求所有乘员下车查验护照。可能会耗时1-2小时，请保持耐心。海拔↑760m。",
    spots: [
      { name: "星星峡检查站", type: "sight", lat: 41.8021, lng: 95.2155 },
      { name: "哈密宾馆", type: "hotel", lat: 42.8252, lng: 93.5230 }
    ]
  },
  {
    day: 8,
    date: "2026-06-19",
    title: "哈密 (Hami) → 吐鲁番 (Turpan)",
    distance: "400km",
    time: "7.5h",
    sights: "火焰山 (Flaming Mountains), 坎儿井. <br><br><b>历史与奇观:</b> 坎儿井是新疆人民在干旱沙漠中创造的伟大水利奇迹，利用地下暗渠将天山雪水引入绿洲。",
    accommodation: "吐鲁番火洲美居酒店 (Mercure Turpan Downtown). <a href='https://all.accor.com/hotel/B9G7/index.en.shtml' target='_blank'>Accor Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 海尔巴格 (Herembagh) - 吐鲁番极具异域风情的高端维吾尔族餐厅。 <a href='https://map.baidu.com/search/%E5%90%90%E9%B2%81%E7%95%AA%E6%B5%B7%E5%B0%94%E5%B7%B4%E6%A0%BC' target='_blank'>百度地图</a>",
    practical: "提示：吐鲁番素有“火州”之称，6月气温极高。火焰山区域海拔盆地-154m，吐鲁番市区↑30m。",
    spots: [
      { name: "火焰山", type: "sight", lat: 42.9818, lng: 89.5936 },
      { name: "坎儿井", type: "sight", lat: 42.9431, lng: 89.1415 },
      { name: "吐鲁番美居酒店", type: "hotel", lat: 42.9550, lng: 89.1865 }
    ]
  },
  {
    day: 9,
    date: "2026-06-20",
    title: "吐鲁番 (Turpan) → 乌鲁木齐 (Urumqi)",
    distance: "200km",
    time: "3h",
    sights: "苏公塔, 交河故城, 国际大巴扎. <br><br><b>历史与奇观:</b> 交河故城是世界上最大、最古老、保存最完好的生土建筑城市。晚间到达乌鲁木齐国际大巴扎，体验丝路市集的繁华。",
    accommodation: "乌鲁木齐国际大巴扎亚朵酒店 (Atour Hotel Grand Bazaar). <a href='https://www.trip.com/hotels/urumqi-hotel-detail-35926510/atour-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 丝路有约 (Silu Youyue) - 大巴扎附近的高端新疆菜。 <a href='https://map.baidu.com/search/%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E4%B8%9D%E8%B7%AF%E6%9C%89%E7%BA%A6' target='_blank'>百度地图</a>",
    practical: "提示：交河故城全露天，强烈建议傍晚游览以免中暑。乌鲁木齐海拔↑900m。",
    spots: [
      { name: "苏公塔", type: "sight", lat: 42.9333, lng: 89.2000 },
      { name: "交河故城", type: "sight", lat: 42.9557, lng: 89.0664 },
      { name: "大巴扎", type: "sight", lat: 43.7745, lng: 87.6166 },
      { name: "大巴扎亚朵酒店", type: "hotel", lat: 43.7745, lng: 87.6166 }
    ]
  },
  {
    day: 10,
    date: "2026-06-21",
    title: "乌鲁木齐 (Urumqi) → 赛里木湖 (Sayram Lake)",
    distance: "550km",
    time: "6-7h",
    sights: "赛里木湖环湖. <br><br><b>路线:</b> 东门进，南门出。想看日出的话，预定赛湖南/东门酒店需提前！<br><br><b>历史与奇观:</b> 赛里木湖被称为“大西洋最后一滴眼泪”，因为它是大西洋暖湿气流长途跋涉7000多公里后，最后受天山阻挡而形成的降水。",
    accommodation: "新疆赛里木湖万豪AC酒店 (AC Hotel Xinjiang Sayram Lake). <a href='https://www.marriott.com/en-us/hotels/urcac-ac-hotel-xinjiang-sayram-lake/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 酒店内餐厅品尝“高白鲑”。",
    practical: "提示：赛里木湖海拔高达2073m，即使在6月，湖边风大且极度寒冷。务必准备冲锋衣或薄羽绒服。",
    spots: [
      { name: "赛里木湖", type: "sight", lat: 44.5960, lng: 81.1610 },
      { name: "赛里木湖AC酒店", type: "hotel", lat: 44.5710, lng: 81.1650 }
    ]
  },
  {
    day: 11,
    date: "2026-06-22",
    title: "赛湖 → 伊宁 → 昭苏 (Zhaosu)",
    distance: "380km",
    time: "5-6h",
    sights: "果子沟大桥, 夏塔古道, 昭苏草原. <br><br><b>历史与奇观:</b> 果子沟大桥是新疆第一座斜拉桥。在伊宁休整后，直接前往夏塔古道。夏塔古道曾是古代乌孙国通往南疆的战略通道，也是玄奘西行翻越天山的路线。<br><br><b>门票与提示 (CRITICAL PERMIT INFO):</b> <b>无需办证直接进入夏塔古道！</b> 游览3-4小时后，开车前往昭苏县。",
    accommodation: "昭苏万豪福朋喜来登酒店 (Four Points by Sheraton Zhaosu). <a href='https://www.marriott.com/en-us/hotels/urczq-four-points-by-sheraton-zhaosu/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 昭苏牧民原生态手抓肉.",
    practical: "提示：昭苏被称为“天山乡”，气候湿润。海拔↑1850m。",
    spots: [
      { name: "果子沟大桥", type: "sight", lat: 44.4283, lng: 80.9130 },
      { name: "夏塔古道", type: "sight", lat: 42.6000, lng: 80.6000 },
      { name: "万豪福朋昭苏", type: "hotel", lat: 43.1558, lng: 81.1256 }
    ]
  },
  {
    day: 12,
    date: "2026-06-23",
    title: "昭苏 → 特克斯 → 那拉提 (Nalati)",
    distance: "300km",
    time: "4-5h",
    sights: "特克斯八卦城离街, 那拉提空中草原. <br><br><b>历史与奇观:</b> 特克斯是世界上唯一保存完整的“八卦城”。随后前往那拉提空中草原（建议次日早进景区）。<br><br><b>门票与提示 (CRITICAL PERMIT INFO):</b> <b>那拉提景区目前实行动态二维码，需要本人自行预约自驾票！</b>",
    accommodation: "那拉提万森度假酒店 (Nalati Wansen Resort Hotel). <a href='https://www.trip.com/hotels/xinyuan-hotel-detail-7607788/nalati-wansen-resort-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 特克斯离街特色烧烤 或 那拉提镇哈萨克正宗烤全羊. <a href='https://map.baidu.com/search/%E9%82%A3%E6%8B%89%E6%8F%90%E9%95%87%E7%83%A4%E5%85%A8%E7%BE%8A' target='_blank'>百度地图</a>",
    practical: "提示：那拉提镇海拔↑1980m。",
    spots: [
      { name: "特克斯离街", type: "sight", lat: 43.2150, lng: 81.8350 },
      { name: "那拉提草原", type: "sight", lat: 43.2650, lng: 84.1450 },
      { name: "那拉提万森度假酒店", type: "hotel", lat: 43.2662, lng: 84.1485 }
    ]
  },
  {
    day: 13,
    date: "2026-06-24",
    title: "那拉提 → 独库公路 → 独山子 (Dushanzi)",
    distance: "350km",
    time: "5h",
    sights: "独库公路北段, 唐布拉草原. <br><br><b>路线:</b> 沿着独库公路北段前往独山子，途中欣赏百里画廊唐布拉草原。<br><br><b>历史与奇观:</b> 独库公路（G217）被称为“中国最美公路”，当年数万解放军在悬崖上奋战近10年打通。",
    accommodation: "独山子慧洋万达锦华酒店 (Dushanzi Wanda Jinhua Hotel). <a href='https://www.trip.com/hotels/karamay-hotel-detail-7607799/dushanzi-wanda-jinhua-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 乔尔玛服务区简餐.",
    practical: "提示：<b>绝对禁忌：</b>独库公路仅限7座及以下客车。山区悬崖多。独山子海拔↑800m。",
    spots: [
      { name: "唐布拉草原", type: "sight", lat: 43.7000, lng: 83.5000 },
      { name: "独库公路北段", type: "sight", lat: 44.0720, lng: 84.4530 },
      { name: "独山子慧洋万达酒店", type: "hotel", lat: 44.3315, lng: 84.8810 }
    ]
  },
  {
    day: 14,
    date: "2026-06-25",
    title: "独山子 → 天池 → 乌鲁木齐",
    distance: "320km",
    time: "5.5h",
    sights: "天山天池 (Heavenly Lake). <br><br><b>路线:</b> 开车回到乌鲁木齐，途中游览天池，晚上到达乌鲁木齐。<br><br><b>门票与预订:</b> 提前1天在微信小程序“天山天池”购票。",
    accommodation: "乌鲁木齐国际大巴扎亚朵酒店 (Atour Hotel Grand Bazaar). <a href='https://www.trip.com/hotels/urumqi-hotel-detail-35926510/atour-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 天池景区内游客中心简餐.",
    practical: "提示：乌鲁木齐海拔↑900m。",
    spots: [
      { name: "天山天池", type: "sight", lat: 43.8906, lng: 88.1311 },
      { name: "大巴扎亚朵酒店", type: "hotel", lat: 43.7745, lng: 87.6166 }
    ]
  },
  {
    day: 15,
    date: "2026-06-26",
    title: "乌鲁木齐 → 库车 (Kuqa)",
    distance: "600km",
    time: "7h",
    sights: "沿途戈壁风光. <br><br><b>路线:</b> 走乌若高速+吐和高速，一路向南直奔南疆重镇库车。",
    accommodation: "库车饭店 (Kuqa Hotel). <a href='https://www.trip.com/hotels/kuqa-hotel-detail-7607801/kuqa-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 库车大馕城附近烤肉 (Kuqa Naan City BBQ). <a href='https://map.baidu.com/search/%E5%BA%93%E8%BD%A6%E5%A4%A7%E9%A6%95%E5%9F%8E' target='_blank'>百度地图</a>",
    practical: "提示：长时间的高速驾驶，请两人轮换。库车海拔↑1200m。",
    spots: [
      { name: "库车饭店", type: "hotel", lat: 41.7250, lng: 82.9350 }
    ]
  },
  {
    day: 16,
    date: "2026-06-27",
    title: "库车 (Kuqa)",
    distance: "120km",
    time: "3h",
    sights: "天山神秘大峡谷, 库车市区游览. <br><br><b>历史与奇观:</b> 天山神秘大峡谷是亿万年风雨剥蚀、山洪冲刷形成的红褐色岩石峡谷，谷内幽深静谧，光影极其迷人。库车则是古代“龟兹国”所在地，丝绸之路上的音乐、佛教中心。",
    accommodation: "库车饭店 (Kuqa Hotel). <a href='https://www.trip.com/hotels/kuqa-hotel-detail-7607801/kuqa-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 大峡谷内简餐或库车老城.<br><b>晚餐 (Dinner):</b> 库车夜市.",
    practical: "提示：大峡谷内没有信号，如遇暴雨峡谷会因山洪隐患关闭，请留意天气预报。",
    spots: [
      { name: "天山神秘大峡谷", type: "sight", lat: 42.1500, lng: 83.0500 }
    ]
  },
  {
    day: 17,
    date: "2026-06-28",
    title: "库车 → 乌鲁木齐 (Urumqi)",
    distance: "600km",
    time: "7h",
    sights: "返回乌鲁木齐. <br><br><b>路线:</b> 返回乌鲁木齐，还车，建议停留一晚，第二天坐飞机离开。",
    accommodation: "乌鲁木齐万怡酒店 (Fairfield by Marriott Urumqi). <a href='https://www.marriott.com/en-us/hotels/urcfi-fairfield-by-marriott-urumqi-beijing-road/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>晚餐 (Dinner):</b> 乌鲁木齐市区送行晚宴.",
    practical: "提示：<b>安全红线：</b>乌鲁木齐安检极严，次日搭乘航班请提前3小时抵达机场。",
    spots: [
      { name: "万怡酒店 (Fairfield Urumqi)", type: "hotel", lat: 43.8560, lng: 87.5620 },
      { name: "地窝堡国际机场", type: "waypoint", lat: 43.9036, lng: 87.4735 }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = itineraryDataRouteC;
}
