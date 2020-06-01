import React from 'react';

import './Card1.css';
let initialDetails =
  'Maecenas quis risus a massa tempor maximus nec vel nulla. Donec leo ipsum, molestie nec massa sit amet, sodales vestibulum purus. Donec consectetur libero tempus nunc ornare maximus. Vestibulum consequat egestas diam, sed commodo est pulvinar quis.';

const Card1 = ({
  image,
  price = '25.99',
  title = 'Card Title',
  details = initialDetails,
}) => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt="Card" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{details}</p>
        <p className="card-body-price">
          Order with only <strong> {price}</strong>
        </p>
      </div>
      <div className="spacer"></div>
      <div className="card-call-action">
        <span className="btn-card success">Book Now</span>
        <span className="btn-card info">More Details</span>
      </div>
    </div>
  );
};

export default Card1;
