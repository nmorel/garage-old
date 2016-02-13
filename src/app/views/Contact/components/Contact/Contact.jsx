import React from 'react';
import GoogleMap from 'google-map-react';
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
    coord: {lat: 48.625648, lng: -1.347121},
    zoom: 14,
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Contact</h2>
            <div>"Le V"</div>
            <div>50220 Pontaubault</div>
            <div>Tél. : 02 33 60 47 50</div>
            <div>Fax : 02 33 60 28 84</div>
            <div>Mail : garage.morel50@orange.fr</div>
          </div>
          <div className={'col-md-8 ' + styles.map}>
            <GoogleMap
              defaultCenter={this.props.coord}
              defaultZoom={this.props.zoom}
            >
              <Marker {...this.props.coord} />
            </GoogleMap>
          </div>
        </div>
      </div>
    );
  }
}
