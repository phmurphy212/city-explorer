import React from 'react';
import WeatherDay from './WeatherDay';
import './Weather.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weather.map((city, index) =>
          <WeatherDay city={city} />
        )
        }
      </>
    )
  }
}

export default Weather;

