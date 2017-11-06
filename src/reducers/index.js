import { combineReducers } from 'redux';
import FilterResults from './filters-reducer';
import AppData from './app-reducer';
import CurrentUser from './profile-reducer';
import Favorites from './favorite-button-reducer';

const rootReducer = combineReducers({
  FilterResults,
  AppData,
  CurrentUser,
  Favorites
})

export default rootReducer;
