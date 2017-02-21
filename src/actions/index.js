
export const receiveForecast = (forecastData) => {
  return {
    type: 'RECEIVE_FORECAST',
    forecastData
  }
}

export const receiveExtForecast = (forecastData, fullName) => {
  return {
    type: 'RECEIVE_EXTENDED',
    forecastData,
    fullName
  }
}
export const receiveExtForecastApp = (forecastData, fullName) => {
  return {
    type: 'APP_RECEIVE_EXTENDED',
    forecastData,
    fullName
  }
}

export const fetchLocation = (data) => {
  return {
    type: 'FETCH_LOCATION',
    data
  }
}

export const fetchSun = (time) => {
  return {
    type: 'FETCH_SUN',
    time
  }
}

export const fetchWeather = (location) => {
  return {
    type: 'FETCH_WEATHER',
    location
  }
}

export const removePin = (pinID) => {
  return {
    type: 'REMOVE_PIN',
    pinID
  }
}


// export const receiveForecast = (forecastData) => ({
//   // action object
// });
//
// export const fetchForecast = options => dispatch => {
//   // return fetch API call
// };

// const fetchLocationApi = () => {
// return (dispatch) => {
// api call
// from that response you'll dispatch(fetchLoaction(data))
//}
//}

// export const addPin = (text) => {
//   return {
//     type: 'ADD_PIN',
//     text
//   }
// }
