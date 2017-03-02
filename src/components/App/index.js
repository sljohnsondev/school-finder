import React, { Component } from 'react';
import Header from '../Header';
import Map from '../Map';
import SignIn from '../SignIn';
import './app-style.css'

export default class App extends Component {

  getAnchor() {
    if (this.props.data.FilterResults.homeAddress) {
      return {
        lat: this.props.data.FilterResults.homeAddress.Location.Lat,
        lng: this.props.data.FilterResults.homeAddress.Location.Lng
      }
    } else return {
      lat: 39.731237,
      lng: -104.973377
    }
  }

  renderMap() {
    if (this.props.data.FilterResults.homeAddress && this.props.data.FilterResults.schools) {
      return <Map center={this.getAnchor()} schoolsArr={[this.props.data.FilterResults.homeAddress, ...this.props.data.FilterResults.schools]} />
      } else if (this.props.data.FilterResults.homeAddress) {
        return <Map center={this.getAnchor()} schoolsArr={[this.props.data.FilterResults.homeAddress]} />
        } else return <Map center={this.getAnchor()} schoolsArr={[]} />
  }

  render() {

    // let markerDisplay = Object.assign([], this.props.data.FilterResults.schools, [this.props.data.FilterResults.homeAddress])

    return (
      <div className='app-container'>
        <Header />
        { this.props.data.AppData.displayName ?
          <div />
          :
          <SignIn signInHandler={ this.props.signInHandler } /> }
          {this.props.children}
        <div style={{width: '100vw', height: '97vh', background: 'peru'}}>
          {this.renderMap()}
        </div>
      </div>
    )
  }
}
// AIzaSyB8JYY9Fxzlc0pjxOxv-i9fa1QtLOe0lY9o
