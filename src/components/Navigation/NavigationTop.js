import React, { useEffect, useState, useRef } from 'react';

import './NavigationTop.css';
import Icon from '../Icons';
import useClickOutside from '../../Hooks/useClickOutside';

const NavigationTop = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const cities = document.getElementById('cities');
    const features = document.getElementById('features');
    const nav = document.getElementById('nav');
    const sticky = features.offsetTop;
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        nav.classList.add('sticky');
      } else {
        nav.classList.remove('sticky');
      }
    });

    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);
  let node = useRef();
  useClickOutside(
    node,
    open,
    () => {
      setOpen(false);
    },
    () => {
      console.log('Inside');
    }
  );
  return (
    <nav id="nav">
      <div className="row">
        <div className="nav-container">
          <div className="nav-brand">
            <span>
              <Icon name="pin" width="32px" fill="#51bc9e" />
            </span>
            <span>Awesome Agency</span>
          </div>
          <div className="spacer"></div>
          <ul className="nav-items">
            <li className="nav-item">Home</li>
            <li className="nav-item">Places To GO</li>
            <li className="nav-item">Our Blog</li>
            <li className="nav-item">We on Media</li>
            <li className="nav-item">Contacts</li>
          </ul>
        </div>
        <div className="responsive-menu">
          <div className="nav-brand">
            <span>
              <Icon name="pin" width="32px" fill="#51bc9e" />
            </span>
            <span>Awesome Agency</span>
          </div>

          <div className="burger-icon">
            <span className="toggler" onClick={() => setOpen(!open)}>
              <Icon name="menu-toggler" width="32px" />{' '}
            </span>
            <ul ref={node} className={open ? 'dropdown' : 'dropdown close'}>
              <li className="dropdown-nav-item">Home</li>
              <li className="dropdown-nav-item">Places To GO</li>
              <li className="dropdown-nav-item">Our Blog</li>
              <li className="dropdown-nav-item">We on Media</li>
              <li className="dropdown-nav-item">Contacts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* <nav>
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
        </nav> */}
    </nav>
  );
};

export default NavigationTop;
