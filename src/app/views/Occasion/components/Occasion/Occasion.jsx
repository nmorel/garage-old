import React from 'react';
import styles from './Occasion.scss';
import formatter from 'app/services/formatter';

/**
 * Page affichant le détail d'une occasion
 */
export default class extends React.Component {
  constructor(props) {
    super(props);

    const cars = require('data/cars');

    this.state = {
      car: cars.find(car => car.id.toString() === props.params.uid)
    };
  }

  render() {
    const car = this.state.car;

    var options;
    if (car.options && car.options.length) {
      options = <li>Options: {car.options.join(', ')}</li>
    }

    var observations;
    if (car.observations && car.observations.length) {
      observations = <li>Observations: {car.observations}</li>
    }

    var photos;
    if (car.photos && car.photos.length) {
      photos = car.photos.slice(0, 5).map((photo, index) => {
        if (index === 0) {
          return <img className={styles.mainImage} src={photo.large}
                      alt={photo.name}/>;
        } else {
          return <img className={styles.smallImage} src={photo.small}
                      alt={photo.name}/>;
        }
      });
      if (car.photos.length > 5) {
        const nbAddPhotos = car.photos.length - 5;
        const message = nbAddPhotos === 1 ? ' photo supplémentaire' : ' photos supplémentaires';
        photos.push((
          <div className={styles.additionnalPhotos}>
            <a>{nbAddPhotos + message}</a>
          </div>
        ));
      }
    }

    return (
      <div className="container">
        <h2 className={styles.title}>{car.make + ' ' + car.model}</h2>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Marque: {car.make}</li>
              <li>Modèle: {car.model}</li>
              <li>Année: {car.year}</li>
              <li>Kilométrage: {formatter.formatMileage(car.mileage)}</li>
              <li>Prix: {formatter.formatPrice(car.price)}</li>
              <li>Boite de vitesses: {car.transmission}</li>
              <li>Carburant: {car.fuelType}</li>
              <li>Puissance: {car.power}</li>
              {options}
              {observations}
            </ul>
          </div>
          <div className="col-md-6">
            {photos}
          </div>
        </div>
      </div>
    );
  }
}
