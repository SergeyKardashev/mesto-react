import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;

  // стейт-переменные name и description обновляются в 2 случаях:
  // 1) при изменении контекста currentUser; 2) при изменении значения полей ввода (ввод/правка)
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const currentUser = React.useContext(CurrentUserContext); // Подписка на контекст

  // После загрузки текущего юзера из API его данные будут использованы в управляемых компонентах.
  // Изменение контекста (текущий юзер) обновляет стейт-переменные name и description

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  // Обработчики изменения инпутов name и about обновляют стейт-переменные name и Description
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({ name, about: description }); // Передаю значения управляемых компонентов во внешний обработчик
  }

  return (
    <>
      <PopupWithForm
        name="profile-form"
        title="Редактировать профиль"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonLabel="Сохранить"
        children={
          <>
            <input
              className="popup__input popup__input_type_user-name"
              value={name ? name : ""}
              onChange={handleNameChange}
              id="user-name"
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="user-name-input-error popup__error"></span>
            <input
              className="popup__input popup__input_type_user-about"
              value={description ? description : ""}
              onChange={handleDescriptionChange}
              id="user-about"
              name="about"
              type="text"
              placeholder="Обо мне"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="user-about-input-error popup__error"></span>
          </>
        }
      />
    </>
  );
}

export default EditProfilePopup;
