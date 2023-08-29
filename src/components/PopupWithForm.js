import React from "react";
import { useState } from "react";

function PopupWithForm(props) {

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen===true && "popup_opened"}`}>
      <div className="popup__container">
        <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        <h2 className="popup__heading">{props.title}</h2>
        <form className="popup__form" name={`${props.name}-form`} noValidate>
            
          {props.children}
          
        <button className="popup__submit-button" type="submit">{props.buttonLabel}</button>
        </form>
      </div>
    </div>
    // тут может быть проблема.
    // Класс попапа "popup popup_type_user-profile"
    // Имя формы name="profile-form"
    // Наверное нужно сделать их одинаковыми и равными props.name и в css тоже
    // наверное еще в js идет выбор объектов (форма и ее содержимое) по классу.
    // т.е. придется искать где еще обновить инфу о класах
  );
}
export default PopupWithForm;
