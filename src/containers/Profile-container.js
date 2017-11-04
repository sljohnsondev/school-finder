import { connect } from 'react-redux';
import Profile from '../components/UserProfile/index';
import { getAllUsers, createUser, getUserFavorites } from '../actions';

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => {
      dispatch(getAllUsers())
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
