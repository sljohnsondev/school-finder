import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
import './map-style.css';

export default class Map extends Component {
  render() {
    const { center, schoolsArr, directions } = this.props;
    console.log('directions', directions)
    const mapContainer = <div style={{height: '100%', width: '100%'}}></div>
    const markers = schoolsArr.map((school, i) => {
      const marker = {
        position: {
          lat: school.Location.Lat,
          lng: school.Location.Lng
        },
        animation: window.google.maps.Animation.DROP,
        label: school.Name || 'Home',
      }
      return <Marker key={i} {...marker} />
    })

    return (
      <GoogleMapLoader
        className='map-container'
        containerElement={ mapContainer }
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={center}
            options={{streetViewControl: false, myTypeControl: false }}>
            { markers }
            { <DirectionsRenderer directions={directions} /> }
          </GoogleMap>
        }
      />
    )
  }
}
