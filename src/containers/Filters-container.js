import { connect } from 'react-redux';
import { setSchools, setHomeAddress, setDirections, toggleInfoWindow } from '../actions';

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
    toggleInfoWindow: (marker) => {
      dispatch(toggleInfoWindow(marker))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
