import React from 'react';
import WeatherDay from './WeatherDay';
import './Weather.css';

class Weather extends React.Component {
  render() {
    console.log(`${this.props.weather.high_temp}`);
    return (
      <>
        {this.props.weather.map((city, index) =>
          <WeatherDay 
          city={city} />
        )
        }
      </>
    )
  }
}

export default Weather;

