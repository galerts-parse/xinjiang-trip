const itineraryDataD = [
  {
    day: 1,
    date: "2026-06-12",
    title: "西安 (Xi'an) → 天水 (Tianshui)",
    distance: "345km",
    time: "4.5h",
    sights: "大雁塔 (Big Wild Goose Pagoda), 麦积山石窟 (Maijishan Grottoes). <br><br><b>历史与奇观 (Why it's fascinating):</b> 从西安大雁塔出发，下午前往天水麦积山石窟。麦积山并非普通的地面建筑，而是在高达142米的垂直绝壁上开凿出来的，层层叠叠的“凌空栈道”令人叹为观止。<br><br><b>门票与预订 (CRITICAL PERMIT INFO):</b> 必须提前7天在微信搜索小程序“麦积山石窟”预约A类票。否则无法登上悬崖栈道！<a href='https://baike.baidu.com/item/%E9%BA%A6%E7%A7%AF%E5%B1%B1%E7%9F%B3%E7%AA%9F' target='_blank'>百度百科: 麦积山石窟</a>",
    accommodation: "天水万豪福朋喜来登酒店 (Four Points by Sheraton Tianshui). <a href='https://www.marriott.com/en-us/hotels/tian-four-points-tianshui/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 宝鸡周礼大食堂 (Baoji Zhouli Canteen) - 顺路休息并用餐。 <a href='https://uri.amap.com/search?keyword=%E5%AE%9D%E9%B8%A1%E5%91%A8%E7%A4%BC%E5%A4%A7%E9%A3%9F%E5%A0%82' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 天水常记呱呱 (Changji Guagua) - 抵达天水后享用特色小吃。 <a href='https://uri.amap.com/search?keyword=%E5%A4%A9%E6%B0%B4%E5%B8%B8%E8%AE%B0%E5%91%B1%E5%91%B1' target='_blank'>高德地图</a>",
    practical: "提示：麦积山绝壁栈道非常陡峭，恐高者需做好心理准备。",
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
    sights: "甘肃省博物馆 (Gansu Provincial Museum), 中山桥 (Zhongshan Bridge). <br><br><b>历史与奇观:</b> 参观甘肃省博物馆的镇馆之宝“马踏飞燕”（铜奔马）。傍晚漫步于黄河第一铁桥——中山桥，这是黄河上游修建最早和唯一保存完整的近现代钢架桥。<br><br><b>门票与预订:</b> 博物馆免费，需提前1-3天通过微信“甘肃省博物馆”预约。<a href='https://baike.baidu.com/item/%E7%94%98%E8%82%83%E7%9C%81%E5%8D%9A%E7%89%A9%E9%A6%86' target='_blank'>百度百科: 博物馆</a>",
    accommodation: "兰州安宁喜来登酒店 (Sheraton Lanzhou Anning). <a href='https://www.marriott.com/en-us/hotels/lhwsi-sheraton-lanzhou-anning/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 马子禄牛肉面 (Mazilu Beef Noodles) - 抵达兰州的第一顿。 <a href='https://uri.amap.com/search?keyword=%E5%85%B0%E5%B7%9E%E9%A9%AC%E5%AD%90%E7%A6%84%E7%89%9B%E8%82%89%E9%9D%A2' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 正宁路夜市老马家 (Zhengning Road Night Market) - 品尝牛奶鸡蛋醪糟及各种烧烤。 <a href='https://uri.amap.com/search?keyword=%E5%85%B0%E5%B7%9E%E6%AD%A3%E5%AE%81%E8%B7%AF%E5%A4%9C%E5%B8%82' target='_blank'>高德地图</a>",
    practical: "提示：黄河穿城而过，晚上在中山桥吹晚风非常惬意。",
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
    sights: "雷台汉墓 (Leitai Han Tomb), 张掖七彩丹霞 (Zhangye Danxia). <br><br><b>历史与奇观:</b> 途经武威参观雷台汉墓，感受汉代古墓的幽暗。傍晚抵达张掖七彩丹霞，这里的地貌色彩斑斓，如同一幅巨大的油画，在日落余晖下最为壮观。<br><br><b>门票与预订:</b> 丹霞门票无需提前太久抢，建议下午入园待到日落。<a href='https://baike.baidu.com/item/%E5%BC%A0%E6%8E%96%E4%B8%83%E5%BD%A9%E4%B8%B9%E9%9C%9E%E6%97%85%E6%B8%B8%E6%99%AF%E5%8C%BA/19597288' target='_blank'>百度百科: 丹霞</a>",
    accommodation: "张掖宾馆 (Zhangye Hotel). <a href='https://www.trip.com/hotels/zhangye-hotel-detail-6477196/zhangye-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 武威三套车 (Wuwei Three-Course Meal) - 途经武威必吃。 <a href='https://uri.amap.com/search?keyword=%E6%AD%A6%E5%A8%81%E4%B8%89%E5%A5%97%E8%BD%A6' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 孙记炒炮 (Sunji Fried Noodles) - 抵达张掖后的晚餐。 <a href='https://uri.amap.com/search?keyword=%E5%BC%A0%E6%8E%96%E5%AD%99%E8%AE%B0%E7%82%92%E7%82%AE' target='_blank'>高德地图</a>",
    practical: "提示：丹霞景区全露天，日落时分最美，请务必做好防晒和补水。",
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
    food: "<b>午餐 (Lunch):</b> 嘉峪关马保子烤肉店 (Ma Baozi Barbecue) - 中午游览完嘉峪关后补充体力。 <a href='https://uri.amap.com/search?keyword=%E5%98%89%E5%B3%AA%E5%85%B3%E9%A9%AC%E4%BF%9D%E5%AD%90%E7%83%A4%E8%82%89' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 敦煌沙洲夜市烤红柳羊肉及杏皮水 (Shazhou Night Market) - 抵达敦煌后的深夜慰藉。 <a href='https://uri.amap.com/search?keyword=%E6%95%A6%E7%85%8C%E6%B2%99%E6%B4%B2%E5%A4%9C%E5%B8%82' target='_blank'>高德地图</a>",
    practical: "提示：今日行车距离极长，下午需驱车近400公里前往敦煌，请务必两人轮流驾驶，避免疲劳。",
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
    sights: "莫高窟 (Mogao Caves), 鸣沙山月牙泉 (Mingsha Mountain). <br><br><b>历史与奇观:</b> 昨晚已抵达敦煌，今天可以从容地起早先游览世界上现存规模最大、内容最丰富的佛教艺术地莫高窟。傍晚前往鸣沙山，骑着骆驼在起伏的沙丘上前行，等待月牙泉边的壮美日落。<br><br><b>门票与预订 (CRITICAL):</b> 莫高窟 A 类票必须提前整整 **30天** 抢票！必须定好闹钟！<a href='https://baike.baidu.com/item/%E8%8E%AB%E9%AB%98%E7%AA%9F/122474' target='_blank'>百度百科: 莫高窟</a>",
    accommodation: "敦煌山庄 (Dunhuang Villa). <a href='https://www.trip.com/hotels/dunhuang-hotel-detail-715758/dunhuang-villa/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 敦煌达记驴肉黄面 (Daji Donkey Meat Noodles) - 参观完莫高窟后的午餐首选。 <a href='https://uri.amap.com/search?keyword=%E6%95%A6%E7%85%8C%E8%BE%BE%E8%AE%B0%E9%A9%B4%E8%82%89%E9%BB%84%E9%9D%A2' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 靖远尕六羊羔肉 (Jingyuan Galiu Lamb) - 享用手抓羊肉大餐。 <a href='https://uri.amap.com/search?keyword=%E6%95%A6%E7%85%8C%E9%9D%96%E8%BF%9C%E5%B0%95%E5%85%AD%E7%BE%8A%E7%BE%94%E8%82%89' target='_blank'>高德地图</a>",
    practical: "提示：沙漠沙子极细，千万不要在沙丘上换镜头，手机孔也要贴好防尘贴。",
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
    sights: "玉门关 (Yumen Pass), 汉代长城遗址 (Han Great Wall Ruins), 敦煌雅丹国家地质公园 (Yadan Geopark). <br><br><b>历史与奇观:</b> 深入戈壁无人区，探寻“春风不度玉门关”的遗迹。傍晚在雅丹魔鬼城欣赏最壮观的黑戈壁落日，感受风蚀地貌的神秘。<br><br><b>安排:</b> 西线为一条直线，先经过玉门关，终点是雅丹地质公园。<a href='https://baike.baidu.com/item/%E7%8E%89%E9%97%A8%E5%85%B3' target='_blank'>百度百科: 玉门关</a>",
    accommodation: "敦煌山庄 (Dunhuang Villa). <a href='https://www.trip.com/hotels/dunhuang-hotel-detail-715758/dunhuang-villa/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 强烈建议自带干粮，西线沿途几乎没有任何像样的餐厅。<br><b>晚餐 (Dinner):</b> 敦煌夏家合汁 (Xiajia Hezhi) - 喝一碗热腾腾的羊肉粉汤驱除戈壁寒气。 <a href='https://uri.amap.com/search?keyword=%E6%95%A6%E7%85%8C%E5%A4%8F%E5%AE%B6%E5%90%88%E6%B1%81' target='_blank'>高德地图</a>",
    practical: "提示：西线后半段经常没有手机信号，请提前下载好离线地图！",
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
    sights: "星星峡 (Xingxingxia), 跨越省界进入新疆. <br><br><b>历史与奇观:</b> 离开甘肃，穿越连霍高速，在星星峡正式踏入新疆维吾尔自治区的土地。晚清时期，左宗棠抬棺出征收复新疆，大军便是从此入疆。这一天主要是漫长的戈壁穿越，感受大西北的辽阔。<a href='https://baike.baidu.com/item/%E6%98%9F%E6%98%9F%E5%B3%A1' target='_blank'>百度百科: 星星峡</a>",
    accommodation: "哈密建国酒店 (Jianguo Hotel Hami). <a href='https://www.trip.com/hotels/hami-hotel-detail-1237956/jianguo-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 柳园服务区简餐 (Liuyuan Rest Stop).<br><b>晚餐 (Dinner):</b> 大营盘羊肉焖饼 (Dayingpan Mutton Pancakes) - 哈密当地不可错过的非遗美食。 <a href='https://uri.amap.com/search?keyword=%E5%93%88%E5%AF%86%E5%A4%A7%E8%90%A5%E7%9B%98%E7%BE%8A%E8%82%89%E7%84%96%E9%A5%BC' target='_blank'>高德地图</a>",
    practical: "提示：星星峡检查站将会有最严格的安检，请务必提前准备好身份证件下车查验。",
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
    sights: "火焰山 (Flaming Mountains). <br><br><b>历史与奇观:</b> 因《西游记》而名扬天下的火焰山。夏季这里的地表温度经常突破70度，是中国最热的地方，寸草不生，山体在烈日下仿佛燃烧着熊熊烈火。<a href='https://baike.baidu.com/item/%E7%81%AB%E7%84%B0%E5%B1%B1/116' target='_blank'>百度百科: 火焰山</a>",
    accommodation: "吐鲁番美居酒店 (Mercure Turpan Downtown). <a href='https://www.trip.com/hotels/turpan-hotel-detail-93375811/mercure-turpan-downtown/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 鄯善县沿途简餐.<br><b>晚餐 (Dinner):</b> 海尔巴格 (Herembagh) - 吐鲁番极具异域风情的高端维吾尔族餐厅，碎肉抓饭极佳。 <a href='https://uri.amap.com/search?keyword=%E5%90%90%E9%B2%81%E7%95%AA%E6%B5%B7%E5%B0%94%E5%B7%B4%E6%A0%BC' target='_blank'>高德地图</a>",
    practical: "提示：防暑降温是吐鲁番的头等大事，车内一定要备足成箱的矿泉水。",
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
    sights: "天山天池风景区 (Tianchi Lake), 新疆国际大巴扎 (Grand Bazaar). <br><br><b>历史与奇观:</b> 上午离开火州前往乌鲁木齐，先游览著名的天山天池，背靠常年积雪的博格达峰。下午前往世界最大的巴扎——大巴扎，感受最浓郁的维吾尔族风情和琳琅满目的手工艺品。<br><br><b>门票:</b> 提前1天在微信小程序“天山天池”购票。<a href='https://baike.baidu.com/item/%E5%A4%A9%E5%B1%B1%E5%A4%A9%E6%B1%A0%E9%A3%8E%E6%99%AF%E5%90%8D%E8%83%9C%E5%8C%BA' target='_blank'>百度百科: 天池</a>",
    accommodation: "乌鲁木齐万怡酒店 (Fairfield by Marriott Urumqi). <a href='https://www.marriott.com/en-us/hotels/urcfi-fairfield-by-marriott-urumqi-beijing-road/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 丝路有约 (Silk Road Rendezvous) - 大巴扎附近的高端新疆菜。 <a href='https://uri.amap.com/search?keyword=%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E4%B8%9D%E8%B7%AF%E6%9C%89%E7%BA%A6' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 纳瓦新疆菜 (Nawa Xinjiang Cuisine) 极品大盘鸡和烤羊排。 <a href='https://uri.amap.com/search?keyword=%E4%B9%8C%E9%B2%81%E6%9C%A8%E9%BD%90%E7%BA%B3%E7%93%A6' target='_blank'>高德地图</a>",
    practical: "提示：经过著名的达坂城风区时横风极大，请双手紧握方向盘。",
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
    sights: "S21沙漠高速公路, 可可托海国家地质公园 (Keketuohai Geopark). <br><br><b>历史与奇观:</b> 经由中国首条横穿沙漠的高速S21一路向北。下午抵达可可托海，这里的额尔齐斯大峡谷有着震撼的花岗岩地貌，神秘的“三号矿坑”曾为中国偿还了苏联巨额债务，被誉为英雄矿。<a href='https://baike.baidu.com/item/%E5%8F%AF%E5%8F%AF%E6%89%98%E6%B5%B7%E5%9B%BD%E5%AE%B6%E5%9C%B0%E8%B4%A8%E5%85%AC%E5%9B%AD' target='_blank'>百度百科: 可可托海</a>",
    accommodation: "富蕴可可托海镇特色酒店 (Keketuohai Town Hotel). <a href='https://www.trip.com/hotels/fuyun-hotel-detail-40439695/keketuo-sea-cheng-ying-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 克拉美丽服务区简餐 (Klamali Rest Stop).<br><b>晚餐 (Dinner):</b> 可可托海镇额河冷水烤鱼 (Ertix River Fish) - 高山融雪水生长的冷水鱼极其鲜美。 <a href='https://uri.amap.com/search?keyword=%E5%8F%AF%E5%8F%AF%E6%89%98%E6%B5%B7%E9%95%87%E7%83%A4%E9%B1%BC' target='_blank'>高德地图</a>",
    practical: "提示：S21高速全程笔直，极易导致疲劳驾驶，请务必两人轮流开。可可托海即使夏季也很冷，需带薄羽绒。",
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
    sights: "阿勒泰市区风光 (Altay City). <br><br><b>历史与奇观:</b> 穿越阿尔泰山脉边缘，抵达“人类滑雪起源地”阿勒泰市。这是北疆的核心城市，在此进行休整与深度补给。<a href='https://baike.baidu.com/item/%E9%98%BF%E5%8B%92%E6%B3%B0%E5%B8%82' target='_blank'>百度百科: 阿勒泰</a>",
    accommodation: "阿勒泰金桥大酒店 (Altay Jinqiao Hotel). <a href='https://www.trip.com/hotels/altay-city-hotel-detail-1234914/jinqiao-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 富蕴县城拌面.<br><b>晚餐 (Dinner):</b> 远方大盘鹅 (Yuanfang Goose Stew) - 阿勒泰特色菜，名气不亚于大盘鸡。 <a href='https://uri.amap.com/search?keyword=%E9%98%BF%E5%8B%92%E6%B3%B0%E8%BF%9C%E6%96%B9%E5%A4%A7%E7%9B%98%E9%B9%85' target='_blank'>高德地图</a>",
    practical: "提示：阿勒泰是进入喀纳斯的门户，请在超市购买好进入景区所需的高热量零食和水。",
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
    sights: "禾木古村驿站 (Hemu Village), 观鱼台 (Guanyu Pavilion). <br><br><b>历史与奇观:</b> 探访图瓦人的保留地禾木村，清晨白桦林中的木屋炊烟袅袅，宛如童话。之后登上喀纳斯观鱼台，俯瞰被誉为“东方瑞士”的喀纳斯湖全貌，运气好或许能一窥水怪传说。<br><br><b>门票与预订:</b> 喀纳斯景区及禾木必须通过微信小程序提前实名制预约！<a href='https://baike.baidu.com/item/%E7%A6%BE%E6%9C%A8%E6%9D%91' target='_blank'>百度百科: 禾木</a>",
    accommodation: "禾木村特色木屋 (Hemu Wooden Cabin). <i>(睡在木屋里体验最纯粹的自然)</i> <a href='https://www.trip.com/hotels/buerjin-hotel-detail-70679781/hemu-scenic-area-hemu-lin-ye-villa/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 喀纳斯换乘中心餐厅.<br><b>晚餐 (Dinner):</b> 禾木土火锅 (Hemu Hotpot) - 寒冷的山区夜晚必备。 <a href='https://uri.amap.com/search?keyword=%E7%A6%BE%E6%9C%A8%E6%9D%91%E5%9C%9F%E7%81%AB%E9%94%85' target='_blank'>高德地图</a>",
    practical: "提示：景区内私家车无法入内，需乘坐换乘区间车。山里极其寒冷。",
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
    sights: "布尔津 (Burqin), 沿途风光. <br><br><b>行程安排:</b> 离开阿尔泰山脉，途径童话边城布尔津稍作停留，随后一路向南穿越广袤的准噶尔盆地，驶往北疆的交通枢纽奎屯。",
    accommodation: "奎屯罗兰酒店 (Kuitun Luolan Hotel). <a href='https://www.trip.com/hotels/kuytun-hotel-detail-51690040/luo-lan-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 布尔津额尔齐斯河冷水鱼夜市 (河边烤鱼). <a href='https://uri.amap.com/search?keyword=%E5%B8%83%E5%B0%94%E6%B4%A5%E5%A4%9C%E5%B8%82' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 奎屯雪莲宾馆清真餐厅大盘鸡 (Xuelian Dapanji) - 奎屯老字号。 <a href='https://uri.amap.com/search?keyword=%E5%A5%8E%E5%B1%AF%E9%9B%AA%E8%8E%B2%E5%A4%A7%E7%9B%98%E9%B8%A1' target='_blank'>高德地图</a>",
    practical: "提示：今天行车距离较长，沿途有大量的区间测速，切勿超速。",
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
    sights: "赛里木湖 (Sayram Lake), 果子沟大桥 (Guozigou Bridge). <br><br><b>历史与奇观:</b> 欣赏被称为“大西洋最后一滴眼泪”的赛里木湖。随后穿越伊犁第一景果子沟，果子沟大桥如同巨龙般盘旋在山谷之上，极其雄伟壮观。<br><br><b>门票与预订:</b> 赛里木湖允许自驾环湖（自驾票 143元/人/天）。<a href='https://baike.baidu.com/item/%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96/161477' target='_blank'>百度百科: 赛里木湖</a>",
    accommodation: "新疆赛里木湖万豪AC酒店 (AC Hotel by Marriott Xinjiang Sayram Lake). <a href='https://www.marriott.com/en-us/hotels/urcac-ac-hotel-xinjiang-sayram-lake/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 沿途精河服务区简餐.<br><b>晚餐 (Dinner):</b> 万豪AC酒店餐厅及赛里木湖高白鲑 (Coregonus fish) - 在酒店内享用从俄罗斯引进的深水白鲑。 <a href='https://uri.amap.com/search?keyword=%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E9%AB%98%E7%99%BD%E9%B2%91' target='_blank'>高德地图</a>",
    practical: "提示：赛里木湖海拔高达2000米，即使在夏季也需穿着防风外套。",
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
    sights: "昭苏县 (Zhaosu), 夏塔旅游区 (Xiata). <br><br><b>历史与奇观:</b> 离开伊宁，探访汉武帝梦寐以求的“天马”故乡昭苏。下午进入夏塔古道，这是古代丝绸之路上最为险峻的冰川通道，玄奘法师当年西行便由此跨越天山。<a href='https://baike.baidu.com/item/%E5%A4%8F%E7%89%B9%E5%8F%A4%E9%81%93' target='_blank'>百度百科: 夏塔</a>",
    accommodation: "昭苏万豪福朋喜来登酒店 (Four Points by Sheraton Zhaosu). <a href='https://www.marriott.com/en-us/hotels/urczq-four-points-by-sheraton-zhaosu/overview/' target='_blank'>Marriott Booking</a>",
    food: "<b>午餐 (Lunch):</b> 伊宁喀赞其百年冰淇淋及烤包子. <a href='https://uri.amap.com/search?keyword=%E4%BC%8A%E5%AE%81%E5%96%80%E8%B5%9E%E5%85%B6' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 昭苏牧民原生态手抓肉. <a href='https://uri.amap.com/search?keyword=%E6%98%AD%E8%8B%8F%E6%89%8B%E6%8A%93%E8%82%89' target='_blank'>高德地图</a>",
    practical: "提示：夏塔古道可徒步或骑马深入木扎尔特冰川，务必注意脚下暗冰和野生动物。",
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
    sights: "那拉提草原 (Nalati Grassland). <br><br><b>历史与奇观:</b> 穿越巩乃斯河谷，抵达世界四大河谷草原之一的那拉提。传说成吉思汗西征时，蒙古军队由天山深处向伊犁进发，看到这片如同绿毯般的草原，忍不住大呼“那拉提”（意为有太阳的地方）。<br><br><b>门票与预订:</b> 那拉提草原自驾需要购买专门的自驾票（约300元/车）。<a href='https://baike.baidu.com/item/%E9%82%A3%E6%8B%89%E6%8F%90%E8%8D%89%E5%8E%9F' target='_blank'>百度百科: 那拉提</a>",
    accommodation: "那拉提文旅度假酒店 (Nalati Wenlu Resort). <a href='https://www.trip.com/hotels/xinyuan-hotel-detail-7607449/nalati-tourism-resort-hotel/' target='_blank'>Trip.com Booking</a>",
    food: "<b>午餐 (Lunch):</b> 特克斯八卦城内羊排揪片子 - 途经特克斯用餐。 <a href='https://uri.amap.com/search?keyword=%E7%89%B9%E5%85%8B%E6%96%AF%E7%BE%8A%E6%8E%92%E6%8F%AA%E7%89%87%E5%AD%90' target='_blank'>高德地图</a><br><b>晚餐 (Dinner):</b> 那拉提镇哈萨克正宗烤全羊 (Roasted Whole Lamb). <a href='https://uri.amap.com/search?keyword=%E9%82%A3%E6%8B%89%E6%8F%90%E9%95%87%E7%83%A4%E5%85%A8%E7%BE%8A' target='_blank'>高德地图</a>",
    practical: "提示：草原深处紫外线强烈，并且随时可能下暴雨。",
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
    sights: "独库公路北段 (Duku Highway North). <br><br><b>历史与奇观:</b> 踏上被誉为中国最美公路的“独库公路”（G217）。这条天路是上世纪数万名官兵用鲜血和生命开凿出来的。跨越天山让你一天之内经历四季。<br><br><b>夜间航班:</b> 今晚从乌鲁木齐机场乘飞机飞往成都 (Fly out from Urumqi at night).<a href='https://baike.baidu.com/item/%E7%8B%AC%E5%BA%93%E5%85%AC%E8%B7%AF' target='_blank'>百度百科: 独库公路</a>",
    accommodation: "无 (N/A - Fly out)",
    food: "<b>午餐 (Lunch):</b> 乔尔玛烈士陵园旁的服务区简餐 (Qiaoerma Rest Stop) - 独库公路中途休息点。<br><b>晚餐 (Dinner):</b> 乌鲁木齐机场候机楼内就餐。",
    practical: "提示：<b>绝对禁忌：</b>独库公路仅限7座及以下客车通行。山区悬崖多极易堵车，必须早起出发，并预留绝对充足的时间赶飞机！",
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
