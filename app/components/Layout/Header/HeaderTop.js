import React from 'react';
import styled from 'styled-components';
import HamburgerButton from './HamburgerButton';
import {useNavigationOpen, useUpdateNavigation} from '../../../redux/header';
import layoutMixin from './LayoutMixin';
import Link from 'next/link'

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
`

const HeaderTop = () => {

  return (
    <Container>
      <HamburgerButton
        onClick={useUpdateNavigation()}
        open={useNavigationOpen()}
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
