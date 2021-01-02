import React from 'react';
import styled, {css} from 'styled-components';
import {
  useNavigationOpen,
  useSearchOpen,
  useUpdateNavigationOpen,
} from '../../../redux/header';
import layoutMixin from '../LayoutMixin';
import Link from 'next/link'
import {HamburgerButton} from '../../Icons';
import {Search} from './Search';

const Container = styled.div`
  display: flex;
  padding: 0.700625rem 0px;
  justify-content: space-between;
  height: 4.5rem;
  ${layoutMixin}
`

const Title = styled.a`
  align-self: center;
  line-height: 1.25rem;
  letter-spacing: .025rem;
  font-size: 1.25rem;
  color: ${({theme}) => theme.color.logoPrimary};
  flex: none;
  ${({searchOpen}) => searchOpen &&
    css`
      display: none;
      @media (min-width: ${({theme}) => theme.sizes.tablet}) {
        display: block;
      }
    `
  }
`

const HeaderTop = () => {
  const navigationOpen = useNavigationOpen();
  const updateNavigation = useUpdateNavigationOpen();
  const searchOpen = useSearchOpen();

  return (
    <Container>
      <Link
        href="/"
        passHref
      >
        <Title searchOpen={searchOpen}>Kin Explorer</Title>
      </Link>
      <Search/>
      <HamburgerButton
        searchOpen={searchOpen}
        onClick={updateNavigation}
        open={navigationOpen}
        data-track="click"
        data-track-location="header"
        data-track-element="link"
        data-track-value={`hamburger menu:${navigationOpen}`}
        aria-expanded={navigationOpen}
        aria-haspopup="true"
        aria-label="Menu"
      >
        <div />
      </HamburgerButton>
    </Container>
  )
}

export default HeaderTop;
