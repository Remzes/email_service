import React, {Component} from 'react';
import {withProps, compose} from 'recompose';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps';

//Map component
const Map = compose(
    //Props
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_V3}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <section className="loading-map-element" style={{ height: `100%` }} />,
        containerElement: <section className="container-map-element" />,
        mapElement: <section className="map-element" style={{ height: `100%` }} />,
        lat: 43.784920,
        lng: -79.231
    }),
    withScriptjs,
    withGoogleMap
)(({lat, lng}) =>
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat, lng}}
        defaultOptions={{
            scrollwheel: false
        }}
    >
        <Marker position={{ lat, lng }} />
    </GoogleMap>
);

export default Map;