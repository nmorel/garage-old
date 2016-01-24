import React from 'react';
import { Link } from 'react-router';
import styles from './Car.scss';
import formatter from 'app/services/formatter';

/**
 * Vignette voiture
 */
export default class extends React.Component {
  render() {
    var image;
    if (this.props.car.photos && this.props.car.photos.length) {
      image = <img className={styles.image} src={this.props.car.photos[0].medium} alt={this.props.car.photos[0].name}/>;
    } else {
      image = <div className={styles.noImage}>Pas de photo</div>;
    }

    return (
      <div className={styles.container + ' col-sm-6 col-md-4 col-lg-3'}>
        <Link to={'occasions/' + this.props.car.id}>
          <div className={styles.imageContainer}>
            <div className={styles.hoverCar}>
              <span className="icon-zoom-in" style={{marginRight: 3}}/>
              Voir la fiche
            </div>
            {image}
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.title}>
              {this.props.car.make + ' ' + this.props.car.model}
            </div>
            <div className={styles.price}>
              {formatter.formatPrice(this.props.car.price)}
            </div>
            <div className={styles.mileage}>
              {formatter.formatMileage(this.props.car.mileage) + ' - ' + this.props.car.fuelType}
            </div>
            <div className="clearfix"></div>
          </div>
        </Link>
      </div>
    );
  }
}
