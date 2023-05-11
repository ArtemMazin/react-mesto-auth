import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { useValidation } from '../hooks/useValidation';

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit, isLoading }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const { isFormValid, errors, setErrors, checkFormValid, handleChangeErrorsValidation } = useValidation();

  useEffect(() => {
    setErrors(false);
  }, [isOpen]);

  useEffect(() => {
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
          className="popup__input"
          id="name-cards__input"
          type="text"
          name="cards_input_name"
          placeholder="Введите название"
          value={name}
          required
          minLength="2"
          maxLength="30"
          onChange={(e) => {
            handleChangeName(e);
            checkFormValid(e);
            handleChangeErrorsValidation(e);
          }}
        />
        <span
          className="popup__input-error"
          id="cards_input_name-error">
          {errors.cards_input_name}
        </span>
        <input
          className="popup__input"
          id="link-cards__input"
          type="url"
          name="cards_input_link"
          placeholder="Введите ссылку"
          value={link}
          required
          onChange={(e) => {
            handleChangeLink(e);
            checkFormValid(e);
            handleChangeErrorsValidation(e);
          }}
        />
        <span
          className="popup__input-error"
          id="cards_input_link-error">
          {errors.cards_input_link}
        </span>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
