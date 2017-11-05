import { connect } from 'react-redux';
import { setSchools, clearSchools, setHomeAddress, setDirections, clearDirections, toggleInfoWindow, activeSearchToggle, makeFavorite } from '../actions';

const mapStateToProps = (state) => {
  return {
    schoolResults: state.FilterResults,
    activeSearch: state.FilterResults.activeSearch,
    CurrentUser: state.CurrentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSchools: (schoolResults, commuteTime, commuteDistance) => {
      dispatch(setSchools(schoolResults, commuteTime, commuteDistance))
    },
    clearSchools: () => {
      dispatch(clearSchools())
    },
    setHomeAddress: (homeAddress) => {
      dispatch(setHomeAddress(homeAddress))
    },
    setDirections: (directions) => {
      dispatch(setDirections(directions))
    },
    clearDirections: () => {
      dispatch(clearDirections())
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
