import React from 'react';
import axios from 'axios';

class Cities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      renderLatLong: false,
      lat: 0,
      long: 0,
      renderError: false,
      errorMessage: '',
    }
  }

  handleChange = (e) => {
    this.setState({ 
      city: e.target.value,
      renderLatLong: false,
     })
  }

  getCityInfo = async (e) => {
    e.preventDefault();
    try {
      let cityResults = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);
      this.setState({
        renderLatLong: true,
        lat: cityResults.data[0].lat,
        long: cityResults.data[0].lon,
        city: cityResults.data[0].display_name,
        renderError: false,
      });
    } catch (error) {
      this.setState({
        renderError: true,
        errorMessage: `An Error Occurred: ${error.response.status}, ${error.response.data.error}`,
        renderLatLong: false,
      })
    }
  }

  render() {

    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.getCityInfo}>
          <input onChange={this.handleChange} />
          <button>Explore!</button>
        </form>

        {this.state.renderLatLong ? <h3>City: {this.state.city}: lat: {this.state.lat}, long: {this.state.long}</h3> : ''}
        {this.state.renderError ? <h2>{this.state.errorMessage}</h2> : ''}
      </>
    );
  }
}


export default Cities;
