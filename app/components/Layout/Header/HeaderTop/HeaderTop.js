import React from 'react';
import styled from 'styled-components';
import HamburgerButton from './HamburgerButton';
import {useNavigationOpen, useUpdateNavigation} from '../../../../redux/header';
import layoutMixin from '../LayoutMixin';
import Link from 'next/link'
import useKinPrice from '../../../../hooks/useKinPrice';

const Container = styled.div`
  display: flex;
  padding: 0.700625rem 0px;
  @media (min-width: ${({theme}) => theme.sizes.tablet}) {
    padding: 1.25rem 0px;
  }
  ${layoutMixin}
`

const Title = styled.a`
  align-self: center;
  line-height: 1.25rem;
  letter-spacing: .025rem;
  margin-left: 1rem;
  font-size: 1.25rem;
`

const HeaderTop = () => {
  const navigationOpen = useNavigationOpen();
  const updateNavigation = useUpdateNavigation();

  return (
    <Container>
      <HamburgerButton
        onClick={updateNavigation}
        open={navigationOpen}
        data-track={'click'}
        data-track-location={'header'}
        data-track-element={'link'}
        data-track-value={`hamburger menu:${navigationOpen}`}
        aria-expanded={navigationOpen}
        aria-haspopup={'true'}
        aria-label={'Menu'}
      >
        <div />
      </HamburgerButton>
      <Link href={'/'} passHref>
        <Title>Kin Explorer</Title>
      </Link>
    </Container>
  )
}

export default HeaderTop;
