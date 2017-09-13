const filters = (state = [], action) => {

  switch (action.type) {
    case 'SET_SCHOOLS':
      return Object.assign({}, state, {schools: action.schoolResults})

    case 'SET_HOME_ADDRESS':
        return Object.assign({}, state, {homeAddress: action.homeAddress})

    case 'SET_DIRECTIONS':
        return Object.assign({}, state, {directions: action.directions})

    case 'TOGGLE_INFOWINDOW':
      let updatedSchools = state.schools.map(school => {
        // console.log('target ', action.targetMarker.position.lat)
        // console.log('school ', school.Location.Lat)
        if (school.Location.Lat === action.targetMarker.position.lat) {
          let toggle = school.showInfo
          console.log('Working!')
          return Object.assign({}, school, { showInfo: !toggle })
        }
        return school
      })
      return Object.assign({}, state, {schools: updatedSchools})

    default:
      return state;
  }
}

export default filters;
