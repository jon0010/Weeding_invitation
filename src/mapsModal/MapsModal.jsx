import React, { useState, useEffect } from "react";
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

  const [googleMapsApiKey, setGoogleMapsApiKey] = useState("");

  useEffect(() => {
    fetch("/api/google-maps-api-key.js")
      .then((response) => response.json())
      .then((data) => setGoogleMapsApiKey(data.apiKey))
      .catch((error) => console.error("Error fetching API key:", error));
  }, []);

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
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
