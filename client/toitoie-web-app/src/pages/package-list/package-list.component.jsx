import React from "react";

// COMPONENT
import PackageCard from "../../components/package-card/package-card.component";

// DATA
// import packagesListData from "./data";

import "./package-list.style.scss";

export default function Package({ collectPackageId, pkgData }) {
  // api end point
  return (
    <div className="package-page">
      <div className="search-container">
        <h1 className="search-container__heading">search package</h1>
        <input
          className="search-container__search-field"
          type="search"
          placeholder="Destination"
        />
      </div>
      {/* package list */}
      <div className="package-list-container">
        {pkgData.map((data) => (
          <PackageCard
            collectPackageId={collectPackageId}
            key={data.id}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}
