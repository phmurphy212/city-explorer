import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from './WeatherDay';
import './Weather.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weather.map((city, index) =>
          <Card
            className="weather"
            key={index} >
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item
                  key={index}
                  variant="light">
                  {city.description}
                </ListGroup.Item>
                <ListGroup.Item
                  key={index}
                  variant="light">
                  {city.time}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <WeatherDay city={}
          </Card>
        )
        }
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

