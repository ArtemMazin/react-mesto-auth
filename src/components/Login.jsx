import React from 'react';
import { useValidation } from '../hooks/useValidation';

function Login({ handleChange, handleSubmitLogin }) {
  const { isFormValid, errors, checkFormValid, handleChangeErrorsValidation } = useValidation();

  return (
    <div className="auth wrapper">
      <h2 className="auth__title">Вход</h2>
      <form
        className="auth__form"
        noValidate
        onSubmit={handleSubmitLogin}>
        <label>
          <input
            className="auth__input"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => {
              handleChange(e);
              checkFormValid(e);
              handleChangeErrorsValidation(e);
            }}
          />
          <span className={`auth__input-error  ${!isFormValid ? 'auth__input-error_active' : ''}`}>
            {errors.email || ''}
          </span>
          <input
            className="auth__input"
            type="password"
            name="password"
            placeholder="Пароль"
            required
            minLength="6"
            onChange={(e) => {
              handleChange(e);
              checkFormValid(e);
              handleChangeErrorsValidation(e);
            }}
          />
          <span className={`auth__input-error  ${!isFormValid ? 'auth__input-error_active' : ''}`}>
            {errors.password || ''}
          </span>
        </label>
        <button
          className={`auth__button-submit ${!isFormValid ? 'auth__button-submit_disabled' : ''}`}
          type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
