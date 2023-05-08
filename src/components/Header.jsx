import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ loggedIn }) {
  const location = useLocation();

  return (
    <header className="header wrapper">
      <img
        src={logo}
        alt="Логотип проекта: Место"
        className="header__logo"
      />
      {loggedIn ? (
        <div className="header__profile">
          <p className="header__email">email@mail.com</p>
          <button
            type="button"
            className="header__button">
            Выйти
          </button>
        </div>
      ) : (
        <Link
          //location.pathname показывает текущее местоположение
          to={location.pathname === '/sign-up' ? '/sign-in' : '/sign-up'}
          className="header__link">
          {location.pathname === '/sign-up' ? 'Войти' : 'Регистрация'}
        </Link>
      )}
    </header>
  );
}

export default Header;
