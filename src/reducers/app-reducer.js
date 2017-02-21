const app = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_LOCATION':
      return action.data;

    case 'FETCH_SUN':
      return Object.assign({...state}, action.time);

    case 'FETCH_WEATHER':
      return Object.assign({...state}, action.location);

    case 'APP_RECEIVE_EXTENDED':
      return Object.assign({}, state, {extForecast: action.forecastData});

    default:
      return state
  }
}

export default app;
