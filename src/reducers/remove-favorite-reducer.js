const removeFavorite = (state = [], action) => {
  switch(action.type) {
    case 'REMOVE_FAVORITE':
    console.log('action in remove fav action ', action);
    
    for (let i = 0; i < state.length; i++) {
      if ( state[i].school_code === action.id ) {
        
    }
      return [...state, ...action.SchoolData];
  }
    default:
    return state;
  }
}

export default removeFavorite;