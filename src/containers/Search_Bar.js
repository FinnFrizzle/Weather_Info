import React, {Component} from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: "", countryCode: "DK"};

    this.onInputChange1 = this.onInputChange1.bind(this);
    this.onInputChange2 = this.onInputChange2.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange1(event) {
    this.setState({term: event.target.value});
  }
  onInputChange2(event) {
    this.setState({countryCode: event.target.value});
  }


  onFormSubmit(event) {
    // Prevent browser from reloading on submit
    event.preventDefault();

    // Fetch data
    this.props.fetchWeather(this.state.term, this.state.countryCode);
    this.setState({term: ''});                 // clear input-field


  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Choose city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange1} />

          <input
            placeholder="Choose countrycode"
            className="form-control"
            value={this.state.countryCode}
            onChange={this.onInputChange2} />

        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Submit </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps) (SearchBar)
