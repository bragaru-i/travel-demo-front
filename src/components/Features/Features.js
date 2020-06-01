import React, { Fragment } from 'react';

import './Features.css';
import Icon from '../Icons';

const Features = () => {
  return (
    <Fragment>
      <div className="row ">
        <div className="features-heading">
          <h2> Get a awesome trip to Georgia</h2>
          <p>
            Sed lacinia sagittis ante, eu tincidunt metus iaculis eget. Aliquam eleifend
            dictum congue. Sed tincidunt libero vel faucibus congue.Donec sodales ante
            purus, vel scelerisque nibh sagittis non. Ut nec mattis lectus.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="features-cards">
          <div className="features-card-item">
            <span className="card-vector">
              <Icon name="map" width="100px" fill="#788799" />
            </span>
            <div className="features-card-body">
              <div className="features-card-body-header">
                <h3>Reason why you should order us</h3>
              </div>
              <div className="features-card-body-paragraph">
                Curabitur finibus feugiat accumsan. Pellentesque eget dui scelerisque,
                vehicula augue vel, tincidunt ligula. Aenean tincidunt venenatis
                efficitur. Proin ultricies ex nec dui fermentum venenatis. Maecenas quis
                risus a massa tempor maximus nec vel nulla.
              </div>
            </div>
          </div>
          <div className="features-card-item">
            <span className="card-vector">
              <Icon name="arrow-up" width="100px" fill="#788799" />
            </span>
            <div className="features-card-body">
              <div className="features-card-body-header">
                <h3>We are always growing</h3>
              </div>
              <div className="features-card-body-paragraph">
                Curabitur finibus feugiat accumsan. Pellentesque eget dui scelerisque,
                vehicula augue vel, tincidunt ligula. Aenean tincidunt venenatis
                efficitur. Proin ultricies ex nec dui fermentum venenatis. Maecenas quis
                risus a massa tempor maximus nec vel nulla.
              </div>
            </div>
          </div>
          <div className="features-card-item">
            <span className="card-vector">
              <Icon name="calendar" width="100px" fill="#788799" />
            </span>
            <div className="features-card-body">
              <div className="features-card-body-header">
                <h3>Always available and flexible</h3>
              </div>
              <div className="features-card-body-paragraph">
                Curabitur finibus feugiat accumsan. Pellentesque eget dui scelerisque,
                vehicula augue vel, tincidunt ligula. Aenean tincidunt venenatis
                efficitur. Proin ultricies ex nec dui fermentum venenatis. Maecenas quis
                risus a massa tempor maximus nec vel nulla.
              </div>
            </div>
          </div>
          <div className="features-card-item">
            <span className="card-vector">
              <Icon name="money-bag" width="100px" fill="#788799" />
            </span>
            <div className="features-card-body">
              <div className="features-card-body-header">
                <h3>Save money with us and more bonuses</h3>
              </div>
              <div className="features-card-body-paragraph">
                Curabitur finibus feugiat accumsan. Pellentesque eget dui scelerisque,
                vehicula augue vel, tincidunt ligula. Aenean tincidunt venenatis
                efficitur. Proin ultricies ex nec dui fermentum venenatis. Maecenas quis
                risus a massa tempor maximus nec vel nulla.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Features;
