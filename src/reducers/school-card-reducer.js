const favs = [1, 2, 3, 4]
const favorites = (state = favs, action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
    if ( !state.includes( action.id ) ) {
      return [...state, action.id];
    }
    return state;
    case 'REMOVE_FAVORITE':
    return state.filter(school => school !== action.id);
    default:
    return state;
  }
}

export default favorites;