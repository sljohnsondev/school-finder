const comparedSchools = (state = [], action) => {
  switch(action.type) {

    case 'SELECT_COMPARE':
      return [...state, action.comparedSchool];

    case 'REMOVE_COMPARE':
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.schoolId) {
          return state.filter(school => school.id !== action.schoolId);
        }
      };


    default:
      return state;
  }
}

export default comparedSchools;
