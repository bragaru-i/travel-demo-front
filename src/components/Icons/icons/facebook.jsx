import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 95.334 95.334',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M12.001 2.00201C6.47895 2.00201 2.00195 6.47901 2.00195 12.001C2.00195 16.991 5.65795 21.127 10.439 21.88V14.892H7.89895V12.001H10.439V9.79801C10.439 7.29001 11.932 5.90701 14.215 5.90701C15.309 5.90701 16.455 6.10201 16.455 6.10201V8.56101H15.191C13.951 8.56101 13.563 9.33301 13.563 10.124V11.999H16.334L15.891 14.89H13.563V21.878C18.344 21.129 22 16.992 22 12.001C22 6.47901 17.523 2.00201 12.001 2.00201Z"
      fill={fill}
    />
  </svg>
);

export default SVG;
