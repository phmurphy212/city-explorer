import React from 'react';
import Card from 'react-bootstrap/Card';
import WeatherDay from './WeatherDay';
import ListGroup from 'react-bootstrap/ListGroup';
import './Weather.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weather.map((item, index) =>
          <ListGroup
            className="weatherInfo"
            key={index}>
            <WeatherDay item={item} />
          </ListGroup>
        )}
      </>
    )
  }
}
export default Weather;

