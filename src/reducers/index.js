import { combineReducers } from 'redux';
import WeatherReducer from './Reducer_Weather.js'

const rootReducer = combineReducers({
  Weather: WeatherReducer
});

export default rootReducer;
