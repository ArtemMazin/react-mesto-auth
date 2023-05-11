import { useEffect } from 'react';

function PopupWithForm({ isOpen, name, title, onSubmit, children, isValid, buttonName, onClose }) {
  //закрытие попапа по esc
  useEffect(() => {
    if (!isOpen) return;
    function closeByEscape(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  //закрытие попапа по оверлею
  function closePopupOverlay(e) {
    //currentTarget - оверлей
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`popup popup_background_light ${isOpen ? 'popup_opened' : ''}`}
      id={`popup-${name}`}
      onClick={closePopupOverlay}>
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__form"
          name={`form_${name}`}
          id={`form-${name}`}
          noValidate
          onSubmit={onSubmit}>
          {children}
          <button
            className={`popup__button-submit ${!isValid ? 'popup__button-submit_disabled' : ''}`}
            type="submit"
            disabled={!isValid}>
            {buttonName}
          </button>
        </form>

        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}></button>
      </div>
    </div>
  );
}
export default PopupWithForm;
