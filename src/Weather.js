import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
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
              </ListGroup>
            </Card.Body>
          </Card>
        )
        };
      </>
    )
  }
}

export default Weather;

