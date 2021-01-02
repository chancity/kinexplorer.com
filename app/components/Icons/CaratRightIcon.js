import React, {forwardRef} from 'react';

const CaratRightIcon = forwardRef(({children, ...props}, ref) => (
  <svg
    ref={ref}
    width="11"
    height="16"
    viewBox="0 0 11 16"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.30774 14.4L8.46159 7.99991L2.30774 1.59998"
      stroke="#666666"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
));

export default CaratRightIcon;
