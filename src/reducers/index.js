import { combineReducers } from 'redux';
import FilterResults from './filters-reducer';
import AppData from './app-reducer';
import Favorites from './school-card-reducer';

const rootReducer = combineReducers({
  FilterResults,
  AppData,
  Favorites
})

export default rootReducer;
