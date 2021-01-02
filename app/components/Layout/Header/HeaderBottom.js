import React from 'react';
import styled from 'styled-components';
import layoutMixin from '../LayoutMixin';
import KinPrice from './KinPrice';
import GithubIcon from '../../Icons/GihubIcon';

const Container = styled.div`
  background-color: ${({theme}) => theme.color.background.textArea};
`;

const InnerContainer = styled.div`
  ${layoutMixin};
  height: 2.625rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
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

const HeaderTop = () => {
  return (
    <Container>
      <InnerContainer>
        <Anchor
          href={'https://github.com/chancity/kinexplorer.com'}
          target='_blank'
          rel='noreferrer'
        >
          <StyledGithubIcon/>
        </Anchor>
        <KinPrice/>
      </InnerContainer>
    </Container>
  );
};

export default HeaderTop;
