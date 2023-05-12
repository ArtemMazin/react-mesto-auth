import React from 'react';

function InfoFailLoginPopup({ isOpen, onClose }) {
  function closePopupOverlay(e) {
    //currentTarget - оверлей
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
  return (
    <div
      className={`popup popup_background_light ${isOpen ? 'popup_opened' : ''}`}
      onClick={(e) => {
        closePopupOverlay(e);
      }}>
      <div className="popup__container popup__container_info">
        <div className="popup__info-icon popup__info-icon_type_fail"></div>
        <h2 className="popup__title popup__title_info">Не удалось войти. Проверьте email и пароль</h2>
        <button
          className="popup__close-btn"
          type="button"
          onClick={() => {
            onClose();
          }}></button>
      </div>
    </div>
  );
}

export default InfoFailLoginPopup;
