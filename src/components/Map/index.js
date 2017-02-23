import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import './map-style.css';

export default class Map extends Component {

  render() {

    const { center, schoolsArr } = this.props;
    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
    const markers = schoolsArr.map((school, i) => {
      const marker = {
        position: {
          lat: school.location.lat,
          lng: school.location.lng
        }
      }
      return <Marker key={i} {...marker} />
    })

    return (
      <div>
        <GoogleMapLoader
          containerElement = { mapContainer }
          googleMapElement = {
            <GoogleMap
              defaultZoom={13}
              defaultCenter={center}
              options={{streetViewControl: false, myTypeControl: false }}>
              { markers }
            </GoogleMap>
          }
        />
      </div>
    )
  }
}
