import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_zoom-image">
      <div className="popup__container popup__container_type_zoom-image">
        <button className="popup__close-button popup__close-button_type_zoom-image" type="button"></button>
        <img className="popup__image-zoom" src="" alt="" />
        <p className="popup__caption">шаблонный текст</p>
      </div>
    </div>
  );
}

export default ImagePopup;
