const filters = (state = [], action) => {

  switch (action.type) {
    case 'SET_SCHOOLS':
      let allSchools = [...state.schools, ...action.schoolResults]
      console.log('Data coming in: ', action.schoolResults)
      console.log('state: ', state.schools)
      console.log('ALL SCHOOLS: ', allSchools)
      return Object.assign({}, state, {schools: allSchools})

    case 'SET_HOME_ADDRESS':
        return Object.assign({}, state, {homeAddress: action.homeAddress})

    case 'SET_DIRECTIONS':
        return Object.assign({}, state, {directions: action.directions})

    case 'TOGGLE_INFOWINDOW':
      let updatedSchools = state.schools.map(school => {
        // console.log('target ', action.targetMarker.position.lat)
        // console.log('school ', school.Location.Lat)
        if (school.Location.Lat === action.targetMarker.position.lat) {
          let toggle = !school.showInfo
          console.log('Working!')
          return Object.assign({}, school, { showInfo: toggle })
        }
        return school
      })
      return Object.assign({}, state, {schools: updatedSchools })

    case 'ACTIVE_SEARCH':
      let toggleValue = !state.activeSearch
      console.log(toggleValue)
      return Object.assign({}, state, {activeSearch: toggleValue })

    default:
      return state;
  }
}

export default filters;
