import React from 'react';

import './NavigationTop.css';
import Icon from '../Icons';
import MenuResponsive from '../MenuResponsive/MenuResponsive';

const NavigationTop = () => {
  return (
    <div className="row">
      <nav>
        <div className="nav-brand">
          <span>
            <Icon name="pin" fill="#51bc9e" width="40px"></Icon>
          </span>
          <span>Awesome Agency</span>
        </div>
        <div className="spacer"></div>
        <MenuResponsive />
        <ul className="nav-items">
          <li className="nav-item">
            <span>Home</span>
          </li>
          <li className="nav-item">
            <span>Places To Go</span>
          </li>
          <li className="nav-item">
            <span>Packages</span>
          </li>
          <li className="nav-item">
            <span>Our Blog</span>
          </li>
          <li className="nav-item">
            <span>Contacts</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationTop;
