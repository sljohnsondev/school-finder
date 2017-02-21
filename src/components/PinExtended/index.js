import React, {Component} from 'react';
import { Link } from 'react-router';
import './pinextended-style.css';

export default class PinExtended extends Component {

  getData() {
    if (this.props.params.city === this.props.latLongSun.city) {
      return this.props.latLongSun
    } else {
      return this.props.PinForecastData.find(data => {
        return data.city === this.props.params.city;
      })
    }
  }

  render() {
    let data = this.getData();
    let extendedForecast = data.extForecast.map((day, index) => {
      return (
        <div key={index}>
          <section className='ext-card'>
            <section className='ext-overview'>
              <h3 className='ext-dayTitle'>{day.day}, {day.month} {day.date}</h3>
              <article className='ext-icon'>
                <img src={day.conditions_icon_url} alt="icon of moon"/>
                <p>{day.conditions}</p>
              </article>
              <h4>Overview: {day.text}</h4>
            </section>
            <section className='ext-snow'>
              <h4>Temp</h4>
              <ul>
                <li> High: {day.high[0].f} &deg;F / {day.high[0].c} &deg;C</li>
                <li> Low: {day.low[0].f} &deg;F / {day.low[0].c} &deg;C</li>
              </ul>
            </section>
            <section className='ext-rain'>
              <h4>Percipitation</h4>
              <p>Total {day.percip_allday[0].in} in / {day.percip_allday[0].mm} mm</p>
              <ul>
                <li>Day: {day.percip_day[0].in} in / {day.percip_day[0].mm} mm</li>
                <li>Night: {day.percip_night[0].in} in / {day.percip_night[0].mm} mm</li>
              </ul>
            </section>
            <section className='ext-snow'>
              <h4>Snow</h4>
              <p>Total {day.snow_allday[0].in} in / {day.snow_allday[0].cm} cm</p>
              <ul>
                <li>Day: {day.snow_day[0].in} in / {day.snow_day[0].cm} cm</li>
                <li>Night: {day.snow_night[0].in} in / {day.snow_night[0].cm} cm</li>
              </ul>
            </section>
            <h4>Average Humidity: {day.avehumidity}</h4>
          </section>
        </div>
      )
    })
    return (
      <div>
        <section className='ext-header'>
          <h2>{data.city}</h2>
        </section>
        <section className='ext-container'>
          {extendedForecast}
        </section>
        <button className='edit-btn'><Link to='/'>Back To Homepage</Link></button>
        <button className='edit-btn'><Link to='/settings'>Edit Pinned Cities</Link></button>
      </div>
    )
  }
}
