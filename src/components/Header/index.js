import React from 'react';
import Link from 'gatsby-link';
// import FCCSearch from 'react-freecodecamp-search';

import NavLogo from './components/NavLogo';
import UserState from './components/UserState';

import './header.css';

function Header() {
  return (
    <header>
      <nav id='top-nav'>
        <a className='home-link' href='https://www.freecodecamp.one'>
          <NavLogo />
        </a>
        <ul id='top-right-nav'>
          <li>
            <Link to='/'>课程</Link>
          </li>
          <li>
            <a href='https://chinese.freecodecamp.org/forum/' target='_blank'>论坛</a>
          </li>
          <li>
            <UserState />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
