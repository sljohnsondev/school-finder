const app = (state = [], action) => {
  switch (action.type) {

    case 'SIGN_IN':
      return action.user.user;

    default:
      return state
  }
}

export default app;
