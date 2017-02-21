import React, { Component } from 'react';
import Header from '../Header';
import Map from '../Map';
import './app-style.css'

export default class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header />
        <Map />
        {this.props.children}
      </div>
    )
  }
}
//
// AIzaSyB8JYY9Fxzlc0pjxOxv-i9f1QtLOe0lY9o
