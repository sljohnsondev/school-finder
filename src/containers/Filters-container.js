import { connect } from 'react-redux';
import Filters from '../components/Filters';
import { setSchools, setHomeAddress, setDirections } from '../actions';

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
    setHomeAddress: (homeAddress) => {
      dispatch(setHomeAddress(homeAddress))
    },
    setDirections: (directions) => {
      dispatch(setDirections(directions))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
