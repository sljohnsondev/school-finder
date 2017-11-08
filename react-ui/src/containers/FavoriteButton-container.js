import { connect } from 'react-redux';
import favoriteButton from '../components/FavoriteButton';
import { makeFavorite, deleteFavorite } from '../actions';

const mapStateToProps = state => (
  {
    favorites: state.Favorites,
  }
);

const mapDispatchToProps = dispatch => (
  {
    makeFavorite: (schoolData) => {
      dispatch(makeFavorite(schoolData));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(favoriteButton);
