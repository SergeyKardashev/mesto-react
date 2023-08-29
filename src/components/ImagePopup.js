import React from "react";

function ImagePopup(props) {
    console.log('ImagePopup says props.card: ');
    console.log(props.card);
    
  return (
    <div className={`popup popup_type_zoom-image ${props.card && "popup_opened"}`}>
      <div className="popup__container popup__container_type_zoom-image">
        <button className="popup__close-button popup__close-button_type_zoom-image" type="button" onClick={props.card && props.onClose}></button>
        <img className="popup__image-zoom" src={props.card && props.card.link} alt={props.card && props.card.name} />
        <p className="popup__caption">{props.card && props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;

// className="popup popup_type_zoom-image"
// popup_opened