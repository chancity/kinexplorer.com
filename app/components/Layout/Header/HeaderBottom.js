import React from 'react';
import styled from 'styled-components';
import layoutMixin from './LayoutMixin';
import {useKinPrice} from '../../../hooks/useKinPrice';

const Container = styled.div`
  background-color: ${({theme}) => theme.color.background.textArea};
  height: 3rem;
`;

const InnerContainer = styled.div`
  ${layoutMixin};
  height: 100%;
  padding: 1rem 0;
`;

const KinPrice = () => {
  const {
    data,
    isLoading,
    isError,
  } = useKinPrice();

  return (
    <div>
      KIN/USD: {isLoading ? null : data.prices.latest}
    </div>
  )
}

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
