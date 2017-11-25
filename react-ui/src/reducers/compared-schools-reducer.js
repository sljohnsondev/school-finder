const compare = (state = [], action) => {
  switch(action.type) {
    // case 'POPULATION':
    //   return [...state, ...action.schoolPopulation]
    case 'SELECT_COMPARE':
      return [...state, ...action.comparedSchool]

    default:
    return state;
  }
}

export default compare;
