import React from 'react';
import './Weather.css';
import ListGroup from 'react-bootstrap/ListGroup'

class WeatherDay extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <>
          <Card>
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
      </>
    )
  }
}

export default WeatherDay;
