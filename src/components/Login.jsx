import { useEffect } from 'react';
import { useValidation } from '../hooks/useValidation';

function Login({ handleChange, handleSubmitLogin }) {
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

  return (
    <div className="auth wrapper">
      <h2 className="auth__title">Вход</h2>
      <form
        className="auth__form"
        noValidate
        onSubmit={handleSubmitLogin}>
        <label>
          <input
            className={`auth__input ${!inputsValid.email ? 'popup__input_type_error' : ''}`}
            type="email"
            name="email"
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
