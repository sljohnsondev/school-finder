import { combineReducers } from 'redux';
import PinForecastData from './settings-reducer'
import latLongSun from './app-reducer'

const rootReducer = combineReducers({
  PinForecastData,
  latLongSun
})

export default rootReducer;
