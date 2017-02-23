import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { setSchools } from '../actions';

const mapStateToProps = (state) => {
  return {
    schoolResults: state.FilterResults,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSchools: (schoolResults) => {
      dispatch(setSchools(schoolResults))
    },
  // receiveForecast: (data) => {
    //   dispatch(receiveForecast(data))
    // },
    // removePin: (data) => {
    //   dispatch(removePin(data))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
