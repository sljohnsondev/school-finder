import { connect } from 'react-redux';
import Profile from '../components/UserProfile/index';
import { getUser } from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.CurrentUser,
    favorites: state.Favorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id, userInfo) => {
      dispatch(getUser(id, userInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
