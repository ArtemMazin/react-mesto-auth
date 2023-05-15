import React from 'react';
import { useClosePopupByOverlayAndEsc } from '../../hooks/useClosePopupByOverlayAndEsc';

function InfoTooltip({ isOpen, onClose, isRegistrationSuccess, errorMessage }) {
  const { closePopupByOverlay } = useClosePopupByOverlayAndEsc(isOpen, onClose);

  return (
    <div
      className={`popup popup_background_light ${isOpen ? 'popup_opened' : ''}`}
      onClick={(e) => {
        closePopupByOverlay(e);
      }}>
      <div className="popup__container popup__container_info">
        <div
          className={`popup__info-icon ${
            isRegistrationSuccess ? 'popup__info-icon_type_success' : 'popup__info-icon_type_fail'
          }`}></div>
        <h2 className="popup__title popup__title_info">
          {isRegistrationSuccess
            ? 'Вы успешно зарегистрировались!'
            : errorMessage || 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
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
export default InfoTooltip;
