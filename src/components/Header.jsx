import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <header className="header wrapper">
      <img
        src={logo}
        alt="Логотип проекта: Место"
        className="header__logo"
      />
      <div className="header__profile">
        <a
          href="#"
          className="header__email">
          email@mail.com
        </a>
        <button
          type="button"
          className="header__button">
          Выйти
        </button>
      </div>
    </header>
  );
}

export default Header;
