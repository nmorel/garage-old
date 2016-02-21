import React from 'react';
import styles from './Home.scss';
import orderBy from 'lodash/collection/sortByOrder';
import filterBy from 'lodash/collection/filter';
import { Link } from 'react-router';

/**
 * Page d'accueil
 */
export default class extends React.Component {
  constructor(props) {
    super(props);
    var cars = filterBy(orderBy(require('data/cars'), ['modificationDate'], ['desc']), function (car) {
      return car.photos && car.photos.length;
    });
    this.state = {
      cars: cars
    };
  }

  render() {
    return (
      <div>
        <div className={styles.bannerContainer}>
          <div className={'container ' + styles.bannerInner}>
            <div className={styles.openingHoursContainer}>
              <div className={styles.openingHoursTitle}>Nos horaires</div>
              <div>Lundi au vendredi: 8h-12h30 / 14h-19h</div>
              <div>Samedi: 8h-12h30</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-lg-9">
              <h3 className={styles.title}>
                <Link to={'occasions'}>Nos derniers véhicules</Link>
              </h3>
              <img className={styles.primaryCar} src={this.state.cars[0].photos[0].large}/>
              <img className={styles.secondaryCar} src={this.state.cars[1].photos[0].large}/>
              <img className={styles.secondaryCar} src={this.state.cars[2].photos[0].large}/>
              <div className={styles.seeAll}>
                <Link to={'occasions'}>Voir tous les véhicules</Link>
              </div>
            </div>
            <div className="col-md-5 col-lg-3">
              <div className={styles.precisiumLogoContainer}>
                <a href="http://garagemorelregis.precisium.fr/" target="_blank">
                  <img src={require('images/logo.png')} />
                </a>
              </div>
              <h3 className={styles.title}>Promo du moment</h3>
              <div>-50% sur les plaquettes de frein</div>
              <h3 className={styles.title}>Contact</h3>
              <div>"Le V"</div>
              <div>50220 PONTAUBAULT</div>
              <div>Tél. : 02 33 60 47 50</div>
              <div>Fax : 02 33 60 28 84</div>
              <div>Mail : garage.morel50@orange.fr</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
