import React from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const Container = styled.header`
  box-shadow: ${({theme}) => theme.color.elevation.low};
`;


const Header = () => (
  <Container>
    <Container as={'div'} css={`margin-bottom: 0.125rem`}>
      <HeaderTop />
    </Container>
    <HeaderBottom />
  </Container>
);

export default Header;
