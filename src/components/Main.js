import React, { useEffect } from "react";

function Main() {
  useEffect(
    () => {
      // тело эффекта выполнится при монтировании или обновлении компонента
      // в зависимости от массива зависимостей в конце эффекта
      console.log("тело эффекта");
      const avaBtn = document.querySelector(".profile__avatar-edit-btn");
      const profileBtn = document.querySelector(".profile__edit-btn");
      const addBtn = document.querySelector(".profile__add-place-btn");
      // console.log(avaBtn);
      // console.log(profileBtn);
      // console.log(addBtn);
      avaBtn.addEventListener("click", handleEditAvatarClick);
      profileBtn.addEventListener("click", handleEditProfileClick);
      addBtn.addEventListener("click", handleAddPlaceClick);
      return () => {
        console.log("что делать при размонтировании");
      };
    },
    [
      /* массив зависимостей */
    ]
  );

  function handleEditAvatarClick() {
    console.log("AvatarClick");
    const popupAvaEdit = document.querySelector(".popup_type_avatar");
    popupAvaEdit.classList.add("popup_opened");
  }

  function handleEditProfileClick() {
    console.log("ProfileClick");
    const popupProfile = document.querySelector(".popup_type_user-profile");
    popupProfile.classList.add("popup_opened");
  }

  function handleAddPlaceClick() {
    console.log("AddPlaceClick");
    const popupAddPlace = document.querySelector(".popup_type_new-place");
    popupAddPlace.classList.add("popup_opened");
  }

  return (
    <main className="main">
      {/* <!-- profile --> */}

      <section className="profile">
        <div className="profile__account">
          <button className="profile__avatar-edit-btn" type="button" aria-label="обновить аватар"></button>

          {/* <!-- текстовая часть профиля --> */}
          <div className="profile__txt">
            {/* <!-- обертка имени и кнопки --> */}
            <div className="profile__name-wrap">
              <h1 className="profile__name">Жак-Ив Кусто</h1>

              {/* <!-- <h1 className="profile__name">Жак-Ив Кусто</h1> --> */}
              <button className="profile__edit-btn" type="button"></button>
            </div>

            {/* <!-- вношу данные профиля в index.js --> */}
            <p className="profile__about">Исследователь океана</p>
            {/* <!-- <p className="profile__about">Исследователь океана</p> --> */}
          </div>
        </div>
        {/* <!-- button add photo --> */}
        <button className="profile__add-place-btn" type="button"></button>
      </section>

      {/* <!-- gallery --> */}

      <section className="gallery"></section>
    </main>
  );
}

export default Main;
