import React from 'react';
import Cities from './Cities.js';
// import axios from 'axios';
import './App.css';

class App extends React.Component {

  render() {
    console.log(this.state)
    return (
      <Cities />
    )
  }
}

export default App;
