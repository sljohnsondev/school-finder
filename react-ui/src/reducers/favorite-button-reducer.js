const favorites = (state = [], action) => {
  switch (action.type) {

    case 'ADD_FAVORITE':
      return state.concat(action.SchoolData);

    case 'REMOVE_FAVORITE':
      return state.filter(school => school.school_code !== action.id);

    default:
      return state;
  }
};

export default favorites;
