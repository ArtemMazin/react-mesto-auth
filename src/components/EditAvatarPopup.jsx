import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useValidation } from '../hooks/useValidation';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const { isFormValid, errors, setErrors, checkFormValid, handleChangeErrorsValidation } = useValidation();
  const input = useRef();

  useEffect(() => {
    setErrors(false);
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: input.current.value,
    });
  }
  useEffect(() => {
    input.current.value = '';
  }, [isOpen]);

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      buttonName={!isLoading ? 'Сохранить' : 'Сохранение...'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isFormValid}>
      <label>
        <input
          className="popup__input popup__input_type_name"
          name="avatar"
          type="url"
          placeholder="Введите ссылку на изображение"
          required
          ref={input}
          onChange={(e) => {
            checkFormValid(e);
            handleChangeErrorsValidation(e);
          }}
        />
        <span
          className={`popup__input-error  ${!isFormValid ? 'popup__input-error_active' : ''}`}
          id="avatar-error">
          {errors.avatar || ''}
        </span>
      </label>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
