import React, {Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(tempArray => tempArray.main.temp);
    const pressure = cityData.list.map(presArray => presArray.main.pressure);
    const humidity = cityData.list.map(humArray => humArray.main.humidity);

    return (
      <tr key={name}>
        <td> {name} </td>
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
    // &nbsp; (temp fix - best with css ofc) (blankline) is to make the temp, pressure and humidity same size
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature (°C) </th>
            <th> Pressure (hPa) &nbsp; </th>
            <th> Humidity (%) &nbsp; &nbsp; &nbsp; </th>
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
