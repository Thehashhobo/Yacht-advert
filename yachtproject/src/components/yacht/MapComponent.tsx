import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './MapComponent.module.css';

// Fix for default markers in React Leaflet v4
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconRetinaUrl: iconRetina,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom yacht icon
const yachtIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1e40af" width="32" height="32">
      <path d="M3 13h8v8l4-4 4 4v-8h2l-10-10-10 10z"/>
      <circle cx="12" cy="8" r="2" fill="#daa520"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface Location {
  lat: number;
  lng: number;
  name: string;
  address?: string;
  description?: string;
}

interface MapComponentProps {
  location: Location;
  zoom?: number;
  height?: string;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({
  location,
  zoom = 13,
  height = '400px',
  className = ''
}) => {
  return (
    <div className={`${styles.mapContainer} ${className}`} style={{ height }}>
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
          position={[location.lat, location.lng]} 
          icon={yachtIcon}
        >
          <Popup className={styles.popup}>
            <div className={styles.popupContent}>
              <h3>{location.name}</h3>
              {location.address && (
                <p className={styles.address}>{location.address}</p>
              )}
              {location.description && (
                <p className={styles.description}>{location.description}</p>
              )}
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;