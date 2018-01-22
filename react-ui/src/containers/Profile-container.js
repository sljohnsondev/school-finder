import { connect } from 'react-redux';
import Profile from '../components/UserProfile/index.jsx';
import { getUser, getPopulation } from '../actions';

const mapStateToProps = state => (
  {
    user: state.CurrentUser,
    favorites: state.Favorites,
    comparedSchools: state.ComparedSchools
  }
);

const mapDispatchToProps = dispatch => ({
  getUser: (id, userInfo) => {
    dispatch(getUser(id, userInfo))
  },
  getPopulation: schoolId => {
    dispatch(getPopulation(schoolId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
