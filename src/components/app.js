import React, { Component } from 'react';
import SearchBar from '../containers/Search_Bar.js'
import WeatherList from '../containers/weather_List.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
