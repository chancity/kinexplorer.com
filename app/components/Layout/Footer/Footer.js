import React from 'react';
import styled from 'styled-components';
import layoutMixin from '../LayoutMixin';


const Container = styled.footer`
  ${layoutMixin}
`;



const Footer = () => (
  <Container />
);

export default Footer;
