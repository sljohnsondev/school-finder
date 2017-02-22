import React, { Component } from 'react';
import Header from '../Header';
import GoogleMap from '../GoogleMap';
import './app-style.css'

export default class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header />
        <GoogleMap />
        {this.props.children}
      </div>
    )
  }
}
//
// AIzaSyB8JYY9Fxzlc0pjxOxv-i9f1QtLOe0lY9o
