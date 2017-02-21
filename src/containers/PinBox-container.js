import { connect } from 'react-redux';
import { receiveForecast, receiveExtForecast } from '../actions';

import PinBox from '../components/PinBox'

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveForecast: (data) => {
      dispatch(receiveForecast(data))
    },
    receiveExtForecast: (data, city) => {
      dispatch(receiveExtForecast(data, city))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PinBox)
