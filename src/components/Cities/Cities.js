import React, { Fragment } from 'react';

import './Cities.css';
import Card1 from '../Card1/Card1';
// loading images hardcore
import card1 from '../../img/cities/card1.jpg';
import card2 from '../../img/cities/card2.jpg';
import card3 from '../../img/cities/card3.jpg';

const Cities = () => {
  return (
    <Fragment>
      <div className="row">
        <h2 style={{ textAlign: 'center' }}>Cities To Go</h2>
        <div className="cities-container">
          <Card1 image={card1} title="A lovely City" />
          <Card1 image={card2} title="City of Angels" />
          <Card1 image={card3} title="Mountain Creek" />
          <Card1 image={card2} title="Pinewoods Atlantic" />
          <Card1 image={card1} title="Minewood" />
          <Card1 image={card2} title="Old Yorkshire" />
        </div>
      </div>
    </Fragment>
  );
};

export default Cities;
