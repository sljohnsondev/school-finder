const profile = (state = [], action) => {
  switch (action.type) {

    case 'PUSH_USER':
      return action.user;

    default:
      return state
  }
}

export default profile;
