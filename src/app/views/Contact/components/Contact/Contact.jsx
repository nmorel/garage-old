import React from 'react';
import GoogleMap from 'google-map-react';
import Container from '../../../../components/Container';
import Marker from '../Marker';
import styles from './Contact.scss';

/**
 * Contact page
 */
export default class extends React.Component {
  static propTypes = {
    coord: React.PropTypes.shape({
      lat: React.PropTypes.number.isRequired,
      lng: React.PropTypes.number.isRequired,
    }).isRequired,
    zoom: React.PropTypes.number.isRequired,
  };

  static defaultProps = {
    coord: { lat: 48.625648, lng: -1.347121 },
    zoom: 14,
  };

  render() {
    return (
      <Container>
        <div className={styles.container}>
          <div className={styles.title}>Contact</div>
          <div className={styles.map}>
            <GoogleMap
              defaultCenter={this.props.coord}
              defaultZoom={this.props.zoom}
            >
              <Marker {...this.props.coord} />
            </GoogleMap>
          </div>
        </div>
      </Container>
    );
  }
}