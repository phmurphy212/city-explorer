import React from 'react';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Location.css';

class Location extends React.Component {
  render() {
    return (
      <>
        <Table className="city" striped bordered hover size="sm" variant="dark">
          <tbody>
            <tr>
              <td>City</td>
              <td>{this.props.city}</td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>{this.props.lat}</td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>{this.props.long}</td>
            </tr>
          </tbody>
        </Table>
      </>
    )
  }
}
export default Location;
