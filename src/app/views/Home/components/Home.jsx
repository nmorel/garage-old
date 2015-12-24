import React from 'react';
import ViewWithLeftMenu from './ViewWithLeftMenu.jsx';
import data from '../../../../data/home';

/**
 * Home page
 */
export default class extends React.Component {
  render() {
    return <ViewWithLeftMenu data={data}/>;
  }
}
