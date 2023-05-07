import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({
  isOpen,
  onClose,
  onAddPlaceSubmit,
  onUpdateValid,
  isValid,
  setIsFormValid,
  handleChangeErrorsValidation,
  errors,
  isLoading,
}) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setIsFormValid(false);
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
      isValid={isValid}>
      <label>
        <input
          className="popup__input popup__input_type_name"
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
            onUpdateValid(e);
            handleChangeErrorsValidation(e);
          }}
        />
        <span
          className={`popup__input-error  ${!isValid ? 'popup__input-error_active' : ''}`}
          id="cards_input_name-error">
          {errors.cards_input_name}
        </span>
        <input
          className="popup__input popup__input_type_job"
          id="link-cards__input"
          type="url"
          name="cards_input_link"
          placeholder="Введите ссылку"
          value={link}
          required
          onChange={(e) => {
            handleChangeLink(e);
            onUpdateValid(e);
            handleChangeErrorsValidation(e);
          }}
        />
        <span
          className={`popup__input-error  ${!isValid ? 'popup__input-error_active' : ''}`}
          id="cards_input_link-error">
          {errors.cards_input_link}
        </span>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
