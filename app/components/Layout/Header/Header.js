import React from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import JoinDiscord from './JoinDiscord';

const Container = styled.header`
  box-shadow: ${({theme}) => theme.color.elevation.low};
`;


const Header = () => (
  <Container>
    <JoinDiscord/>
    <Container as={'div'} css={`margin-bottom: 0.125rem`}>
      <HeaderTop />
    </Container>
    <HeaderBottom />
  </Container>
);

export default Header;
