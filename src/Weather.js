import React from 'react';
import axios from 'axios';
import Cities from './Cities';


class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: [],
      errorMessage: '',
      // displayWx: false,
      // renderError: false,
    }
  }
  getWxInfo = async (e) => {
    try {
      let weatherResults = await axios.get(`http://localhost:3001/weather?city=${this.props.city}`);
      console.log(weatherResults);
      this.setState({
        weather: weatherResults,
        displayWx: true,
      });
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `An Error Occurred: ${error.response.status}, ${error.response.data.error}`,
        displayWx: false,
      });
    }
  }
  render() {
    console.log(this.state.weather);
    return (
      <>
        {this.displayWx ? this.state.weather.map((city, index) => <h3 key={index}>{city.name}</h3>)
          : ''}
        <Cities 
          weather={this.state.weather}
        />
      </>
    )
  }
}
export default Weather;
