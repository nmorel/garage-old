import React from 'react';
import { Link } from 'react-router';
import styles from './Car.scss';
import formatter from 'app/services/formatter';

/**
 * Vignette voiture
 */
export default class extends React.Component {
  render() {
    var car = this.props.car;
    var style = this.props.primary ? styles.primary : styles.secondary;
    return (
      <Link to={'occasions/' + car.id}>
        <div className={style}>
          <div className={styles.descriptionContainer}>
            <div className={styles.title}>
              {car.make + ' ' + car.model}
            </div>
            <div className={styles.price}>
              {formatter.formatPrice(car.price)}
            </div>
            <div className={styles.mileage}>
              {formatter.formatMileage(car.mileage) + ' - ' + car.fuelType}
            </div>
            <div className="clearfix"></div>
          </div>
          <img src={car.photos[0].large}/>
        </div>
      </Link>
    );
  }
}
