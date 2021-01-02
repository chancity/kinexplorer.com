import React, {forwardRef} from 'react';

const LiveHelpIcon = forwardRef(({children, ...props}, ref) => (
  <svg
    ref={ref}
    width="19"
    height="16"
    viewBox="0 0 19 16"
    fill="none"
    {...props}
    xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#liveHelpClip)">
      <path
        d="M3.27593 14.9896C3.27593 15.898 4.13767 16.3133 4.84173 15.7336C4.84173 15.7336 6.52968 14.3433 7.17821 13.8103C18.3365 15.5537 23.5025 4.7353 13.7879 0.77972C3.50691 -2.79607 -4.87066 6.78306 3.28037 12.3133C3.27593 12.5798 3.27593 14.9896 3.27593 14.9896ZM4.57965 11.5737C-3.86233 6.53208 5.6324 -1.52123 13.9789 2.27667C22.0921 6.49211 15.3292 14.3922 6.82951 12.4088C6.78953 12.4399 4.69736 14.1767 4.57965 14.2745C4.57965 14.0346 4.57965 11.7225 4.57965 11.5737ZM5.55467 8.47767C7.3359 8.37995 7.23151 5.92131 5.55467 5.87023C3.77343 5.96795 3.88004 8.42659 5.55467 8.47767ZM9.4636 8.47767C11.2448 8.37995 11.1405 5.92131 9.4636 5.87023C7.68459 5.96573 7.7912 8.42881 9.4636 8.47767ZM13.3725 8.47767C15.1538 8.37995 15.0494 5.92131 13.3725 5.87023C11.5913 5.96795 11.6957 8.42659 13.3725 8.47767Z"
        fill="#333333"
      />
    </g>
    <defs>
      <clipPath id="liveHelpClip">
        <rect width="18.9095" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
));

export default LiveHelpIcon;
