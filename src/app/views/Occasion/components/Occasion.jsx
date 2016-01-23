import React from 'react';

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
    const photos = this.state.car.photos && this.state.car.photos.length ? (
      <div>
        <img src={this.state.car.photos[0].small}/>
        <img src={this.state.car.photos[0].medium}/>
        <img src={this.state.car.photos[0].large}/>
      </div>
    ) : undefined;

    return (
      <div className="container">
        <div>Toto</div>
        <div>{this.state.car.model}</div>
        {photos}
      </div>
    );
  }
}
