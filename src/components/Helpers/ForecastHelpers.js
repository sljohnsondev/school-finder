module.exports = {
  splitLocation(location) {
    let array = location.split(',');
    let city = array[0];
    let state = array[1].toString().split(' ').join('_');
    return `${state}/${city}`;
  },

  filterData(data) {
    return {
      city: data.current_observation.display_location.city,
      state: data.current_observation.display_location.state,
      fullName: data.current_observation.display_location.full,
      localTime: data.current_observation.local_time_rfc822,
      weather: data.current_observation.weather,
      temp_f: data.current_observation.temp_f,
      temp_c: data.current_observation.temp_c,
      humidity: data.current_observation.relative_humidity,
      wind_string: data.current_observation.wind_string,
      wind_dir: data.current_observation.wind_dir,
      wind_mph: data.current_observation.wind_mph,
      icon_url: data.current_observation.icon_url,
      extForecast: {}
    }
  },

  filterExtData(data) {
    return data.forecast.simpleforecast.forecastday.map((day, index) => {
      return {
        text: data.forecast.txt_forecast.forecastday[index].fcttext,
        day: day.date.weekday,
        month: day.date.monthname,
        date: day.date.day,
        year: day.date.year,
        high: [{f: day.high.fahrenheit, c: day.high.celsius}],
        low: [{f: day.low.fahrenheit, c: day.low.celsius}],
        conditions: day.conditions,
        conditions_icon_url: day.icon_url,
        percip_allday: [day.qpf_allday],
        percip_day: [day.qpf_day],
        percip_night: [day.qpf_night],
        snow_allday: [day.snow_allday],
        snow_day: [day.snow_day],
        snow_night: [day.snow_night],
        avehumidity: day.avehumidity
      }
    })
  }
}
