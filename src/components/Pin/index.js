import React, { Component } from 'react';
import { Link } from 'react-router';
const { splitLocation, filterExtData } = require('../Helpers/ForecastHelpers');

export default class Pin extends Component {

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/forecast10day/q/${splitLocation(this.props.data.fullName)}.json`)
    .then((response) => response.json())
    .then((data) => filterExtData(data))
    .then((cleanData) => this.props.receiveExtForecast(cleanData, this.props.data.fullName));
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <div className='pin-container'>
          <p className='card-city'>{data.fullName}</p>
          <p className='card-temp'>{data.temp_f}&deg;F</p>
          <section className='pin-summary-icon'>
            <img src={data.icon_url}/>
            <p className='card-sky'>{data.weather}</p>
          </section>
          <Link to={'/forecast/' + data.city}><h3>View extended forecast>>></h3></Link>
        </div>
      </div>
    )
  }
}
