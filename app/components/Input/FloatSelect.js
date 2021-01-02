import React, {useState} from 'react';
import styled from 'styled-components';
import {
  ERROR_COLOR, ErrorContainer, ErrorMessage,
  FloatContainer,
  FloatLabel,
  STANDARD_COLOR,
} from './Shared';
import {CaratDownIcon} from '../Icons';


const FloatSelect = styled.select`
  letter-spacing: 0.005625rem;
  border: 0.0625rem solid ${(p) => (p.error ? ERROR_COLOR : STANDARD_COLOR)};
  border-radius: 0.3125rem;
  appearance: none;
  box-sizing: border-box;
  font-size: 1rem;
  height: min-content;
  width: 100%;
  min-height: 3.5rem;
  padding: 1.25rem 1.75rem 0.87rem 1rem;
  line-height: 1.25rem;
  word-break: break-word;
  ::-ms-expand {
    display: none;
  }
  ${(p) => p.wrap === 'true' && 'white-space: pre-wrap;'}
`;

const DownIcon = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: 0;
  pointer-events: none;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  svg {
    width: 0.75rem;
    height: auto;
  }
`;

export default React.forwardRef((props = {}, ref) => {
  const [active, setActive] = useState(false);
  const {
    value,
    floatLabel,
    error,
    id,
    errorMessage,
    options,
    onSelect,
    onFocus,
    onBlur,
    hideBlankOption = false,
    wrap = false,
  } = props;

  if (!id) {throw `No element id specified for '${floatLabel}'.`;}

  const handleFocus = (e) => {
    onFocus && onFocus(e);
    setActive(true);
  };

  const handleSelect = (e) => {
    onSelect && onSelect(e);
    setActive(true);
  };
  const handleBlur = (e) => {
    onBlur && onBlur(e);
    setActive(false);
  };

  return (
    <FloatContainer error={error}>
      <FloatLabel htmlFor={id} error={error} active={active || value || error}>
        {floatLabel}
      </FloatLabel>
      <div
        css={`
          position: relative;
        `}>
        <FloatSelect
          {...props}
          wrap={wrap.toString()}
          ref={ref}
          onFocus={handleFocus}
          onSelect={handleSelect}
          onBlur={handleBlur}
          aria-describedby={`${id}-error`}>
          {!hideBlankOption && <option />}
          {options.map((state) => (
            <option key={state.value} value={state.value} label={state.label}>
              {state.label}
            </option>
          ))}
        </FloatSelect>
        <DownIcon>
          <CaratDownIcon />
        </DownIcon>
      </div>
      <ErrorContainer id={`${id}-error`}>
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorContainer>
    </FloatContainer>
  );
});
