import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px"
}
const initialPosition = {
    lat: 40.4168,
    lng: -3.7038
}
const Map = () => {

    const [position, setPosition] = useState(null);
    const handleMapClick = useCallback((event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();

        setPosition({ lat, lng });

        console.log("Lat:", lat);
        console.log("Lng:", lng);



    }, [])

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={initialPosition}
                zoom={12}
                onClick={handleMapClick}>

                {position && <Marker position={position} />}
            </GoogleMap>
        </LoadScript>

    )
}
export default Map;
