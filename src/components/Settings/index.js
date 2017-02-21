import React, { Component } from 'react';
import { Link } from 'react-router';
import SettingsCity from '../SettingsCity';
import AddPin from '../AddPin';
import './settings-style.css';

export default class Settings extends Component {

  render() {
    const { PinForecastData, receiveForecast, removePin } = this.props;
    return (
      <div>
        <p className='settings-p-tag'>Settings</p>
        <div className='settings-container'>
          {PinForecastData.map((city, i) => {
            return <SettingsCity key={ i } pinID={i} data={city} removePin={removePin} />
          })}
          <AddPin data={PinForecastData} receiveForecast={receiveForecast} />
        </div>
        <button className='edit-btn'><Link to='/'>Back To Homepage</Link></button>
      </div>
    )
  }
}
