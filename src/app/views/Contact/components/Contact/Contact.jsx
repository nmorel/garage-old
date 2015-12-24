import React from 'react';
import GoogleMap from 'google-map-react';
import Marker from '../Marker';
import styles from './Contact.scss';

/**
 * Contact page
 */
export default class extends React.Component {
  static defaultProps = {
    coord: {lat: 48.625648, lng: -1.347121},
    zoom: 14
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>Contact</div>
        <div className={styles.map}>
          <GoogleMap
            defaultCenter={this.props.coord}
            defaultZoom={this.props.zoom}>
            <Marker {...this.props.coord} />
          </GoogleMap>
        </div>
      </div>
    );
  }
}
