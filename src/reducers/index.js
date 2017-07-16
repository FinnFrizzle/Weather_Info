import { combineReducers } from 'redux';
import WeatherReducer from './Reducer_Weather.js'

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
