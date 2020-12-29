import { Link } from 'gatsby';
import React from 'react';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Hot Now</Link>
      </li>
      <li>
        <Link to="/beers">Beers</Link>
      </li>
      <li>
        <Link to="/order">Orders</Link>
      </li>

      <li>
        <Link to="/">Logo</Link>
      </li>
      <li>
        <Link to="/slicemasters">Slice Masters</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
