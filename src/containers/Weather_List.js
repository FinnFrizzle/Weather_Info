import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import googleMap from '../components/google_Maps.js';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(tempArray => tempArray.main.temp);
    const pressure = cityData.list.map(presArray => presArray.main.pressure);
    const humidity = cityData.list.map(humArray => humArray.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td> <googleMap lon={lon} lat={lat} /> </td>
        <td> <Chart
          data={temps.map(temp => temp - 273.15)}
          color="green"
          unit="(°C)" /></td>
        <td> <Chart data={pressure} color="red" unit="(hPa)" /></td>
        <td> <Chart data={humidity} color="blue" unit="(%)" /></td>
      </tr>
    )
  }

  render() {

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature (°C) </th>
            <th> Pressure (hPa)   </th>
            <th> Humidity (%)     </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {weather: state.weather}
}

export default connect(mapStateToProps) (WeatherList)
