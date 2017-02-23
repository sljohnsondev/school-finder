import React, { Component } from 'react';
import Header from '../Header';
import Map from '../Map';
import SignIn from '../SignIn';
import { signIn, signOut } from '../../firebase.js';
import './app-style.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }
  }


  componentDidMount() {
    console.log('it is working')
  }

  signInHandler() {
    signIn().then((user) => {
      this.setState({ user });
    });
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
      <div className='app-container'>
        <Header />
        { this.state.user ?
          <div className='for filter and search components'/>
          :
          <SignIn signInHandler={ this.signInHandler.bind(this) } /> }
          {this.props.children}
        <div style={{width: '100vw', height: '97vh', background: 'peru'}}>
          <Map center={location} schoolsArr={schoolsArr} />
        </div>
      </div>
    )
  }
}
//
// AIzaSyB8JYY9Fxzlc0pjxOxv-i9fa1QtLOe0lY9o
