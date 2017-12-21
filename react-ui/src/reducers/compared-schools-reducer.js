// const intialState = {
//   data: []
// }

const comparedSchools = (state = [], action) => {
  switch(action.type) {
    case 'SELECT_COMPARE':
      console.log('ADD COMPARE ', state)
      return state.concat(action.comparedSchool);

    case 'REMOVE_COMPARE':
      console.log('REMOVE COMPARE ', state)
      return state.filter(school => school.id !== action.schoolId);


    default:
      return state;
  }
}

export default comparedSchools;
