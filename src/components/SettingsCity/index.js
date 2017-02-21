import React, { Component } from 'react';
import './settingscity-style.css'

export default class Settings extends Component {

  render() {
    const { data, pinID, removePin } = this.props;
    console.log(data, pinID)
    return (
      <div className='hold-item'>
        <p className='city-settings'>{data.fullName}</p>
        <button className='delete-btn'
          onClick={ () => removePin(pinID) }
        >x</button>
      </div>
    )
  }
}
