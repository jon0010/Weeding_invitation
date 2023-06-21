import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapModal = ({ isOpen, onClose }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: -34.672708, // Latitud del lugar
    lng: -58.561653, // Longitud del lugar
  };

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapModal;
