import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100%"
};
const mapOptions = {
    disableDefaultUI: true,
      gestureHandling: "greedy"


};
const initialPosition = {
    lat: 40.4168,
    lng: -3.7038
}

const Map = ({onSelectLocation}) => {

    const [position, setPosition] = useState(null);
    const [center,setCenter] = useState(initialPosition)

    const handleMapClick = useCallback((event) => {

        //obtiene la latitud
        const lat = event.latLng.lat();
        //obtiene la longitud
        const lng = event.latLng.lng();

        const newPosition = {lat, lng};
        //mueve el pin 
        setPosition(newPosition);
        //centra el mapa en el punto clickeado
        onSelectLocation(newPosition);                   

    }, []);
     return (
        <div style={{ width: "100%", height: "100%" }}>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                    onClick={handleMapClick}
                    options={mapOptions}

                >
                    {position && (
                        <Marker position={position} />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

   
export default Map;
