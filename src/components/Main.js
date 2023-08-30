import React, { useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState(``);
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    const promisedUserInfo = api.getInitialUserInfo();
    const promisedInitialCards = api.getInitialCards();

    Promise.all([promisedUserInfo, promisedInitialCards])
      .then(([initialUserInfo, initialCards]) => {
        setCards(initialCards);
        setUserName(initialUserInfo.name);
        setUserDescription(initialUserInfo.about);
        setUserAvatar(initialUserInfo.avatar);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <main className="main">
      {/* <!-- profile --> */}
      <section className="profile">
        <div className="profile__account">
          <button
            className="profile__avatar-edit-btn"
            type="button"
            aria-label="обновить аватар"
            onClick={onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></button>

          {/* <!-- текстовая часть профиля --> */}
          <div className="profile__txt">
            {/* <!-- обертка имени и кнопки --> */}
            <div className="profile__name-wrap">
              <h1 className="profile__name">{userName}</h1>
              <button className="profile__edit-btn" type="button" onClick={onEditProfile}></button>
            </div>
            <p className="profile__about">{userDescription}</p>
          </div>
        </div>
        {/* <!-- button add photo --> */}
        <button className="profile__add-place-btn" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="gallery">
        {cards.map((card) => {
          return <Card card={card} key={card._id} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;
