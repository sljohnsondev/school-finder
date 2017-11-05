const favorites = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
    if ( !state.includes( action.id ) ) {
      return [...state, action.id];
    } else {
      return state.filter( id => id !== action.id)
    }
    default:
    return state;
  }
}

export default favorites;