import React, {useRef, useEffect, useState, useMemo} from 'react';
import {YMaps, Map, TypeSelector, useYMaps} from '@pbe/react-yandex-maps';
import MapChildren from "./MapChildren";


const MapView = () => {
    return (
        <YMaps>
            <MapChildren/>
        </YMaps>
    );
};

export default MapView;


