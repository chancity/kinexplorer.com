import React from 'react';
import styled from 'styled-components';
import GithubIcon from '../../Icons/GihubIcon';
import layoutMixin from '../LayoutMixin';


const Container = styled.footer`
  ${layoutMixin}
`;

const Anchor = styled.a`
  :hover {
    svg {
      fill: ${({theme}) => theme.color.interactive.hover}
    }
  }
`

const StyledGithubIcon = styled(GithubIcon)`
  height: 1.5rem;
  width: 1.5rem;
  fill: ${({theme}) => theme.color.interactive.normal}
`;

const Footer = () => (
  <Container>
    <Anchor
      href={'https://github.com/chancity/kinexplorer.com'}
      target='_blank'
      rel='noreferrer'
    >
      <StyledGithubIcon/>
    </Anchor>
  </Container>
);

export default Footer;
