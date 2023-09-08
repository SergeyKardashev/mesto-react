import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const { onClose, isOpen, onUpdateAvatar } = props;

  // записываю реф - заношу объект, возвращаемый хуком, в переменную
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    // использую реф для получения значения инпута
    onUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <PopupWithForm
      name="avatar-form"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonLabel="Сохранить"
      children={
        <>
          <input
            className="popup__input popup__input_type_avatar"
            id="avatar"
            ref={avatarRef}
            name="avatar"
            type="url"
            placeholder="Ссылка на изображение"
            required
          />
          <span className="avatar-input-error popup__error"></span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
