import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>

      {/* <!-- popup ADD PLACE CARD --> */}

      <div className="popup popup_type_new-place">
        <div className="popup__container">
          <button className="popup__close-button popup__close-button_type_place" type="button"></button>
          <h2 className="popup__heading">Новое место</h2>
          <form className="popup__form popup__form_type_add-place" name="add-place-form" noValidate>
            {/* <!-- place name input --> */}
            <input
              className="popup__input popup__input_type_place-name"
              id="place-name"
              name="placeName"
              type="text"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span className="place-name-input-error popup__error"></span>

            {/* place link input */}
            <input
              className="popup__input popup__input_type_place-url"
              id="place-url"
              name="placeUrl"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="place-url-input-error popup__error"></span>

            {/* <!-- place submit button --> */}
            <button className="popup__submit-button" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>

      {/* <!-- popup EDIT PROFILE --> */}

      <div className="popup popup_type_user-profile">
        <div className="popup__container">
          <button className="popup__close-button popup__close-button_type_profile" type="button"></button>
          <h2 className="popup__heading">Редактировать профиль</h2>
          <form className="popup__form popup__form_type_user-profile" name="profile-form" noValidate>
            {/* <!-- user name input --> */}
            <input
              className="popup__input popup__input_type_user-name"
              id="user-name"
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="user-name-input-error popup__error"></span>

            {/* <!-- about input --> */}
            <input
              className="popup__input popup__input_type_user-about"
              id="user-about"
              name="about"
              type="text"
              placeholder="Обо мне"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="user-about-input-error popup__error"></span>

            {/* <!-- user-profile submit button --> */}
            <button className="popup__submit-button" type="submit">
              Сохранить
            </button>
            {/* <!-- тут нужна активная кнопка тк форма заполнена по дефолту --> */}
          </form>
        </div>
      </div>

      {/* <!-- popup EDIT AVATAR --> */}

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <button className="popup__close-button popup__close-button_type_avatar" type="button"></button>
          <h2 className="popup__heading">Обновить аватар</h2>
          <form className="popup__form popup__form_type_avatar" name="avatar-form" noValidate>
            {/* <!-- avatar URL input --> */}
            <input
              className="popup__input popup__input_type_avatar"
              id="avatar"
              name="avatar"
              type="url"
              placeholder="Ссылка на изображение"
              required
            />
            <span className="avatar-input-error popup__error"></span>

            {/* <!-- user-profile submit button --> */}
            <button className="popup__submit-button" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      {/* <!-- popup ZOOM  --> */}
      {/* <!-- scr was <%=require('./images/dombai.png')%>  --> */}

      <div className="popup popup_type_zoom-image">
        <div className="popup__container popup__container_type_zoom-image">
          <button className="popup__close-button popup__close-button_type_zoom-image" type="button"></button>
          <img className="popup__image-zoom" src="" alt="" />
          <p className="popup__caption">шаблонный текст</p>
        </div>
      </div>

      {/* <!-- popup CONFIRM DELETE --> */}
      {/* <!-- класс для открытия попапа - popup_opened --> */}
      <div className="popup popup_type_confirm-del">
        <div className="popup__container">
          <h2 className="popup__heading">Вы уверены?</h2>
          <button className="popup__close-button popup__close-button_type_confirm-del" type="button"></button>
          <form className="popup__form popup__form_type_confirm-del" name="profile-form" noValidate>
            <button className="popup__submit-button" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>

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
