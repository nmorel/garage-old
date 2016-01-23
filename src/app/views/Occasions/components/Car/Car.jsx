import React from 'react';
import { Link } from 'react-router';
import styles from './Car.scss';

/**
 * Vignette voiture
 */
export default class extends React.Component {
  render() {
    const link = this.props.car.photos && this.props.car.photos.length ? (
      <img src={this.props.car.photos[0].small} alt={this.props.car.photos[0].name}/>
    ) : this.props.car.make + ' - ' + this.props.car.model;

    return (
      <div>
        <Link to={'occasions/' + this.props.car.id}>{link}</Link>
      </div>
    );
  }
}
