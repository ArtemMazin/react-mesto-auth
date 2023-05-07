import React from 'react';

function Login() {
  return (
    <div className="auth wrapper">
      <h2 className="auth__title">Вход</h2>
      <form
        className="auth__form"
        noValidate>
        <label>
          <input
            className="auth__input popup__input_type_email "
            type="email"
            placeholder="Email"
            required
            minLength="4"
          />
          <span className="auth__input-error"></span>
          <input
            className="auth__input auth__input_type_password"
            type="password"
            placeholder="Пароль"
            required
            minLength="6"
          />
          <span className="auth__input-error"></span>
        </label>
        <button
          className="auth__button-submit"
          type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
