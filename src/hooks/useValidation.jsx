import { useState } from 'react';

export function useValidation(params) {
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  function checkFormValid(e) {
    setIsFormValid(e.target.form.checkValidity());
  }
  //записываю имя инпута и сообщение об ошибке в объект, чтобы потом передать сообщение в <span>
  function handleChangeErrorsValidation(e) {
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
  }
  return { isFormValid, setIsFormValid, errors, setErrors, checkFormValid, handleChangeErrorsValidation };
}
