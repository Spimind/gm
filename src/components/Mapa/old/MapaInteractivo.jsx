import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './styles.css';

const MapaInteractivo = () => {
  const center = {
    lat: 20.5923,
    lng: -100.3872
  };

  const mapStyles = {
    width: '100%',
    height: '450px'
  };

  const markerPosition = {
    lat: 20.5923,
    lng: -100.3872
  };

  return (
    <section className="mapa-section">
      <LoadScript googleMapsApiKey="TU_API_KEY_AQUI">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={16}
          center={center}
          options={{
            styles: [
              {
                featureType: 'all',
                elementType: 'all',
                stylers: [
                  { saturation: -100 }
                ]
              }
            ],
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false
          }}
        >
          <Marker
            position={markerPosition}
            title="Gama y Asociados"
          />
        </GoogleMap>
      </LoadScript>
    </section>
  );
};

export default MapaInteractivo;
