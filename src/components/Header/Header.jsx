import React from 'react';
import { HeaderBox, NavList, Link } from './Header.styled';

const Header = () => {
  return (
    <HeaderBox>
      <div className="container">
        <nav>
          <NavList>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/movies'}>Movies</Link>
            </li>
          </NavList>
        </nav>
      </div>
    </HeaderBox>
  );
};

export default Header;
