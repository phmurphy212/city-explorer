import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Movies extends React.Component {
  render() {
    return (
      <>
        <Carousel variant="dark">
          {this.props.movie.map((item, index) => item.src ?
            <Carousel.Item key={index}>
              <img
                key={index}
                src={item.src}
                alt={item.alt}
              />
            </Carousel.Item>
            : '')
          }
        </Carousel>
      </>
    )
  }
}
export default Movies;
