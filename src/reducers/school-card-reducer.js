const favorites = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
    return [...state, action.id];
    case 'REMOVE_FAVORITE':
    // return state.filter(school => school.id !== action.id);
    default:
    return state;
  }
}

export default favorites;