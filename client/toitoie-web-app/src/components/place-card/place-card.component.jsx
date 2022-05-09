import React from "react";

import "./place-card.style.scss";

export default function PlaceCard({ data }) {
  return (
    <div className="place-card">
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
