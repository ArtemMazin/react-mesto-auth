import React from 'react';
import { useClosePopupByOverlayAndEsc } from '../../hooks/useClosePopupByOverlayAndEsc';

function ImagePopup({ isOpen, card, onClose }) {
  const { closePopupByOverlay } = useClosePopupByOverlayAndEsc(isOpen, onClose);

  return (
    <div
      className={`popup popup_background_dark ${isOpen ? 'popup_opened' : ''}`}
      id="popup-image"
      onClick={closePopupByOverlay}>
      <div className="popup__image-container">
        <img
          src={isOpen ? card.link : ''}
          className="popup__image"
          alt={isOpen ? card.name : ''}
        />
        <p className="popup__description">{isOpen ? card.name : ''}</p>
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
