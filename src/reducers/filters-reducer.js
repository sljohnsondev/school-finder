const filters = (state = [], action) => {

  switch (action.type) {
    case 'SET_SCHOOLS':
      return Object.assign({}, state, {schools: action.schoolResults})

    case 'SET_HOME_ADDRESS':
        return Object.assign({}, state, {homeAddress: action.homeAddress})

    case 'SET_DIRECTIONS':
        return Object.assign({}, state, {directions: action.directions})

    default:
      return state;
  }
}

export default filters;
