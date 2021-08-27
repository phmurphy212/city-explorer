import React from 'react';
import './Weather.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card';

class WeatherDay extends React.Component {
  render() {
    console.log(`${this.props.city.time}`)
    return (
      <>
        <Card>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item
                variant="light">
                {this.props.city.time}
              </ListGroup.Item>
              <ListGroup.Item
                variant="light">
                {this.props.city.high_temp}
              </ListGroup.Item>
              <ListGroup.Item
                variant="light">
                {this.props.city.low_temp}
              </ListGroup.Item>
              <ListGroup.Item
                variant="light">
                {this.props.city.description}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default WeatherDay;
