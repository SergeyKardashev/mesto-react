import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { useState } from "react";

// импортирую объект контекста
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getUserInfo().then((UserInfo) => {
      setCurrentUser(UserInfo);
    });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  // function handleCardDelete(card) {
  //   api.deleteCard(card._id);
  //   // тут нужно размонтировать компонент Card внутри метода then() ?
  // }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const filteredCards = cards.filter((i) => {
          return i !== card;
        });
        setCards(filteredCards);
      })
      .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          cards={cards}
          setCards={setCards}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
      <PopupWithForm
        name="profile-form"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonLabel="Сохранить"
        children={
          <>
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
          </>
        }
      />
      <PopupWithForm
        name="add-place-form"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonLabel="Создать"
        children={
          <>
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
            <input
              className="popup__input popup__input_type_place-url"
              id="place-url"
              name="placeUrl"
              type="url"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="place-url-input-error popup__error"></span>
          </>
        }
      />
      <PopupWithForm
        name="avatar-form"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonLabel="Сохранить"
        children={
          <>
            <input
              className="popup__input popup__input_type_avatar"
              id="avatar"
              name="avatar"
              type="url"
              placeholder="Ссылка на изображение"
              required
            />
            <span className="avatar-input-error popup__error"></span>
          </>
        }
      />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  );
}

export default App;
