import React from "react";

// COMPONENT
import PlaceCard from "../../components/place-card/place-card.component";

// DATA
import placeListData from "./data";

import "./place-list.style.scss";

export default function Place() {
  return (
    <div className="place-page">
      <div className="search-container">
        <h1 className="search-container__heading">search place</h1>
        <input
          className="search-container__search-field"
          type="search"
          placeholder="Destination"
        />
      </div>
      <div className="package-list-container">
        {placeListData.map((data) => (
          <PlaceCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
