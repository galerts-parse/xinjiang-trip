const itineraryDataD = [
  {
    day: 1,
    date: "2026-06-12",
    title: "西安 (Xi'an) → 天水 (Tianshui)",
    distance: "345km",
    time: "4.5h",
    sights: "大雁塔 (Big Wild Goose Pagoda), 麦积山石窟 (Maijishan Grottoes). <br><br><b>历史与奇观:</b> 从西安大雁塔出发，下午前往天水麦积山石窟。麦积山并非普通的地面建筑，而是在高达142米的垂直绝壁上开凿出来的，层层叠叠的“凌空栈道”令人叹为观止。<br><br><b>门票与预订:</b> 必须提前7天在微信搜索小程序“麦积山石窟”预约A类票。<a href='https://baike.baidu.com/item/%E9%BA%A6%E7%A7%AF%E5%B1%B1%E7%9F%B3%E7%AA%9F' target='_blank'>百度百科: 麦积山石窟</a>",
    accommodation: "天水万豪福朋喜来登酒店 (Four Points by Sheraton Tianshui). <a href='https://www.marriott.com/en-us/hotels/tian-four-points-tianshui/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 宝鸡周礼大食堂 (Baoji Zhouli Canteen). <a href='https://uri.amap.com/search?keyword=%E5%AE%9D%E9%B8%A1%E5%91%A8%E7%A4%BC%E5%A4%A7%E9%A3%9F%E5%A0%82' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 天水常记呱呱 (Changji Guagua). <a href='https://uri.amap.com/search?keyword=%E5%A4%A9%E6%B0%B4%E5%B8%B8%E8%AE%B0%E5%91%B1%E5%91%B1' target='_blank'>高德地图</a>",
    practical: "提示：麦积山绝壁栈道非常陡峭，恐高者需做好心理准备。",
    schedule: "<ul><li><b>08:30 - 09:30</b>: 大雁塔外观打卡 (Xi'an Big Wild Goose Pagoda)</li><li><b>09:30 - 11:30</b>: 驱车前往宝鸡 (Drive to Baoji)</li><li><b>11:30 - 12:30</b>: 宝鸡周礼大食堂午餐 (Lunch)</li><li><b>12:30 - 14:30</b>: 驱车前往天水麦积山 (Drive to Maijishan)</li><li><b>14:30 - 17:30</b>: 游览麦积山石窟 (Maijishan Grottoes Tour)</li><li><b>18:30</b>: 天水市区晚餐及入住酒店 (Dinner & Check-in)</li></ul>",
    spots: [
      { name: "大雁塔", type: "sight", lat: 34.2182, lng: 108.9583 },
      { name: "周礼大食堂 (Lunch)", type: "restaurant", lat: 34.3643, lng: 107.1444 },
      { name: "麦积山石窟", type: "sight", lat: 34.3541, lng: 106.0002 },
      { name: "天水常记呱呱 (Dinner)", type: "restaurant", lat: 34.5772, lng: 105.7231 },
      { name: "天水万豪福朋喜来登", type: "hotel", lat: 34.5612, lng: 105.7483 }
    ]
  },
  {
    day: 2,
    date: "2026-06-13",
    title: "天水 (Tianshui) → 兰州 (Lanzhou)",
    distance: "320km",
    time: "4h",
    sights: "甘肃省博物馆 (Gansu Provincial Museum), 中山桥 (Zhongshan Bridge). <br><br><b>历史与奇观:</b> 参观甘肃省博物馆的镇馆之宝“马踏飞燕”（铜奔马）。傍晚漫步于黄河第一铁桥——中山桥。<br><br><b>门票与预订:</b> 博物馆免费，需提前1-3天通过微信预约。<a href='https://baike.baidu.com/item/%E7%94%98%E8%82%83%E7%9C%81%E5%8D%9A%E7%89%A9%E9%A6%86' target='_blank'>百度百科: 博物馆</a>",
    accommodation: "兰州安宁喜来登酒店 (Sheraton Lanzhou Anning). <a href='https://www.marriott.com/en-us/hotels/lhwsi-sheraton-lanzhou-anning/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 马子禄牛肉面 (Mazilu Beef Noodles). <a href='https://uri.amap.com/search?keyword=%E5%85%B0%E5%B7%9E%E9%A9%AC%E5%AD%90%E7%A6%84%E7%89%9B%E8%82%89%E9%9D%A2' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 正宁路夜市老马家 (Zhengning Road Night Market). <a href='https://uri.amap.com/search?keyword=%E5%85%B0%E5%B7%9E%E6%AD%A3%E5%AE%81%E8%B7%AF%E5%A4%9C%E5%B8%82' target='_blank'>高德地图</a>",
    practical: "提示：黄河穿城而过，晚上在中山桥吹晚风非常惬意。",
    schedule: "<ul><li><b>08:30 - 10:30</b>: 驱车前往甘肃省博物馆 (Drive to Gansu Museum)</li><li><b>10:30 - 12:30</b>: 参观甘肃省博物馆，看马踏飞燕 (Museum Tour)</li><li><b>12:30 - 13:30</b>: 享用马子禄牛肉面 (Lunch)</li><li><b>13:30 - 15:30</b>: 驱车前往兰州市区酒店入住休息 (Drive & Check-in)</li><li><b>16:30 - 18:00</b>: 漫步中山桥黄河风情线 (Zhongshan Bridge Walk)</li><li><b>18:30</b>: 正宁路夜市寻觅美食 (Night Market Dinner)</li></ul>",
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
    title: "兰州 (Lanzhou) → 武威 (Wuwei) → 张掖 (Zhangye)",
    distance: "510km",
    time: "7h",
    sights: "雷台汉墓 (Leitai Han Tomb), 张掖七彩丹霞 (Zhangye Danxia). <br><br><b>历史与奇观:</b> 途经武威参观雷台汉墓，感受汉代古墓的幽暗。傍晚抵达张掖七彩丹霞，地貌色彩斑斓。<br><br><b>门票与预订:</b> 丹霞门票无需提前太久抢，建议下午入园。<a href='https://baike.baidu.com/item/%E5%BC%A0%E6%8E%96%E4%B8%83%E5%BD%A9%E4%B8%B9%E9%9C%9E%E6%97%85%E6%B8%B8%E6%99%AF%E5%8C%BA/19597288' target='_blank'>百度百科: 丹霞</a>",
    accommodation: "张掖宾馆 (Zhangye Hotel). <a href='https://www.trip.com/hotels/zhangye-hotel-detail-6477196/zhangye-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 武威三套车 (Wuwei Three-Course Meal). <a href='https://uri.amap.com/search?keyword=%E6%AD%A6%E5%A8%81%E4%B8%89%E5%A5%97%E8%BD%A6' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 孙记炒炮 (Sunji Fried Noodles). <a href='https://uri.amap.com/search?keyword=%E5%BC%A0%E6%8E%96%E5%AD%99%E8%AE%B0%E7%82%92%E7%82%AE' target='_blank'>高德地图</a>",
    practical: "提示：丹霞景区全露天，请务必做好防晒和补水。",
    schedule: "<ul><li><b>08:00 - 11:30</b>: 兰州驱车前往武威 (Drive to Wuwei)</li><li><b>11:30 - 12:30</b>: 武威三套车午餐 (Lunch)</li><li><b>12:30 - 14:00</b>: 探访雷台汉墓 (Leitai Han Tomb)</li><li><b>14:00 - 17:00</b>: 驱车前往张掖七彩丹霞 (Drive to Zhangye Danxia)</li><li><b>17:00 - 20:00</b>: 丹霞景区游览，欣赏绝美日落 (Danxia Sunset Tour)</li><li><b>20:30</b>: 抵达张掖市区晚餐并入住 (Dinner & Check-in)</li></ul>",
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
    title: "张掖 (Zhangye) → 嘉峪关 (Jiayuguan) → 敦煌 (Dunhuang)",
    distance: "600km",
    time: "8h",
    sights: "嘉峪关城楼 (Jiayuguan Fort), 悬壁长城 (Overhanging Great Wall). <br><br><b>历史与奇观:</b> 上午探访明代万里长城的最西端起点“天下第一雄关”嘉峪关。下午驱车跨越茫茫戈壁直奔敦煌。<br><br><b>门票:</b> 嘉峪关景区联票（含城楼、悬壁、第一墩）。<a href='https://baike.baidu.com/item/%E5%98%89%E5%B3%AA%E5%85%B3' target='_blank'>百度百科: 嘉峪关</a>",
    accommodation: "敦煌山庄 (Dunhuang Villa). <a href='https://www.trip.com/hotels/dunhuang-hotel-detail-715758/dunhuang-villa/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 嘉峪关马保子烤肉店 (Ma Baozi Barbecue). <a href='https://uri.amap.com/search?keyword=%E5%98%89%E5%B3%AA%E5%85%B3%E9%A9%AC%E4%BF%9D%E5%AD%90%E7%83%A4%E8%82%89' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 敦煌沙洲夜市烤红柳羊肉 (Shazhou Night Market). <a href='https://uri.amap.com/search?keyword=%E6%95%A6%E7%85%8C%E6%B2%99%E6%B4%B2%E5%A4%9C%E5%B8%82' target='_blank'>高德地图</a>",
    practical: "提示：今日行车距离极长，下午需驱车近400公里前往敦煌，请务必两人轮流驾驶。",
    schedule: "<ul><li><b>08:30 - 11:00</b>: 驱车前往嘉峪关 (Drive to Jiayuguan)</li><li><b>11:00 - 13:30</b>: 游览嘉峪关城楼与悬壁长城 (Jiayuguan Fort Tour)</li><li><b>13:30 - 14:30</b>: 嘉峪关马保子烤肉午餐 (Lunch)</li><li><b>14:30 - 18:30</b>: 跨越戈壁，长途奔袭敦煌 (Long Drive to Dunhuang)</li><li><b>19:00</b>: 入住敦煌山庄，前往沙洲夜市 (Check-in & Night Market)</li></ul>",
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
    title: "敦煌全天游览 (Dunhuang City Tour)",
    distance: "30km",
    time: "1h",
    sights: "莫高窟 (Mogao Caves), 鸣沙山月牙泉 (Mingsha Mountain). <br><br><b>历史与奇观:</b> 昨晚已抵达敦煌，今天可以从容地起早先游览世界上现存规模最大、内容最丰富的佛教艺术地莫高窟。傍晚前往鸣沙山，等待月牙泉边的壮美日落。<br><br><b>门票与预订 (CRITICAL):</b> 莫高窟 A 类票必须提前整整 **30天** 抢票！必须定好闹钟！<a href='https://baike.baidu.com/item/%E8%8E%AB%E9%AB%98%E7%AA%9F/122474' target='_blank'>百度百科: 莫高窟</a>",
    accommodation: "敦煌山庄 (Dunhuang Villa). <a href='https://www.trip.com/hotels/dunhuang-hotel-detail-715758/dunhuang-villa/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 敦煌达记驴肉黄面 (Daji Donkey Meat Noodles). <a href='https://uri.amap.com/search?keyword=%E6%95%A6%E7%85%8C%E8%BE%BE%E8%AE%B0%E9%A9%B4%E8%82%89%E9%BB%84%E9%9D%A2' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 靖远尕六羊羔肉 (Jingyuan Galiu Lamb). <a href='https://uri.amap.com/search?keyword=%E6%95%A6%E7%85%8C%E9%9D%96%E8%BF%9C%E5%B0%95%E5%85%AD%E7%BE%8A%E7%BE%94%E8%82%89' target='_blank'>高德地图</a>",
    practical: "提示：沙漠沙子极细，千万不要在沙丘上换镜头，手机孔也要贴好防尘贴。",
    schedule: "<ul><li><b>09:00 - 13:00</b>: 深度游览莫高窟 (Mogao Caves Tour)</li><li><b>13:30 - 14:30</b>: 达记驴肉黄面午餐 (Lunch)</li><li><b>14:30 - 17:30</b>: 酒店避暑休息 (Hotel Rest)</li><li><b>17:30 - 20:30</b>: 鸣沙山骑骆驼，欣赏大漠日落 (Mingsha Mountain Sunset)</li><li><b>21:00</b>: 靖远尕六羊羔肉大餐 (Dinner)</li></ul>",
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
    title: "敦煌西线 (Dunhuang West Route)",
    distance: "180km",
    time: "3h",
    sights: "玉门关 (Yumen Pass), 汉代长城遗址 (Han Great Wall Ruins), 敦煌雅丹国家地质公园 (Yadan Geopark). <br><br><b>历史与奇观:</b> 深入戈壁无人区，探寻“春风不度玉门关”的遗迹。傍晚在雅丹魔鬼城欣赏最壮观的黑戈壁落日。<br><br><b>安排:</b> 西线为一条直线，先经过玉门关，终点是雅丹地质公园。<a href='https://baike.baidu.com/item/%E7%8E%89%E9%97%A8%E5%85%B3' target='_blank'>百度百科: 玉门关</a>",
    accommodation: "敦煌山庄 (Dunhuang Villa). <a href='https://www.trip.com/hotels/dunhuang-hotel-detail-715758/dunhuang-villa/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 强烈建议自带干粮，西线沿途几乎没有任何像样的餐厅。<br><b>晚餐 (Dinner):</b> 敦煌夏家合汁 (Xiajia Hezhi). <a href='https://uri.amap.com/search?keyword=%E6%95%A6%E7%85%8C%E5%A4%8F%E5%AE%B6%E5%90%88%E6%B1%81' target='_blank'>高德地图</a>",
    practical: "提示：西线后半段经常没有手机信号，请提前下载好离线地图！",
    schedule: "<ul><li><b>09:30 - 11:00</b>: 驱车前往玉门关 (Drive to Yumen Pass)</li><li><b>11:00 - 12:30</b>: 探寻玉门关与汉代长城遗址 (Yumen Pass Ruins)</li><li><b>12:30 - 13:30</b>: 戈壁简餐或干粮 (Lunch - Packed Food)</li><li><b>13:30 - 15:00</b>: 驱车前往雅丹魔鬼城 (Drive to Yadan Geopark)</li><li><b>15:00 - 18:30</b>: 深度游览雅丹地貌 (Yadan Geopark Tour)</li><li><b>18:30 - 20:30</b>: 返回敦煌市区 (Drive back to Dunhuang)</li><li><b>21:00</b>: 夏家合汁晚餐 (Dinner)</li></ul>",
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
    title: "敦煌 (Dunhuang) → 哈密 (Hami)",
    distance: "410km",
    time: "5.5h",
    sights: "星星峡 (Xingxingxia), 跨越省界进入新疆. <br><br><b>历史与奇观:</b> 离开甘肃，穿越连霍高速，在星星峡正式踏入新疆土地。<a href='https://baike.baidu.com/item/%E6%98%9F%E6%98%9F%E5%B3%A1' target='_blank'>百度百科: 星星峡</a>",
    accommodation: "哈密建国酒店 (Jianguo Hotel Hami). <a href='https://www.trip.com/hotels/hami-hotel-detail-1237956/jianguo-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 柳园服务区简餐 (Liuyuan Rest Stop).<br><b>晚餐 (Dinner):</b> 大营盘羊肉焖饼 (Dayingpan Mutton Pancakes). <a href='https://uri.amap.com/search?keyword=%E5%93%88%E5%AF%86%E5%A4%A7%E8%90%A5%E7%9B%98%E7%BE%8A%E8%82%89%E7%84%96%E9%A5%BC' target='_blank'>高德地图</a>",
    practical: "提示：星星峡检查站将会有严格的安检，请务必提前准备好身份证件。",
    schedule: "<ul><li><b>08:30 - 11:30</b>: 驱车前往柳园 (Drive to Liuyuan)</li><li><b>11:30 - 12:30</b>: 柳园服务区午餐 (Lunch)</li><li><b>12:30 - 14:30</b>: 跨越星星峡进入新疆 (Cross Xinjiang Border)</li><li><b>14:30 - 17:30</b>: 抵达哈密市区 (Arrive in Hami)</li><li><b>18:30</b>: 大营盘羊肉焖饼晚餐并入住 (Dinner & Check-in)</li></ul>",
    spots: [
      { name: "星星峡检查站", type: "waypoint", lat: 41.8000, lng: 95.1000 },
      { name: "大营盘羊肉焖饼 (Dinner)", type: "restaurant", lat: 42.8310, lng: 93.5180 },
      { name: "哈密建国酒店", type: "hotel", lat: 42.8252, lng: 93.5230 }
    ]
  },
  {
    day: 8,
    date: "2026-06-19",
    title: "哈密 (Hami) → 吐鲁番 (Turpan)",
    distance: "400km",
    time: "5h",
    sights: "火焰山 (Flaming Mountains). <br><br><b>历史与奇观:</b> 夏季这里的地表温度经常突破70度，是中国最热的地方，寸草不生。<a href='https://baike.baidu.com/item/%E7%81%AB%E7%84%B0%E5%B1%B1/116' target='_blank'>百度百科: 火焰山</a>",
    accommodation: "吐鲁番美居酒店 (Mercure Turpan Downtown). <a href='https://www.trip.com/hotels/turpan-hotel-detail-93375811/mercure-turpan-downtown/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 鄯善县沿途简餐.<br><b>晚餐 (Dinner):</b> 海尔巴格 (Herembagh) - 高端维吾尔族餐厅。 <a href='https://uri.amap.com/search?keyword=%E5%90%90%E9%B2%81%E7%95%AA%E6%B5%B7%E5%B0%94%E5%B7%B4%E6%A0%BC' target='_blank'>高德地图</a>",
    practical: "提示：防暑降温是吐鲁番的头等大事，车内一定要备足矿泉水。",
    schedule: "<ul><li><b>08:30 - 12:30</b>: 驱车前往鄯善县 (Drive to Shanshan)</li><li><b>12:30 - 13:30</b>: 沿途简餐 (Lunch)</li><li><b>13:30 - 15:00</b>: 驱车前往吐鲁番火焰山 (Drive to Flaming Mountains)</li><li><b>15:00 - 17:00</b>: 顶着酷暑体验火焰山 (Flaming Mountains Tour)</li><li><b>17:30 - 18:00</b>: 驱车前往吐鲁番市区入住 (Drive to Turpan City)</li><li><b>19:00</b>: 海尔巴格维吾尔风情晚餐 (Dinner)</li></ul>",
    spots: [
      { name: "火焰山", type: "sight", lat: 42.9400, lng: 89.5000 },
      { name: "海尔巴格餐厅 (Dinner)", type: "restaurant", lat: 42.9420, lng: 89.1800 },
      { name: "吐鲁番美居酒店", type: "hotel", lat: 42.9550, lng: 89.1865 }
    ]
  },
  {
    day: 9,
    date: "2026-06-20",
    title: "吐鲁番 (Turpan) → 乌鲁木齐 (Urumqi)",
    distance: "200km",
    time: "3.5h",
    sights: "天山天池风景区 (Tianchi Lake), 新疆国际大巴扎 (Grand Bazaar). <br><br><b>历史与奇观:</b> 游览天山天池，下午前往世界最大的巴扎——大巴扎。<br><br><b>门票:</b> 提前1天在微信小程序“天山天池”购票。<a href='https://baike.baidu.com/item/%E5%A4%A9%E5%B1%B1%E5%A4%A9%E6%B1%A0%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C%E5%8C%BA' target='_blank'>百度百科: 天池</a>",
    accommodation: "乌鲁木齐万怡酒店 (Fairfield by Marriott Urumqi). <a href='https://www.marriott.com/en-us/hotels/urcfi-fairfield-by-marriott-urumqi-beijing-road/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 丝路有约 (Silk Road Rendezvous). <a href='https://uri.amap.com/search?keyword=%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E4%B8%9D%E8%B7%AF%E6%9C%89%E7%BA%A6' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 纳瓦新疆菜 (Nawa Xinjiang Cuisine). <a href='https://uri.amap.com/search?keyword=%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E7%BA%B3%E7%93%A6' target='_blank'>高德地图</a>",
    practical: "提示：经过著名的达坂城风区时横风极大，请双手紧握方向盘。",
    schedule: "<ul><li><b>08:30 - 10:30</b>: 驱车前往乌鲁木齐天山天池 (Drive to Tianchi)</li><li><b>10:30 - 13:30</b>: 游览天山天池 (Tianchi Lake Tour)</li><li><b>13:30 - 14:30</b>: 驱车进入乌鲁木齐市区 (Drive to Urumqi City)</li><li><b>14:30 - 15:30</b>: 丝路有约高端午餐 (Lunch)</li><li><b>15:30 - 18:30</b>: 漫步新疆国际大巴扎 (Grand Bazaar Tour)</li><li><b>19:00</b>: 入住万怡酒店，享用纳瓦新疆菜 (Check-in & Dinner)</li></ul>",
    spots: [
      { name: "天山天池", type: "sight", lat: 43.8906, lng: 88.1311 },
      { name: "丝路有约 (Lunch)", type: "restaurant", lat: 43.7800, lng: 87.6200 },
      { name: "国际大巴扎", type: "sight", lat: 43.7745, lng: 87.6166 },
      { name: "纳瓦新疆菜 (Dinner)", type: "restaurant", lat: 43.8310, lng: 87.5850 },
      { name: "乌鲁木齐万怡酒店", type: "hotel", lat: 43.8560, lng: 87.5620 }
    ]
  },
  {
    day: 10,
    date: "2026-06-21",
    title: "乌鲁木齐 (Urumqi) → 可可托海 (Keketuohai)",
    distance: "500km",
    time: "6h",
    sights: "S21沙漠高速公路, 可可托海国家地质公园 (Keketuohai Geopark). <br><br><b>历史与奇观:</b> 经由中国首条横穿沙漠的高速S21一路向北，抵达可可托海的英雄矿。<a href='https://baike.baidu.com/item/%E5%8F%AF%E5%8F%AF%E6%89%98%E6%B5%B7%E5%9B%BD%E5%AE%B6%E5%9C%B0%E8%B4%A8%E5%85%AC%E5%9B%AD' target='_blank'>百度百科: 可可托海</a>",
    accommodation: "富蕴可可托海镇特色酒店 (Keketuohai Town Hotel). <a href='https://www.trip.com/hotels/fuyun-hotel-detail-40439695/keketuo-sea-cheng-ying-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 克拉美丽服务区简餐 (Klamali Rest Stop).<br><b>晚餐 (Dinner):</b> 可可托海镇额河冷水烤鱼 (Ertix River Fish). <a href='https://uri.amap.com/search?keyword=%E5%8F%AF%E5%8F%AF%E6%89%98%E6%B5%B7%E9%95%87%E7%83%A4%E9%B1%BC' target='_blank'>高德地图</a>",
    practical: "提示：S21高速全程笔直，极易导致疲劳驾驶。可可托海冷，需带薄羽绒。",
    schedule: "<ul><li><b>08:30 - 12:00</b>: 穿越S21沙漠高速公路 (Drive via S21 Desert Highway)</li><li><b>12:00 - 13:00</b>: 克拉美丽服务区午餐 (Lunch)</li><li><b>13:00 - 16:00</b>: 继续驱车前往可可托海 (Drive to Keketuohai)</li><li><b>16:00 - 19:00</b>: 游览可可托海国家地质公园 (Keketuohai Geopark Tour)</li><li><b>19:30</b>: 额河烤鱼晚餐并入住 (Dinner & Check-in)</li></ul>",
    spots: [
      { name: "可可托海", type: "sight", lat: 47.1990, lng: 89.8140 },
      { name: "额河烤鱼 (Dinner)", type: "restaurant", lat: 47.1950, lng: 89.8050 },
      { name: "可可托海镇酒店", type: "hotel", lat: 47.1900, lng: 89.8000 }
    ]
  },
  {
    day: 11,
    date: "2026-06-22",
    title: "可可托海 (Keketuohai) → 阿勒泰 (Altay)",
    distance: "250km",
    time: "4h",
    sights: "阿勒泰市区风光 (Altay City). <br><br><b>历史与奇观:</b> 抵达“人类滑雪起源地”阿勒泰市。这是北疆的核心城市，在此进行休整与深度补给。<a href='https://baike.baidu.com/item/%E9%98%BF%E5%8B%92%E6%B3%B0%E5%B8%82' target='_blank'>百度百科: 阿勒泰</a>",
    accommodation: "阿勒泰金桥大酒店 (Altay Jinqiao Hotel). <a href='https://www.trip.com/hotels/altay-city-hotel-detail-1234914/jinqiao-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 富蕴县城拌面.<br><b>晚餐 (Dinner):</b> 远方大盘鹅 (Yuanfang Goose Stew). <a href='https://uri.amap.com/search?keyword=%E9%98%BF%E5%8B%92%E6%B3%B0%E8%BF%9C%E6%96%B9%E5%A4%A7%E7%9B%98%E9%B9%85' target='_blank'>高德地图</a>",
    practical: "提示：请在超市购买好进入喀纳斯景区所需的高热量零食和水。",
    schedule: "<ul><li><b>09:00 - 11:30</b>: 离开可可托海前往富蕴县城 (Drive to Fuyun)</li><li><b>11:30 - 12:30</b>: 富蕴县城拌面午餐 (Lunch)</li><li><b>12:30 - 15:00</b>: 驱车前往阿勒泰市 (Drive to Altay City)</li><li><b>15:00 - 18:00</b>: 阿勒泰市区漫步及超市大采购 (Altay City Tour & Grocery Shopping)</li><li><b>18:30</b>: 远方大盘鹅晚餐并入住 (Dinner & Check-in)</li></ul>",
    spots: [
      { name: "远方大盘鹅 (Dinner)", type: "restaurant", lat: 47.8350, lng: 88.1350 },
      { name: "阿勒泰金桥大酒店", type: "hotel", lat: 47.8300, lng: 88.1300 }
    ]
  },
  {
    day: 12,
    date: "2026-06-23",
    title: "阿勒泰 (Altay) → 喀纳斯 / 禾木 (Kanas / Hemu)",
    distance: "220km",
    time: "4h",
    sights: "禾木古村驿站 (Hemu Village), 观鱼台 (Guanyu Pavilion). <br><br><b>历史与奇观:</b> 探访图瓦人的保留地禾木村，登上喀纳斯观鱼台。<br><br><b>门票与预订:</b> 必须通过微信小程序提前实名制预约！<a href='https://baike.baidu.com/item/%E7%A6%BE%E6%9C%A8%E6%9D%91' target='_blank'>百度百科: 禾木</a>",
    accommodation: "禾木村特色木屋 (Hemu Wooden Cabin). <a href='https://www.trip.com/hotels/buerjin-hotel-detail-70679781/hemu-scenic-area-hemu-lin-ye-villa/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 喀纳斯换乘中心餐厅.<br><b>晚餐 (Dinner):</b> 禾木土火锅 (Hemu Hotpot). <a href='https://uri.amap.com/search?keyword=%E7%A6%BE%E6%9C%A8%E6%9D%91%E5%9C%9F%E7%81%AB%E9%94%85' target='_blank'>高德地图</a>",
    practical: "提示：景区内私家车无法入内，需乘坐换乘区间车。山里极其寒冷。",
    schedule: "<ul><li><b>08:00 - 11:30</b>: 驱车前往喀纳斯换乘中心 (Drive to Kanas Center)</li><li><b>11:30 - 12:30</b>: 换乘中心简餐 (Lunch)</li><li><b>12:30 - 16:00</b>: 登顶观鱼台，俯瞰喀纳斯湖 (Guanyu Pavilion Tour)</li><li><b>16:00 - 18:00</b>: 乘区间车前往禾木村 (Transfer to Hemu Village)</li><li><b>18:30</b>: 入住禾木小木屋，享用土火锅晚餐 (Check-in & Hemu Hotpot)</li></ul>",
    spots: [
      { name: "观鱼台", type: "sight", lat: 48.6950, lng: 87.0120 },
      { name: "禾木土火锅 (Dinner)", type: "restaurant", lat: 48.5680, lng: 87.4350 },
      { name: "禾木村特色木屋", type: "hotel", lat: 48.5670, lng: 87.4330 }
    ]
  },
  {
    day: 13,
    date: "2026-06-24",
    title: "喀纳斯 (Kanas) → 布尔津 (Burqin) → 奎屯 (Kuitun)",
    distance: "500km",
    time: "7h",
    sights: "布尔津 (Burqin), 沿途风光. <br><br><b>行程安排:</b> 离开阿尔泰山脉，途径童话边城布尔津稍作停留，穿越广袤的准噶尔盆地。",
    accommodation: "奎屯罗兰酒店 (Kuitun Luolan Hotel). <a href='https://www.trip.com/hotels/kuytun-hotel-detail-51690040/luo-lan-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 布尔津额尔齐斯河冷水鱼夜市. <a href='https://uri.amap.com/search?keyword=%E5%B8%83%E5%B0%94%E6%B4%A5%E5%A4%9C%E5%B8%82' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 奎屯雪莲宾馆清真餐厅大盘鸡. <a href='https://uri.amap.com/search?keyword=%E5%A5%8E%E5%B1%AF%E9%9B%AA%E8%8E%B2%E5%A4%A7%E7%9B%98%E9%B8%A1' target='_blank'>高德地图</a>",
    practical: "提示：今天行车距离较长，沿途有大量的区间测速，切勿超速。",
    schedule: "<ul><li><b>08:00 - 10:00</b>: 禾木观景台看晨雾 (Hemu Morning Mist)</li><li><b>10:00 - 13:00</b>: 驱车下山前往布尔津 (Drive to Burqin)</li><li><b>13:00 - 14:00</b>: 布尔津河边烤鱼午餐 (Lunch)</li><li><b>14:00 - 18:30</b>: 穿越准噶尔盆地长途奔袭奎屯 (Long Drive to Kuitun)</li><li><b>19:00</b>: 雪莲大盘鸡晚餐并入住 (Dinner & Check-in)</li></ul>",
    spots: [
      { name: "布尔津河边烤鱼 (Lunch)", type: "restaurant", lat: 47.7010, lng: 86.8510 },
      { name: "奎屯大盘鸡 (Dinner)", type: "restaurant", lat: 44.4300, lng: 84.9100 },
      { name: "奎屯罗兰酒店", type: "hotel", lat: 44.4200, lng: 84.9000 }
    ]
  },
  {
    day: 14,
    date: "2026-06-25",
    title: "奎屯 (Kuitun) → 赛里木湖 (Sayram Lake) → 伊宁 (Yining)",
    distance: "350km",
    time: "5h",
    sights: "赛里木湖 (Sayram Lake), 果子沟大桥 (Guozigou Bridge). <br><br><b>历史与奇观:</b> 欣赏被称为“大西洋最后一滴眼泪”的赛里木湖。随后穿越伊犁第一景果子沟。<br><br><b>门票与预订:</b> 赛里木湖允许自驾环湖。<a href='https://baike.baidu.com/item/%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96/161477' target='_blank'>百度百科: 赛里木湖</a>",
    accommodation: "新疆赛里木湖万豪AC酒店 (AC Hotel by Marriott Xinjiang Sayram Lake). <a href='https://www.marriott.com/en-us/hotels/urcac-ac-hotel-xinjiang-sayram-lake/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 沿途精河服务区简餐.<br><b>晚餐 (Dinner):</b> 赛里木湖高白鲑 (Coregonus fish). <a href='https://uri.amap.com/search?keyword=%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E9%AB%98%E7%99%BD%E9%B2%91' target='_blank'>高德地图</a>",
    practical: "提示：赛里木湖海拔高达2000米，即使在夏季也需穿着防风外套。",
    schedule: "<ul><li><b>08:30 - 11:30</b>: 驱车前往精河 (Drive to Jinghe)</li><li><b>11:30 - 12:30</b>: 精河服务区午餐 (Lunch)</li><li><b>12:30 - 14:00</b>: 驱车抵达赛里木湖 (Drive to Sayram Lake)</li><li><b>14:00 - 18:00</b>: 赛里木湖自驾环湖游 (Sayram Lake Self-drive Tour)</li><li><b>18:00 - 19:00</b>: 穿越果子沟大桥 (Cross Guozigou Bridge)</li><li><b>19:30</b>: 入住AC酒店，享用高白鲑晚餐 (Check-in & Dinner)</li></ul>",
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
    title: "伊宁 (Yining) → 昭苏 (Zhaosu) → 夏塔 (Xiata)",
    distance: "180km",
    time: "3.5h",
    sights: "昭苏县 (Zhaosu), 夏塔旅游区 (Xiata). <br><br><b>历史与奇观:</b> 离开伊宁，探访“天马”故乡昭苏。下午进入夏塔古道。<a href='https://baike.baidu.com/item/%E5%A4%8F%E7%89%B9%E5%8F%A4%E9%81%93' target='_blank'>百度百科: 夏塔</a>",
    accommodation: "昭苏万豪福朋喜来登酒店 (Four Points by Sheraton Zhaosu). <a href='https://www.marriott.com/en-us/hotels/urczq-four-points-by-sheraton-zhaosu/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 伊宁喀赞其百年冰淇淋及烤包子. <a href='https://uri.amap.com/search?keyword=%E4%BC%8A%E5%AE%81%E5%96%80%E8%B5%9E%E5%85%B6' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 昭苏牧民原生态手抓肉. <a href='https://uri.amap.com/search?keyword=%E6%98%AD%E8%8B%8F%E6%89%8B%E6%8A%93%E8%82%89' target='_blank'>高德地图</a>",
    practical: "提示：夏塔古道可徒步或骑马深入冰川，注意脚下暗冰。",
    schedule: "<ul><li><b>09:00 - 10:30</b>: 驱车前往伊宁市 (Drive to Yining)</li><li><b>10:30 - 12:30</b>: 游览喀赞其民俗村 (Kazanqi Village Tour)</li><li><b>12:30 - 13:30</b>: 喀赞其冰淇淋与烤包子午餐 (Lunch)</li><li><b>13:30 - 16:00</b>: 翻越天山抵达昭苏 (Drive to Zhaosu)</li><li><b>16:00 - 19:00</b>: 夏塔古道冰川徒步探秘 (Xiata Glacier Hike)</li><li><b>19:30</b>: 昭苏手抓肉晚餐并入住 (Dinner & Check-in)</li></ul>",
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
    title: "昭苏 (Zhaosu) → 那拉提 (Nalati)",
    distance: "250km",
    time: "4.5h",
    sights: "那拉提草原 (Nalati Grassland). <br><br><b>历史与奇观:</b> 穿越巩乃斯河谷，抵达世界四大河谷草原之一的那拉提。<br><br><b>门票与预订:</b> 那拉提草原自驾需要购买自驾票。<a href='https://baike.baidu.com/item/%E9%82%A3%E6%8B%89%E6%8F%90%E8%8D%89%E5%8E%9F' target='_blank'>百度百科: 那拉提</a>",
    accommodation: "那拉提文旅度假酒店 (Nalati Wenlu Resort). <a href='https://www.trip.com/hotels/xinyuan-hotel-detail-7607449/nalati-tourism-resort-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 特克斯八卦城内羊排揪片子. <a href='https://uri.amap.com/search?keyword=%E7%89%B9%E5%85%8B%E6%96%AF%E7%BE%8A%E6%8E%92%E6%8F%AA%E7%89%87%E5%AD%90' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 那拉提镇哈萨克正宗烤全羊. <a href='https://uri.amap.com/search?keyword=%E9%82%A3%E6%8B%89%E6%8F%90%E9%95%87%E7%83%A4%E5%85%A8%E7%BE%8A' target='_blank'>高德地图</a>",
    practical: "提示：草原深处紫外线强烈，并且随时可能下暴雨。",
    schedule: "<ul><li><b>08:30 - 11:30</b>: 驱车前往特克斯八卦城 (Drive to Tekes)</li><li><b>11:30 - 12:30</b>: 特克斯羊排揪片子午餐 (Lunch)</li><li><b>12:30 - 14:30</b>: 驱车前往那拉提 (Drive to Nalati)</li><li><b>14:30 - 18:30</b>: 那拉提空中草原自驾游览 (Nalati Grassland Tour)</li><li><b>19:00</b>: 烤全羊大餐并入住酒店 (Dinner & Check-in)</li></ul>",
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
    title: "那拉提 (Nalati) → 独山子 (Dushanzi) → 乌鲁木齐 (Urumqi Airport)",
    distance: "450km",
    time: "8h",
    sights: "独库公路北段 (Duku Highway North). <br><br><b>历史与奇观:</b> 踏上被誉为中国最美公路的“独库公路”（G217）。<br><br><b>夜间航班:</b> 今晚从乌鲁木齐机场飞回。<a href='https://baike.baidu.com/item/%E7%8B%AC%E5%BA%93%E5%85%AC%E8%B7%AF' target='_blank'>百度百科: 独库公路</a>",
    accommodation: "无 (N/A - Fly out)",
    food: "<b>午餐 (Lunch):</b> 乔尔玛烈士陵园旁的服务区简餐.<br><b>晚餐 (Dinner):</b> 乌鲁木齐机场候机楼内就餐。",
    practical: "提示：<b>绝对禁忌：</b>独库公路仅限7座及以下客车通行。山区悬崖多极易堵车，必须早起！",
    schedule: "<ul><li><b>07:30 - 11:30</b>: 清晨进入独库公路北段 (Enter Duku Highway North)</li><li><b>11:30 - 12:30</b>: 乔尔玛服务区午餐及祭扫烈士陵园 (Lunch & Qiaoerma Memorial)</li><li><b>12:30 - 15:30</b>: 穿越防雪长廊，抵达独山子 (Cross Mountains to Dushanzi)</li><li><b>15:30 - 18:30</b>: 返回乌鲁木齐市区 (Drive back to Urumqi)</li><li><b>18:30 - 20:30</b>: 机场还车并享用晚餐 (Car Return & Airport Dinner)</li><li><b>21:30</b>: 乘机返回温暖的家 (Fly Home)</li></ul>",
    spots: [
      { name: "乔尔玛服务区 (Lunch)", type: "restaurant", lat: 43.9210, lng: 84.2830 },
      { name: "独库公路北段", type: "sight", lat: 44.0720, lng: 84.4530 },
      { name: "乌鲁木齐天山国际机场", type: "waypoint", lat: 43.9036, lng: 87.4735 }
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = itineraryDataD;
}
