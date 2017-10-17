import React, {Component} from 'react';
import Map from './Map';

//Map Container component - to wrap Map component
class MapContainer extends React.PureComponent {

    render() {
        return (
            <Map/>
        )
    }
}

export default MapContainer;