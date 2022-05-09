import React from "react";

// ICON
import starIcon from "../../assets/icons/star-icon.png";

import "./package-card.style.scss";

export default function PackageCard({ data }) {
  return (
    <div className="package-card">
      <div className="package-card__image-container">
        <img src={data.image} alt="package image" />
      </div>
      <h3 className="package-card__title">{data.title}</h3>
      <div className="package-card__review-container">
        <div className="package-card__review-container--star">
          <img src={starIcon} alt="star icon" />
          <img src={starIcon} alt="star icon" />
          <img src={starIcon} alt="star icon" />
          <img src={starIcon} alt="star icon" />
          <img src={starIcon} alt="star icon" />
        </div>
        <div className="package-card__review-container--number">
          <p>{data.review} reviews</p>
        </div>
      </div>
      <div className="package-card__price-container">
        <p>
          {data.day} Days & {data.night} Night
        </p>
        <p>Price {data.price} tk</p>
      </div>
    </div>
  );
}
