import React from 'react';
import './Weather.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

class WeatherDay extends React.Component {
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
          </Card>
        )
        }
      </>
    )
  }
}

export default WeatherDay;
