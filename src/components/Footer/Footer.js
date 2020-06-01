import React from 'react';

import './Footer.css';
import Icon from '../Icons';

const Footer = () => {
  return (
    <div className="row">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li>About us</li>
            <li>Places To GO</li>
            <li>Packages</li>
            <li>Site map</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="spacer"></div>
        <div className="footer-media">
          <ul>
            <li>
              <span>
                <Icon name="facebook" width="30px" />
              </span>
              <span> facebook.com/awesome-agency</span>
            </li>
            <li>
              <span>
                <Icon name="tweeter" width="30px" />
              </span>
              <span> tweeter.account</span>
            </li>
            <li>
              <span>
                <Icon name="instagram" width="30px" />
              </span>
              <span> instagram.acc</span>
            </li>
            <li>
              <span>
                <Icon name="messenger" width="30px" />
              </span>
              <span> Messenge us</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
