import { combineReducers } from 'redux';
import FilterResults from './filters-reducer';
import AppData from './app-reducer';
import SchoolCard from './school-card-reducer';

const rootReducer = combineReducers({
  FilterResults,
  AppData,
  SchoolCard
})

export default rootReducer;
