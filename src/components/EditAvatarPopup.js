import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const { onClose, isOpen, onUpdateAvatar } = props;

  const avatarRef = React.useRef(); // записываю реф - заношу объект, возвращаемый хуком, в переменную

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({ avatar: avatarRef.current.value }); // использую реф для получения значения инпута
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
