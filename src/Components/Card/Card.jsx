import React from "react";
import "./Card.scss";

const Card = ({ name, image, gender, hairColor }) => {
  return (
    <div className="char-card">
      <img className="char-card__image" src={image} alt={name} />
      <div className="char-card__content">
        <h2 className="char-card__heading"> {name} </h2>
        <h3 className="char-card__gender"> {gender} </h3>
        <h3 className="char-card__hairColor">{hairColor} </h3>
      </div>
    </div>
  );
};

export default Card;
