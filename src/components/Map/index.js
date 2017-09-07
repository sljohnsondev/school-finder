import React, { Component } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, withGoogleMap } from 'react-google-maps';
import './map-style.css';


const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

const MyGoogleMap = withGoogleMap(props => (
  <GoogleMap
  defaultZoom={10}
  defaultCenter={props.center}
  options={{streetViewControl: false, myTypeControl: false }}
  >
    { props.directions ? <div/> : props.markers }
    { props.directions === null ? <div/> : <DirectionsRenderer directions={props.directions} /> }
  </GoogleMap>
))

export default class Map extends Component {
  constructor


  displayMarkers(schoolsArr) {
    return schoolsArr.map((school, i) => {
      const marker = {
        position: {
          lat: school.Location.Lat,
          lng: school.Location.Lng
        },
        animation: window.google.maps.Animation.DROP,
        label: { text: school.Name || 'Home' },
      }
      return <Marker key={i} {...marker}  />
    })
  }

  render() {
    const { center, schoolsArr, directions } = this.props;

    return (
      <MyGoogleMap
        className='map-container'
        containerElement={ mapContainer }
        mapElement={ mapContainer }
        center={ center }
        markers={ this.displayMarkers(schoolsArr)}
        directions={ directions }
      />
    )
  }
}
