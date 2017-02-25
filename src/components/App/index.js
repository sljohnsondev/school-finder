import React, { Component } from 'react';
import Header from '../Header';
import Map from '../Map';
import SignIn from '../SignIn';
import './app-style.css'

export default class App extends Component {

  render(props) {

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
      <div className='app-container'>
        <Header />
        { this.props.data.AppData.displayName ?
          <div className='for filter and search components'/>
          :
          <SignIn signInHandler={ this.props.signInHandler } /> }
          {this.props.children}
        <div style={{width: '100vw', height: '97vh', background: 'peru'}}>
          <Map center={location} schoolsArr={schoolsArr} />
        </div>
      </div>
    )
  }
}
// AIzaSyB8JYY9Fxzlc0pjxOxv-i9fa1QtLOe0lY9o
