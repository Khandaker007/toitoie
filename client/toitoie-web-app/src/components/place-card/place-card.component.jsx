import React from "react";

import { useNavigate } from "react-router-dom";

import "./place-card.style.scss";

export default function PlaceCard({ data, collectPlaceId }) {
  let navigate = useNavigate();

  const clickHandler = () => {
    collectPlaceId(data.id);
    navigate("/place-single");
  };
  return (
    <div className="place-card" onClick={clickHandler}>
      <div className="place-card__image-container">
        <img src={data.image} alt="place image" />
      </div>
      <h3 className="place-card__title">{data.title}</h3>
      <div className="place-card__description">
        <p>{data.description}</p>
      </div>
    </div>
  );
}
