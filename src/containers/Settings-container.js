import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { receiveForecast, removePin } from '../actions';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveForecast: (data) => {
      dispatch(receiveForecast(data))
    },
    removePin: (data) => {
      dispatch(removePin(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
