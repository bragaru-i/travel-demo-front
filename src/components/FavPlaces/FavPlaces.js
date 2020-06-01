import React, { Fragment } from 'react';

import './FavPlaces.css';
// import Images
import i1 from '../../img/fav-places/1.jpg';
import i2 from '../../img/fav-places/2.jpg';
import i3 from '../../img/fav-places/3.jpg';
import i4 from '../../img/fav-places/4.jpg';
import i5 from '../../img/fav-places/5.jpg';
import i6 from '../../img/fav-places/6.jpg';
import i7 from '../../img/fav-places/7.jpg';
import i8 from '../../img/fav-places/8.jpg';

const FavPlaces = () => {
  let arr1 = [i1, i2, i3, i4];
  let arr2 = [i5, i6, i7, i8];
  return (
    <Fragment>
      <div className="fav-places-row">
        <ul>
          {arr1.map((i, index) => (
            <li key={index}>
              <img src={i} alt="Favourite Place"></img>
            </li>
          ))}
        </ul>
      </div>
      <div className="fav-places-row">
        <ul>
          {arr2.map((i, index) => (
            <li key={index + 4}>
              <img src={i} alt="Favourite Place"></img>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default FavPlaces;
