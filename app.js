// Initialize the map centered around the middle of the route
const map = L.map('map', {
  zoomControl: false // Custom position
}).setView([40.5, 95.7], 6);

// --- WGS84 to GCJ02 Conversion (Solving China GPS Shift) ---
const PI = 3.1415926535897932384626;
const a = 6378245.0;
const ee = 0.00669342162296594323;

function outOfChina(lng, lat) {
  return (lng < 72.004 || lng > 137.8347) || (lat < 0.8293 || lat > 55.8271);
}

function transformLat(x, y) {
  let ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * Math.sqrt(Math.abs(x));
  ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(y * PI) + 40.0 * Math.sin(y / 3.0 * PI)) * 2.0 / 3.0;
  ret += (160.0 * Math.sin(y / 12.0 * PI) + 320 * Math.sin(y * PI / 30.0)) * 2.0 / 3.0;
  return ret;
}

function transformLng(x, y) {
  let ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * Math.sqrt(Math.abs(x));
  ret += (20.0 * Math.sin(6.0 * x * PI) + 20.0 * Math.sin(2.0 * x * PI)) * 2.0 / 3.0;
  ret += (20.0 * Math.sin(x * PI) + 40.0 * Math.sin(x / 3.0 * PI)) * 2.0 / 3.0;
  ret += (150.0 * Math.sin(x / 12.0 * PI) + 300.0 * Math.sin(x / 30.0 * PI)) * 2.0 / 3.0;
  return ret;
}

function wgs84togcj02(lng, lat) {
  if (outOfChina(lng, lat)) return [lng, lat];
  let dlat = transformLat(lng - 105.0, lat - 35.0);
  let dlng = transformLng(lng - 105.0, lat - 35.0);
  let radlat = lat / 180.0 * PI;
  let magic = Math.sin(radlat);
  magic = 1 - ee * magic * magic;
  let sqrtmagic = Math.sqrt(magic);
  dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
  dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
  return [lng + dlng, lat + dlat]; // Returns [lng, lat]
}

// --- Map Tiles (GaoDe / AutoNavi & OSM) ---
const gaodeSatellite = L.tileLayer('https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
  attribution: '&copy; AutoNavi (GaoDe) Satellite',
  maxZoom: 18
});
const gaodeStreet = L.tileLayer('https://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
  attribution: '&copy; AutoNavi (GaoDe) Street',
  maxZoom: 18
});
const osmStandard = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 18
});

gaodeSatellite.addTo(map);

const baseMaps = {
  "高德卫星图 (GaoDe Satellite)": gaodeSatellite,
  "高德街道图 (GaoDe Street)": gaodeStreet,
  "标准地图 (OpenStreetMap)": osmStandard
};

L.control.layers(baseMaps).addTo(map);
L.control.zoom({ position: 'bottomright' }).addTo(map);

// DOM Elements
const itineraryList = document.getElementById('itinerary-list');
const routeSelector = document.getElementById('route-selector');
const sidebarHandle = document.getElementById('sidebar-handle');
const sidebar = document.getElementById('sidebar');
const mapContainer = document.getElementById('map');

// Icons
const sightIcon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#0284c7; width:14px; height:14px; border-radius:50%; border:2px solid #fff; box-shadow: 0 0 10px rgba(2,132,199,0.8); display:flex; justify-content:center; align-items:center;'><i class='fa-solid fa-camera' style='font-size:8px; color:white;'></i></div>",
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});
const hotelIcon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#10b981; width:14px; height:14px; border-radius:50%; border:2px solid #fff; box-shadow: 0 0 10px rgba(16,185,129,0.8); display:flex; justify-content:center; align-items:center;'><i class='fa-solid fa-bed' style='font-size:8px; color:white;'></i></div>",
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});
const restaurantIcon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div style='background-color:#f59e0b; width:14px; height:14px; border-radius:50%; border:2px solid #fff; box-shadow: 0 0 10px rgba(245,158,11,0.8); display:flex; justify-content:center; align-items:center;'><i class='fa-solid fa-utensils' style='font-size:8px; color:white;'></i></div>",
  iconSize: [16, 16],
  iconAnchor: [8, 8]
});

// State for active route
let allSpots = [];
let markers = [];
let routePolylines = [];

