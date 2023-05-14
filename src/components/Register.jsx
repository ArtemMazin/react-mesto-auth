import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useValidation } from '../hooks/useValidation';

function Register({ handleChange, handleSubmitRegistration, formValue }) {
  const {
    isFormValid,
    errors,
    checkFormValid,
    handleChangeErrorsValidation,
    handleInputsValidation,
    inputsValid,
    setInputsValid,
  } = useValidation();

  useEffect(() => {
    //при монтировании инпуты валидны
    setInputsValid({ email: true, password: true });
  }, []);
  const { email, password } = formValue;

  return (
    <div className="auth wrapper">
      <h2 className="auth__title">Регистрация</h2>
      <form
        className="auth__form"
        noValidate
        onSubmit={handleSubmitRegistration}>
        <label>
          <input
            className={`auth__input ${!inputsValid.email ? 'popup__input_type_error' : ''}`}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            required
            onChange={(e) => {
              handleChange(e);
              checkFormValid(e);
              handleChangeErrorsValidation(e);
              handleInputsValidation(e);
            }}
          />
          <span className="auth__input-error">{errors.email || ''}</span>
          <input
            className={`auth__input ${!inputsValid.password ? 'popup__input_type_error' : ''}`}
            type="password"
            name="password"
            value={password}
            placeholder="Пароль"
            required
            minLength="6"
            onChange={(e) => {
              handleChange(e);
              checkFormValid(e);
              handleChangeErrorsValidation(e);
              handleInputsValidation(e);
            }}
          />
          <span className="auth__input-error">{errors.password || ''}</span>
        </label>
        <button
          className={`auth__button-submit ${!isFormValid ? 'auth__button-submit_disabled' : ''}`}
          type="submit"
          disabled={!isFormValid}>
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
