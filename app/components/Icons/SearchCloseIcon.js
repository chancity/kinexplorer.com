import React, {forwardRef} from 'react';

const SearchCloseIcon = forwardRef(({children, ...props}, ref) => (
  <svg
    ref={ref}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#searchCloseClip)">
      <path
        d="M8.98649 8.00114L15.7929 1.19243C16.066 0.919357 16.066 0.477884 15.7929 0.204807C15.5198 -0.0682691 15.0784 -0.0682691 14.8053 0.204807L7.99886 7.01124L1.19243 0.204807C0.919357 -0.0682691 0.477884 -0.0682691 0.204807 0.204807C-0.0682691 0.477884 -0.0682691 0.919357 0.204807 1.19243L7.01124 7.99886L0.204807 14.8076C-0.0682691 15.0806 -0.0682691 15.5221 0.204807 15.7952C0.341345 15.9317 0.521121 16 0.69862 16C0.87612 16 1.0559 15.9317 1.19243 15.7952L7.99886 8.98876L14.8053 15.7952C14.9418 15.9317 15.1216 16 15.2991 16C15.4789 16 15.6564 15.9317 15.7929 15.7952C16.066 15.5221 16.066 15.0806 15.7929 14.8076L8.98649 8.00114Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="searchCloseClip">
        <rect width="15.9977" height="16" />
      </clipPath>
    </defs>
  </svg>
));

export default SearchCloseIcon;
