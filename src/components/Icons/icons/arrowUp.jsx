import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 512 512',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M9.99997 10.414L13.2929 13.7069C13.6834 14.0974 14.3166 14.0974 14.7071 13.7069L19.707 8.707L22 11V5H16L18.293 7.293L14 11.586L10.7071 8.29311C10.3166 7.90258 9.68339 7.90258 9.29286 8.29311L2.29297 15.293L3.70697 16.707L9.99997 10.414Z"
      fill={fill}
    />
  </svg>
);
export default SVG;
