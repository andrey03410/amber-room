import React, {useRef, useEffect} from 'react';
import {Map, TypeSelector, useYMaps} from "@pbe/react-yandex-maps";

const MapChildren = () => {
    const mapRef = useRef(null);
    const ymaps = useYMaps(['Map', 'Layer']);

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }
        var Map = new ymaps.Map(mapRef.current, {
            center: [55.76, 37.64],
            zoom: 10,
        });
        return Map
    }, [ymaps]);
    return (
        <div ref={mapRef} style={{width: 1280, height: 720}}/>
    )
};

export default MapChildren;