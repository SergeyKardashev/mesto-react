import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditProfileClick() {setIsEditProfilePopupOpen(true)}
  function handleAddPlaceClick() {setIsAddPlacePopupOpen(true)}
  function handleEditAvatarClick() { setIsEditAvatarPopupOpen(true) }
  function closeAllPopups() { setIsEditProfilePopupOpen(false); setIsAddPlacePopupOpen(false); setIsEditAvatarPopupOpen(false); }
  
  return ( <>
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />
    </div>
    <PopupWithForm name="profile-form" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} children={ <>
      <input className="popup__input popup__input_type_user-name" id="user-name" name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required  />
      <span className="user-name-input-error popup__error"></span>
      <input className="popup__input popup__input_type_user-about" id="user-about" name="about" type="text" placeholder="Обо мне" minLength="2" maxLength="200" required />
      <span className="user-about-input-error popup__error"></span> </>} />
    
    <PopupWithForm name="add-place-form" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} children={<> 
      <input className="popup__input popup__input_type_place-name" id="place-name" name="placeName" type="text" placeholder="Название" minLength="2" maxLength="30" required/>
      <span className="place-name-input-error popup__error"></span>
      <input className="popup__input popup__input_type_place-url" id="place-url" name="placeUrl" type="url" placeholder="Ссылка на картинку" required/>
      <span className="place-url-input-error popup__error"></span>
      {/* <button className="popup__submit-button" type="submit">Создать</button> */}
    </>} />

    <PopupWithForm name='avatar-form' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} children={<>
      <input className="popup__input popup__input_type_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на изображение" required/>
      <span className="avatar-input-error popup__error"></span>  </>} />

    <template id="card">
      <div className="gallery__element">
        <button className="gallery__delete" type="button"></button>
        <img className="gallery__img" src="" alt="" />
        <div className="gallery__caption-wrap">
          <h2 className="gallery__text">шаблонный текст</h2>
          <div className="gallery__like-wrap">
            <button className="gallery__like" type="button"></button>
            <span className="gallery__like-number">99</span>
          </div>
        </div>
      </div>
    </template>
  </>
  );
}

export default App;

// let classNameEditProfilePopup = `popup popup_type_user-profile ${isEditProfilePopupOpen && "popup_opened"}`;
// let classNameAddPlacePopup = `popup popup_type_new-place ${isAddPlacePopupOpen && "popup_opened"}`;
// let classNameAvatarPopup = `popup popup_type_avatar ${isEditAvatarPopupOpen && "popup_opened"}`;
//
//
//
//
//
// useEffect(
//   () => {
//     // этот юз эфект и 3 хэндлера перенес из мейна
//     // тело эффекта выполнится при монтировании или обновлении компонента
//     // в зависимости от массива зависимостей в конце эффекта
//     console.log("тело эффекта");
//     const avaBtn = document.querySelector(".profile__avatar-edit-btn");
//     const profileBtn = document.querySelector(".profile__edit-btn");
//     const addBtn = document.querySelector(".profile__add-place-btn");
//     // console.log(avaBtn);
//     // console.log(profileBtn);
//     // console.log(addBtn);
//     avaBtn.addEventListener("click", handleEditAvatarClick);
//     profileBtn.addEventListener("click", handleEditProfileClick);
//     addBtn.addEventListener("click", handleAddPlaceClick);
//     return () => {
//       console.log("что делать при размонтировании");
//     };
//   },
//   [
//     /* массив зависимостей */
//   ]
// );

//
//
//
//

// <div className={classNameEditProfilePopup}>
//   <div className="popup__container">
//     <button className="popup__close-button popup__close-button_type_profile" type="button"></button>
//     <h2 className="popup__heading">Редактировать профиль</h2>
//     <form className="popup__form popup__form_type_user-profile" name="profile-form" noValidate>
//       {/* <!-- user name input --> */}
//       <input
//         className="popup__input popup__input_type_user-name"
//         id="user-name"
//         name="name"
//         type="text"
//         placeholder="Имя"
//         minLength="2"
//         maxLength="40"
//         required
//       />
//       <span className="user-name-input-error popup__error"></span>

//       {/* <!-- about input --> */}
//       <input
//         className="popup__input popup__input_type_user-about"
//         id="user-about"
//         name="about"
//         type="text"
//         placeholder="Обо мне"
//         minLength="2"
//         maxLength="200"
//         required
//       />
//       <span className="user-about-input-error popup__error"></span>

//       {/* <!-- user-profile submit button --> */}
//       <button className="popup__submit-button" type="submit">
//         Сохранить
//       </button>
//       {/* <!-- тут нужна активная кнопка тк форма заполнена по дефолту --> */}
//     </form>
//   </div>
// </div>;
//
//
//
//
//
// {
//   /* <!-- popup ZOOM  --> */
// }
// {
//   /* <!-- scr was <%=require('./images/dombai.png')%>  --> */
// }
// <div className="popup popup_type_zoom-image">
//   <div className="popup__container popup__container_type_zoom-image">
//     <button className="popup__close-button popup__close-button_type_zoom-image" type="button"></button>
//     <img className="popup__image-zoom" src="" alt="" />
//     <p className="popup__caption">шаблонный текст</p>
//   </div>
// </div>;
// {
//   /* <!-- popup CONFIRM DELETE --> */
// }
// {
//   /* <!-- класс для открытия попапа - popup_opened --> */
// }
// <div className="popup popup_type_confirm-del">
//   <div className="popup__container">
//     <h2 className="popup__heading">Вы уверены?</h2>
//     <button className="popup__close-button popup__close-button_type_confirm-del" type="button"></button>
//     <form className="popup__form popup__form_type_confirm-del" name="profile-form" noValidate>
//       <button className="popup__submit-button" type="submit">
//         Да
//       </button>
//     </form>
//   </div>
// </div>;
