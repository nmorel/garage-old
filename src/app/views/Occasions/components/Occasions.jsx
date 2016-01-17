import React from 'react';
import { Link } from 'react-router';
import Container from '../../../components/Container';

/**
 * Page des occasions
 */
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: require('data/cars')
    };
  }

  render() {
    const cars = this.state.cars.map(car => {
      const link = car.photos && car.photos.length ? (
        <img src={car.photos[0].small} alt={car.photos[0].name} />
      ) : car.make + ' - ' + car.model;

      return (
        <div>
          <Link to={'occasions/'+car.id}>{link}</Link>
        </div>
      );
    });

    return (
      <Container>
        <div>Liste des véhicules d'occasions</div>
        {cars}
        <div>
          <a href="" target="_blank">Autres véhicules également disponibles</a>
        </div>
      </Container>
    );
  }
}
