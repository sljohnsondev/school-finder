import { connect } from 'react-redux';
import Profile from '../components/UserProfile/index';
import { getUser, createUser, getUserFavorites } from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.CurrentUser,
    favorites: state.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => {
      dispatch(getUser(id))
    },
    createUser: (userInfo) => {
      dispatch(createUser(userInfo))
    },
    getUserFavorites: (id) => {
      dispatch(getUserFavorites(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
