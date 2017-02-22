import React, { Component } from 'react';
import Header from '../Header';
import Map from '../Map';
import './app-style.css'

export default class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div style={{width: 700, height: 800, background: 'peru'}}>
        <Header />
        <Map />
        {this.props.children}
      </div>
    )
  }
}
//
// AIzaSyB8JYY9Fxzlc0pjxOxv-i9f1QtLOe0lY9o
