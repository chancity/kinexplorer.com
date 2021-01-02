import React, {forwardRef} from 'react';

const CaratDownIcon = forwardRef(({children, ...props}, ref) => (
  <svg
    version="1.0"
    ref={ref}
    fill="#666666"
    width="959px"
    height="571.3px"
    viewBox="0 0 959 571.3"
    {...props}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M479.5,571.3L19,110.6C-6.3,85.3-6.3,44.3,19,19s66.3-25.3,91.6,0l368.9,369L848.4,19
               c25.3-25.3,66.3-25.3,91.6,0s25.3,66.3,0,91.6L479.5,571.3z"
    />
  </svg>
));

export default CaratDownIcon
