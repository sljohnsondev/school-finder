import React, { Component } from 'react';
import { GoogleMap, Marker, DirectionsRenderer, withGoogleMap, InfoWindow } from 'react-google-maps';
import PopUpWindow from '../PopUpWindow';
import mapContainer from '../../containers/Filters-container';
import './map-style.css';

const container = <div style={{ height: '100%', width: '100%' }}></div>;

const MyGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapMounted}
    zoom={props.zoom}
    center={props.center}
    options={{ streetViewControl: false, myTypeControl: false, fullscreenControl: false }}
  >
    { props.directions ? <div /> : props.markers }
    { props.directions === null ? <div /> : <DirectionsRenderer directions={props.directions} /> }
  </GoogleMap>
));

class Map extends Component {
  constructor() {
    super();
    this.state = {
      zoom: 12,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.schoolsArr.length > 0 &&
       (nextProps.directions === null || nextProps.directions === undefined)) {
      const length = nextProps.schoolsArr.length;
      /* eslint-disable no-alert, no-undef */
      const bounds = new window.google.maps.LatLngBounds();
      /* eslint-enable no-alert, no-undef */
      for (let i = 0; i < length; i++) {
        /* eslint-disable no-alert, no-undef */
        const place =
          new window.google.maps.LatLng(
            parseFloat(nextProps.schoolsArr[i].location_lat),
            parseFloat(nextProps.schoolsArr[i].location_lng),
          );
        /* eslint-enable no-alert, no-undef */

        bounds.extend(place);
      }
      this._mapComponent.fitBounds(bounds);
    }
  }

  handleMapLoad(map) {
    this._mapComponent = map;
  }

  displayMarkers(homeAddress, schoolsArr) {
    if (homeAddress) {
      const HomeMarkerInfo = {
        position: {
          lat: homeAddress.Location.Lat,
          lng: homeAddress.Location.Lng,
        },
        /* eslint-disable no-alert, no-undef */
        animation: window.google.maps.Animation.DROP,
        /* eslint-enable no-alert, no-undef */
        title: 'HOME',
        icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
      };
      const homeMarker = <Marker key={10000} {...HomeMarkerInfo} />;
      const schoolMarkers = schoolsArr.map((school, i) => {
        const marker = {
          position: {
            lat: parseFloat(school.location_lat),
            lng: parseFloat(school.location_lng),
          },
          showInfo: school.showInfo,
          infoContent: (
            <PopUpWindow {...school} />
          ),
          /* eslint-disable no-alert, no-undef */
          animation: window.google.maps.Animation.DROP,
          /* eslint-enable no-alert, no-undef */
          label: { text: `${i + 1}` },
        };
        return (
          <Marker key={i} {...marker} onClick={() => this.handleMarkerClick(marker)}>
            {marker.showInfo && (
            <InfoWindow onCloseClick={() => this.handleMarkerClick(marker)}>
              <div>{marker.infoContent}</div>
            </InfoWindow>
          )}
          </Marker>
        );
      });
      if (this.props.activeSearch) {
        return homeMarker;
      } return [homeMarker, ...schoolMarkers];
    }
  }

  handleMarkerClick(targetMarker) {
    this.props.toggleInfoWindow(targetMarker);
  }

  render() {
    const {
      center,
      schoolsArr,
      directions,
      homeAddress,
    } = this.props;
    return (
      <MyGoogleMap
        className="map-container"
        containerElement={container}
        mapElement={container}
        center={center}
        zoom={this.state.zoom}
        markers={this.displayMarkers(homeAddress, schoolsArr)}
        directions={directions}
        onMapMounted={this.handleMapLoad.bind(this)}
      />
    );
  }
}

export default mapContainer(Map);
