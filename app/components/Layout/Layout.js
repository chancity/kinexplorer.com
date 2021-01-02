import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {Header} from './Header';
import {Footer} from './Footer';

const Container = styled.main`
  min-height: calc(100vh - 192px);
  @media (min-width: ${({theme}) => theme.sizes.tablet}) {
    min-height: calc(100vh - 216px);
  }
`;

const Layout = forwardRef(({
                             children,
                             ...props
                           },
                           ref,
) => (
  <>
    <Header />
    <Container {...props} ref={ref}>
      {children}
    </Container>
    <Footer />
  </>
));

export default Layout;
