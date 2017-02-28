const filters = (state = [], action) => {



  switch (action.type) {
    case 'SET_SCHOOLS':
      return Object.assign({}, state, {schools: action.schoolResults})

    case 'SET_HOME_ADDRESS':
        return Object.assign({}, state, {homeAddress: action.homeAddress})
    //
    // case 'REMOVE_PIN':
    //   const indexNum = action.pinID;
    //   return [...state.slice(0, indexNum), ...state.slice(indexNum + 1)]

    default:
      return state;
  }
}

export default filters;
