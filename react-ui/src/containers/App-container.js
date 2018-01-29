/* eslint-disable no-alert, import/extensions */
import { connect } from 'react-redux';
import App from '../components/App';
import { signIn } from '../firebase.js';
import { signInHandler } from '../actions';

const visitor = { user: { uid: "12345", displayName: "Visitor" } };

const mapStateToProps = state => (
  {
    data: state,
  }
);

const mapDispatchToProps = dispatch => (
  {
    signInHandler: (toggleTab, visitorAuth) => {
      if (visitorAuth) {
        signIn().then((user) => {
          toggleTab('filters');
          dispatch(signInHandler(user));
        });
      } else {
        toggleTab('filters');
        dispatch(signInHandler(visitor));
      }
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
