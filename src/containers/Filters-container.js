import { connect } from 'react-redux';
import Filters from '../components/Filters';
// import { TBD } from '../actions';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    // receiveForecast: (data) => {
    //   dispatch(receiveForecast(data))
    // },
    // removePin: (data) => {
    //   dispatch(removePin(data))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
