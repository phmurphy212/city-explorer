import React from 'react';
import Cities from './Cities.js';
import Header from './Header.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Cities /> 
      </>
    )
  }
}

export default App;
