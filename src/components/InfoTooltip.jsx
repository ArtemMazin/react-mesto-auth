import React from 'react';

function InfoTooltip({ isOpen, onClose, isLoading, navigateToLogin, isRegistrationSuccess }) {
  function closePopupOverlay(e) {
    //currentTarget - оверлей
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className={`popup popup_background_light ${isOpen ? 'popup_opened' : ''}`}
      // className="popup popup_background_light popup_opened"
      onClick={(e) => {
        closePopupOverlay(e);
        navigateToLogin();
      }}>
      <div className="popup__container popup__container_info-tool-tip">
        <div
          className={`popup__info-tool-tip-icon ${
            isRegistrationSuccess ? 'popup__info-tool-tip-icon_type_success' : 'popup__info-tool-tip-icon_type_fail'
          }`}></div>
        <h2 className="popup__title popup__title_info-tool-tip">
          {isRegistrationSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
        <button
          className="popup__close-btn"
          type="button"
          onClick={() => {
            onClose();
            navigateToLogin();
          }}></button>
      </div>
    </div>
  );
}
export default InfoTooltip;
