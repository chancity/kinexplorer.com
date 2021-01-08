import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled, {css} from 'styled-components';
import {SearchCloseIcon, SearchIcon} from '../../../Icons';
import {FloatInput, FloatContainer, FloatLabel} from '../../../Input';
import {
  useSearchOpen, useSearchTerm,
  useUpdateSearchOpen,
  useUpdateSearchTerm,
} from '../../../../redux/header';

const SearchIco = styled(SearchIcon)`
  fill: ${({theme}) => theme.color.text.muted};
  height: 1.166875rem;
  width: 1.166875rem;
`;

const SearchButton = styled.button`
  width: 2.75rem;
  height: 2.75rem;
  top: 0;
  background-color: ${({theme}) => theme.color.background.tertiary};
  position: absolute;
  right: 0;
  border: 0.0625rem solid ${({theme}) => theme.color.background.tertiary};
  border-radius: .25rem;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;

  ${(p) =>
    p.active &&
    `
     svg {
      fill: ${({theme}) => theme.color.interactive.normal};
     }
  `};

  ${(p) =>
    p.open &&
    `
      right: 2.75rem;
  `};
  @media (min-width: ${({theme}) => theme.sizes.tablet}) {
    right: 0;
  }
`;

const CloseButton = styled.button`
  width: 1.949375rem;
  height: 2.75rem;
  top: 0;
  position: absolute;
  display: none;
  right: 0;
  background-color: transparent !important;
  border: none !important;

  ${(p) =>
    p.open &&
    `
     display: block;
  `};

  :hover {
    svg {
      fill: ${({theme}) => theme.color.interactive.hover};
    }
  }

  @media (min-width: ${({theme}) => theme.sizes.tablet}) {
    display: none;
  }
`;

const Form = styled.form`
  width: 100%;
  position: absolute;
  align-self: center;

  input {
    border: 0.0625rem solid ${({theme}) => theme.color.background.tertiary};
    width: calc(100% - 2.75rem);
    max-height: 2.75rem;
    padding-left: 0.5rem;
    background-color: ${({theme}) => theme.color.background.tertiary};
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  ${(p) =>
    p.open &&
    `
      input {
        width: calc(100% - 2.75rem - 2.75rem);
      }
  `};

  @media (min-width: ${({theme}) => theme.sizes.tablet}) {
    input {
      width: calc(100% - 2.75rem);
    }
  }
`;

const Container = styled.div`
  margin: 0 1rem;
  padding: 0.175rem 0;
  position: relative;
  width: 100%;
  ${FloatContainer} {
    padding-bottom: 0;
  }

  ${FloatLabel} {
    top: 0.9rem;
    left: 0.5rem;
  }
  ${({searchOpen}) => searchOpen &&
    css`
      margin: 0;
    `
  };
  @media (min-width: ${({theme}) => theme.sizes.tablet}) {
    margin: 0 1rem;
  }
`;

const Search = () => {
  const [searchedOnce, setSearchedOnce] = useState(false);
  const searchTerm = useSearchTerm();
  const searchOpen = useSearchOpen();
  const updateSearchOpen = useUpdateSearchOpen();
  const updateTermSearch = useUpdateSearchTerm();

  useEffect(() => {
    if(searchOpen && !searchedOnce){
      updateTermSearch('');
      setSearchedOnce(true)
    }
  }, [searchOpen,searchedOnce])

  const openSearch = useCallback(() => {
    !searchOpen && updateSearchOpen(true);

  }, [searchOpen])

  const closeSearch = useCallback(() => {
    searchOpen && updateSearchOpen(false);

  }, [searchOpen])

  const searchCloseButton = useCallback((e) => {
    e.preventDefault();
    closeSearch()
    updateTermSearch('');
  }, [closeSearch])

  const onChange = useCallback((e) => {
    updateTermSearch(e.target.value);
    openSearch();
  }, [openSearch])

  const containerRef = useRef(null);

  return (
    <Container
      ref={containerRef}
      searchOpen={searchOpen}
    >
      <Form
        open={searchOpen}
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <FloatInput
          id="header-search"
          floatLabel="Search..."
          aria-label="Search"
          hideOnActive
          type="search"
          error={false}
          errorMessage=""
          autoComplete="off"
          value={searchTerm}
          onFocus={openSearch}
          onClick={openSearch}
          onChange={onChange}
        />
        <SearchButton
          type="submit"
          active={!!searchTerm}
          open={searchOpen}
          disabled={!searchTerm}
          data-track="click"
          data-track-location="search"
          data-track-element="link"
          data-track-value={`standard search:${  searchTerm}`}
        >
          <SearchIco />
        </SearchButton>
        <CloseButton
          aria-label="Close search"
          open={searchOpen}
          onClick={searchCloseButton}>
          <SearchCloseIcon />
        </CloseButton>
      </Form>
      {/*      <Results open={searchOpen}/> */}
    </Container>
  );
};

export default Search;
