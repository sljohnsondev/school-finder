const settings = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return [...state, action.forecastData]

    case 'RECEIVE_EXTENDED':
      return state.map(city => {
        if (city.fullName !== action.fullName) {
          return city
        }
        return Object.assign({}, city, {extForecast: action.forecastData})
      })

    case 'REMOVE_PIN':
      const indexNum = action.pinID;
      return [...state.slice(0, indexNum), ...state.slice(indexNum + 1)]

    default:
      return state;
  }
}

export default settings;
