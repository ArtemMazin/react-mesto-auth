import { useState } from 'react';

export function useValidation(params) {
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputsValid, setInputsValid] = useState({});
  const [errors, setErrors] = useState({});

  function checkFormValid(e) {
    setIsFormValid(e.target.form.checkValidity());
  }
  //записываем имя инпута и сообщение об ошибке в объект, чтобы потом передать сообщение в <span>
  function handleChangeErrorsValidation(e) {
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
  }
  //записываем имя инпута и проверку валидности в объект, чтобы использовать подсветку невалидного инпута
  function handleInputsValidation(e) {
    setInputsValid({ ...inputsValid, [e.target.name]: e.target.checkValidity() });
  }

  return {
    isFormValid,
    setIsFormValid,
    errors,
    setErrors,
    checkFormValid,
    handleChangeErrorsValidation,
    handleInputsValidation,
    inputsValid,
    setInputsValid,
  };
}
