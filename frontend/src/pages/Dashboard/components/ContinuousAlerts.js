import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import dangerIcon from '../../Landing/Images/danger.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import * as turf from '@turf/turf';
import axios from 'axios';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  const [geofenceData, setGeofenceData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [markerColor, setMarkerColor] = useState('blue');
  const [markerIcon, setMarkerIcon] = useState(DefaultIcon);
  const insidePosition = userData.lat && userData.lon ? [userData.lat, userData.lon] : [0, 0];

const style = {
        background: 'linear-gradient(90deg, #ff5733, #33ff57, #3357ff, #ff33a8, #a833ff, #ff5733)',
        backgroundSize: '400%',
        WebkitTextFillColor: 'transparent',
        animation: 'animate 25s linear infinite'
    };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/geodjango/geofence/');
        setGeofenceData(response.data);
      } catch (error) {
        console.error('Error fetching geofence data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
  const fetchDataUser = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/geodjango/live/');
      setUserData(response.data.live_location);
    } catch (error) {
      console.error('Error fetching live location data:', error);
    }
  };

  fetchDataUser();
}, []);

useEffect(() => {
  if (userData.lat !== undefined && userData.lon !== undefined) {
    const insidePoint = turf.point([userData.lat, userData.lon]);
    const isInside = geofenceData.some((geofence) => {
      const polygonCoords = geofence.boundary?.coordinates?.[0];
      if (!polygonCoords) {
        console.warn('Geofence has no coordinates:', geofence);
        return false;
      }

      try {
        const polygon = turf.polygon([polygonCoords]);
        return turf.booleanPointInPolygon(insidePoint, polygon);
      } catch (polygonError) {
        console.error('Error creating polygon:', polygonError);
        return false;
      }
    });

    setMarkerColor(isInside ? 'red' : 'blue');
    setMarkerIcon(L.icon({ iconUrl: isInside ? dangerIcon : icon }));
  }
}, [geofenceData, userData]);

  return (
    <div className="font-sans">
      <div className="w-full h-screen px-2 py-2" style={style}>
        <style>
                            {`
          @keyframes animate {
            0% {
              background-position: 0%;
            }
            100% {
              background-position: 400%;
            }
          }
        `}
                        </style>
      <MapContainer center={insidePosition} zoom={13} className="w-full h-screen rounded-3xl">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geofenceData.length > 0 && (
          <>
            {geofenceData.map((geofence) => {
              const boundaryString = geofence.boundary;
              if (!boundaryString) {
                console.warn('Geofence has no boundary:', geofence);
                return null;
              }
              try {
                const coordinatesMatch = boundaryString.match(/\(\(([^)]+)\)\)/);
                if (!coordinatesMatch || !coordinatesMatch[1]) {
                  console.warn('Invalid boundary format:', boundaryString);
                  return null;
                }

                const coordinates = coordinatesMatch[1].split(',').map((coord) => {
                  const [lat, lng] = coord.trim().split(' ');
                  return [parseFloat(lat), parseFloat(lng)];
                });

                return (
                  <Polygon key={geofence.id} positions={coordinates} color="red" fillOpacity={0.5}>
                    <Popup>{geofence.name}</Popup>
                  </Polygon>
                );
              } catch (polygonError) {
                console.error('Error creating polygon:', polygonError);
                return null;
              }
            })}
          </>
        )}
        <Marker position={insidePosition} icon={markerIcon}>
          <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
        </Marker>
      </MapContainer>
        </div>
    </div>
  );
};

export default MapComponent;
