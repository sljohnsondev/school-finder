import { connect } from 'react-redux';
import App from '../components/App'
import { fetchLocation, fetchSun, fetchWeather, receiveForecast, receiveExtForecastApp } from '../actions'

const mapStateToProps = (state) => {
  return {
    data: state.latLongSun
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLocation: (data) => {
      dispatch(fetchLocation(data))
    },
    fetchSun: (data) => {
      dispatch(fetchSun(data))
    },
    fetchWeather: (data) => {
      dispatch(fetchWeather(data))
    },
    receiveForecast: (data) => {
      dispatch(receiveForecast(data))
    },
    receiveExtForecastApp: (data, city) => {
      dispatch(receiveExtForecastApp(data, city))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
