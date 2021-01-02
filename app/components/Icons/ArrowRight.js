import React, {forwardRef} from 'react';

const ArrowRight = forwardRef(({children, ...props}, ref) => (
  <svg
    ref={ref}
    width="10"
    height="16"
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M1.08071 16.0003C0.803754 16.0003 0.526799 15.8952 0.31658 15.6833C-0.105527 15.2612 -0.105527 14.5772 0.31658 14.1551L6.47299 8.00032L0.31658 1.84557C-0.105527 1.42347 -0.105527 0.739419 0.31658 0.317312C0.738686 -0.104794 1.42273 -0.104794 1.84484 0.317312L9.52951 8.00032L1.84484 15.6833C1.63462 15.8952 1.35766 16.0003 1.08071 16.0003Z"
      fill="#666666"
    />
  </svg>
));

export default ArrowRight;
