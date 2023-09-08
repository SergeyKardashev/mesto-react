import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;

  // стейт-переменные name и description обновляются в двух случаях:
  // 1) при изменении контекста (текущий юзер)
  // 2) при изменении значения полей ввода (ввод данных в форму или правка)

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  // Изменение контекста (текущий юзер) обновляет стейт-переменные name и description

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  // Обработчик изменения инпута name обновляет стейт-переменную name
  function handleNameChange(e) {
    setName(e.target.value);
  }
  // e => setFirstName(e.target.value)

  // Обработчик изменения инпута about обновляет стейт-переменную Description
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({ name, about: description });
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
