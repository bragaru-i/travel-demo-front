import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 496 496',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 19.7208L9.10794 22.0901L16.0769 18.1078L22 20.477V4.32298L15.9231 1.89221L8.89206 5.90994L2 3.61259V19.7208ZM14 16.9911L10 19.2768V7.58033L14 5.29462V16.9911ZM16 15.923L20 17.523V5.67704L16.0769 4.10781L16 4.15176V15.923ZM4 18.2793L8 19.6126V7.72077L4 6.38744V18.2793Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
