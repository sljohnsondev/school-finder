import { combineReducers } from 'redux';
import FilterData from './filters-reducer'
import AppData from './app-reducer'

const rootReducer = combineReducers({
  FilterData,
  AppData
})

export default rootReducer;
