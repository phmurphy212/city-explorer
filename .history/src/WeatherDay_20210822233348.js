import React from 'react';
import './Weather.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from  'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
    const city = this.props;
    return (
      <>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item
                  variant="light">
                  {city.description}
                </ListGroup.Item>
                <ListGroup.Item
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
