import React from 'react';
import Car from '../Car';
import styles from './Occasions.scss';

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
    return (
      <div className="container">
        <h2>Nos véhicules d'occasions</h2>
        {this.state.cars.map(car => <Car key={car.id} car={car}/>)}
        <div className={styles.seeMore}>
          <a href="http://www.jeroulemoinscher.com/search/" target="_blank">Autres véhicules également disponibles</a>
        </div>
      </div>
    );
  }
}
