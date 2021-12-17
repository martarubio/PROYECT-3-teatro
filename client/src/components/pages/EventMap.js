
import React, { Component } from "react"
import { Map, Marker, GoogleApiWrapper, mapStyles, Button } from 'google-maps-react';
import './EventMap.css'


const mapStyle = {
    width: "70%",
    height: "50vh",
    margin: "0 auto",
    border: "1px solid black"
}

export class MapContainer extends Component {


    render() {
        return (
            <>
                <div className="EventMap">
                    <h3>{this.props.match.params.theatre}</h3>
                    <Map
                        className="map"
                        google={this.props.google}
                        zoom={8}
                        style={mapStyle}
                        initialCenter={{
                            lat: 40.39755677760225,
                            lng: -3.7001470114130894,
                        }}

                    // style={{ height: '500px', width: '500px', marginLeft: '400px', marginTop: '30px', borderWidth: '10px', borderColor: 'black', overflow: 'hidden' }}
                    >
                        <Marker
                            title={'teatro'}
                            name={'teatro'}
                            // position={{ lat: location.coords.latitude, lng: location.coords.longitude}}
                            position={{ lat: this.props.match.params.lat, lng: this.props.match.params.lng }}


                        />

                    </Map>

                    {/* <a href="https://www.ticketmaster.es">
                        <Button variant="primary" style={{ background: 'rgb(131, 5, 5)' }}>Volver</Button>
                    </a> */}


                </div>

            </>
        )

    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyCtKrbr0V5A95amGlRF-JMdqw_BBQotmWA")
})(MapContainer)