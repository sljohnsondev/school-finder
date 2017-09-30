import React, { Component } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, withGoogleMap, InfoWindow } from 'react-google-maps';
import { markerRefObj } from '../Helpers/markerIndex';
import PopUpWindow from '../PopUpWindow'
import mapContainer from '../../containers/Filters-container'
import './map-style.css';

const container = <div style={{height: '100%', width: '100%'}}></div>

const MyGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    zoom={props.zoom}
    center={props.center}
    options={{ streetViewControl: false, myTypeControl: false, fullscreenControl: false }}
  >
    { props.directions ? <div/> : props.markers }
    { props.directions === null ? <div/> : <DirectionsRenderer directions={props.directions} /> }
  </GoogleMap>
))

class Map extends Component {
  constructor() {
    super()
    this.state = {
      zoom: 12
    }
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    // if (map) {
    //   console.log('MAP ', map);
    // }
  }

  displayMarkers(homeAddress, schoolsArr) {
    if(homeAddress) {
      let HomeMarkerInfo = {
        position: {
          lat: homeAddress.Location.Lat,
          lng: homeAddress.Location.Lng
        },
        animation: window.google.maps.Animation.DROP,
        title: 'HOME',
        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
      }
      let homeMarker = <Marker key={10000} {...HomeMarkerInfo} />
      let schoolMarkers = schoolsArr.map((school, i) => {
        const marker = {
          position: {
            lat: school.Location.Lat,
            lng: school.Location.Lng
          },
          showInfo: school.showInfo,
          infoContent: (
            <PopUpWindow { ...school } />
          ),
          animation: window.google.maps.Animation.DROP,
          label: { text: markerRefObj[i] },
        }
        return (
          <Marker key={i} {...marker} onClick={ () => this.handleMarkerClick(marker) }>
          {marker.showInfo && (
            <InfoWindow onCloseClick={ () => this.handleMarkerClick(marker) }>
            <div>{marker.infoContent}</div>
            </InfoWindow>
          )}
          </Marker>
        )
      })
      if (this.props.activeSearch) {
        return homeMarker
      } else return [homeMarker, ...schoolMarkers]
    }
  }

  handleMarkerClick(targetMarker) {
    this.props.toggleInfoWindow(targetMarker)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.schoolsArr.length > 0 && (nextProps.directions === null || nextProps.directions === undefined)) {
      let length = nextProps.schoolsArr.length
      let bounds = new window.google.maps.LatLngBounds()
      for (let i = 0; i < length; i++) {
        let place = new window.google.maps.LatLng(nextProps.schoolsArr[i].Location.Lat, nextProps.schoolsArr[i].Location.Lng)
        bounds.extend(place)
      }
      this._mapComponent.fitBounds(bounds)
    }
  }

  render() {
    const { center, schoolsArr, directions, homeAddress} = this.props;
    return (
      <MyGoogleMap
        className='map-container'
        containerElement={ container }
        mapElement={ container }
        center={ center }
        zoom={ this.state.zoom }
        markers={ this.displayMarkers(homeAddress, schoolsArr)}
        directions={ directions }
        onMapMounted={ this.handleMapLoad.bind(this) }
      />
    )
  }
}

export default mapContainer(Map);
