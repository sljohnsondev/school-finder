const filters = (state = [], action) => {
  switch (action.type) {
    case 'SET_SCHOOLS':
      return action.schoolResults;

    // case 'RECEIVE_EXTENDED':
    //   return state.map(city => {
    //     if (city.fullName !== action.fullName) {
    //       return city
    //     }
    //     return Object.assign({}, city, {extForecast: action.forecastData})
    //   })
    //
    // case 'REMOVE_PIN':
    //   const indexNum = action.pinID;
    //   return [...state.slice(0, indexNum), ...state.slice(indexNum + 1)]

    default:
      return state;
  }
}

export default filters;
