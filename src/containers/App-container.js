import { connect } from 'react-redux';
import App from '../components/App'
import { signIn } from '../firebase.js';
import { signInHandler } from '../actions'

const mapStateToProps = (state) => {
  return {
    data: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signInHandler: () => {
      signIn().then((user) => {
        dispatch(signInHandler(user))
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
