import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const Layout = ({ children }) => (
  <>
    <Typography />
    <GlobalStyles />
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
