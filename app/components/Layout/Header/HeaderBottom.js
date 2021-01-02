import React from 'react';
import styled from 'styled-components';
import layoutMixin from './LayoutMixin';

const Container = styled.div`
  background-color: ${({theme}) => theme.color.background.textArea};
  height: 3rem;
`

const InnerContainer = styled.div`
  ${layoutMixin}
`

const HeaderTop = () => {

  return (
    <Container>
      <InnerContainer>
      </InnerContainer>
    </Container>
  )
}

export default HeaderTop;
