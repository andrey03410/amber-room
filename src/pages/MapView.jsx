import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";


const MapView = () => {
    return (
        <div>
            <MapContainer
              style={{ height: "480px", width: "100%" }}
              zoom={1}
              center={[-0.09, 51.505]}>
            </MapContainer>
          </div>
    );
};

export default MapView;

