import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className='header wrapper'>
      <img
        src={logo}
        alt='Логотип проекта: Место'
        className='header__logo'
      />
    </header>
  );
}

export default Header;
