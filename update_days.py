import re
from datetime import datetime, timedelta

data_path = 'data_alt.js'

with open(data_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Day 8 entirely
old_day8_regex = re.compile(r'\{\s*day: 8,\s*date: "2026-06-19",\s*title: "乌鲁木齐 \(Urumqi\) → S21阿乌高速 → 喀纳斯/贾登峪 \(Kanas/Jiadenyu\)".*?\]\s*\},', re.DOTALL)

new_days = """{
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
  },"""

content = old_day8_regex.sub(new_days, content)

# Now bump days 9 to 16
for old_day in range(16, 8, -1):
    new_day = old_day + 1
    
    # Calculate old and new date strings
    base_date = datetime(2026, 6, 12)
    old_date = base_date + timedelta(days=old_day - 1)
    new_date = base_date + timedelta(days=new_day - 1)
    
    old_date_str = old_date.strftime("%Y-%m-%d")
    new_date_str = new_date.strftime("%Y-%m-%d")
    
    # Simple replace
    content = content.replace(f"day: {old_day},", f"day: {new_day},")
    content = content.replace(f'date: "{old_date_str}",', f'date: "{new_date_str}",')

with open(data_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Python script updated data_alt.js successfully.")
