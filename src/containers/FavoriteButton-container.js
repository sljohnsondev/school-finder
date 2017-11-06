import { connect } from 'react-redux';
import favoriteButton from '../components/FavoriteButton';
import { makeFavorite, deleteFavorite } from '../actions';

const mapStateToProps = (state) => {
  return {
    favorites: state.Favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeFavorite: (schoolData) => {
      dispatch(makeFavorite(schoolData))
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(favoriteButton);
