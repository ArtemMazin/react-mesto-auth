import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as apiAuth from '../utils/apiAuth';

function Login({ handleLogin, setEmail }) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    // if (!formValue.email || !formValue.password) {
    //   return;
    // }
    const { email, password } = formValue;

    apiAuth
      .login(email, password)
      .then((data) => {
        if (data.token) {
          setEmail(email);
          setFormValue({ email: '', password: '' });
          handleLogin();
          navigate('/', { replace: true });
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="auth wrapper">
      <h2 className="auth__title">Вход</h2>
      <form
        className="auth__form"
        noValidate
        onSubmit={handleSubmit}>
        <label>
          <input
            className="auth__input popup__input_type_email"
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
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
