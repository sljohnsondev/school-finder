import { connect } from 'react-redux';
import Profile from '../components/Profile';
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
