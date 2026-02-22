// Travel Map Configuration
const travelData = {
    countries: {
        'IN': { name: 'India', cities: [
            { name: 'Delhi', lat: 28.6139, lng: 77.2090 },
            { name: 'Kullu', lat: 31.9579, lng: 77.1098 },
            { name: 'Manali', lat: 32.2396, lng: 77.1887 },
            { name: 'Hyderabad', lat: 17.3850, lng: 78.4867 },
            { name: 'Bangalore', lat: 12.9716, lng: 77.5946 },
            { name: 'Chennai', lat: 13.0827, lng: 80.2707 },
            { name: 'Goa', lat: 15.2993, lng: 74.1240 },
            { name: 'Gokarna', lat: 14.5444, lng: 74.3189 },
            { name: 'Mysore', lat: 12.2958, lng: 76.6394 },
            { name: 'Mangalore', lat: 12.9141, lng: 74.8560 },
            { name: 'Munnar', lat: 10.0889, lng: 77.0595 },
            { name: 'Ooty', lat: 11.4102, lng: 76.6950 },
            { name: 'Wayanad', lat: 11.6854, lng: 76.1320 }
        ]},
        'LK': { name: 'Sri Lanka', cities: [
            { name: 'Colombo', lat: 6.9271, lng: 79.8612 },
            { name: 'Negombo', lat: 7.2083, lng: 79.8358 },
            { name: 'Kandy', lat: 7.2906, lng: 80.6337 },
            { name: 'Hikkaduwa', lat: 6.1404, lng: 80.1012 },
            { name: 'Unawatuna', lat: 6.0000, lng: 80.2500 },
            { name: 'Galle Fort', lat: 6.0329, lng: 80.2169 },
            { name: "Little Adam's Peak", lat: 6.0167, lng: 80.8000 }
        ]},
        'AT': { name: 'Austria', cities: [
            { name: 'Vienna', lat: 48.2082, lng: 16.3738 }
        ]},
        'SG': { name: 'Singapore', cities: [
            { name: 'Singapore', lat: 1.3521, lng: 103.8198 }
        ]},
        'AE': { name: 'UAE', cities: [
            { name: 'Dubai', lat: 25.2048, lng: 55.2708 }
        ]},
        'IS': { name: 'Iceland', cities: [
            { name: 'Reykjavík', lat: 64.1466, lng: -21.9426 }
        ]},
        'CA': { name: 'Canada', cities: [
            { name: 'Vancouver', lat: 49.2827, lng: -123.1207 },
            { name: 'Squamish', lat: 49.7016, lng: -123.1558 },
            { name: 'Whistler', lat: 50.1163, lng: -122.9574 },
            { name: 'Kamloops', lat: 50.6745, lng: -120.3273 },
            { name: 'Kelowna', lat: 49.8880, lng: -119.4960 },
            { name: 'Victoria', lat: 48.4284, lng: -123.3656 },
            { name: 'Calgary', lat: 51.0447, lng: -114.0719 },
            { name: 'Banff', lat: 51.1784, lng: -115.5708 },
            { name: 'Toronto', lat: 43.6532, lng: -79.3832 },
            { name: 'Niagara Falls', lat: 43.0962, lng: -79.0377 },
            { name: 'Montreal', lat: 45.5017, lng: -73.5673 },
            { name: 'Quebec City', lat: 46.8139, lng: -71.2082 }
        ]},
        'MX': { name: 'Mexico', cities: [
            { name: 'Mexico City', lat: 19.4326, lng: -99.1332 },
            { name: 'Cancún', lat: 21.1619, lng: -86.8515 },
            { name: 'Tulum', lat: 20.2114, lng: -87.4654 },
            { name: 'Mérida', lat: 20.9674, lng: -89.5926 },
            { name: 'Chichén Itzá', lat: 20.6829, lng: -88.5686 }
        ]},
        'US': { name: 'United States', cities: [
            { name: 'San Diego', lat: 32.7157, lng: -117.1611 },
            { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
            { name: 'Santa Cruz', lat: 36.9741, lng: -122.0308 },
            { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
            { name: 'Yosemite', lat: 37.8651, lng: -119.5383 },
            { name: 'Lake Tahoe', lat: 39.0968, lng: -120.0324 },
            { name: 'Reno', lat: 39.5296, lng: -119.8138 },
            { name: 'Portland', lat: 45.5152, lng: -122.6784 },
            { name: 'Crater Lake', lat: 42.9446, lng: -122.1090 },
            { name: 'Bend', lat: 44.0582, lng: -121.3153 },
            { name: 'Hood River', lat: 45.7054, lng: -121.5218 },
            { name: 'Seattle', lat: 47.6062, lng: -122.3321 },
            { name: 'Olympic National Park', lat: 47.9769, lng: -123.4990 },
            { name: 'Mount Rainier', lat: 46.8800, lng: -121.7269 },
            { name: 'North Cascades', lat: 48.7718, lng: -121.2985 },
            { name: 'Grand Canyon', lat: 36.1069, lng: -112.1129 },
            { name: 'Phoenix', lat: 33.4484, lng: -112.0740 },
            { name: 'Las Vegas', lat: 36.1699, lng: -115.1398 },
            { name: 'Salt Lake City', lat: 40.7608, lng: -111.8910 },
            { name: 'Denver', lat: 39.7392, lng: -104.9903 },
            { name: 'Boulder', lat: 40.0150, lng: -105.2705 },
            { name: 'Aspen', lat: 39.1911, lng: -106.8175 },
            { name: 'Yellowstone', lat: 44.4280, lng: -110.5885 },
            { name: 'Manhattan', lat: 40.7831, lng: -73.9712 },
            { name: 'Philadelphia', lat: 39.9526, lng: -75.1652 },
            { name: 'Washington DC', lat: 38.9072, lng: -77.0369 },
            { name: 'Shenandoah', lat: 38.2925, lng: -78.6804 }
        ]}
    }
};

// Country name aliases for GeoJSON name matching
const countryNameMap = {
    'India': 'IN',
    'Sri Lanka': 'LK',
    'Austria': 'AT',
    'Singapore': 'SG',
    'United Arab Emirates': 'AE',
    'UAE': 'AE',
    'Iceland': 'IS',
    'Canada': 'CA',
    'Mexico': 'MX',
    'United States': 'US',
    'United States of America': 'US',
    'USA': 'US'
};

function matchByName(geoName, visitedCodes) {
    if (!geoName) return false;
    const lower = geoName.toLowerCase();
    for (const [alias, code] of Object.entries(countryNameMap)) {
        if (lower === alias.toLowerCase() && visitedCodes.includes(code)) return true;
    }
    for (const code of visitedCodes) {
        const country = travelData.countries[code];
        if (country && lower === country.name.toLowerCase()) return true;
    }
    return false;
}

function initTravelMap() {
    const container = document.getElementById('worldMap');
    if (!container) return;

    const map = L.map('worldMap', {
        center: [20, 10],
        zoom: 2,
        minZoom: 1,
        maxZoom: 6,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: false
    });

    const visitedCodes = Object.keys(travelData.countries);

    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        .then(r => r.json())
        .then(data => {
            L.geoJSON(data, {
                style: feature => {
                    const name = (feature.properties.name || feature.properties.NAME || '').trim();
                    const code = feature.properties.ISO_A2 || feature.properties.iso_a2 || '';
                    const visited = visitedCodes.includes(code) || matchByName(name, visitedCodes);
                    return {
                        fillColor:   visited ? '#2563eb' : '#334155',
                        fillOpacity: visited ? 0.85 : 0.9,
                        color:       visited ? '#93c5fd' : '#475569',
                        weight:      visited ? 1.5 : 0.8
                    };
                },
                onEachFeature: (feature, layer) => {
                    const name = (feature.properties.name || feature.properties.NAME || '').trim();
                    const code = feature.properties.ISO_A2 || feature.properties.iso_a2 || '';
                    const visited = visitedCodes.includes(code) || matchByName(name, visitedCodes);
                    if (visited) {
                        layer.bindTooltip(name, { sticky: true, className: 'map-tooltip' });
                    }
                }
            }).addTo(map);

            // City dot markers
            visitedCodes.forEach(code => {
                const country = travelData.countries[code];
                country.cities.forEach(city => {
                    L.circleMarker([city.lat, city.lng], {
                        radius: 4,
                        fillColor: '#dc2626',
                        color: '#ffffff',
                        weight: 1.5,
                        fillOpacity: 0.9
                    })
                    .bindTooltip(`<strong>${city.name}</strong><br>${country.name}`, {
                        className: 'map-tooltip'
                    })
                    .addTo(map);
                });
            });
        })
        .catch(() => {
            container.innerHTML = '<p style="text-align:center;padding:2rem;color:#94a3b8;">Map unavailable — check your connection.</p>';
        });

    // Update stats
    const totalCities = Object.values(travelData.countries).reduce((sum, c) => sum + c.cities.length, 0);
    const citiesCountEl = document.getElementById('citiesCount');
    if (citiesCountEl) citiesCountEl.textContent = totalCities;
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTravelMap);
} else {
    initTravelMap();
}