function clearMap() {
  markers.forEach(m => map.removeLayer(m));
  routePolylines.forEach(p => map.removeLayer(p));
  markers = [];
  routePolylines = [];
  allSpots = [];
  itineraryList.innerHTML = '';
}

function renderItinerary(data) {
  clearMap();

  data.forEach((dayData, index) => {
    // Sidebar logic
    const dayCard = document.createElement('div');
    dayCard.className = 'day-card';
    dayCard.dataset.index = index;
    
    dayCard.innerHTML = `
      <div class="day-header">
        <span class="day-badge">第${dayData.day}天 (Day ${dayData.day})</span>
        <span class="day-date">${dayData.date}</span>
      </div>
      <h3 class="day-title">${dayData.title}</h3>
      <div class="info-grid">
        <div class="info-item"><i class="fa-solid fa-route"></i> ${dayData.distance}</div>
        <div class="info-item"><i class="fa-regular fa-clock"></i> ${dayData.time}</div>
      </div>
      <div class="day-details">
        ${dayData.schedule ? `
        <div class="detail-section schedule-section" style="background:#f8fafc; padding:15px; border-radius:8px; border-left:4px solid #3b82f6; margin-bottom:15px;">
          <h4 style="color:#1e293b; margin-top:0;"><i class="fa-regular fa-clock"></i> 今日时刻表 (Schedule)</h4>
          <div style="font-size:13px; line-height:1.8; color:#334155;">${dayData.schedule}</div>
        </div>
        ` : ''}
        <div class="detail-section">
          <h4><i class="fa-solid fa-camera"></i> 行程景点与历史 (Sights & History)</h4>
          <p>${dayData.sights}</p>
        </div>
        <div class="detail-section">
          <h4><i class="fa-solid fa-utensils"></i> 特色美食 (Food)</h4>
          <p>${dayData.food}</p>
        </div>
        <div class="detail-section">
          <h4><i class="fa-solid fa-bed"></i> 住宿 (Accommodation)</h4>
          <p>${dayData.accommodation}</p>
        </div>
        <div class="practical-alert">
          <p><strong><i class="fa-solid fa-circle-exclamation"></i> 实用提示 (Tips):</strong> ${dayData.practical}</p>
        </div>
      </div>
    `;
    
    let dayMarkerLat = null;
    let dayMarkerLng = null;
    
    if (dayData.spots && dayData.spots.length > 0) {
      dayData.spots.forEach(spot => {
        allSpots.push({ lat: spot.lat, lng: spot.lng, dayIndex: index });
        
        const gcjCoords = wgs84togcj02(spot.lng, spot.lat);
        const renderLat = gcjCoords[1];
        const renderLng = gcjCoords[0];
        
        if (!dayMarkerLat) {
          dayMarkerLat = renderLat;
          dayMarkerLng = renderLng;
        }
        
        let iconToUse = sightIcon;
        if (spot.type === 'hotel') iconToUse = hotelIcon;
        if (spot.type === 'restaurant') iconToUse = restaurantIcon;
        
        const marker = L.marker([renderLat, renderLng], { icon: iconToUse }).addTo(map);
        markers.push(marker);
        
        const gaodeUrl = `https://uri.amap.com/marker?position=${renderLng},${renderLat}&name=${encodeURIComponent(spot.name)}`;
        
        marker.bindPopup(`
          <b>${spot.name}</b><br>
          <span style='color:#666; font-size:11px;'>Day ${dayData.day} - ${spot.type}</span><br>
          <a href='${gaodeUrl}' target='_blank' class='gaode-btn'><i class="fa-solid fa-location-arrow"></i> Navigate with GaoDe (高德)</a>
        `);
        
        marker.on('click', () => {
          dayCard.click();
        });
      });
    }

    dayCard.addEventListener('click', () => {
      document.querySelectorAll('.day-card').forEach(card => card.classList.remove('active'));
      dayCard.classList.add('active');
      
      if (dayMarkerLat && dayMarkerLng) {
        map.flyTo([dayMarkerLat, dayMarkerLng], 10, { duration: 1.5 });
      }
      dayCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
    
    itineraryList.appendChild(dayCard);
  });

  const gcjLatLngs = allSpots.map(s => {
    const gcj = wgs84togcj02(s.lng, s.lat);
    return [gcj[1], gcj[0]];
  });
  if (gcjLatLngs.length > 0) {
    map.fitBounds(L.latLngBounds(gcjLatLngs), { padding: [50, 50] });
  }

  fetchAndDrawRoute();
}

async function fetchAndDrawRoute() {
  for (let i = 0; i < allSpots.length - 1; i++) {
    const start = allSpots[i];
    const end = allSpots[i+1];
    const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.routes && data.routes.length > 0) {
        const wgs84Coordinates = data.routes[0].geometry.coordinates;
        const gcj02RouteLatLngs = wgs84Coordinates.map(coord => {
          const gcj = wgs84togcj02(coord[0], coord[1]);
          return [gcj[1], gcj[0]];
        });
        
        const pline = L.polyline(gcj02RouteLatLngs, {
          color: '#0284c7',
          weight: 4,
          opacity: 0.8,
          lineJoin: 'round'
        }).addTo(map);
        routePolylines.push(pline);
      }
    } catch (error) {
      console.error("Failed to fetch route for segment", i, error);
      const startGcj = wgs84togcj02(start.lng, start.lat);
      const endGcj = wgs84togcj02(end.lng, end.lat);
      const pline = L.polyline([[startGcj[1], startGcj[0]], [endGcj[1], endGcj[0]]], {
        color: '#f59e0b',
        weight: 3,
        opacity: 0.5,
        dashArray: '10, 10'
      }).addTo(map);
      routePolylines.push(pline);
    }
    
    await new Promise(resolve => setTimeout(resolve, 300));
  }
}

