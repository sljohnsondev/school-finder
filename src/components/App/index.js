import React, { Component } from 'react';
import Header from '../Header';
import Map from '../Map';
import './app-style.css'

export default class App extends Component {

  componentDidMount() {
    console.log('it is working')
  }

  render() {

    const location = {
      lat: 39.731237,
      lng: -104.973377
    }

    const schoolsArr = [
      {
        location: {
          lat: 39.758135,
          lng: -105.007295
        }
      }
    ]

    return (
      <div>
        <Header />
        <div style={{width: '100vw', height: '97vh', background: 'peru'}}>
          <Map center={location} schoolsArr={schoolsArr} />
          {this.props.children}
        </div>
      </div>
    )
  }
}
//
// AIzaSyB8JYY9Fxzlc0pjxOxv-i9f1QtLOe0lY9o
