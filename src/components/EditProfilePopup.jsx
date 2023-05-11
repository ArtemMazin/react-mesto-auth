import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
import { useValidation } from '../hooks/useValidation';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);
  const { isFormValid, errors, setErrors, checkFormValid, handleChangeErrorsValidation } = useValidation();

  useEffect(() => {
    setErrors({});
  }, [isOpen]);

  useEffect(() => {
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
          className="popup__input"
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
          }}
          value={name || ''}
        />
        <span
          className={`popup__input-error  ${!isFormValid ? 'popup__input-error_active' : ''}`}
          id="name-error">
          {errors.name || ''}
        </span>
        <input
          className="popup__input"
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
          }}
          value={description || ''}
        />
        <span
          className={`popup__input-error  ${!isFormValid ? 'popup__input-error_active' : ''}`}
          id="job-error">
          {errors.job || ''}
        </span>
      </label>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
