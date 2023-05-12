import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { useValidation } from '../../hooks/useValidation';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
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
  const input = useRef();

  useEffect(() => {
    //сбрасываем сообщения с ошибками при открытии попапа
    setErrors(false);
    //очищаем инпут при открытии попапа
    input.current.value = '';
    //при открытии попапа инпут валиден
    setInputsValid({ avatar: true });
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: input.current.value,
    });
  }

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
          className={`popup__input ${!inputsValid.avatar ? 'popup__input_type_error' : ''}`}
          name="avatar"
          type="url"
          placeholder="Введите ссылку на изображение"
          required
          ref={input}
          onChange={(e) => {
            checkFormValid(e);
            handleChangeErrorsValidation(e);
            handleInputsValidation(e);
          }}
        />
        <span
          className="popup__input-error"
          id="avatar-error">
          {errors.avatar || ''}
        </span>
      </label>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
