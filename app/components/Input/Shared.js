import styled, {keyframes} from 'styled-components';

export const ERROR_COLOR = '#e02924';
export const STANDARD_COLOR = '#656565';

const slideIn = keyframes`
  from {
   transform: translateY(-2rem);
  }
  to {
    transform: translateY(0);
  }
`;

export const FloatLabel = styled.label`
  position: absolute;
  left: 1.1rem;
  font-weight: 300;
  top: 1.25rem;
  font-size: ${(p) => (p.active ? '.75rem' : '1rem')};
  color: ${(p) => (p.error ? ERROR_COLOR : STANDARD_COLOR)};
  letter-spacing: 0.005625rem;
  pointer-events: none;
  transition: all 0.2s ease-in;
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    z-index: 2;
    width: 88%;
    background: #fff;
  }
  ${({active}) => (active ? 'transform: translateY(-.8rem);' : '')};
  ${({hideOnActive}) => (hideOnActive ? 'display: none;' : '')};

`;

export const FloatContainer = styled.div`
  position: relative;
  height: min-content;
  width: 100%;
  padding-bottom: 1.5rem;
  overflow: hidden;
`;

export const ErrorContainer = styled.div`
  overflow: hidden;
  line-height: unset;
  position: absolute;
`;

export const ErrorMessage = styled.span`
  line-height: inherit !important;
  margin-top: 0.25rem;
  color: ${ERROR_COLOR};
  font-size: 0.75rem;
  animation: ${slideIn} 0.2s ease-in-out;
  display: block;
  float: left;
`;
