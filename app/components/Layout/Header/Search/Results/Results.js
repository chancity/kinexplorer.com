import React from 'react';
import styled, {css} from 'styled-components';
import {useSelector} from 'react-redux';
import {useSearchTerm} from '../../../../../redux/header';


const Container = styled.div`
  transition: opacity .15s ease-in-out, visibility .15s ease-in-out;
  background: white;
  position: fixed;
  display: block;
  top: 4.5rem;
  bottom: 0;
  left: 0;
  z-index: 2147483647;
  width: 100%;
  visibility: hidden;
  opacity: 0;

  @media (min-width: ${({theme}) => theme.sizes.tablet}) {
    position: absolute;
    width: 100%;
    top: 3.5rem;
    border-top: 0.0625rem solid #656565;

  }

  ${(p) => p.open && css`
    opacity: 1;
    visibility: visible;
  `};
`;

export const FlexContainer = styled.div`
  display: flex;
  background-color: white;
  padding: 1.5rem;
  @media (min-width: ${({theme}) => theme.sizes.tablet}) {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
  }
`;

const EmptyResultContainer = styled.div`
  padding: 1rem;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const EmptyResultText = styled.p`
  font-size: 1rem;
`;

const Results = ({open}) => {
  const loading = false;
  const searchTerm = useSearchTerm()

  return (
    <Container
      aria-hidden={(!open).toString()}
      open={open}
    >
      {open ?
         !loading && searchTerm ?
          <EmptyResultContainer>
            <EmptyResultText>No results for {searchTerm}</EmptyResultText>
          </EmptyResultContainer>
          :
          <FlexContainer>

          </FlexContainer>
        : null}
    </Container>
  );
};

export default Results;
