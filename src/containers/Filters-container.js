import { connect } from 'react-redux';
import { setSchools, setHomeAddress, setDirections, toggleInfoWindow, activeSearchToggle } from '../actions';

const mapStateToProps = (state) => {
  return {
    schoolResults: state.FilterResults,
    activeSearch: state.FilterResults.activeSearch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSchools: (schoolResults, commuteTime, commuteDistance) => {
      dispatch(setSchools(schoolResults, commuteTime, commuteDistance))
    },
    setHomeAddress: (homeAddress) => {
      dispatch(setHomeAddress(homeAddress))
    },
    setDirections: (directions) => {
      dispatch(setDirections(directions))
    },
    toggleInfoWindow: (marker) => {
      dispatch(toggleInfoWindow(marker))
    },
    activeSearchToggle: () => {
      dispatch(activeSearchToggle())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps);
