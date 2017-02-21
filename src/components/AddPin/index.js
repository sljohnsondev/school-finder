import React, { Component } from 'react';
const { splitLocation, filterData } = require('../Helpers/ForecastHelpers');
import './addpin-style.css'

export default class AddPin extends Component {
  constructor(props) {
    super(props);
    this.state= {
      cityInput: ''
    }
  }

  getForecast(location) {
    fetch(`http://api.wunderground.com/api/0b7e4bc2937ad616/conditions/q/${splitLocation(location)}.json`)
    .then((response) => response.json())
    .then((data) => filterData(data))
    .then((cleanData) => this.props.receiveForecast(cleanData));
  }

  render() {
    const { data } = this.props;
    const { cityInput } = this.state;
    let disableBtn = data.length > 2;
    return (
      <div>
        <input
          className='addpin-input'
          value={this.state.cityInput}
          onChange={ (e)=> this.setState({ cityInput: e.target.value })}
          placeholder='Enter a city'
        />
        <button
          className='addpin-btn'
          disabled={disableBtn}
          onClick={ () => this.getForecast(cityInput) }
        >Add New City</button>
      </div>
    )
  }
}
