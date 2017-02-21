import { connect } from 'react-redux';
import App from '../components/App'
// import { TBD } from '../actions'

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchLocation: (data) => {
    //   dispatch(fetchLocation(data))
    // },
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
