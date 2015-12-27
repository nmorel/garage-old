import React from 'react';
import Container from '../../../../components/Container';
import styles from './Home.scss';

/**
 * Page d'accueil
 */
export default class extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.bannerContainer}>
          <Container>
            <div className={styles.openingHoursContainer}>
              <div className={styles.openingHoursTitle}>Nos horaires</div>
              <div>Lundi au vendredi: 8h-12h30 / 13h30-19h</div>
              <div>Samedi: 8h-12h30</div>
            </div>
          </Container>
        </div>
        <Container>
          <div style={{ background: 'lightblue', height: 400, float: 'left', width: '70%' }}>
            <div style={{ background: 'yellow', height: 400, float: 'left', width: '60%' }}></div>
            <div style={{ background: 'blue', height: 200, float: 'left', width: '40%' }}></div>
            <div style={{ background: 'red', height: 200, float: 'left', width: '40%' }}></div>
          </div>
          <div style={{ background: 'lightgreen', height: 400, float: 'left', width: '30%' }}>
            Emplacement pour les coordonnées ou description du site
          </div>
        </Container>
      </div>
    );
  }
}
