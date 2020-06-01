import React from 'react';

import './Herobox.css';

const Herobox = () => {
  const onClick = () => {
    window.location.href = `mailto:bragaruion@gmail.com`;
  };
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
          <p>
            Get source files from here:
            <a href="https://github.com/fargusmd/travel-demo-front">fargusMD repo</a>
          </p>
          <p>
            More details on email:{' '}
            <a href="mailto:bragaruion@gmail.com">bragaruion@gmail.com</a>
          </p>
        </div>
        <span onClick={onClick} className="btn btn-hero">
          {' '}
          Read More
        </span>
      </div>
    </div>
  );
};

export default Herobox;
