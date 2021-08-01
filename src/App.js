import React from 'react';
import Cities from './Cities.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'


class App extends React.Component {

  render() {
    return (
      <Container>
        <Cities />
      </Container>
    )
  }
}

export default App;
