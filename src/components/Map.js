import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, Polyline, useLoadScript } from "@react-google-maps/api";
import vehicleData from "../vehicleData.json";

const containerStyle = {
  width: "100%",
  height: "500px"
};

const center = {
  lat: 17.385044,
  lng: 78.486671
};

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD7XIm175UKXyfvN4Kz4PH66NI6fuQ9gnM"
  });

  const [vehiclePath, setVehiclePath] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(center);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < vehicleData.length) {
        const { latitude, longitude } = vehicleData[index];
        setCurrentLocation({ lat: latitude, lng: longitude });
        setVehiclePath((prev) => [...prev, { lat: latitude, lng: longitude }]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={currentLocation} zoom={15}>
      <Marker position={currentLocation} />
      <Polyline path={vehiclePath} options={{ strokeColor: "#FF0000", strokeWeight: 2 }} />
    </GoogleMap>
  );
};

export default Map;
