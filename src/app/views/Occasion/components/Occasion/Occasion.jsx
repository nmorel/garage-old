import React from 'react';
import styles from './Occasion.scss';
import formatter from 'app/services/formatter';
import Carousel from 'nuka-carousel';
import Modal from 'react-bootstrap/lib/Modal';

/**
 * Page affichant le détail d'une occasion
 */
export default class extends React.Component {
  constructor(props) {
    super(props);

    const cars = require('data/cars');

    this.state = {
      car: cars.find(car => car.id.toString() === props.params.uid),
      showModal: false
    };
  }

  openCarousel = () => {
    this.setState({
      showModal: true
    });
  };

  closeCarousel = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    const car = this.state.car;

    var realPower;
    if (car.powerReal && car.powerReal > 0) {
      realPower = (
        <div className={'row ' + styles.propertyContainer}>
          <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Puissance réelle</div>
          <div
            className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{formatter.formatRealPower(car.powerReal)}</div>
        </div>
      );
    }

    var fiscalPower;
    if (car.powerFiscal && car.powerFiscal > 0) {
      fiscalPower = (
        <div className={'row ' + styles.propertyContainer}>
          <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Puissance fiscale</div>
          <div
            className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{formatter.formatFiscalPower(car.powerFiscal)}</div>
        </div>
      );
    }

    var options;
    if (car.options && car.options.length) {
      options = (
        <div className={'row ' + styles.propertyContainer}>
          <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Options</div>
          <div className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{car.options.join(', ')}</div>
        </div>
      );
    }

    var observations;
    if (car.observations && car.observations.length) {
      observations = (
        <div className={'row ' + styles.propertyContainer}>
          <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Observations</div>
          <div className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{car.observations}</div>
        </div>
      );
    }

    var photos, photosCarousel;
    if (car.photos && car.photos.length) {
      photos = car.photos.slice(0, 5).map((photo, index) => {
        if (index === 0) {
          return <img className={styles.mainImage} src={photo.large}
                      alt={photo.name} onClick={this.openCarousel}/>;
        } else {
          return <img className={styles.smallImage} src={photo.small}
                      alt={photo.name} onClick={this.openCarousel}/>;
        }
      });
      if (car.photos.length > 5) {
        const nbAddPhotos = car.photos.length - 5;
        const message = nbAddPhotos === 1 ? ' photo supplémentaire' : ' photos supplémentaires';
        photos.push((
          <div className={styles.additionnalPhotos}>
            <a onClick={this.openCarousel}>{nbAddPhotos + message}</a>
          </div>
        ));
      }

      photosCarousel = car.photos.map(photo => {
        return (
          <div className={styles.carouselImgContainer}>
            <img src={photo.verylarge}/>
          </div>
        )
      });
    }

    return (
      <div className="container">
        <h2 className={styles.title}>{car.make + ' ' + car.model}</h2>
        <div className="row">
          <div className="col-md-4 col-lg-6">
            <div className={'row ' + styles.propertyContainer}>
              <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Marque</div>
              <div className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{car.make}</div>
            </div>
            <div className={'row ' + styles.propertyContainer}>
              <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Modèle</div>
              <div className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{car.model}</div>
            </div>
            <div className={'row ' + styles.propertyContainer}>
              <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Année</div>
              <div className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{car.year}</div>
            </div>
            <div className={'row ' + styles.propertyContainer}>
              <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Kilométrage</div>
              <div
                className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{formatter.formatMileage(car.mileage)}</div>
            </div>
            <div className={'row ' + styles.propertyContainer}>
              <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Prix</div>
              <div
                className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{formatter.formatPrice(car.price)}</div>
            </div>
            <div className={'row ' + styles.propertyContainer}>
              <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Boite de vitesses</div>
              <div className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{car.transmission}</div>
            </div>
            <div className={'row ' + styles.propertyContainer}>
              <div className={'col-sm-4 col-md-12 col-lg-4 ' + styles.propertyTitle}>Carburant</div>
              <div className={'col-sm-8 col-md-12 col-lg-8 ' + styles.propertyValue}>{car.fuelType}</div>
            </div>
            {realPower}
            {fiscalPower}
            {options}
            {observations}
          </div>
          <div className="col-md-8 col-lg-6">
            {photos}
          </div>
        </div>
        <Modal show={this.state.showModal} onHide={this.closeCarousel} dialogClassName={styles.modalCarousel}>
          <Carousel>
            {photosCarousel}
          </Carousel>
        </Modal>
      </div>
    );
  }
}
