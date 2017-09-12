import React, { Component } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, withGoogleMap } from 'react-google-maps';
import './map-style.css';


const mapContainer = <div style={{height: '100%', width: '100%'}}></div>

const MyGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    zoom={props.zoom}
    center={props.center}
    options={{streetViewControl: false, myTypeControl: false }}
  >
    { props.directions ? <div/> : props.markers }
    { props.directions === null ? <div/> : <DirectionsRenderer directions={props.directions} /> }
  </GoogleMap>
))

export default class Map extends Component {
  constructor() {
    super()
    this.state = {
      zoom: 12
    }
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log('MAP ', map);
    }
  }

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.schoolsArr.length > 1 && (nextProps.directions === null || nextProps.directions === undefined)) {
      let length = nextProps.schoolsArr.length
      let markers = nextProps.schoolsArr
      let bounds = new window.google.maps.LatLngBounds()
      for (let i = 0; i < length; i++) {
        let place = new window.google.maps.LatLng(nextProps.schoolsArr[i].Location.Lat, nextProps.schoolsArr[i].Location.Lng)
        bounds.extend(place)
      }
      this._mapComponent.fitBounds(bounds)
    }
  }

  render() {
    const { center, schoolsArr, directions } = this.props;
    return (
      <MyGoogleMap
        className='map-container'
        containerElement={ mapContainer }
        mapElement={ mapContainer }
        center={ center }
        zoom={ this.state.zoom }
        markers={ this.displayMarkers(schoolsArr)}
        directions={ directions }
        onMapMounted={ this.handleMapLoad.bind(this) }
      />
    )
  }
}
