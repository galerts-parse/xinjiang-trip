const itineraryData = [
  {
    day: 1,
    date: "2026-06-12",
    title: "西安 (Xi'an) → 宝鸡 (Baoji) → 天水 (Tianshui)",
    distance: "345km",
    time: "4.5h - 5h",
    sights: "麦积山石窟 (Maijishan Grottoes). <br><br><b>历史深度 (Historical Context):</b> 麦积山石窟始建于十六国后秦时期（约公元384-417年），历经北魏、西魏、北周、隋、唐、五代、宋、元、明、清各代不断开凿和修缮。它地处古代丝绸之路的要冲，见证了佛教从西域传入中原的早期历史。与莫高窟的壁画不同，麦积山以“泥塑”名冠天下，被称为“东方雕塑馆”。唐代诗人杜甫流寓天水时，曾在此留下“野寺残僧少，山园细路高”的诗句。<br><br><b>门票与预订 (Tickets & Booking):</b> 约90元/RMB。请在微信搜索小程序“麦积山石窟”提前7天预约A类票。<a href='https://baike.baidu.com/item/%E9%BA%A6%E7%A7%AF%E5%B1%B1%E7%9F%B3%E7%AA%9F' target='_blank'>了解更多</a>",
    accommodation: "天水万豪福朋喜来登酒店 (Four Points by Sheraton Tianshui). <a href='https://www.marriott.com/en-us/hotels/thqfp-four-points-tianshui/overview/' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> 宝鸡周礼大食堂 (Baoji Zhouli Canteen) - 体验正宗西府美食（臊子面）。<br><b>晚餐 (Dinner):</b> 天水常记呱呱 (Changji Guagua) - 位于天水市区，天水最具代表性的秦州小吃。",
    practical: "提示：早上从西安出发可能拥堵。天水是中国古代“陇右”地区的咽喉，自古是兵家必争之地（如三国时期姜维降蜀的冀城之战就在天水）。",
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
    sights: "甘肃省博物馆 (Gansu Provincial Museum), 中山桥 (Zhongshan Bridge). <br><br><b>历史深度 (Historical Context):</b> 兰州，古称“金城”（取金城汤池之意），是汉代霍去病西征匈奴后设立的军事重镇。甘肃省博物馆的镇馆之宝是1969年出土于武威雷台汉墓的“马踏飞燕”（东汉铜奔马），完美展现了汉代帝国的强盛与丝路良马的雄姿。中山桥则是1907年（清光绪三十三年）由德国商人承建的黄河第一座铁桥，标志着中国西北近代工业化的开端。<br><br><b>门票与预订 (Tickets & Booking):</b> 博物馆免费。微信搜索“甘肃省博物馆”公众号提前1-3天预约。<a href='http://www.gansumuseum.com/' target='_blank'>官网</a>",
    accommodation: "兰州安宁喜来登酒店 (Sheraton Lanzhou Anning). <a href='https://www.marriott.com/en-us/hotels/lhwsr-sheraton-lanzhou-anning/overview/' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> 马子禄牛肉面 (Mazi Lu Beef Noodles) - 中华老字号，兰州牛肉面代表。<br><b>晚餐 (Dinner):</b> 正宁路夜市 (Zhengning Night Market) - 品尝老马家牛奶鸡蛋醪糟、羊肉串。",
    practical: "提示：甘肃博物馆安检严格，禁止带打火机。兰州海拔约1500米，黄河穿城而过。",
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
    sights: "武威雷台汉墓 (Wuwei Leitai Han Tomb), 张掖七彩丹霞 (Zhangye Danxia). <br><br><b>历史深度 (Historical Context):</b> 这一天你将正式驶入“河西走廊”。公元前121年，汉武帝派骠骑将军霍去病击败匈奴，打通河西走廊，设立了著名的“河西四郡”：武威、张掖、酒泉、敦煌。武威（古称凉州）取“武功军威”之意；张掖取“断匈奴之臂，张中国之掖（腋）”之意。这里是中原王朝控御西域的绝对战略核心。张掖七彩丹霞则是由距今约200万年的前侏罗纪至第三纪地壳运动形成，是地质学上的奇迹。<br><br><b>活动 (Activities):</b> 丹霞热气球体验 (Hot air balloon at Danxia). 微信小程序“张掖七彩丹霞旅游景区”购票，约93元。<a href='https://baike.baidu.com/item/%E5%BC%A0%E6%8E%96%E4%B8%83%E5%BD%A9%E4%B8%B9%E9%9C%9E%E6%97%85%E6%B8%B8%E6%99%AF%E5%8C%BA/19597288' target='_blank'>了解更多</a>",
    accommodation: "张掖金阳国际饭店 (Zhangye Jinyang International Hotel). (注: 张掖无万豪/凯悦等国际品牌). <a href='https://www.trip.com/hotels/zhangye-hotel-detail-7607770/zhangye-jinyang-international-hotel/' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> 武威三套车 (Wuwei Three-Piece Meal) - 行面、腊肉、茯茶。<br><b>晚餐 (Dinner):</b> 孙记炒炮 (Sunji Chaopao) - 张掖最著名的特色面食。",
    practical: "提示：河西走廊风景由黄土高原逐渐过渡到戈壁沙漠，紫外线开始极强，请注意防晒。",
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
    sights: "马蹄寺石窟 (Mati Temple Grottoes), 嘉峪关关城 (Jiayuguan Pass). <br><br><b>历史深度 (Historical Context):</b> 马蹄寺地处祁连山脚下，开凿于十六国北凉时期。相传藏传佛教格鲁派（黄教）神骥在此饮水落有马蹄印而得名。最震撼的“三十三天”石窟在红砂岩壁上开凿了七层栈道，需在山体内部的狭窄暗道攀爬。嘉峪关始建于明洪武五年（1372年），是明代长城最西端的起点。不同于汉代长城延伸至玉门关，明帝国因国力收缩，将国门退守至嘉峪关，关外即为“西域”。出了嘉峪关，古人便感叹“西出阳关无故人”。<br><br><b>门票与预订 (Tickets & Booking):</b> 马蹄寺全票约74元；嘉峪关约110元。可在美团(Meituan)或现场购票。<a href='https://www.travelchinaguide.com/attraction/gansu/jiayuguan/jiayuguan-pass.htm' target='_blank'>嘉峪关指南</a>",
    accommodation: "嘉峪关广场假日酒店 (Plaza Holiday Hotel Jiayuguan). <a href='https://www.tripadvisor.com/Hotel_Review-g1017088-d6350352-Reviews-Jiayuguan_Plaza_Holiday_Hotel-Jiayuguan_Gansu.html' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> 马蹄寺景区附近裕固族帐篷餐厅 (Yugur tent restaurant for roasted lamb).<br><b>晚餐 (Dinner):</b> 大唐美食街-眼镜烤肉 (Datang Food Street - Yan Jing BBQ) - 必点烤羊皮。",
    practical: "提示：去马蹄寺的路为祁连山脉盘山公路，驾驶需谨慎。嘉峪关地处风口，常年大风。",
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
    sights: "莫高窟 (Mogao Caves), 鸣沙山月牙泉 (Echoing-Sand Mountain). <br><br><b>历史深度 (Historical Context):</b> 敦煌，古丝绸之路的咽喉，东西方四大文明（中国、印度、希腊、伊斯兰）在世界地图上唯一的交汇点。莫高窟始建于前秦（公元366年），历经十六国、北朝、隋、唐、五代、西夏、元等朝代，是世界现存规模最大、延续时间最长、内容最丰富的佛教艺术宝库。晚唐时期，张义潮在此发动沙州起义，驱逐吐蕃，使得河西走廊重新回归唐朝。月牙泉则是汉代以来就存在的沙漠绿洲奇迹。<br><br><b>活动 (Activities):</b> 鸣沙山骑骆驼观日落 (Camel riding, ~100 RMB, buy on-site).<br><br><b>门票与预订 (Tickets & Booking):</b> <b>【极度警告】</b>莫高窟A类票必须提前30天在<a href='https://www.mgk.org.cn/' target='_blank'>莫高窟官网</a>或微信小程序预订！",
    accommodation: "敦煌万豪福朋喜来登酒店 (Four Points by Sheraton Dunhuang). <a href='https://www.marriott.com/en-us/hotels/dhqfp-four-points-by-sheraton-dunhuang/overview/' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> 莫高窟数字展示中心简餐 (Quick lunch at Mogao Digital Center).<br><b>晚餐 (Dinner):</b> 靖远尕六羊羔肉 (Jingyuan Galiu Lamb) 或 沙州夜市 (Shazhou Night Market) 的达记驴肉黄面。",
    practical: "提示：鸣沙山的沙子极细，务必保护好相机和手机。日落极晚，可晚上8点半前往。",
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
    sights: "玉门关 (Jade Gate Pass), 雅丹魔鬼城 (Yadan Geologic Park). <br><br><b>历史深度 (Historical Context):</b> “黄河远上白云间，一片孤城万仞山。羌笛何须怨杨柳，春风不度玉门关”（王之涣《凉州词》）。玉门关是汉武帝设立的河西最西端的关隘，因西域和田玉经此输入中原而得名。出玉门关即进入罗布泊无人区，古代商队九死一生。雅丹魔鬼城则是长年强风在干旱环境下侵蚀出的奇特地貌，因风刮过土丘发出类似鬼哭狼嚎的声音而得名。<br><br><b>门票与预订 (Tickets & Booking):</b> 玉门关约40元，雅丹魔鬼城约120元。现场购票即可。<a href='https://baike.baidu.com/item/%E7%8E%89%E9%97%A8%E5%85%B3' target='_blank'>了解玉门关</a>",
    accommodation: "瓜州融金酒店 (Guazhou Rong Jin Hotel). (无国际品牌，当地最佳).",
    food: "<b>午餐 (Lunch):</b> 玉门关景区游客中心简餐 (Visitor center fast food).<br><b>晚餐 (Dinner):</b> 瓜州夜市手工拉面，饭后尽情享用瓜州蜜瓜 (Guazhou Hand-pulled noodles & Honeydew melons).",
    practical: "提示：前往雅丹的路是戈壁深处的215国道分支，手机信号可能极弱。提前下载离线地图。",
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
    sights: "当金山口 (Dangjin Pass 3648m). 星星峡 (Xingxingxia). <br><br><b>历史深度 (Historical Context):</b> 星星峡是新疆与内地的天然分界线，自古是兵家必争之地。唐代著名僧人玄奘（唐僧）西行取经时，便是九死一生穿过这片被称为“八百里瀚海”的莫贺延碛（现在的星星峡至敦煌戈壁）。近代史上，左宗棠收复新疆的大军也是从此入疆。翻越星星峡，意味着你正式踏入了占中国陆地面积六分之一的新疆维吾尔自治区。<br><br><b>门票与预订 (Tickets & Booking):</b> 沿途自然风光，无需门票。",
    accommodation: "哈密建国酒店 (Jianguo Hotel Hami). <a href='https://www.tripadvisor.com/Hotel_Review-g1152648-d3450917-Reviews-Jianguo_Hotel_Hami-Hami_Xinjiang_Uyghur.html' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> G30高速柳园服务区简餐 (Liuyuan Service Area).<br><b>晚餐 (Dinner):</b> 大营盘特色羊肉焖饼 (Dayingpan Mutton Pancakes) - 哈密当地绝对不可错过的非遗美食。",
    practical: "提示：<b>极其严格的边境级安检：</b>星星峡检查站要求所有乘员下车，查验护照和临时驾照，车辆全面扫描。请保持耐心，可能耗时1-2小时。",
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
    sights: "火焰山 (Flaming Mountains), 坎儿井 (Karez Well System), 交河故城 (Jiaohe Ruins). <br><br><b>历史深度 (Historical Context):</b> 吐鲁番，古称高昌，是古代车师国所在地。交河故城是世界上最大、最古老、保存最完好的生土建筑城市，始建于公元前2世纪，唐朝在此设立最高级别的军政机构“安西都护府”（管理整个西域）。14世纪被蒙古贵族叛军连年战火彻底毁坏。坎儿井则是新疆干旱地区伟大的水利工程，与万里长城、京杭大运河并称为中国古代三大工程，其利用暗渠将天山雪水引入绿洲。火焰山则因明代吴承恩的《西游记》而名扬天下。<br><br><b>门票与预订 (Tickets & Booking):</b> 微信搜索“交河故城”小程序购票（约75元）。",
    accommodation: "吐鲁番美居酒店 (Mercure Turpan Downtown - Accor). <a href='https://all.accor.com/hotel/B9G7/index.en.shtml' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> 吐鲁番市区拌面 (Local Uyghur Laghman noodle shop).<br><b>晚餐 (Dinner):</b> 海尔巴格 (Herembagh) - 吐鲁番极具异域风情的高端维吾尔族餐厅，建筑华丽，碎肉抓饭极佳。",
    practical: "提示：吐鲁番6月气温可能高达40°C-45°C。交河故城全露天无遮挡，建议傍晚太阳落山前游览。",
    spots: [
      { name: "火焰山 (Flaming Mountains)", type: "sight", lat: 42.9818, lng: 89.5936 },
      { name: "吐鲁番市区拌面馆 (Lunch: Local Laghman)", type: "restaurant", lat: 42.9410, lng: 89.1750 },
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
    sights: "新疆维吾尔自治区博物馆 (Xinjiang Regional Museum), 新疆国际大巴扎 (International Grand Bazaar). <br><br><b>历史深度 (Historical Context):</b> 乌鲁木齐，蒙古语意为“优美的牧场”，是清朝乾隆皇帝平定准噶尔汗国后建立的城市。新疆博物馆的考古发掘震惊世界，这里保存着大量古代丝路上的干尸，最著名的是距今3800年的“楼兰美女”和汉代的“五星出东方利中国”织锦护臂，证明了中原王朝与西域的深厚渊源。大巴扎则是世界上规模最大的大巴扎，重现了古代丝绸之路的繁华商贸景象。<br><br><b>门票与预订 (Tickets & Booking):</b> 博物馆免费，需微信搜索“新疆维吾尔自治区博物馆”提前预约。大巴扎免费。",
    accommodation: "乌鲁木齐万怡酒店 (Fairfield by Marriott Urumqi). <a href='https://www.marriott.com/en-us/hotels/urcfi-fairfield-by-marriott-urumqi-beijing-road/overview/' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> 丝路有约 (Silu Youyue) - 大巴扎附近，高端创意新疆菜，环境极佳。<br><b>晚餐 (Dinner):</b> 血站大盘鸡 (Xuezhan Dapanji) - 乌鲁木齐最著名的大盘鸡发源地之一。",
    practical: "提示：途经著名的“达坂城风区”（王洛宾歌曲《达坂城的姑娘》所在地），此处横风常年强劲，请务必双手紧握方向盘。",
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
    sights: "赛里木湖 (Sayram Lake), 果子沟大桥 (Guozigou Bridge). <br><br><b>历史深度 (Historical Context):</b> 赛里木湖，古称“净海”，是新疆海拔最高、面积最大的高山冷水湖。这里被称为“大西洋最后一滴眼泪”，因为它是大西洋暖湿气流最后眷顾到的地方。自古以来，这里就是丝绸之路北道的必经之路。果子沟则是伊犁的天然门户，成吉思汗西征时曾在此凿山开道。现在的果子沟大桥是新疆第一座斜拉桥，极其雄伟，穿梭在雪山林海之间。<br><br><b>活动与门票 (Activities & Tickets):</b> 微信搜索“赛里木湖”小程序购买门票及自驾车环湖票（约145元）。允许外国游客自驾车进入环湖。",
    accommodation: "新疆赛里木湖万豪AC酒店 (AC Hotel Xinjiang Sayram Lake). <a href='https://www.marriott.com/en-us/hotels/urcac-ac-hotel-xinjiang-sayram-lake/overview/' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> G30高速奎屯服务区简餐 (Kuitun Rest Stop).<br><b>晚餐 (Dinner):</b> 酒店内餐厅，务必品尝赛里木湖特产“高白鲑” (Coregonus - cold water fish introduced from Russia).",
    practical: "提示：赛里木湖海拔高达2000米，即使在6月，湖边风大且极度寒冷。必须准备冲锋衣或薄羽绒服。",
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
    sights: "伊宁喀赞其 (Yining Kazanqi), 昭苏草原 (Zhaosu Grasslands). <br><br><b>历史深度 (Historical Context):</b> 伊宁是伊犁哈萨克自治州的首府，清朝乾隆皇帝平定准噶尔后在此建“宁远城”。喀赞其保留了原汁原味的维吾尔族传统生活方式，天蓝色的庭院和马车极具中亚风情。昭苏则是汉武帝梦寐以求的“天马”（乌孙马）的故乡。公元前105年，汉朝细君公主远嫁乌孙国（都城即在昭苏一带），开启了中原王朝与西域的政治联姻。<br><br><b>活动与门票 (Activities & Tickets):</b> 昭苏天马文化园观看“万马奔腾”表演。门票现场购买。<a href='https://baike.baidu.com/item/%E6%98%AD%E8%8B%8F%E5%8E%BF%E5%A4%A9%E9%A9%AC%E6%96%87%E5%8C%96%E5%9B%AD' target='_blank'>了解天马园</a>",
    accommodation: "昭苏万豪福朋喜来登酒店 (Four Points by Sheraton Zhaosu). <a href='https://www.marriott.com/en-us/hotels/urczq-four-points-by-sheraton-zhaosu/overview/' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> 喀赞其伊犁特色手工冰淇淋及烤包子 (Kazanqi local ice cream & baked buns).<br><b>晚餐 (Dinner):</b> 昭苏当地哈萨克族手抓肉 (Zhaosu Kazakh Hand-grabbed mutton).",
    practical: "提示：昭苏被称为“天山乡”，气候湿润，夏季常有阵雨，常能见到双彩虹。",
    spots: [
      { name: "喀赞其 (Kazanqi)", type: "sight", lat: 43.9061, lng: 81.3365 },
      { name: "喀赞其百年冰淇淋 (Lunch: Kazanqi Ice Cream)", type: "restaurant", lat: 43.9070, lng: 81.3375 },
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
    sights: "特克斯八卦城 (Tekes Bagua City). <br><br><b>历史深度 (Historical Context):</b> 特克斯是世界上唯一保存完整、建筑正规的“八卦城”。传说最早由南宋道教全真七子之一的丘处机（曾受成吉思汗西征时邀请前往西域）在此定下八卦风水。整个城市以中心八卦文化广场为太极“阴阳”两仪，按八卦方位向外辐射出八条主街。由于路路相通，特克斯在20世纪90年代取消了红绿灯，成为中国唯一没有红绿灯的城市。<br><br><b>活动 (Activities):</b> 乘坐摩天轮或太极眼热气球俯瞰八卦城全貌。",
    accommodation: "特克斯天麓酒店 (Tianlu Hotel - No international chains).",
    food: "<b>午餐 (Lunch):</b> 特克斯八卦城内羊排揪片子 (Mutton rib noodles).<br><b>晚餐 (Dinner):</b> 离街特色民宿区烤肉串 (Barbecue at Li Street).",
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
    sights: "喀拉峻大草原 (Kalajun Grassland). <br><br><b>历史深度 (Historical Context):</b> 喀拉峻在哈萨克语中意为“黑色的莽原”。它是西天山世界自然遗产的重要组成部分。相较于高度商业化的巴音布鲁克或那拉提，喀拉峻保留了最原始的立体高山草甸地貌（被称为“人体草原”）。这里曾是乌孙国的夏牧场，历史底蕴极其深厚。<br><br><b>活动与门票 (Activities & Tickets):</b> 深度骑马体验（向当地哈萨克牧民租马，约100-200元/小时）。门票全景游约275元（含索道观光车），微信小程序“喀拉峻旅游区”购票。",
    accommodation: "那拉提文旅度假酒店 (Nalati Wenlu Resort - Local premium).",
    food: "<b>午餐 (Lunch):</b> 喀拉峻景区内毡房简餐 (Yurt lunch inside Kalajun).<br><b>晚餐 (Dinner):</b> 那拉提镇哈萨克正宗烤全羊 (Authentic roasted lamb in Nalati town).",
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
    sights: "独库公路北段 (Duku Highway North Section). <br><br><b>历史深度 (Historical Context):</b> 独库公路（G217）是中国公路建设史上的丰碑。上世纪70年代，为了打通天山南北的国防战略通道，数万名解放军官兵在极端恶劣的冰川和悬崖上奋战了近10年，168名官兵长眠于此。乔尔玛烈士陵园就是为了纪念他们而建。这条路跨越天山近10条主要河流，翻越4个终年积雪的达坂，让你在一天内经历春夏秋冬四季。<br><br><b>门票与预订 (Tickets & Booking):</b> 公路免费，无门票。",
    accommodation: "独山子玛依塔柯酒店 (Mayitake Hotel Dushanzi).",
    food: "<b>午餐 (Lunch):</b> 乔尔玛服务区 (Qiaoerma Service Area - simple Uyghur pilaf or instant noodles).<br><b>晚餐 (Dinner):</b> 奎屯大盘辣子鸡 (Kuitun Spicy Chicken) - 独山子周边特色。",
    practical: "提示：<b>绝对禁忌：</b>仅限7座及以下客车。山区悬崖极多，天气多变，即使是6月也可能因突然降雪而临时封闭。必须在那拉提加满油！",
    spots: [
      { name: "乔尔玛 (Qiaoerma)", type: "sight", lat: 43.9185, lng: 84.2882 },
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
    sights: "安集海大峡谷 (Anjihai Grand Canyon). <br><br><b>历史深度 (Historical Context):</b> 安集海大峡谷并非历史人文景点，而是天山雪水融化后经过亿万年冲刷形成的大地裂缝。它是新疆极少数尚未被完全商业化开发的野生摄影圣地，红色的泥质岩石和深渊中绿色的安集海河交织，色彩极度震撼。<br><br><b>门票与预订 (Tickets & Booking):</b> 属于未完全开发野景点，目前多为免费或收取小额卫生费。",
    accommodation: "乌鲁木齐万怡酒店 (Fairfield by Marriott Urumqi). <a href='https://www.marriott.com/en-us/hotels/urcfi-fairfield-by-marriott-urumqi-beijing-road/overview/' target='_blank'>Book Here</a>",
    food: "<b>午餐 (Lunch):</b> 安集海镇农家乐 (Farmhouse food in Anjihai town).<br><b>晚餐 (Dinner):</b> 胖老汉清真餐饮 (Panglaohan Halal Restaurant) - 乌鲁木齐著名的椒麻鸡，排队人数极多。",
    practical: "提示：大峡谷边缘没有护栏，风大，拍照时务必远离悬崖边缘。回乌鲁木齐为全程高速公路。",
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
    sights: "天山天池 (Heavenly Lake of Tianshan). <br><br><b>历史深度 (Historical Context):</b> 天山天池是联合国教科文组织世界自然遗产。古称“瑶池”，在中国古代神话中，这里是西王母沐浴的地方。清乾隆四十八年（1783年），乌鲁木齐都统明亮在此开渠引水，并在《灵山天池统凿水渠碑记》中将之定名为“天池”。背靠常年积雪的博格达峰，是新疆最具标志性的名片。<br><br><b>门票与预订 (Tickets & Booking):</b> 约155元（含区间车）。微信小程序“天山天池”提前购票。",
    accommodation: "无 (N/A - Flight out)",
    food: "<b>午餐 (Lunch):</b> 天池景区内游客中心简餐或阜康市手抓肉 (Tianchi visitor center).<br><b>晚餐 (Dinner):</b> 机场候机楼内就餐。",
    practical: "提示：<b>安全红线：</b>乌鲁木齐地窝堡机场（URC）安检级别是全中国最高。搭乘国际航班请务必提前3-4小时抵达机场。租车归还需预留充足时间。",
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
