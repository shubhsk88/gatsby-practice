import React from 'react';
import 'normalize.css';
import styled from 'styled-components';

import Footer from './Footer';
import Nav from './Nav';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import stripes from '../assets/images/stripes.svg';

const SiteBorderStyles = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem 10vw, 12rem);
  background: white url(${stripes});
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;
const ContentStyles = styled.div`
  padding: 2rem;
  background: white;
`;

const Layout = ({ children }) => (
  <SiteBorderStyles>
    <Typography />
    <GlobalStyles />

    <ContentStyles>
      <Nav />
      {children}
      <Footer />
    </ContentStyles>
  </SiteBorderStyles>
);

export default Layout;
