import React, {useState} from 'react';
import {
  ErrorContainer,
  FloatContainer,
  FloatLabel,
  ErrorMessage,
  ERROR_COLOR,
  STANDARD_COLOR,
} from './Shared';
import styled from 'styled-components';

const Input = styled.input`
  letter-spacing: 0.005625rem;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 1.2rem;
  padding-bottom: 0.8rem;
  font-size: 1rem;
  height: 3.5rem;
  width: 100%;
  background-color: ${({theme}) => theme.color.background.textArea};
  border-radius: .25rem;
  ::-ms-clear {
    display: none;
  }
`;

const FloatInput = React.forwardRef((props = {}, ref) => {
  const [active, setActive] = useState(false);
  const {
    value,
    floatLabel,
    hideOnActive,
    error,
    errorMessage,
    onFocus,
    onBlur,
    id,
  } = props;

  if (!id) {throw `FloatInput: No element id specified for '${floatLabel}'.`;}

  const handleFocus = (e) => {
    onFocus && onFocus(e);
    setActive(true);
  };
  const handleBlur = (e) => {
    onBlur && onBlur(e);
    setActive(false);
  };

 const floatActive = (value || active || error);
  return (
    <FloatContainer error={error}>
      <FloatLabel htmlFor={id}
                  error={error}
                  active={floatActive}
                  hideOnActive={hideOnActive && floatActive}
      >
        {floatLabel}
      </FloatLabel>
      <Input
        aria-describedby={`${id}-error`}
        {...props}
        ref={ref}
        onFocus={(e) => handleFocus(e)}
        onBlur={(e) => handleBlur(e)}
      />
      <ErrorContainer id={`${id}-error`}>
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorContainer>
    </FloatContainer>
  );
});

export default FloatInput;
