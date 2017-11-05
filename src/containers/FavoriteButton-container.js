import { connect } from 'react-redux';
import favoriteButton from '../components/FavoriteButton';
import { makeFavorite } from '../actions';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeFavorite: (userId, schoolData) => {
      dispatch(makeFavorite(userId, schoolData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(favoriteButton);
