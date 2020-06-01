import React, { Fragment } from 'react';

import './Testimonials.css';
let imageURL = 'https://picsum.photos/200/300';

const Testimonials = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="testimonials">
          <h2>What people thinks about us</h2>
          <div className="row-wrapper">
            <div className="testimonial-container">
              <blockquote>
                Morbi eget bibendum eros. In a molestie urna. Sed pretium aliquam eros nec
                lacinia. Praesent at finibus magna. Donec tempus nisi quis sem tincidunt
                elementum. Sed turpis dui, hendrerit finibus efficitur a, venenatis sed
                magna. Sed molestie nulla cursus luctus volutpat.
              </blockquote>
              <div className="spacer"></div>
              <div>
                <img src={imageURL} alt="A friendly Face" />
                <span style={{ paddingLeft: '15px' }}>&ndash; Jhon Doe</span>
              </div>
            </div>
            <div className="testimonial-container">
              <blockquote>
                Morbi eget bibendum eros. In a molestie urna. Sed pretium aliquam eros nec
                lacinia. Praesent at finibus magna. Donec tempus nisi quis sem tincidunt
                elementum. Sed turpis dui, hendrerit finibus efficitur a, venenatis sed
                magna. Sed molestie nulla cursus luctus volutpat.
              </blockquote>
              <div className="spacer"></div>

              <div>
                <img src={imageURL} alt="A friendly Face" />
                <span style={{ paddingLeft: '15px' }}>&ndash; Xi Nping</span>
              </div>
            </div>{' '}
            <div className="testimonial-container">
              <blockquote>
                Sed lacinia sagittis ante, eu tincidunt metus iaculis eget. Aliquam
                eleifend dictum congue. Sed tincidunt libero vel faucibus congue.
                Suspendisse dolor lorem, ultricies vitae condimentum id, egestas vel urna.
                Praesent ut dui mauris. Mauris pharetra vulputate sagittis. Nunc auctor
                eleifend accumsan.
              </blockquote>
              <div className="spacer"></div>

              <div>
                <img src={imageURL} alt="A friendly Face" />
                <span style={{ paddingLeft: '15px' }}>&ndash; Bob Stanley</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Testimonials;
