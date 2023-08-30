import React from "react";

function Card({ card, onCardClick }) {
  const { name: cardName, link: cardLink } = card;
  const cardLikes = card.likes.length;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="gallery__element" onClick={handleClick}>
      <button className="gallery__delete" type="button"></button>
      <img className="gallery__img" alt={cardName} src={cardLink} />
      <div className="gallery__caption-wrap">
        <h2 className="gallery__text">{cardName}</h2>
        <div className="gallery__like-wrap">
          <button className="gallery__like" type="button"></button>
          <span className="gallery__like-number">{cardLikes}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
