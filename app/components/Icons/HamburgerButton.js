import React from 'react';
import styled, {css} from 'styled-components';

const HamburgerButton = styled.button`
  width: 1.949375rem;
  flex: none;
  :hover {
    :after,
    :before,
    div {
      background-color: ${({theme}) => theme.color.interactive.hover};
    }
  }

  :after,
  :before,
  div {
    background-color: ${({theme}) => theme.color.interactive.normal};
    border-radius: 1rem;
    content: '';
    display: block;
    height: 0.05rem;
    margin: 0.6375rem 0;
    transition: all 0.15s ease-in-out;
  }

  ${(p) =>
    p.open &&
    `
    :before {
      transform: translateY(0.6875rem) rotate(135deg);
    }
    :after {
      transform: translateY(-0.6875rem) rotate(-135deg);
    }
    div {
      transform: scale(0);
    }
  `};

  ${({searchOpen}) => searchOpen &&
    css`
      display: none;
      @media (min-width: ${({theme}) => theme.sizes.tablet}) {
        display: block;
      }
    `
  }
`;

export default HamburgerButton;
