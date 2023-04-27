import React, {useRef, useEffect, useState, useMemo} from 'react';
import {YMaps, Map, TypeSelector, useYMaps} from '@pbe/react-yandex-maps';


const MapView = () => {
    const mapRef = useRef(null);

    return (
        <YMaps>
            <div>
                <Map width={1280} height={720} defaultState={{center: [55.75, 37.57], zoom: 9}}>
                    <TypeSelector mapTypes={['yandex#map']} options={{float: "right"}}/>
                </Map>
            </div>
        </YMaps>
    );
};

export default MapView;


