import React from 'react';
import Container from '../../../components/Container';

/**
 * Page listant les services proposés
 */
export default class extends React.Component {
  render() {
    return (
      <Container>
        <div>Liste des services proposés</div>
        <ul>
          <li>Essence</li>
          <li>Réparation</li>
          <li>Vente de véhicules d'occasions</li>
          <li>Etc...</li>
        </ul>
      </Container>
    );
  }
}
