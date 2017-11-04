import { connect } from 'react-redux';
import favoriteButton from '../components/FavoriteButton/FavoriteButton';
import { addFavorite, removeFavorite } from '../actions';

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (id) => {
      dispatch(addFavorite(id))
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(favoriteButton);
