import React from 'react';

/**
 * Page listant les services proposés
 */
export default class extends React.Component {
  render() {
    return (
      <div>
        <div>Liste des services proposés</div>
        <ul>
          <li>Essence</li>
          <li>Réparation</li>
          <li>Vente de véhicules d'occasions</li>
          <li>Etc...</li>
        </ul>
      </div>
    );
  }
}
