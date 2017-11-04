import { connect } from 'react-redux';
import Profile from '../components/UserProfile/index';
import { getUserFavorites } from '../actions';

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserFavorites: (id) => {
      dispatch(getUserFavorites(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
