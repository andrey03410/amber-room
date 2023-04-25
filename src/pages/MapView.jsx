import React, { useRef, useEffect, useState } from 'react';
import { YMaps, Map } from 'react-yandex-maps';

const MapView = () => {
    return (
        <YMaps>
            <div>
                <Map width={1280} height={720} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </div>
        </YMaps>
    );
};

export default MapView;

