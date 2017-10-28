import { combineReducers } from 'redux';
import FilterResults from './filters-reducer';
import AppData from './app-reducer';

const rootReducer = combineReducers({
  FilterResults,
  AppData
})

export default rootReducer;
