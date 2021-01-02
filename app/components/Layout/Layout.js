import React, {forwardRef} from 'react';
import styled from 'styled-components';
import {Header} from './Header';
import {Footer} from './Footer';

const Container = styled.main`

`;

const Layout = forwardRef(({
                             children,
                             useNavigationOpen,
                             useUpdateNavigation,
                             ...props
                           },
                           ref,
) => (
  <>
    <Header
      useNavigationOpen={useNavigationOpen}
      useUpdateNavigation={useUpdateNavigation}
    />
    <Container {...props} ref={ref}>
      {children}
    </Container>
    <Footer />
  </>
));

export default Layout;
