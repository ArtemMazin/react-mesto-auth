import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useWindowWidth from '../hooks/useWindowWidth';
import logo from '../images/logo.svg';

function Header({ loggedIn, setLoggedIn, email }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMobile } = useWindowWidth();
  const [isMenu, setIsMenu] = useState(false);

  function toggleMenu(params) {
    setIsMenu(!isMenu);
  }

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/sign-in');
  }

  return (
    <div className="header wrapper">
      <div className={`header__profile ${!isMenu ? 'transform' : ''}`}>
        <p className="header__email">{email}</p>
        <button
          type="button"
          className="header__button"
          onClick={signOut}>
          Выйти
        </button>
      </div>

      <header className="header__container">
        <img
          src={logo}
          alt="Логотип проекта: Место"
          className="header__logo"
        />
        {loggedIn ? (
          <div className="header__profile ">
            <div
              className="hamb"
              onClick={toggleMenu}>
              <span className="bar"></span>
            </div>
            <p className="header__email header__profile_hide">{email}</p>
            <button
              type="button"
              className="header__button header__profile_hide"
              onClick={signOut}>
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
    </div>
  );
}

export default Header;
