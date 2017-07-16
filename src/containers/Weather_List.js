import React, {Component} from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(tempArray => tempArray.main.temp);
    const pressure = cityData.list.map(presArray => presArray.main.pressure);
    const humidity = cityData.list.map(humArray => humArray.main.humidity);
    const height = 100
    const width = 180;

    return (
      <tr key={name}>
        <td>
          {name}
        </td>

        <td>
          <Sparklines height={height} width={width} data={temps}>
            <SparklinesLine color="green" />
          </Sparklines>
        </td>

        <td>
          <Sparklines height={height} width={width} data={pressure}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>

        <td>
          <Sparklines height={height} width={width} data={humidity}>
            <SparklinesLine color="green" />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render() {
    // &nbsp; (blankline) is to make the temp, pressure and humidity same size
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature </th>
            <th> Pressure &nbsp; &nbsp; &nbsp; </th>
            <th> Humidity &nbsp; &nbsp; &nbsp; </th>
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
