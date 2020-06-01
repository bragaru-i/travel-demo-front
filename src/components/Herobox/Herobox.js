import React from 'react';

import './Herobox.css';

const Herobox = () => {
  return (
    <div className="row">
      <div className="herobox-container">
        <div>
          <h1>
            A thousand ways to explore<strong> Georgia</strong>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere
            ultricies purus vestibulum laoreet.Pellentesque a mi vestibulum, sodales justo
            non, ornare libero. Morbi at mi vitae sem rutrum fermentum non at tortor.
          </p>
        </div>
        <span className="btn btn-hero"> Read More</span>
      </div>
    </div>
  );
};

export default Herobox;
