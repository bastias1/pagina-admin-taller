// src/GPSTracker.js
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const GPSTracker = () => {
  useEffect(() => {
    const mapContainer = L.DomUtil.get('map');
    if (mapContainer != null) {
      mapContainer._leaflet_id = null;
    }
    
    const map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const fetchLocation = async () => {
      const response = await fetch('/api/locations');
      const location = await response.json();

      const markers = L.layerGroup().addTo(map);

      if (location) {
        const icon = L.icon({
          iconUrl: 'https://e7.pngegg.com/pngimages/500/30/png-clipart-gps-logo-computer-icons-location-places-miscellaneous-cdr-thumbnail.png',
          iconSize: [38, 95],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76]
        });

        localStorage.clear();
        localStorage.setItem('latestLocation', JSON.stringify(location));

        markers.clearLayers();

        L.marker([location.latitude, location.longitude], { icon: icon }).addTo(markers)
          .bindPopup(`Latitude: ${location.latitude}, Longitude: ${location.longitude}, Time: ${new Date(location.timestamp).toLocaleString()}`)
          .openPopup();

        map.setView([location.latitude, location.longitude], 13);
      } else {
        const savedLocation = JSON.parse(localStorage.getItem('latestLocation'));
        if (savedLocation) {
          const icon = L.icon({
            iconUrl: 'https://e7.pngegg.com/pngimages/500/30/png-clipart-gps-logo-computer-icons-location-places-miscellaneous-cdr-thumbnail.png',
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76]
          });

          markers.clearLayers();

          L.marker([savedLocation.latitude, savedLocation.longitude], { icon: icon }).addTo(markers)
            .bindPopup(`Latitude: ${savedLocation.latitude}, Longitude: ${savedLocation.longitude}, Time: ${new Date(savedLocation.timestamp).toLocaleString()}`)
            .openPopup();

          map.setView([savedLocation.latitude, savedLocation.longitude], 13);
        }
      }
    };

    fetchLocation();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <div id="map" style={{ height: '100vh' }}></div>
        </Col>
      </Row>
    </Container>
  );
};

export default GPSTracker;
