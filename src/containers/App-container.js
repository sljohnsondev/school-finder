import { connect } from 'react-redux';
import App from '../components/App'
import { signIn } from '../firebase.js';
import { signInHandler } from '../actions'

const mapStateToProps = (state) => {
  return {
    data: state,
    markers: Object.assign([], state.FilterResults.schools, [state.FilterResults.homeAddress])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInHandler: () => {
      signIn().then((user) => {
        dispatch(signInHandler(user))
      });
    }
    // fetchSun: (data) => {
    //   dispatch(fetchSun(data))
    // },
    // fetchWeather: (data) => {
    //   dispatch(fetchWeather(data))
    // },
    // receiveForecast: (data) => {
    //   dispatch(receiveForecast(data))
    // },
    // receiveExtForecastApp: (data, city) => {
    //   dispatch(receiveExtForecastApp(data, city))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
