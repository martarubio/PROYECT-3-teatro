// import React from "react";
// // import { Wrapper, Status} from "@googlemaps/react-wrapper";
// import { Map, mapStyles, MapContainer } from 'google-maps-react';



// const GoogleApiWrapper = (props) => {

//     return (
//         <Map
//             google={this.props.google}
//             zoom={8}
//             style={mapStyles}
//         />
//     );
// }


// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyCtKrbr0V5A95amGlRF-JMdqw_BBQotmWA'
// })(MapContainer);

import React, { Component } from "react"
import { Map, Marker, GoogleApiWrapper, mapStyles, Button } from 'google-maps-react';



export class MapContainer extends Component {
    render() {
        return (
            <>  
            {/* <h3>{theatre}</h3>  */}
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{
                    lat: 40.39755677760225,
                    lng: -3.7001470114130894,
                }}

                style={{ height: '500px', width: '500px', marginLeft: '400px', marginTop: '30px', borderWidth: '3px', borderColor: 'rgb(131, 5, 5)' }}
            >
                <Marker
                    title={'teatro'}
                    name={'teatro'}
                    // position={{ lat: location.coords.latitude, lng: location.coords.longitude}}
                    position={{ lat: this.props.match.params.lat, lng: this.props.match.params.lng }}

                />
            </Map>
                {/* <div>
                    <a href="https://www.ticketmaster.es">
                        <Button variant="primary" style={{ background: 'rgb(131, 5, 5)' }}>Volver</Button>
                    </a>

                </div> */}

            </>
        )

    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyCtKrbr0V5A95amGlRF-JMdqw_BBQotmWA")
})(MapContainer)