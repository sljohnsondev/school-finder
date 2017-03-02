export const signInHandler = (user) => {
  return {
    type: 'SIGN_IN',
    user
  }
}

export const setSchools = (schoolResults) => {
  return {
    type: 'SET_SCHOOLS',
    schoolResults
  }
}

export const setHomeAddress = (homeAddress) => {
  return {
    type: 'SET_HOME_ADDRESS',
    homeAddress
  }
}

export const setDirections = (directions) => {
  return {
    type: 'SET_DIRECTIONS',
    directions
  }
}
//
// export const receiveExtForecast = (forecastData, fullName) => {
//   return {
//     type: 'RECEIVE_EXTENDED',
//     forecastData,
//     fullName
//   }
// }
// export const receiveExtForecastApp = (forecastData, fullName) => {
//   return {
//     type: 'APP_RECEIVE_EXTENDED',
//     forecastData,
//     fullName
//   }
// }
//
// export const fetchLocation = (data) => {
//   return {
//     type: 'FETCH_LOCATION',
//     data
//   }
// }
//
// export const fetchSun = (time) => {
//   return {
//     type: 'FETCH_SUN',
//     time
//   }
// }
//
// export const fetchWeather = (location) => {
//   return {
//     type: 'FETCH_WEATHER',
//     location
//   }
// }
//
// export const removePin = (pinID) => {
//   return {
//     type: 'REMOVE_PIN',
//     pinID
//   }
// }
