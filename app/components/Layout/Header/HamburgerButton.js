import React from 'react';
import styled from 'styled-components';

const HamburgerButton = styled.button`
  width: 1.949375rem;

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

  @media (min-width: ${({theme}) => theme.sizes.tablet}) {
    width: 2.574375rem;

    :after,
    :before,
    div {
      height: 0.05rem;
      margin: 0.625rem 0;
    }

    ${(p) => p.open &&
      `
      :before {
        transform: translateY(0.675rem) rotate(135deg);
      }
      :after {
        transform: translateY(-0.675rem) rotate(-135deg);
      }
      div {
        transform: scale(0);
      }
    `};
  }
`;

export default HamburgerButton;
