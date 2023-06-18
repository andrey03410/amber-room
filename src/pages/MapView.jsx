import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, CircleMarker, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet"
import "leaflet/dist/leaflet.css";
import {ENDPOINTS} from "../API/endpoints";

const position1 = [54.721, 20.586]

function GetIcon(_iconSize) {
    return L.icon({
        iconUrl: require("./marker.png"),
        iconSize: [_iconSize]
    })
}

const MapView = () => {
    const [places, setPlaces] = useState([])

    useEffect(() => {
        fetch(ENDPOINTS.PLACES.GET)
            .then(res => res.json())
            .then((result) => {
                setPlaces(result.places)
            })
    }, [])

    return (
        <MapContainer center={position1} zoom={13} style={{ height: "calc(100vh - 60px)", width: "100%" }} maxZoom={14} minZoom={12}>
            <TileLayer url={ENDPOINTS.MAP.API_CONNECTION}/>
                {places.map((item) => {
                    return(
                        <Marker position={[item.coord_x, item.coord_y]} icon={GetIcon(60)}>
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


