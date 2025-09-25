"use client";

import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center: [number, number] = [23.0225, 72.5714]; 


function MapClickHandler({ onMapClick }: { onMapClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onMapClick(lat, lng);
    },
  });
  return null;
}

function MapRef({ onMapReady }: { onMapReady: (map: L.Map) => void }) {
  const map = useMapEvents({});
  
  React.useEffect(() => {
    if (map) {
      onMapReady(map);
    }
  }, [map, onMapReady]);
  
  return null;
}

const MapComponent = () => {
  const [clickedPosition, setClickedPosition] = useState<[number, number] | null>(null);
  const [clickedLocation, setClickedLocation] = useState<string>("");
  const [map, setMap] = useState<L.Map | null>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const mapElement = event.target as Element;
      const isOverMap = mapElement && mapElement.closest('.leaflet-container');
      
      if (isOverMap && map) {
        if (event.ctrlKey) {
          event.preventDefault();
          event.stopPropagation();
          
          const zoomDelta = event.deltaY > 0 ? -1 : 1;
          const currentZoom = map.getZoom();
          const newZoom = Math.max(1, Math.min(18, currentZoom + zoomDelta));
          
          map.setZoom(newZoom);
        } else {
          event.stopPropagation();
        }
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false, capture: true });

    return () => {
      document.removeEventListener('wheel', handleWheel, { capture: true });
    };
  }, [map]);

  const handleMapClick = (lat: number, lng: number) => {
    setClickedPosition([lat, lng]);
    
    setClickedLocation(`Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`);
    
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div style={containerStyle}>
   
      <MapContainer
        center={center}
        zoom={12}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={false}
        doubleClickZoom={true}
        touchZoom={true}
        zoomControl={true}
      >
        <MapRef onMapReady={setMap} />
        <MapClickHandler onMapClick={handleMapClick} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={center}>
          <Popup>
            <strong>Ahmedabad, India</strong>
            <br />
            Welcome to our location!
            <br />
            <small>Click anywhere on the map to explore</small>
          </Popup>
        </Marker>

        {clickedPosition && (
          <Marker position={clickedPosition}>
            <Popup>
              <strong>You clicked here!</strong>
              <br />
              {clickedLocation}
              <br />
              <a 
                href={`https://www.google.com/maps?q=${clickedPosition[0]},${clickedPosition[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#007bff', textDecoration: 'none' }}
              >
                Open in Google Maps
              </a>
            </Popup>
          </Marker>
        )}
      </MapContainer>
      
      {clickedLocation && (
        <div style={{ 
          marginTop: '10px', 
          padding: '10px', 
          backgroundColor: '#f8f9fa', 
          border: '1px solid #dee2e6',
          borderRadius: '5px',
          fontSize: '14px'
        }}>
          <strong>Last clicked location:</strong> {clickedLocation}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
