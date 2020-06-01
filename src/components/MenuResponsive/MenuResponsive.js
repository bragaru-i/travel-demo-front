import React, { Fragment, useState } from 'react';
import Icon from '../Icons';
import './MenuResponsive.css';

const MenuResponsive = () => {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div data-toggle="menu-toggler" className="res-menu">
        <span onClick={() => setOpen(!open)}>
          <Icon name="menu-toggler" width="32px"></Icon>
        </span>
        <div className={open ? 'menu-sidebar' : 'menu-sidebar closed'}>
          <ul>
            <li>Home</li>
            <li>Places To Go</li>
            <li>Packages</li>
            <li> Our Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default MenuResponsive;
