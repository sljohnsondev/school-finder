const favorites = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
    
      return [...state, ...action.SchoolData];

    case 'REMOVE_FAVORITE':
      
      for (let i = 0; i < state.length; i++) {
        
        if ( state[i].school_code === action.id ) {
          return state.filter( school => school.school_code !== action.id)
      }
    }
    
    default:
    return state;
  }
}

export default favorites;