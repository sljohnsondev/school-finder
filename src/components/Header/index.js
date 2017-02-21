import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
import './header-style.css';

const Header = (props) => {
  let icon;
  let timeText;
  let now = moment().format('HH:mm a')
  let sunrise = moment.parseZone(`${props.data.sunrise}`).local().format('HH:mm a')
  let morning = moment(sunrise, 'HH:mm a').add(2, 'h').format('HH:mm a')
  let sunset = moment.parseZone(`${props.data.sunset}`).local().format('HH:mm a')
  let evening = moment(sunset, 'HH:mm a').subtract(1, 'h').format('HH:mm a')
  switch (true) {
    case (sunrise < now && now < morning):
      icon = <img src={require('./images/sunrise.png')} alt="icon of sunrise"/>
      timeText = 'Good morning, sunshine!'
      break
    case (morning < now && now < evening):
      icon = <img src={require('./images/daytime.png')} alt="icon of sun"/>
      timeText = 'Good day, mate!'
      break
    case (evening < now && now < sunset):
      icon = <img src={require('./images/sunset.png')} alt="icon of sunset"/>
      timeText = 'Good night, sleep tight!'
      break
    default:
      icon = <img src={require('./images/night.png')} alt="icon of moon"/>
      timeText = 'Get some sleep!'
  }

  return (
    <div className='header'>
      <h1>Weather</h1>
      <section className='time-info'>
        <span className='icon'>{icon}</span>
        <p>{timeText}</p>
      </section>
      <div>
        {props.data.city  ?
          <div className='header-text-container'>
            <section className='header-icon'>
              <img src={props.data.icon_url} />
              <p>{props.data.weather}</p>
            </section>
            <section className='header-overview'>
              <article>Current temperature for
                <span className='city'> {props.data.city}: {props.data.temp_f}&#176;F</span> with {props.data.weather} skies.
                <div className='time-container'>
                  <p>Sunrise: {sunrise}, Sunset: {sunset}, Current Time: {now}</p>
                </div>
              </article>
            </section>
            <section className='header-ext-btn'>
              <Link to={'/forecast/' + props.data.city}>View extended forecast>>></Link>
            </section>
          </div>
           : <h2 className='loading-msg'>Please be patient while we get your weather!</h2>}
      </div>
    </div>
  )
}

export default Header;
