import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useWindowWidth from '../hooks/useWindowWidth';
import logo from '../images/logo.svg';

function Header({ loggedIn, setLoggedIn, email }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useWindowWidth();

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/sign-in');
  }

  return (
    <div className="header wrapper">
      {isMobile ? (
        <div className="header__profile">
          <p className="header__email">{email}</p>
          <button
            type="button"
            className="header__button"
            onClick={signOut}>
            Выйти
          </button>
        </div>
      ) : (
        <></>
      )}
      <header className="header__container">
        <img
          src={logo}
          alt="Логотип проекта: Место"
          className="header__logo"
        />
        {loggedIn ? (
          isMobile ? (
            <div className="hamb">
              <span className="bar"></span>
            </div>
          ) : (
            <div className="header__profile">
              <p className="header__email">{email}</p>
              <button
                type="button"
                className="header__button"
                onClick={signOut}>
                Выйти
              </button>
            </div>
          )
        ) : (
          <Link
            //location.pathname показывает текущее местоположение
            to={location.pathname === '/sign-up' ? '/sign-in' : '/sign-up'}
            className="header__link">
            {location.pathname === '/sign-up' ? 'Войти' : 'Регистрация'}
          </Link>
        )}
      </header>
    </div>
  );
}

export default Header;
