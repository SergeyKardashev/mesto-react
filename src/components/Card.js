import React from 'react';

function Card(props) {
    
    function handleClick() {
        props.onCardClick(props.card);
      } 

    return (
        <div key={props._id} className="gallery__element" onClick={handleClick}>
        <button className="gallery__delete" type="button"></button>
        <img className="gallery__img"  alt={props.name} src={props.link} />
        <div className="gallery__caption-wrap">
            <h2 className="gallery__text">{props.name}</h2>
            <div className="gallery__like-wrap">
                <button className="gallery__like" type="button"></button>
                <span className="gallery__like-number">{props.likes}</span>
            </div>
        </div>
      </div>
    ); 
}

export default Card;

// onClick = { props.onCardClick }