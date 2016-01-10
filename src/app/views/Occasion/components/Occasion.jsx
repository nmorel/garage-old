import React from 'react';
import Container from '../../../components/Container';

/**
 * Page affichant le détail d'une occasion
 */
export default class extends React.Component {
  constructor(props) {
    super(props);

    const cars = require('data/cars');

    this.state = {
      car: cars.find(car => car.id === props.params.uid)
    };
  }

  render() {
    return (
      <Container>
        <div>Toto</div>
        <div>{this.state.car.model}</div>
        <img src={this.state.car.photos[0]} />
      </Container>
    );
  }
}
