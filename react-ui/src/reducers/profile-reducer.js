const profile = (state = {}, action) => {
  switch (action.type) {

    case 'PUSH_USER':
      return Object.assign({}, ...action.user);

    case 'UPDATE_ADDRESS':
      return Object.assign(state, { street_address: action.address });

    default:
      return state
  }
}

export default profile;
