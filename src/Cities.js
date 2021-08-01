import React from 'react';
import axios from 'axios';
import Weather from './Weather.js';
import Form from 'react-bootstrap/Form'

class Cities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderLatLong: false,
      renderError: false,
      displayMap: false,
      displayWx: false,
      city: '',
      errorMessage: '',
      lat: 0,
      long: 0,
      weather: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value,
      renderLatLong: false,
    })
  }

  getWxInfo = async () => {
    try {
      let weatherResults = await axios.get(`http://localhost:3001/weather?city=${this.state.city}`);
      this.setState({
        weather: weatherResults.data,
      });
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `An Error Occurred: ${error.response.status}, ${error.response.data.error}`,
        displayWx: false,
        displayMap: false,
        renderLatLong: false,
      });
    }
  }

  getCityInfo = async (e) => {
    e.preventDefault();
    try {
      let cityResults = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);

      this.setState({
        renderLatLong: true,
        displayMap: true,
        lat: cityResults.data[0].lat,
        long: cityResults.data[0].lon,
        renderError: false,
        displayWx: true,
      });
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `An Error Occurred: ${error.response.status}, ${error.response.data.error}`,
        renderLatLong: false,
      })
    };
    this.getWxInfo();
  }

  render() {
    let imgSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.long}&zoom=13`;
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.getCityInfo}>
          <input onChange={this.handleChange} />
          <button>Explore!</button>
        </form>

        {this.state.renderLatLong ? <h3>City: {this.state.city}: lat: {this.state.lat}, long: {this.state.long}</h3> : ''}
        {this.state.renderError ? <h2>{this.state.errorMessage}</h2> : ''}
        {this.state.displayMap ? <img src={imgSrc} alt={this.state.city} /> : ''}
        {this.state.displayWx ?
          <Weather
            weather={this.state.weather}
          />
          : ''}
      </>
    );
  }
}


export default Cities;
