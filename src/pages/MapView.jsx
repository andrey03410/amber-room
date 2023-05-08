import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, CircleMarker, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet"
import "leaflet/dist/leaflet.css";

const position1 = [54.721, 20.586]
const position2 = [54.721, 20.686]

function GetIcon(_iconSize) {
    return L.icon({
        iconUrl: require("./map_marker.png"),
        iconSize: [_iconSize]
    })
}

const MapView = () => {
    const [places, setPlaces] = useState([{id: 1, name: "Королевский замок", description: "Тестовое описание1", coord_x: 54.721, coord_y: 20.586},
        {id: 2, name: "Не Королевский замок", description: "Тестовое описание2", coord_x: 54.721, coord_y: 20.686}])
    return (
        <MapContainer center={position1} zoom={13} style={{ height: "calc(100vh - 60px)", width: "100%" }} maxZoom={14} minZoom={12}>
            <TileLayer
                url="https://api.maptiler.com/tiles/8a9d5d1c-61e5-41ef-b9a2-58a2eb591d30/{z}/{x}/{y}.jpg?key=PkzZI0EXNxvEXbU8mpRh"
            />
            {places.map((item) => {
                return(
                    <Marker position={[item.coord_x, item.coord_y]} icon={GetIcon(30)}>
                        <Popup>
                            Название: {item.name} <br />
                            Описание: {item.description}
                        </Popup>
                    </Marker>
                )
            })}
        </MapContainer>
    )
};

export default MapView;


