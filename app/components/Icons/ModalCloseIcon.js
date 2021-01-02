import React, {forwardRef} from 'react';


const lineStyle = {
  fill:'none',
  stroke:'#656565',
  strokeWidth:'61.44',
  strokeLinecap:'round',
  strokeMiterlimit: '10'
}

const ModalCloseIcon = forwardRef(({children, ...props}, ref) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="703px"
    height="703.1px"
    viewBox="0 0 703 703.1"
    style={{enableBackground: 'new 0 0 703 703.1'}}
    ref={ref}
  >
    <g>
	<line
    style={lineStyle}
    x1="30.7" y1="30.7" x2="672.3" y2="672.4"/>
      <line
        style={lineStyle}
        x1="30.7" y1="672.4" x2="672.3" y2="30.7"/>
</g>
</svg>
));

export default ModalCloseIcon;


