import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { useValidation } from '../../hooks/useValidation';

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit, isLoading }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const {
    isFormValid,
    errors,
    setErrors,
    checkFormValid,
    handleChangeErrorsValidation,
    handleInputsValidation,
    inputsValid,
    setInputsValid,
  } = useValidation();

  useEffect(() => {
    //сбрасываем сообщения с ошибками при открытии попапа
    setErrors(false);
    //при открытии попапа инпуты валидны
    setInputsValid({ name: true, link: true });
    //очищаем инпуты при открытии попапа
    setName('');
    setLink('');
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="cards"
      buttonName={!isLoading ? 'Создать' : 'Создание...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isFormValid}>
      <label>
        <input
          className={`popup__input ${!inputsValid.name ? 'popup__input_type_error' : ''}`}
          type="text"
          name="name"
          placeholder="Введите название"
          value={name}
          required
          minLength="2"
          maxLength="30"
          onChange={(e) => {
            handleChangeName(e);
            checkFormValid(e);
            handleChangeErrorsValidation(e);
            handleInputsValidation(e);
          }}
        />
        <span className="popup__input-error">{errors.name || ''}</span>
        <input
          className={`popup__input ${!inputsValid.link ? 'popup__input_type_error' : ''}`}
          type="url"
          name="link"
          placeholder="Введите ссылку"
          value={link}
          required
          onChange={(e) => {
            handleChangeLink(e);
            checkFormValid(e);
            handleChangeErrorsValidation(e);
            handleInputsValidation(e);
          }}
        />
        <span className="popup__input-error">{errors.link || ''}</span>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
