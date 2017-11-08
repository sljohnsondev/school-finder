import React, { Component } from 'react';
import Header from '../Header';
import Map from '../Map';
import SignIn from '../SignIn';
import Filters from '../Filters';
import UserProfile from '../../containers/Profile-container';
import Compare from '../Compare';
import './app-style.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showTab: ''
    }
    this.toggleTab = this.toggleTab.bind(this);
    this.getAnchor = this.getAnchor.bind(this);
  }

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

  toggleTab(str) {
      this.setState({ showTab: str })
  }

  renderMap() {
    if (this.props.data.FilterResults.homeAddress && this.props.data.FilterResults.schools.length > 0) {
      return <Map homeAddress={this.props.data.FilterResults.homeAddress}
                  schoolsArr={[...this.props.data.FilterResults.schools]}
                  directions={this.props.data.FilterResults.directions} />
      } else if (this.props.data.FilterResults.homeAddress) {
        return <Map center={this.getAnchor()}
                    homeAddress={this.props.data.FilterResults.homeAddress}
                    schoolsArr={[]}
                    directions={this.props.data.FilterResults.directions} />
      } else return <Map center={this.getAnchor()}
                         homeAddress={null} schoolsArr={[]}
                         directions={this.props.data.FilterResults.directions} />
  }

  render() {

    const { displayName, email, photoURL, uid } = this.props.data.AppData;
    console.log('');
    

    return (
      <div className='app-container'>
        <Header />
        { this.props.data.AppData.displayName ?
        <div />
        :
        <SignIn signInHandler={ this.props.signInHandler } toggleTab={ this.toggleTab } /> }
        <UserProfile name={ displayName } email={ email } photo={ photoURL } userId={ uid } tab={ this.state.showTab } toggleTab={ this.toggleTab } />
        <Filters tab={ this.state.showTab } toggleTab={ this.toggleTab } />
        <Compare tab={ this.state.showTab } toggleTab={ this.toggleTab } />
        <div style={{width: '100vw', height: '100vh', background: 'peru'}}>
          {this.renderMap()}
        </div>
      </div>
    )
  }
}
