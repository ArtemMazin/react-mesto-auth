import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
import { useValidation } from '../../hooks/useValidation';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);
  const {
    isFormValid,
    errors,
    setErrors,
    checkFormValid,
    handleChangeErrorsValidation,
    inputsValid,
    handleInputsValidation,
    setInputsValid,
  } = useValidation();

  useEffect(() => {
    //сбрасываем сообщения с ошибками при открытии попапа
    setErrors({});
    //при открытии попапа инпуты валидны
    setInputsValid({ name: true, job: true });
  }, [isOpen]);

  useEffect(() => {
    //в данном попапе инпуты заполнены при открытии
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      job: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      buttonName={!isLoading ? 'Сохранить' : 'Сохранение...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isFormValid}>
      <label>
        <input
          className={`popup__input ${!inputsValid.name ? 'popup__input_type_error' : ''}`}
          type="text"
          name="name"
          placeholder="Введите имя"
          required
          minLength="2"
          maxLength="40"
          onChange={(e) => {
            handleChangeName(e);
            checkFormValid(e);
            handleChangeErrorsValidation(e);
            handleInputsValidation(e);
          }}
          value={name || ''}
        />
        <span
          className="popup__input-error"
          id="name-error">
          {errors.name || ''}
        </span>
        <input
          className={`popup__input ${!inputsValid.job ? 'popup__input_type_error' : ''}`}
          type="text"
          name="job"
          placeholder="Введите профессию"
          required
          minLength="6"
          maxLength="200"
          onChange={(e) => {
            handleChangeDescription(e);
            checkFormValid(e);
            handleChangeErrorsValidation(e);
            handleInputsValidation(e);
          }}
          value={description || ''}
        />
        <span
          className="popup__input-error"
          id="job-error">
          {errors.job || ''}
        </span>
      </label>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
