import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ loggedIn, setLoggedIn, email }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    //при входе/выходе меню должно быть изначально скрыто
    setIsMenu(false);
  }, [loggedIn]);

  function toggleMenu(params) {
    setIsMenu(!isMenu);
  }

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/sign-in');
  }

  return (
    <header className="header">
      <div className={`header__profile-hide  ${isMenu ? 'header__profile-hide_active' : ''}`}>
        <p className="header__email">{email || ''}</p>
        <button
          type="button"
          className="header__button"
          onClick={signOut}>
          Выйти
        </button>
      </div>
      <div className="header__content">
        <img
          src={logo}
          alt="Логотип проекта: Место"
          className="header__logo"
        />
        {loggedIn ? (
          <>
            <div
              className="header__menu-hamburger"
              onClick={toggleMenu}>
              <span className="header__menu-bar"></span>
            </div>

            <div className="header__profile header__profile_mobile">
              <p className="header__email">{email}</p>
              <button
                type="button"
                className="header__button"
                onClick={signOut}>
                Выйти
              </button>
            </div>
          </>
        ) : (
          <Link
            //location.pathname показывает текущее местоположение
            to={location.pathname === '/sign-up' ? '/sign-in' : '/sign-up'}
            className="header__link">
            {location.pathname === '/sign-up' ? 'Войти' : 'Регистрация'}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
