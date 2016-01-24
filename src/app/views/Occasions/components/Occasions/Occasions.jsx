import React from 'react';
import Car from '../Car';
import styles from './Occasions.scss';
import orderBy from 'lodash/collection/sortByOrder';

/**
 * Page des occasions
 */
export default class extends React.Component {
  constructor(props) {
    super(props);
    var cars = orderBy(require('data/cars'), ['modificationDate'], ['desc']);
    this.state = {
      cars: cars
    };
  }

  render() {
    return (
      <div className="container">
        <h2>Nos véhicules d'occasions</h2>
        <div className="row">
          {this.state.cars.map((car, index) => <Car key={index} car={car}/>)}
        </div>
        <div className={styles.seeMore}>
          <a href="http://www.jeroulemoinscher.com/search/" target="_blank">Autres véhicules également disponibles</a>
        </div>
      </div>
    );
  }
}
