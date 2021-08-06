import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'  
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Weather from './Weather.js';
import './Cities.css';

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
      let weatherResults = await axios.get(`http://localhost:3001/weather?lat=${this.state.lat}&lon=${this.state.long}`);
      this.setState({
        weather: weatherResults.data,
      });
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `An Error Occurred: ${error.response.status}, ${error.response.data.error}`,
        displayWx: false,
        displayMap: false,
        renderLatLong: false,
      });
    }
  }

  getMovieInfo = async () => {
    try {
    let movieResults = await axios.get(`http://localhost:3001/movies?query=${this.state.weather.data.data.city}`);
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
        errorMessage: `An Error Occurred: ${error.response.status}, ${error.response.data.error}`,
        renderLatLong: false,
      })
    };
    this.getWxInfo();
    this.getMovieInfo();
  }



  render() {
    console.log(this.state.movie);
    let imgSrc = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.long}&zoom=13`;
    
    let movieSrc = `https://image.tmdb.org/t/p/w500${this.state.movie.src}`;

    return (
      <Container className="cities">
          <h1>City Explorer</h1>
          <Form inline>
          <Form.Label>City: </Form.Label>
          <Form.Control as="input" onChange={this.handleChange} placeholder="Seattle, Paris, or Amman " />
          <Button 
            type="submit"
            onClick={this.getCityInfo}
          > Explore! </Button>
          </Form>
            {this.state.renderLatLong ? <h3>City: {this.state.city}: lat: {this.state.lat}, long: {this.state.long}</h3> : ''}


            {this.state.renderError ? <h2>{this.state.errorMessage}</h2> : ''}


            {this.state.displayMap ? <img src={imgSrc} alt={this.state.city} /> : ''}


            {this.state.displayMovie ? <img src={movieSrc} alt={this.state.movie.data.alt} /> : ''}
            
            {this.state.displayWx ?
            <Weather
              weather={this.state.weather}
            />
            : ''}
      </Container>
    );
  }
}


export default Cities;
