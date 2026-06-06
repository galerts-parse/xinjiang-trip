const itineraryDataAlt = [
  {
    day: 1,
    date: "2026-06-12",
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
    day: 2,
    date: "2026-06-13",
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
    day: 3,
    date: "2026-06-14",
    title: "喀纳斯 (Kanas) → 禾木 (Hemu)",
    distance: "70km",
    time: "2h",
    sights: "喀纳斯湖 (Kanas Lake), 禾木村 (Hemu Village). <br><br><b>历史与奇观:</b> 喀纳斯被称为“东方瑞士”，这里有着如同调色板一样的西伯利亚泰加林和变色湖泊。观鱼台是俯瞰喀纳斯湖水怪传说的最佳地点。下午前往禾木村，这是图瓦人的保留地，一排排原木搭建的小木屋散布在白桦林中，晨雾缭绕时宛如仙境。<br><br><b>活动与门票:</b> 喀纳斯一进门票+区间车 230元/人 (住景区需二进+70元)。微信小程序“喀纳斯景区”购票。<a href='https://baike.baidu.com/item/%E5%96%80%E7%BA%B3%E6%96%AF%E6%B9%96' target='_blank'>百度百科: 喀纳斯</a>",
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
    day: 4,
    date: "2026-06-15",
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
    day: 5,
    date: "2026-06-16",
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
    day: 6,
    date: "2026-06-17",
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
    day: 7,
    date: "2026-06-18",
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
    day: 8,
    date: "2026-06-19",
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
    day: 9,
    date: "2026-06-20",
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
    day: 10,
    date: "2026-06-21",
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