// Initial Render
const initialRoute = routeSelector.value;
if (initialRoute === 'routeD') {
  renderItinerary(itineraryDataD);
} else if (initialRoute === 'routeB') {
  renderItinerary(itineraryDataAlt);
} else if (initialRoute === 'routeC') {
  renderItinerary(itineraryDataRouteC);
} else {
  renderItinerary(itineraryData);
}

// Route Switcher Event
routeSelector.addEventListener('change', (e) => {
  if (e.target.value === 'routeD') {
    renderItinerary(itineraryDataD);
  } else if (e.target.value === 'routeB') {
    renderItinerary(itineraryDataAlt);
  } else if (e.target.value === 'routeC') {
    renderItinerary(itineraryDataRouteC);
  } else {
    renderItinerary(itineraryData);
  }
});

// --- Mobile Bottom Sheet Drag Physics ---
let startY = 0;
let currentY = 0;
let isDragging = false;
let currentHeightVh = 45; // Default height from CSS

sidebarHandle.addEventListener('touchstart', (e) => {
  if (window.innerWidth > 768) return; // Only apply on mobile
  startY = e.touches[0].clientY;
  isDragging = true;
  sidebar.style.transition = 'none'; // Disable transition during drag for immediate follow
}, { passive: true });

sidebarHandle.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  currentY = e.touches[0].clientY;
  const deltaY = startY - currentY;
  
  // Calculate new height based on delta pixel drag converted to vh
  const vhDelta = (deltaY / window.innerHeight) * 100;
  let newHeight = currentHeightVh + vhDelta;
  
  // Clamp between 20vh (min) and 85vh (max)
  newHeight = Math.max(20, Math.min(85, newHeight));
  
  sidebar.style.height = `${newHeight}vh`;
  mapContainer.style.height = `${100 - newHeight}vh`;
  map.invalidateSize(); // Fix leaflet map sizing issue during resize
});

sidebarHandle.addEventListener('touchend', (e) => {
  if (!isDragging) return;
  isDragging = false;
  
  const finalHeightVh = parseFloat(sidebar.style.height);
  
  // Snap to logical points: 20vh (minimized), 45vh (half), 85vh (expanded)
  if (finalHeightVh > 65) {
    currentHeightVh = 85;
  } else if (finalHeightVh < 30) {
    currentHeightVh = 20;
  } else {
    currentHeightVh = 45;
  }
  
  sidebar.style.transition = 'height 0.3s ease-out';
  mapContainer.style.transition = 'height 0.3s ease-out';
  
  sidebar.style.height = `${currentHeightVh}vh`;
  mapContainer.style.height = `${100 - currentHeightVh}vh`;
  
  setTimeout(() => {
    map.invalidateSize();
    sidebar.style.transition = '';
    mapContainer.style.transition = '';
  }, 300);
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(registration => console.log('ServiceWorker registered'))
      .catch(err => console.log('ServiceWorker failed: ', err));
  });
}
