import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import './map-style.css';

export default class Map extends Component {
  constructor() {
    super()
    this.state ={
      isRemounting: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.center !== nextProps.center) {
      this.setState({ isRemounting: true }, () => this.setState({ isRemounting: false}));
    }
  }

  render() {
    const { center, schoolsArr } = this.props;
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

    return this.state.isRemounting ? <div></div> : (
      <GoogleMapLoader
        className='map-container'
        containerElement={ mapContainer }
        googleMapElement={
          <GoogleMap
            defaultZoom={12}
            defaultCenter={center}
            options={{streetViewControl: false, myTypeControl: false }}>
            { markers }
          </GoogleMap>
        }
      />
    )
  }
}
