import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { Col, Card, Row,CardTitle } from 'react-materialize'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
const MyMapComponent = compose(
    withProps({
      /**
       * Note: create and replace your own key in the Google console.
       * https://console.developers.google.com/apis/dashboard
       * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
       */
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDraAZy-WXDo1Nf_q-rxHgoS4KHdfM1mDE&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `50vh` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: -7.782900, lng: 110.367065 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -7.782900, lng: 110.367065 }} />
      )}
    </GoogleMap>
  ));
class About extends Component {
    render() {
        return (
            <div style={{
                width: "100%",
                height: "100vh",
                position: 'static',
                backgroundColor: '#FFFFFF'
            }}>
            <div className="parent">

                <MyMapComponent isMarkerShown />
            </div>
            <div className="parent">
            <Row className='child' style={{textAlign:'center'}}>
<p className='text_' style={{fontSize:20}}>info@malaskoding.com</p>
                    </Row>
                
            </div>
            </div>
        );
    }
}

export default About