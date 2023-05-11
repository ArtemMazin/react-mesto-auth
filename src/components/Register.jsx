import { Link } from 'react-router-dom';

function Register({ handleChange, handleSubmitRegistration }) {
  return (
    <div className="auth wrapper">
      <h2 className="auth__title">Регистрация</h2>
      <form
        className="auth__form"
        noValidate
        onSubmit={handleSubmitRegistration}>
        <label>
          <input
            className="auth__input popup__input_type_email "
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <span className="auth__input-error"></span>
          <input
            className="auth__input auth__input_type_password"
            type="password"
            name="password"
            placeholder="Пароль"
            required
            minLength="6"
            onChange={handleChange}
          />
          <span className="auth__input-error"></span>
        </label>
        <button
          className="auth__button-submit"
          type="submit">
          Зарегистрироваться
        </button>
        <Link
          to={'/sign-in'}
          className="auth__link">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;
