import React from 'react';

/**
 * Page d'accueil
 */
export default class extends React.Component {
  render() {
    return (
      <div>
        <div style={{ background: 'grey', height: 250 }}>Emplacement pour une bannière</div>
        <div style={{ background: 'lightblue', height: 400, float: 'left', width: '60%' }}>Emplacement pour une sélection de véhicules</div>
        <div style={{ background: 'lightgreen', height: 400, float: 'left', width: '40%' }}>Emplacement pour les coordonnées ou description du site</div>
      </div>
    );
  }
}
