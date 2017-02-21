import React, { Component } from 'react';
import Header from '../Header';
const { splitLocation, filterData, filterExtData } = require('../Helpers/ForecastHelpers.js');
import './app-style.css'

export default class App extends Component {

  componentDidMount() {
    const { fetchLocation, fetchSun, fetchWeather } = this.props
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const long = position.coords.longitude
      fetchLocation({lat, long});
      this.fetchSunAPI(lat, long, fetchSun);
      this.fetchCurrentCity(lat, long, fetchWeather);
    })
  }

  fetchCurrentCity(lat, long) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/geolookup/q/${lat},${long}.json`)
    .then((response) => response.json())
    .then((data) => this.getForecast(`${data.location.city}, ${data.location.state}`))
  }

  fetchSunAPI(lat, long, fetchSun) {
    fetch(`http://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`)
    .then((response) => response.json())
    .then((time) => this.filterTime(time))
    .then((cleanTime) => fetchSun(cleanTime))
  }
  // .then((data) => this.checkDaytime(data))

  filterTime(time){
    return{
      sunrise: time.results.sunrise,
      sunset: time.results.sunset
    }
  }

  getForecast(location) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/conditions/q/${splitLocation(location)}.json`)
    .then((response) => response.json())
    .then((data) => filterData(data))
    .then((cleanData) => this.props.fetchWeather(cleanData));
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/forecast10day/q/${splitLocation(location)}.json`)
    .then((response) => response.json())
    .then((data) => filterExtData(data))
    .then((cleanData) => this.props.receiveExtForecastApp(cleanData, location));
  }

  render() {
    return (
      <div>
          <Header {...this.props}/>
          {this.props.children}
      </div>
    )
  }
}
