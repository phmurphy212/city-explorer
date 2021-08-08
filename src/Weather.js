import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weather.map((city, index) =>
          <Card
            key={index}
            variant="top"
            bg="grey">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item key={index}>
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

