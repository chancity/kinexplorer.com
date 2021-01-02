import React, {forwardRef} from 'react';

const CaratLeftIcon = forwardRef(({children, ...props}, ref) => (
  <svg
    ref={ref}
    width="11"
    height="16"
    viewBox="0 0 11 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8.69232 1.60003L2.53848 8.00009L8.69232 14.4"
      stroke="#666666"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
));

export default CaratLeftIcon;
