const comparedSchools = (state = [], action) => {
  switch(action.type) {

    case 'SELECT_COMPARE':
      return [...state, ...action.comparedSchool];

    case 'REMOVE_COMPARE':
      for (let i = 0; i < state.length; i++) {
        if (state[i].dps_school_code === action.id) {
          return state.filter(school => school.dps_school_code !== action.id);
        }
      };


    default:
      return state;
  }
}

export default comparedSchools;
