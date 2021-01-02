import React from 'react';
import styled, {css} from 'styled-components';
import {useKinPrice} from '../../../hooks/useKinPrice';
import ContentLoader from 'react-content-loader';
import {theme} from '../../../core/theme/theme';

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={'100%'}
    height={'1.625rem'}
    backgroundColor={theme.color.background.accent}
    foregroundColor={theme.color.background.primary}
    {...props}
  >
    <rect x='0' y='0' rx='3' ry='3' width={'100%'} height={'100%'} />
  </ContentLoader>
);

function round(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}


const Container = styled.div`
  display: inline-flex;
  align-items: center;
  max-width: 10.9375rem;
  min-width: 9.75rem;
  line-height: 1.25rem;
  letter-spacing: .025rem;
`;

const PercentageChange = styled.div`
  margin-left: 1rem;
  color: #fff;
  padding: 0.1875rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  ${({down}) =>
    down ?
      css`background-color: ${({theme}) => theme.color.accent.red};` :
      css`background-color: ${({theme}) => theme.color.accent.green};`
  }
`;

const KinPrice = () => {
  const {
    data,
    isLoading,
  } = useKinPrice();

  //data.prices.day.percent_change
  return (
    <Container>
      {isLoading ?
        <MyLoader /> :
        (
          <>
            <div>
              {`$${round(data.prices.latest, 6)}`}
            </div>
            <PercentageChange down={data.prices.day.percent_change < 0}>
              {`${round(data.prices.day.percent_change * 100, 2)}%`}
            </PercentageChange>
          </>
        )

      }
    </Container>
  );
};

export default KinPrice;
