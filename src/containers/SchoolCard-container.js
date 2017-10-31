import { connect } from 'react-redux';
import SchoolCard from '../components/SchoolCard/SchoolCard';
import { addFavorite, removeFavorite } from '../actions';

const mapStateToProps = (state) => {
  return {
    favorites: state.FavoritedSchools
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

export default connect(mapStateToProps, mapDispatchToProps)(SchoolCard);
