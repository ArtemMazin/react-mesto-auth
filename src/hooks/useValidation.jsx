import { useState, useCallback } from 'react';

export function useValidation(params) {
  const [values, setValues] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [inputsValid, setInputsValid] = useState({});
  const [errors, setErrors] = useState({});

  function checkFormValid(e) {
    setIsFormValid(e.target.form.checkValidity());
  }
  //записываем имя инпута и сообщение об ошибке в объект, чтобы потом передать сообщение в <span>
  function handleChangeValidation(e) {
    setIsFormValid(e.target.form.checkValidity());
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    setInputsValid({ ...inputsValid, [e.target.name]: e.target.checkValidity() });
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  //записываем имя инпута и проверку валидности в объект, чтобы использовать подсветку невалидного инпута
  function handleInputsValidation(e) {
    setInputsValid({ ...inputsValid, [e.target.name]: e.target.checkValidity() });
  }
  function handleInputsValue(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsFormValid(newIsValid);
    },
    [setValues, setErrors, setIsFormValid]
  );

  return {
    isFormValid,
    setIsFormValid,
    errors,
    setErrors,
    checkFormValid,
    handleChangeValidation,
    handleInputsValidation,
    inputsValid,
    setInputsValid,
    handleInputsValue,
    resetForm,
    values,
    setValues,
  };
}
