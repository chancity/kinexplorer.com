import React from 'react';
import styled from 'styled-components';
import layoutMixin from '../LayoutMixin';
import KinPrice from './KinPrice';

const Container = styled.div`
  background-color: ${({theme}) => theme.color.background.textArea};
`;

const InnerContainer = styled.div`
  ${layoutMixin};
  height: 2.625rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: flex-end;
`;


const HeaderTop = () => {
  return (
    <Container>
      <InnerContainer>
        <KinPrice/>
      </InnerContainer>
    </Container>
  );
};

export default HeaderTop;
