const itineraryDataX = [
  {
    day: 1,
    date: "2026-06-12",
    title: "天水 → 兰州 → 武威",
    distance: "600km",
    time: "约7.5小时",
    sights: "🌟 麦积山石窟、🌟 甘肃省博物馆、🌟 中山桥",
    accommodation: "⚠️ [需新订] 武威建隆大酒店",
    food: "兰州牛肉面",
    practical: "极其考验体力的一天",
    schedule: "<ul><li><b>08:00 - 11:30</b>: 🌟 麦积山石窟（早班登顶，体验142米绝壁栈道）。</li><li><b>11:30 - 15:30</b>: 驱车前往兰州。</li><li><b>15:30 - 17:30</b>: 参观🌟 甘肃省博物馆（青铜馆看马踏飞燕）。</li><li><b>17:30 - 19:30</b>: 漫步🌟 中山桥，享用兰州牛肉面。</li><li><b>19:30 - 23:00</b>: 夜驾驶往武威并入住。</li></ul>",
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
    title: "武威 → 张掖 → 嘉峪关 → 瓜州",
    distance: "650km",
    time: "约8小时",
    sights: "🌟 雷台汉墓、🌟 张掖大佛寺、🌟 张掖七彩丹霞、🌟 嘉峪关城楼",
    accommodation: "⚠️ [需新订] 瓜州国风大酒店",
    food: "简餐",
    practical: "利用极长日照狂奔",
    schedule: "<ul><li><b>08:00 - 09:30</b>: 🌟 雷台汉墓（马踏飞燕出土地）。</li><li><b>09:30 - 12:00</b>: 驱车前往张掖。</li><li><b>12:00 - 14:00</b>: 🌟 张掖大佛寺及简餐。</li><li><b>14:30 - 17:00</b>: 🌟 张掖七彩丹霞。</li><li><b>17:00 - 19:30</b>: 驱车前往嘉峪关。</li><li><b>19:30 - 21:00</b>: 🌟 嘉峪关城楼（夕阳下的大漠雄关）。</li><li><b>21:00 - 23:30</b>: 利用西北夏季长日照，伴着落日余晖驶往瓜州。</li></ul>",
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
    title: "瓜州 → 敦煌",
    distance: "120km",
    time: "约1.5小时",
    sights: "🌟 莫高窟、🌟 鸣沙山月牙泉、🌟 《又见敦煌》",
    accommodation: "⚠️ [需新订] 敦煌山庄 (强烈建议重订)",
    food: "瓜州蜜瓜、驴肉黄面",
    practical: "踩准11:30莫高窟",
    schedule: "<ul><li><b>08:30 - 09:30</b>: 瓜州路边品尝极甜蜜瓜，休整慢起。</li><li><b>09:30 - 11:00</b>: 驱车前往莫高窟数字展示中心。</li><li><b>11:30 - 15:30</b>: 🌟 莫高窟（完美踩准11:30场次门票）。</li><li><b>16:00 - 18:30</b>: 抵达酒店避暑休整。</li><li><b>18:30 - 21:00</b>: 日落时分游览🌟 鸣沙山月牙泉（骑骆驼）。</li><li><b>21:00 - 22:30</b>: 观看🌟 《又见敦煌》演出。</li></ul>",
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
    title: "敦煌西线",
    distance: "180km",
    time: "约3小时",
    sights: "🌟 玉门关、🌟 汉代长城遗址、🌟 阳关、🌟 雅丹魔鬼城",
    accommodation: "⚠️ [需新订] 敦煌山庄",
    food: "无",
    practical: "魔鬼城末班车",
    schedule: "<ul><li><b>09:00 - 14:00</b>: 探访大漠边关🌟 玉门关、🌟 汉代长城遗址与🌟 阳关。</li><li><b>14:00 - 17:00</b>: 驱车前往雅丹魔鬼城。</li><li><b>17:30 - 20:30</b>: 🌟 雅丹魔鬼城（乘坐末班越野车深入黑戈壁，守候极品日落）。</li></ul>",
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
    title: "敦煌 → 榆林窟 → 哈密",
    distance: "410km",
    time: "约5.5小时",
    sights: "🌟 榆林窟、🌟 哈密回王陵",
    accommodation: "⚠️ [需改期] 哈密建国饭店 (原订单需改至16日)",
    food: "大营盘羊肉焖饼",
    practical: "预留护照查验时间",
    schedule: "<ul><li><b>08:00 - 10:00</b>: 驱车前往榆林窟（跳过冗余的瓜州停留）。</li><li><b>10:00 - 12:30</b>: 游览被称为莫高窟“姊妹窟”的🌟 榆林窟（人少、壁画精美）。</li><li><b>12:30 - 17:30</b>: 跨越省界，于星星峡检查站预留时间完成外宾护照查验。</li><li><b>18:00 - 20:00</b>: 抵达哈密，参观🌟 哈密回王陵，品尝大营盘羊肉焖饼。</li></ul>",
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
    title: "哈密 → 吐鲁番",
    distance: "400km",
    time: "约5小时",
    sights: "🌟 坎儿井、🌟 阿斯塔那古墓群、🌟 柏孜克里克千佛洞、🌟 火焰山、🌟 交河故城",
    accommodation: "⚠️ [需改期] 吐鲁番美居酒店 (原订单需改至17日)",
    food: "海尔巴格",
    practical: "Astana Tombs Integrated",
    schedule: "<ul><li><b>08:00 - 12:00</b>: 穿越百里风区抵达吐鲁番。</li><li><b>12:00 - 14:00</b>: 🌟 坎儿井（地下避暑）。</li><li><b>14:00 - 17:00</b>: 🌟 阿斯塔那古墓群 (Astana Tombs)。古墓内部深入地下，气温相对阴凉，完美利用了地表极限高温的时段，探索保存完好的千年干尸与壁画。随后可短暂回酒店休整。</li><li><b>17:00 - 19:00</b>: 气温稍降后前往🌟 柏孜克里克千佛洞与🌟 火焰山。</li><li><b>19:00 - 21:00</b>: 🌟 交河故城（落日余晖下漫步两千年悬崖古城）。</li></ul>",
    spots: [
      { name: "坎儿井", type: "sight", lat: 42.9463, lng: 89.1415 },
      { name: "阿斯塔那古墓群", type: "sight", lat: 42.880, lng: 89.525 },
      { name: "柏孜克里克千佛洞", type: "sight", lat: 42.9567, lng: 89.5392 },
      { name: "交河故城", type: "sight", lat: 42.9515, lng: 88.9667 },
      { name: "吐鲁番美居酒店", type: "hotel", lat: 42.9492, lng: 89.1768 }
    ]
  },
  {
    day: 7,
    date: "2026-06-18",
    title: "吐鲁番 → 天山天池 → 独山子",
    distance: "450km",
    time: "约6小时",
    sights: "🌟 天山天池",
    accommodation: "⚠️ [需新订] 独山子/奎屯市区酒店",
    food: "顶级新疆菜",
    practical: "绕开乌鲁木齐直奔起点",
    schedule: "<ul><li><b>07:30 - 10:30</b>: 驱车前往天池。</li><li><b>10:30 - 15:00</b>: 游览🌟 天山天池。</li><li><b>15:00 - 19:30</b>: 为提高效率，绕开拥堵的乌鲁木齐市区，全程高速直插独山子/奎屯入住，全面休整。</li></ul>",
    spots: [
      { name: "星星峡检查站", type: "waypoint", lat: 41.8000, lng: 95.1000 },
      { name: "大营盘羊肉焖饼 (Dinner)", type: "restaurant", lat: 42.8310, lng: 93.5180 },
      { name: "哈密建国酒店", type: "hotel", lat: 42.8252, lng: 93.5230 }
    ]
  },
  {
    day: 8,
    date: "2026-06-19",
    title: "独山子 → 独库公路 → 那拉提",
    distance: "260km",
    time: "约6小时",
    sights: "🌟 独库公路北段、🌟 那拉提空中草原",
    accommodation: "⚠️ [需改期] 那拉提文旅度假酒店 (原订单改至19日)",
    food: "无",
    practical: "极限早起避车流",
    schedule: "<ul><li><b>06:30 - 08:30</b>: 清晨极限早起避开早高峰，直奔独山子零公里起点。</li><li><b>08:30 - 16:30</b>: 硬核穿越🌟 独库公路北段 (G217)。途径防雪长廊、哈希勒根达坂，陡峭发夹弯充分检验半联动离合器控制与坡道起步技术。</li><li><b>16:30 - 19:30</b>: 傍晚抵达并驶入🌟 那拉提空中草原。</li></ul>",
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
    title: "那拉提 → 喀拉峻 → 昭苏",
    distance: "300km",
    time: "约5小时",
    sights: "🌟 特克斯八卦城、🌟 喀拉峻大草原",
    accommodation: "⚠️ [需新订] 昭苏万豪福朋喜来登酒店",
    food: "原生态手抓羊肉",
    practical: "",
    schedule: "<ul><li><b>08:30 - 11:30</b>: 驱车前往喀拉峻，沿途车览🌟 特克斯八卦城。</li><li><b>11:30 - 16:30</b>: 深度游览🌟 喀拉峻大草原（震撼的3D“人体草原”）。</li><li><b>16:30 - 18:30</b>: 驱车前往昭苏。</li><li><b>18:30</b>: 抵达入住，享用原生态手抓羊肉。</li></ul>",
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
    title: "昭苏 → 夏塔 → 伊宁",
    distance: "250km",
    time: "约4.5小时",
    sights: "🌟 夏塔古道、🌟 喀赞其民俗村",
    accommodation: "⚠️ [需新订] 伊犁大酒店",
    food: "手工冰淇淋与烤包子",
    practical: "徒步直逼冰川",
    schedule: "<ul><li><b>08:00 - 14:00</b>: 深入🌟 夏塔古道（重装徒步直逼木扎尔特冰川）。</li><li><b>14:00 - 17:30</b>: 翻越天山抵达伊宁。</li><li><b>17:30 - 20:30</b>: 游览🌟 喀赞其民俗村（品尝百年手工冰淇淋与烤包子）。</li></ul>",
    spots: [
      { name: "可可托海", type: "sight", lat: 47.1990, lng: 89.8140 },
      { name: "额河烤鱼 (Dinner)", type: "restaurant", lat: 47.1950, lng: 89.8050 },
      { name: "可可托海镇酒店", type: "hotel", lat: 47.1900, lng: 89.8000 }
    ]
  },
  {
    day: 11,
    date: "2026-06-22",
    title: "伊宁 → 赛里木湖",
    distance: "150km",
    time: "约2小时",
    sights: "🌟 果子沟大桥、🌟 赛里木湖",
    accommodation: "⚠️ [需新订] 新疆赛里木湖万豪AC酒店",
    food: "赛湖高白鲑",
    practical: "无压力自驾环湖",
    schedule: "<ul><li><b>09:00 - 11:00</b>: 穿越巍峨的🌟 果子沟大桥。</li><li><b>11:00 - 17:00</b>: 🌟 赛里木湖（享受长达6小时的深度时光，无压力自驾360度环湖）。</li><li><b>17:30</b>: 酒店入住，品尝赛湖高白鲑。</li></ul>",
    spots: [
      { name: "远方大盘鹅 (Dinner)", type: "restaurant", lat: 47.8350, lng: 88.1350 },
      { name: "阿勒泰金桥大酒店", type: "hotel", lat: 47.8300, lng: 88.1300 }
    ]
  },
  {
    day: 12,
    date: "2026-06-23",
    title: "赛里木湖 → 乌尔禾",
    distance: "450km",
    time: "约5小时",
    sights: "🌟 世界魔鬼城",
    accommodation: "⚠️ [需新订] 克拉玛依西部乌镇酒店",
    food: "无",
    practical: "赶末班小火车",
    schedule: "<ul><li><b>09:00 - 15:00</b>: 离开赛里木湖，长途奔袭克拉玛依乌尔禾区（全程高速450km）。</li><li><b>15:00 - 17:30</b>: 抵达入住休整。</li><li><b>18:00 - 21:00</b>: 🌟 世界魔鬼城（稳稳赶上落日时分，乘坐无轨小火车穿梭风蚀雅丹群）。</li></ul>",
    spots: [
      { name: "禾木换乘中心", type: "waypoint", lat: 48.5500, lng: 87.2000 },
      { name: "禾木土火锅 (Dinner)", type: "restaurant", lat: 48.5680, lng: 87.4350 },
      { name: "禾木村特色木屋", type: "hotel", lat: 48.5670, lng: 87.4330 }
    ]
  },
  {
    day: 13,
    date: "2026-06-24",
    title: "乌尔禾 → 布尔津 → 贾登峪",
    distance: "250km",
    time: "约4.5小时",
    sights: "🌟 阿尔泰山脉",
    accommodation: "⚠️ [需新订] 贾登峪城堡酒店",
    food: "布尔津冷水鱼",
    practical: "避开喀纳斯排队",
    schedule: "<ul><li><b>08:30 - 12:30</b>: 驱车前往布尔津。</li><li><b>12:30 - 14:00</b>: 抵达布尔津享用冷水鱼午餐。</li><li><b>14:00 - 17:30</b>: 挺进阿尔泰山脉深处的贾登峪。战略意图：当晚宿于喀纳斯景区大门外，彻底解除明日区间车排队的物流瓶颈。</li></ul>",
    spots: [
      { name: "布尔津河边烤鱼 (Lunch)", type: "restaurant", lat: 47.7010, lng: 86.8510 },
      { name: "奎屯大盘鸡 (Dinner)", type: "restaurant", lat: 44.4300, lng: 84.9100 },
      { name: "奎屯罗兰酒店", type: "hotel", lat: 44.4200, lng: 84.9000 }
    ]
  },
  {
    day: 14,
    date: "2026-06-25",
    title: "贾登峪 → 喀纳斯深度游",
    distance: "60km",
    time: "约1.5小时",
    sights: "🌟 喀纳斯湖、🌟 观鱼台、🌟 神仙湾、🌟 月亮湾、🌟 卧龙湾",
    accommodation: "⚠️ [需加订一晚] 贾登峪城堡酒店",
    food: "景区简餐",
    practical: "De-bottlenecked",
    schedule: "<ul><li><b>08:00 - 17:30</b>: 全天沉浸式游览🌟 喀纳斯景区。时间极度充裕，可从容攀登1068级台阶上观鱼台俯瞰全景，随后沿木栈道徒步深度穿越神仙湾、月亮湾、卧龙湾，无需顾虑赶路的时间压力。</li><li><b>17:30 - 18:30</b>: 乘坐区间车返回贾登峪。</li></ul>",
    spots: [
      { name: "喀纳斯景区", type: "sight", lat: 48.6853, lng: 87.0175 },
      { name: "贾登峪城堡酒店", type: "hotel", lat: 48.4965, lng: 87.1423 }
    ]
  },
  {
    day: 15,
    date: "2026-06-26",
    title: "贾登峪 → 禾木",
    distance: "70km",
    time: "约2小时",
    sights: "🌟 禾木村、🌟 白桦林",
    accommodation: "⚠️ [紧急改期] 禾木草原度假山庄 (原25日改至26日)",
    food: "禾木土火锅",
    practical: "享受绝美黄昏",
    schedule: "<ul><li><b>08:30 - 11:30</b>: 驱车前往禾木门票站。</li><li><b>11:30 - 12:30</b>: 大件行李留车内，仅带双肩包乘区间车进入🌟 禾木村。</li><li><b>12:30 - 21:00</b>: 办理入住。享受完整的半天与绝美黄昏，漫步白桦林与古村落，晚餐享用土火锅。</li></ul>",
    spots: [
      { name: "禾木村", type: "sight", lat: 48.5700, lng: 87.4350 },
      { name: "禾木草原度假山庄", type: "hotel", lat: 48.5710, lng: 87.4360 }
    ]
  },
  {
    day: 16,
    date: "2026-06-27",
    title: "禾木 → 五彩滩 → 布尔津",
    distance: "200km",
    time: "约4小时",
    sights: "🌟 禾木观景台、🌟 五彩滩",
    accommodation: "⚠️ [需新订] 布尔津驿龙大酒店",
    food: "夜市畅饮格瓦斯",
    practical: "",
    schedule: "<ul><li><b>06:30 - 09:30</b>: 徒步至🌟 禾木观景台，俯瞰绝美晨雾与日出。</li><li><b>09:30 - 12:00</b>: 乘坐区间车出村，取车。</li><li><b>12:00 - 16:30</b>: 驱车返回布尔津，午餐并进行长线驾驶前的休整。</li><li><b>18:00 - 21:30</b>: 稳稳赶在日落时分抵达🌟 五彩滩，欣赏夕阳下色彩斑斓的丹霞与额尔齐斯河。夜市畅饮格瓦斯。</li></ul>",
    spots: [
      { name: "禾木观景台", type: "sight", lat: 48.5730, lng: 87.4380 },
      { name: "五彩滩", type: "sight", lat: 47.8181, lng: 86.7936 },
      { name: "布尔津驿龙大酒店", type: "hotel", lat: 47.7025, lng: 86.8778 }
    ]
  },
  {
    day: 17,
    date: "2026-06-28",
    title: "布尔津 → 乌鲁木齐 → 离境",
    distance: "520km",
    time: "约5.5小时",
    sights: "🌟 S21沙漠高速公路、🌟 新疆维吾尔自治区博物馆、🌟 新疆国际大巴扎",
    accommodation: "无",
    food: "大巴扎买伴手礼",
    practical: "Direct Extraction",
    schedule: "<ul><li><b>08:30 - 14:00</b>: 放弃可可托海的折返路线，沿🌟 S21沙漠高速公路高效直插乌鲁木齐市区（全程约5.5小时）。</li><li><b>14:00 - 16:00</b>: 参观🌟 新疆维吾尔自治区博物馆（探秘楼兰美女干尸，完美呼应吐鲁番的阿斯塔那古墓群）。</li><li><b>16:00 - 18:00</b>: 前往🌟 新疆国际大巴扎采购伴手礼。</li><li><b>18:30</b>: 准时于地窝堡国际机场 (URC) 归还车辆。</li><li><b>21:40</b>: 搭乘航班圆满离境。</li></ul>",
    spots: [
      { name: "S21沙漠高速公路", type: "sight", lat: 45.3, lng: 87.8 },
      { name: "新疆维吾尔自治区博物馆", type: "sight", lat: 43.8222, lng: 87.5872 },
      { name: "新疆国际大巴扎", type: "sight", lat: 43.7844, lng: 87.6253 },
      { name: "乌鲁木齐地窝堡国际机场 (URC)", type: "airport", lat: 43.9031, lng: 87.4725 }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = itineraryDataX;
}
