import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, CircleMarker, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [54.721, 20.586]

const MapView = () => {
    return (
        <MapContainer center={position} zoom={13} style={{ height: "1000px", width: "100%" }} maxZoom={14} minZoom={10}>
            <TileLayer
                url="https://api.maptiler.com/tiles/8a9d5d1c-61e5-41ef-b9a2-58a2eb591d30/{z}/{x}/{y}.jpg?key=PkzZI0EXNxvEXbU8mpRh"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
};

export default MapView;


