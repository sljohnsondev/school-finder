import { connect } from 'react-redux';
import favoriteButton from '../components/FavoriteButton/FavoriteButton';
import { addFavorite } from '../actions';

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (id) => {
      dispatch(addFavorite(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(favoriteButton);
