import React from "react";

function Main(props) {
  return (
    <main className="main">
      {/* <!-- profile --> */}

      <section className="profile">
        <div className="profile__account">
          <button
            className="profile__avatar-edit-btn"
            type="button"
            aria-label="обновить аватар"
            onClick={props.onEditAvatar}
          ></button>

          {/* <!-- текстовая часть профиля --> */}
          <div className="profile__txt">
            {/* <!-- обертка имени и кнопки --> */}
            <div className="profile__name-wrap">
              <h1 className="profile__name">Жак-Ив Кусто</h1>

              {/* <!-- <h1 className="profile__name">Жак-Ив Кусто</h1> --> */}
              <button className="profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
            </div>

            {/* <!-- вношу данные профиля в index.js --> */}
            <p className="profile__about">Исследователь океана</p>
            {/* <!-- <p className="profile__about">Исследователь океана</p> --> */}
          </div>
        </div>
        {/* <!-- button add photo --> */}
        <button className="profile__add-place-btn" type="button" onClick={props.onAddPlace}></button>
      </section>

      {/* <!-- gallery --> */}

      <section className="gallery"></section>
    </main>
  );
}

export default Main;
