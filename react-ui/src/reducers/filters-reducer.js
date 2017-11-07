import filterResults from '../components/Helpers/filterResults';

const filters = (state = [], action) => {
  switch (action.type) {
    case 'SET_SCHOOLS': {
      const allSchools = [...state.schools, ...action.schoolResults];
      const filteredSchools = filterResults(allSchools, action.commuteTime, action.commuteDistance);
      return Object.assign({}, state, { schools: filteredSchools });
    }
    case 'CLEAR_SCHOOLS':
      return Object.assign({}, state, { schools: [] });

    case 'SET_HOME_ADDRESS':
      return Object.assign({}, state, { homeAddress: action.homeAddress });

    case 'SET_DIRECTIONS':
      return Object.assign({}, state, { directions: action.directions });

    case 'CLEAR_DIRECTIONS':
      return Object.assign({}, state, { directions: null });

    case 'TOGGLE_INFOWINDOW': {
      const updatedSchools = state.schools.map((school) => {
        if (school.Location.location_lat === action.targetMarker.position.lat) {
          const toggle = !school.showInfo;
          return Object.assign({}, school, { showInfo: toggle });
        }
        return school;
      });
      return Object.assign({}, state, { schools: updatedSchools });
    }
    case 'ACTIVE_SEARCH': {
      const toggleValue = !state.activeSearch;
      return Object.assign({}, state, { activeSearch: toggleValue });
    }
    default:
      return state;
  }
};

export default filters;
