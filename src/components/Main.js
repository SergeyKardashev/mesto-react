import React, { useState } from "react";
import api from "../utils/Api";
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('Жак-Ив Кусто1111');
  const [userDescription, setUserDescription] = useState('Исследователь океана1111');
  const [userAvatar, setUserAvatar] = useState(`../images/avatar.png`);
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    async function setInitialUserInfo() { 
      try { const initialUserInfo = await api.setInitialUserInfo();
            setUserName(initialUserInfo.name);
            setUserDescription(initialUserInfo.about);
            setUserAvatar(initialUserInfo.avatar)
      }  catch { console.error('err')}
    } 
    setInitialUserInfo();
  }, [])

  React.useEffect(() => {
    async function getInitialCards() {
      try {
        const initialCards = await api.getInitialCards();
        setCards(initialCards)}
      catch {console.error('err')}
    }
    getInitialCards();
  }, [] );
    
  return (
    <main className="main">      
      {/* <!-- profile --> */}
      <section className="profile">
        <div className="profile__account">
          <button className="profile__avatar-edit-btn" type="button" aria-label="обновить аватар"
            onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}></button>

          {/* <!-- текстовая часть профиля --> */}
          <div className="profile__txt">
            {/* <!-- обертка имени и кнопки --> */}
            <div className="profile__name-wrap">
              <h1 className="profile__name">{userName}</h1>

              {/* <!-- <h1 className="profile__name">Жак-Ив Кусто</h1> --> */}
              <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
            </div>

            {/* <!-- вношу данные профиля в index.js --> */}
            <p className="profile__about">{userDescription}</p>
            {/* <!-- <p className="profile__about">Исследователь океана</p> --> */}
          </div>
        </div>
        {/* <!-- button add photo --> */}
        <button className="profile__add-place-btn" type="button" onClick={props.onAddPlace}></button>
      </section>

      {/* <!-- gallery --> */}
      <section className="gallery" >
        {cards.map((card) => {
          return < Card
            card={card}
            name={card.name} likes={card.likes.length} link={card.link} key={card._id}
            onCardClick={props.onCardClick}
            // onCardClick={() => {
              // console.log('card clicked');
              // handleCardClick(card)
            // }}
          />
        })}
      </section>
    </main>
  );
}

export default Main;