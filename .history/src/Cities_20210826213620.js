import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Weather from './Weather.js';
import './Cities.css';
import Movies from './Movies.js';
import Location from './Location.js';


class Cities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderLatLong: false,
      renderError: false,
      displayMap: false,
      displayWx: false,
      displayMovie: false,
      city: '',
      errorMessage: '',
      lat: 0,
      long: 0,
      weather: [],
      movie: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      city: e.target.value,
      renderLatLong: false,
    })
  }

  getWxInfo = async () => {
    try {
      let weatherResults = await axios.get(`${REACT_APP_LOCAL_BACKEND}/weather?lat=${this.state.lat}&lon=${this.state.long}`);
      this.setState({
        weather: weatherResults.data,
      });
    } catch (error) {
      this.setState({
        renderError: true,
        // errorMessage: `An Error Occurred: ${error.response.status}, ${error.response.data.error}`,
        displayWx: false,
        displayMap: false,
        renderLatLong: false,
      });
    }
  }

  getMovieInfo = async () => {
    try {
      let movieResults = await axios.get(`${process.env.REACT_APP_DEPLOYED_BACKEND}/movies?search=${this.state.city}`);

      this.setState({
        movie: movieResults.data,
        displayMovie: true,
      })
    } catch (error) {
      this.setState({
        displayMovie: false,
      })
    }
  }
  getCityInfo = async (e) => {
    e.preventDefault();
    try {
      let cityResults = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);

      this.setState({
        renderLatLong: true,
        displayMap: true,
        lat: cityResults.data[0].lat,
        long: cityResults.data[0].lon,
        renderError: false,
        displayWx: true,
      });
    } catch (error) {
      this.setState({
        renderError: true,
        // errorMessage: `An Error Occurred: ${error.response.status}, ${error.response.data.error}`,
        renderLatLong: false,
      })
    };
    this.getWxInfo();
    this.getMovieInfo();
  }

  render() {
    console.log(this.state.weather);
    let imgSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.long}&zoom=13`;


    return (
      <Container className="cities">
        <Row>
            <Col>
            <Form>
              <Form.Label>City:</Form.Label>
              <Form.Control as="input" onChange={this.handleChange} placeholder="Search A City" />
              <Button
                variant="dark"
                type="submit"
                onClick={this.getCityInfo}
              > Explore! </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            {
              this.state.renderLatLong ?
                <Location
                  city={this.state.city}
                  lat={this.state.lat}
                  long={this.state.long}
                /> : ''
            }
            {
              this.state.displayWx ?
                <Weather
                  weather={this.state.weather}
                /> : ''
            }
          </Col>
          <Col>
          {
            this.state.displayMovie ?
              <Movies
                movie={this.state.movie}
              /> : ''
          }
            {
              this.state.displayMap ?
                <img src={imgSrc} alt={this.state.city} /> : ''
            }
          </Col>
        </Row>
        
        {
          this.state.renderError ?
            <h2>{this.state.errorMessage}</h2> : ''
        }
      </Container>
    );
  }
}


export default Cities;
