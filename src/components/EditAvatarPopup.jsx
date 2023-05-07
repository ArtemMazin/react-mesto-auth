import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatar,
  onUpdateValid,
  isValid,
  setIsFormValid,
  handleChangeErrorsValidation,
  errors,
  isLoading,
}) {
  const input = useRef();

  useEffect(() => {
    setIsFormValid(false);
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
      isValid={isValid}>
      <label>
        <input
          className="popup__input popup__input_type_name"
          name="avatar"
          type="url"
          placeholder="Введите ссылку на изображение"
          required
          ref={input}
          onChange={(e) => {
            onUpdateValid(e);
            handleChangeErrorsValidation(e);
          }}
        />
        <span
          className={`popup__input-error  ${!isValid ? 'popup__input-error_active' : ''}`}
          id="avatar-error">
          {errors.avatar || ''}
        </span>
      </label>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
