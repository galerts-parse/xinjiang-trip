const itineraryDataD = [
  {
    day: 1,
    date: "2026-06-12",
    title: "西安 → 宝鸡 → 天水 (极限起步)",
    distance: "345km",
    time: "约4.5小时",
    sights: "🌟 西安大雁塔、🌟 麦积山石窟",
    accommodation: "天水万豪福朋喜来登",
    food: "宝鸡简餐",
    practical: "",
    schedule: "<ul><li><b>07:00 - 08:00</b>: 🌟 西安大雁塔（清晨广场打卡拍照，感受大唐气象）</li><li><b>08:00 - 11:30</b>: 驱车前往宝鸡并简餐</li><li><b>12:15 - 13:45</b>: 驱车前往天水</li><li><b>13:45 - 17:00</b>: 🌟 麦积山石窟（体验142米垂直绝壁上的凌空栈道）</li><li><b>18:00</b>: 天水市区晚餐及入住</li></ul>",
    spots: [
      { name: "周礼大食堂 (Lunch)", type: "restaurant", lat: 34.3643, lng: 107.1444 },
      { name: "麦积山石窟", type: "sight", lat: 34.3541, lng: 106.0002 },
      { name: "天水常记呱呱 (Dinner)", type: "restaurant", lat: 34.5772, lng: 105.7231 },
      { name: "天水万豪福朋喜来登", type: "hotel", lat: 34.5612, lng: 105.7483 }
    ]
  },
  {
    day: 2,
    date: "2026-06-13",
    title: "天水 → 兰州",
    distance: "320km",
    time: "约4小时",
    sights: "🌟 甘肃省博物馆、🌟 白塔山公园、🌟 中山桥",
    accommodation: "兰州凯悦酒店",
    food: "马子禄牛肉面、正宁路夜市",
    practical: "",
    schedule: "<ul><li><b>08:00 - 12:00</b>: 驱车前往兰州市区，享用马子禄牛肉面</li><li><b>13:00 - 16:30</b>: 🌟 甘肃省博物馆（直奔青铜馆看马踏飞燕）</li><li><b>17:00 - 18:30</b>: 🌟 白塔山公园</li><li><b>18:30 - 20:30</b>: 🌟 中山桥 与 正宁路夜市</li></ul>",
    spots: [
      { name: "甘肃省博物馆", type: "sight", lat: 36.0664, lng: 103.7744 },
      { name: "马子禄牛肉面 (Lunch)", type: "restaurant", lat: 36.0615, lng: 103.8211 },
      { name: "中山桥", type: "sight", lat: 36.0650, lng: 103.8200 },
      { name: "正宁路夜市 (Dinner)", type: "restaurant", lat: 36.0526, lng: 103.8242 },
      { name: "兰州安宁喜来登", type: "hotel", lat: 36.1032, lng: 103.7145 }
    ]
  },
  {
    day: 3,
    date: "2026-06-14",
    title: "兰州 → 武威 → 张掖 (三大重量级景点)",
    distance: "510km",
    time: "约6.5小时",
    sights: "🌟 雷台汉墓、🌟 张掖大佛寺、🌟 张掖七彩丹霞",
    accommodation: "张掖智选假日酒店",
    food: "简餐",
    practical: "",
    schedule: "<ul><li><b>07:00 - 10:30</b>: 早起驱车前往武威</li><li><b>10:30 - 12:00</b>: 🌟 雷台汉墓</li><li><b>12:00 - 15:00</b>: 简餐后驱车前往张掖</li><li><b>15:00 - 16:00</b>: 🌟 张掖大佛寺（全国最大的室内泥塑卧佛）</li><li><b>16:30 - 19:30</b>: 🌟 张掖七彩丹霞（绝美日落）</li></ul>",
    spots: [
      { name: "武威三套车 (Lunch)", type: "restaurant", lat: 37.9331, lng: 102.6310 },
      { name: "雷台汉墓", type: "sight", lat: 37.9400, lng: 102.6400 },
      { name: "张掖七彩丹霞", type: "sight", lat: 38.9772, lng: 100.1264 },
      { name: "孙记炒炮 (Dinner)", type: "restaurant", lat: 38.9281, lng: 100.4566 },
      { name: "张掖宾馆", type: "hotel", lat: 38.9300, lng: 100.4500 }
    ]
  },
  {
    day: 4,
    date: "2026-06-15",
    title: "张掖 → 嘉峪关 → 敦煌",
    distance: "600km",
    time: "约7小时",
    sights: "🌟 嘉峪关城楼、🌟 悬壁长城",
    accommodation: "敦煌山庄",
    food: "沙洲夜市",
    practical: "",
    schedule: "<ul><li><b>07:30 - 10:00</b>: 驱车前往嘉峪关</li><li><b>10:00 - 12:30</b>: 🌟 嘉峪关城楼 与 🌟 悬壁长城</li><li><b>12:30 - 16:30</b>: 跨越戈壁长途奔袭敦煌（4小时）</li><li><b>17:00 - 19:30</b>: 酒店休整，前往沙洲夜市</li></ul>",
    spots: [
      { name: "嘉峪关城楼", type: "sight", lat: 39.8037, lng: 98.2140 },
      { name: "马保子烤肉 (Lunch)", type: "restaurant", lat: 39.7910, lng: 98.2800 },
      { name: "悬壁长城", type: "sight", lat: 39.8600, lng: 98.1500 },
      { name: "沙洲夜市 (Dinner)", type: "restaurant", lat: 40.1450, lng: 94.6650 },
      { name: "敦煌山庄", type: "hotel", lat: 40.1200, lng: 94.6700 }
    ]
  },
  {
    day: 5,
    date: "2026-06-16",
    title: "敦煌 (莫高窟与鸣沙山)",
    distance: "30km",
    time: "约1小时",
    sights: "🌟 莫高窟、🌟 鸣沙山月牙泉、🌟 《又见敦煌》情景剧",
    accommodation: "敦煌山庄",
    food: "达记驴肉黄面",
    practical: "",
    schedule: "<ul><li><b>08:30 - 13:00</b>: 🌟 莫高窟</li><li><b>13:00 - 17:30</b>: 达记驴肉黄面，酒店避暑休整（防40度高温）</li><li><b>17:30 - 20:30</b>: 🌟 鸣沙山月牙泉（骑骆驼欣赏大漠日落）</li><li><b>21:00</b>: 🌟 《又见敦煌》情景剧</li></ul>",
    spots: [
      { name: "莫高窟", type: "sight", lat: 40.0381, lng: 94.8152 },
      { name: "达记驴肉黄面 (Lunch)", type: "restaurant", lat: 40.1420, lng: 94.6620 },
      { name: "鸣沙山月牙泉", type: "sight", lat: 40.0880, lng: 94.6680 },
      { name: "靖远尕六羊羔肉 (Dinner)", type: "restaurant", lat: 40.1410, lng: 94.6610 },
      { name: "敦煌山庄", type: "hotel", lat: 40.1200, lng: 94.6700 }
    ]
  },
  {
    day: 6,
    date: "2026-06-17",
    title: "敦煌西线 (大漠边关)",
    distance: "180km",
    time: "约3小时",
    sights: "🌟 玉门关、🌟 汉代长城遗址、🌟 阳关、🌟 雅丹魔鬼城",
    accommodation: "敦煌山庄",
    food: "无",
    practical: "",
    schedule: "<ul><li><b>09:30 - 11:30</b>: 🌟 玉门关 与 🌟 汉代长城遗址（恢复确立）</li><li><b>11:30 - 13:30</b>: 🌟 阳关</li><li><b>14:00 - 17:30</b>: 🌟 雅丹魔鬼城（赶上17:00的最后一班越野车）</li><li><b>18:00 - 19:00</b>: 在景区外公路上欣赏震撼的黑戈壁日落，随后返回市区。</li></ul>",
    spots: [
      { name: "玉门关", type: "sight", lat: 40.3540, lng: 93.8640 },
      { name: "雅丹地质公园", type: "sight", lat: 40.5000, lng: 93.0000 },
      { name: "夏家合汁 (Dinner)", type: "restaurant", lat: 40.1460, lng: 94.6630 },
      { name: "敦煌山庄", type: "hotel", lat: 40.1200, lng: 94.6700 }
    ]
  },
  {
    day: 7,
    date: "2026-06-18",
    title: "敦煌 → 榆林窟 → 星星峡 → 哈密",
    distance: "410km",
    time: "约5.5小时",
    sights: "🌟 榆林窟、🌟 哈密回王陵",
    accommodation: "哈密建国饭店",
    food: "无",
    practical: "星星峡检查站预留2小时核查外宾护照",
    schedule: "<ul><li><b>07:30 - 09:30</b>: 驱车前往瓜州</li><li><b>09:30 - 12:00</b>: 🌟 榆林窟（极其壮美且人少的壁画）</li><li><b>12:00 - 14:00</b>: 驱车前往星星峡</li><li><b>14:00 - 16:00</b>: 星星峡检查站（预留2小时供武警人工核查外宾护照）</li><li><b>16:00 - 18:30</b>: 驱车抵达哈密</li><li><b>18:30 - 20:00</b>: 🌟 哈密回王陵</li></ul>",
    spots: [
      { name: "星星峡检查站", type: "waypoint", lat: 41.8000, lng: 95.1000 },
      { name: "大营盘羊肉焖饼 (Dinner)", type: "restaurant", lat: 42.8310, lng: 93.5180 },
      { name: "哈密建国酒店", type: "hotel", lat: 42.8252, lng: 93.5230 }
    ]
  },
  {
    day: 8,
    date: "2026-06-19",
    title: "哈密 → 吐鲁番 (精准切割防暑)",
    distance: "400km",
    time: "约5小时",
    sights: "🌟 坎儿井、🌟 柏孜克里克千佛洞、🌟 火焰山、🌟 交河故城",
    accommodation: "吐鲁番美居酒店",
    food: "海尔巴格",
    practical: "中午躲入地下或酒店避暑",
    schedule: "<ul><li><b>07:30 - 11:30</b>: 穿越百里风区抵达吐鲁番</li><li><b>11:30 - 13:00</b>: 🌟 坎儿井（中午躲入地下避暑）</li><li><b>13:00 - 16:30</b>: 海尔巴格午餐，酒店午休躲避毒日头。</li><li><b>16:30 - 18:30</b>: 🌟 柏孜克里克千佛洞 & 🌟 火焰山</li><li><b>18:30 - 20:30</b>: 🌟 交河故城（落日余晖下漫步悬崖古城）</li></ul>",
    spots: [
      { name: "海尔巴格餐厅 (Lunch)", type: "restaurant", lat: 42.9420, lng: 89.1800 },
      { name: "坎儿井", type: "sight", lat: 42.9510, lng: 89.1500 },
      { name: "交河故城", type: "sight", lat: 42.9514, lng: 89.0664 },
      { name: "火焰山", type: "sight", lat: 42.9400, lng: 89.5000 },
      { name: "吐鲁番美居酒店", type: "hotel", lat: 42.9550, lng: 89.1865 }
    ]
  },
  {
    day: 9,
    date: "2026-06-20",
    title: "吐鲁番 → 天池 → 乌鲁木齐 → 独山子 (极限转场)",
    distance: "500km",
    time: "约6小时",
    sights: "🌟 天山天池、🌟 新疆维吾尔自治区博物馆",
    accommodation: "奎屯锦江国际酒店 / 独山子玛依塔柯",
    food: "简餐",
    practical: "",
    schedule: "<ul><li><b>07:30 - 10:00</b>: 驱车经阜康前往天池</li><li><b>10:00 - 13:30</b>: 🌟 天山天池</li><li><b>13:30 - 15:00</b>: 简餐后驱车直奔乌鲁木齐市区</li><li><b>15:00 - 17:00</b>: 🌟 新疆维吾尔自治区博物馆（看楼兰美女干尸）</li><li><b>17:00 - 19:30</b>: 驱车直奔独山子，为次日抢入独库公路打好桥头堡。</li></ul>",
    spots: [
      { name: "天山天池", type: "sight", lat: 43.8906, lng: 88.1311 },
      { name: "丝路有约 (Lunch)", type: "restaurant", lat: 43.7800, lng: 87.6200 },
      { name: "新疆维吾尔自治区博物馆", type: "sight", lat: 43.8260, lng: 87.5810 },
      { name: "纳瓦新疆菜 (Dinner)", type: "restaurant", lat: 43.8310, lng: 87.5850 },
      { name: "乌鲁木齐万怡酒店", type: "hotel", lat: 43.8560, lng: 87.5620 }
    ]
  },
  {
    day: 10,
    date: "2026-06-21",
    title: "独山子 → 独库公路北段 → 那拉提 (硬核翻越)",
    distance: "260km",
    time: "约8小时",
    sights: "🌟 独库公路北段、🌟 那拉提空中草原",
    accommodation: "那拉提文旅度假酒店",
    food: "无",
    practical: "",
    schedule: "<ul><li><b>07:00 - 16:00</b>: 🌟 独库公路北段 (G217)（途径防雪长廊、乔尔玛烈士陵园、哈希勒根达坂。一天经历四季）</li><li><b>16:30 - 19:30</b>: 抵达那拉提，直接驶入🌟 那拉提空中草原看夕阳。</li></ul>",
    spots: [
      { name: "可可托海", type: "sight", lat: 47.1990, lng: 89.8140 },
      { name: "额河烤鱼 (Dinner)", type: "restaurant", lat: 47.1950, lng: 89.8050 },
      { name: "可可托海镇酒店", type: "hotel", lat: 47.1900, lng: 89.8000 }
    ]
  },
  {
    day: 11,
    date: "2026-06-22",
    title: "那拉提 → 特克斯 → 喀拉峻 → 昭苏",
    distance: "300km",
    time: "约5小时",
    sights: "🌟 特克斯八卦城、🌟 喀拉峻大草原",
    accommodation: "昭苏万豪福朋喜来登",
    food: "无",
    practical: "",
    schedule: "<ul><li><b>08:00 - 11:00</b>: 驱车前往并途径🌟 特克斯八卦城</li><li><b>11:00 - 15:30</b>: 🌟 喀拉峻大草原（最震撼的3D“人体草原”）</li><li><b>15:30 - 17:30</b>: 驱车前往昭苏入住。</li></ul>",
    spots: [
      { name: "远方大盘鹅 (Dinner)", type: "restaurant", lat: 47.8350, lng: 88.1350 },
      { name: "阿勒泰金桥大酒店", type: "hotel", lat: 47.8300, lng: 88.1300 }
    ]
  },
  {
    day: 12,
    date: "2026-06-23",
    title: "昭苏 → 夏塔 → 伊宁",
    distance: "250km",
    time: "约4.5小时",
    sights: "🌟 夏塔古道、🌟 喀赞其民俗村",
    accommodation: "伊犁大酒店",
    food: "喀赞其冰淇淋",
    practical: "",
    schedule: "<ul><li><b>08:00 - 14:00</b>: 🌟 夏塔古道（穿戴好徒步装备，直逼木扎尔特冰川）</li><li><b>14:00 - 17:00</b>: 翻越天山抵达伊宁</li><li><b>17:00 - 20:00</b>: 🌟 喀赞其民俗村（吃冰淇淋、看蓝色小镇）</li></ul>",
    spots: [
      { name: "禾木换乘中心", type: "waypoint", lat: 48.5500, lng: 87.2000 },
      { name: "禾木土火锅 (Dinner)", type: "restaurant", lat: 48.5680, lng: 87.4350 },
      { name: "禾木村特色木屋", type: "hotel", lat: 48.5670, lng: 87.4330 }
    ]
  },
  {
    day: 13,
    date: "2026-06-24",
    title: "伊宁 → 赛里木湖 → 乌尔禾魔鬼城 (16小时极限狂奔)",
    distance: "600km",
    time: "约8小时",
    sights: "🌟 果子沟大桥、🌟 赛里木湖、🌟 世界魔鬼城",
    accommodation: "西部乌镇酒店",
    food: "无",
    practical: "极其考验车技与耐力",
    schedule: "<ul><li><b>07:30 - 09:00</b>: 穿越🌟 果子沟大桥</li><li><b>09:00 - 13:00</b>: 🌟 赛里木湖（自驾360度环湖）</li><li><b>13:00 - 18:00</b>: 驱车长途奔袭克拉玛依乌尔禾区（极其考验车技与耐力，5小时高速）</li><li><b>18:00 - 21:00</b>: 🌟 世界魔鬼城（日落时分乘坐小火车穿梭风蚀雅丹群）</li></ul>",
    spots: [
      { name: "布尔津河边烤鱼 (Lunch)", type: "restaurant", lat: 47.7010, lng: 86.8510 },
      { name: "奎屯大盘鸡 (Dinner)", type: "restaurant", lat: 44.4300, lng: 84.9100 },
      { name: "奎屯罗兰酒店", type: "hotel", lat: 44.4200, lng: 84.9000 }
    ]
  },
  {
    day: 14,
    date: "2026-06-25",
    title: "乌尔禾 → 布尔津 → 禾木",
    distance: "350km",
    time: "约6小时",
    sights: "🌟 禾木村",
    accommodation: "禾木草原度假山庄",
    food: "布尔津冷水鱼、禾木土火锅",
    practical: "",
    schedule: "<ul><li><b>08:30 - 12:00</b>: 驱车前往布尔津（3.5小时）</li><li><b>12:00 - 13:30</b>: 布尔津冷水鱼午餐</li><li><b>13:30 - 17:00</b>: 驱车前往禾木门票站</li><li><b>17:00 - 18:00</b>: 乘坐区间车进入🌟 禾木村</li><li><b>18:30</b>: 入住木屋，漫步古村吃土火锅。</li></ul>",
    spots: [
      { name: "赛里木湖", type: "sight", lat: 44.5960, lng: 81.1610 },
      { name: "果子沟大桥", type: "sight", lat: 44.4283, lng: 80.9130 },
      { name: "AC酒店餐厅 (Dinner)", type: "restaurant", lat: 44.5710, lng: 81.1650 },
      { name: "万豪AC酒店", type: "hotel", lat: 44.5710, lng: 81.1650 }
    ]
  },
  {
    day: 15,
    date: "2026-06-26",
    title: "禾木 → 喀纳斯 → 布尔津",
    distance: "200km",
    time: "约4小时",
    sights: "🌟 禾木观景台、🌟 喀纳斯湖、🌟 五彩滩",
    accommodation: "布尔津驿龙大酒店",
    food: "无",
    practical: "",
    schedule: "<ul><li><b>06:30 - 09:00</b>: 徒步登上🌟 禾木观景台看晨雾与日出，随后区间车出村。</li><li><b>09:00 - 10:30</b>: 驱车前往贾登峪/喀纳斯换乘中心</li><li><b>10:30 - 16:00</b>: 🌟 喀纳斯湖（登观鱼台 + 游览神仙湾、月亮湾、卧龙湾）</li><li><b>16:00 - 18:30</b>: 驱车返回布尔津</li><li><b>19:30 - 21:30</b>: 🌟 五彩滩（欣赏额尔齐斯河畔绝美的丹霞日落。时间严丝合缝！）</li></ul>",
    spots: [
      { name: "喀赞其烤包子 (Lunch)", type: "restaurant", lat: 43.9061, lng: 81.3365 },
      { name: "夏塔旅游区", type: "sight", lat: 42.6600, lng: 80.7500 },
      { name: "昭苏手抓肉 (Dinner)", type: "restaurant", lat: 43.1500, lng: 81.1300 },
      { name: "昭苏福朋喜来登", type: "hotel", lat: 43.1558, lng: 81.1256 }
    ]
  },
  {
    day: 16,
    date: "2026-06-27",
    title: "布尔津 → 可可托海",
    distance: "320km",
    time: "约4.5小时",
    sights: "🌟 可可托海国家地质公园",
    accommodation: "可可托海金林酒店",
    food: "额河烤鱼",
    practical: "",
    schedule: "<ul><li><b>08:30 - 13:00</b>: 驱车穿越阿尔泰山脉前往可可托海</li><li><b>14:00 - 18:30</b>: 🌟 可可托海国家地质公园（游览额尔齐斯大峡谷及三号矿坑）</li><li><b>19:00</b>: 额河烤鱼晚餐并入住。</li></ul>",
    spots: [
      { name: "特克斯揪片子 (Lunch)", type: "restaurant", lat: 43.2185, lng: 81.8385 },
      { name: "那拉提草原", type: "sight", lat: 43.2600, lng: 84.1500 },
      { name: "那拉提烤全羊 (Dinner)", type: "restaurant", lat: 43.2650, lng: 84.1450 },
      { name: "那拉提度假酒店", type: "hotel", lat: 43.2662, lng: 84.1485 }
    ]
  },
  {
    day: 17,
    date: "2026-06-28",
    title: "可可托海 → 乌鲁木齐大巴扎 → 离境 (大满贯收官)",
    distance: "500km",
    time: "约6小时",
    sights: "🌟 S21沙漠高速公路、🌟 新疆国际大巴扎",
    accommodation: "无",
    food: "新疆大盘鸡或手抓饭",
    practical: "",
    schedule: "<ul><li><b>08:00 - 12:30</b>: 沿着🌟 S21沙漠高速公路 返回乌鲁木齐市区（4.5小时）。</li><li><b>13:00 - 14:00</b>: 享用新疆大盘鸡或手抓饭告别宴。</li><li><b>14:00 - 17:30</b>: 🌟 新疆国际大巴扎（恢复确立！尽情拍摄中亚风情街，补齐伴手礼干果/工艺品）</li><li><b>18:30</b>: 前往地窝堡国际机场 (URC) 还车。</li><li><b>21:40</b>: 搭乘航班离境。</li></ul>",
    spots: [
      { name: "独库公路北段", type: "sight", lat: 44.0720, lng: 84.4530 },
      { name: "乌鲁木齐天山国际机场", type: "waypoint", lat: 43.9036, lng: 87.4735 }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = itineraryDataD;
}
