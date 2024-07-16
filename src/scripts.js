
document.addEventListener('DOMContentLoaded', async () => {
    const map = L.map('map').setView([-39.814382, -73.245841], 13);



    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const response = await fetch('/api/locations');
    const locations = await response.json();
    

    console.log(locations);
    //markersLayer.clearLayers();
    locations.forEach(location => {
        L.marker([location.latitude, location.longitude])
            .addTo(map)
            .bindPopup(`Latitude: ${location.latitude}, Longitude: ${location.longitude}, Time: ${new Date(location.timestamp).toLocaleString()}`)
            .openPopup();
    });
});


/*
L.marker([location.latitude, location.longitude]).addTo(map).bindPopup(`Latitude: ${location.latitude}, Longitude: ${location.longitude}, Time: ${new Date(location.timestamp).toLocaleString()}`).openPopup();*/