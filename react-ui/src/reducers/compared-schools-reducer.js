const compare = (state = [], action) => {
  switch(action.type) {
    case 'POPULATION':
      return [...state, ...action.schoolPopulation]
    
    default:
    return state;
  }
}

export default compare;