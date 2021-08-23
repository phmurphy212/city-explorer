import React from 'react';
import './Weather.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

class WeatherDay extends React.Component {
  render() {
    return (
      <>
          <Card
            className="weather"
            key={this.props.index} >
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item
                  key={this.props.index}
                  variant="light">
                  {city.description}
                </ListGroup.Item>
                <ListGroup.Item
                  key={this.props.index}
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
