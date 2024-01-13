import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import dangerIcon from '../../Landing/Images/danger.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import * as turf from '@turf/turf';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const insidePosition = [51.505, -0.09];
  const outsidePosition = [51.515, -0.085];  // Define an outside position

  const dangerZoneCoords = [
    [51.51, -0.10],
    [51.52, -0.09],
    [51.50, -0.08],
    [51.51, -0.10]
  ];

  const [markerColor, setMarkerColor] = useState('blue');

  const isPointInsidePolygon = (point, polygonCoords) => {
    const pointCoords = turf.point(point);
    const polygon = turf.polygon([polygonCoords]);
    return turf.booleanPointInPolygon(pointCoords, polygon);
  };

  useEffect(() => {
    const isInside = isPointInsidePolygon(insidePosition, dangerZoneCoords);
    setMarkerColor(isInside ? 'red' : 'blue');
  }, []);

  return (
    <div className="font-sans">
      <MapContainer center={insidePosition} zoom={13} className="w-full h-screen">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polygon positions={dangerZoneCoords} color="red" fillOpacity={0.5}>
          <Popup>
            This is a danger zone. Stay away!
          </Popup>
        </Polygon>

        {/* Display Marker for Inside Position */}
        <Marker
          position={insidePosition}
          icon={L.icon({
            iconUrl: markerColor === 'red' ? dangerIcon : icon,
            shadowUrl: iconShadow,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -35],
            shadowSize: [41, 41]
          })}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        {/* Display Marker for Outside Position */}
        <Marker
          position={outsidePosition}
          icon={L.icon({
            iconUrl: icon,
            shadowUrl: iconShadow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41],
          })}
        >
          <Popup>
            This is an outside position.
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
};

export default MapComponent;
