import React from "react";

// COMPONENT
import PackageCard from "../../components/package-card/package-card.component";
import Button from "../../components/button/button.component";

// IMAGE
import placeImage1 from "../../assets/images/sylhet-1.png";

// DATA
import packagesListData from "./data";

// CSS
import "./place-single.style.scss";

const PlaceSingle = ({ placeId }) => {
  return (
    <div className="place-single">
      <div className="img-container">
        <img src={placeImage1} alt="sylhet image" />
      </div>
      <div className="content">
        <h1 className="heading-2 title">Sylhet</h1>
        <p>{placeId}</p>
        <p>
          Tanguar haor is a unique wetland ecosystem of national importance as
          it offers a combined view of submerged forest view, river view, and
          hill views. The Government is committed to preserving its natural
          resources and has taken several steps for the protection of this
          wetland as it was once subjected to over-exploitation of its natural
          resources. But now it has recovered its glory and offers a unique
          lifetime experience. The boat journey, the rapid change of the
          environment, the locals, the amazing and tranquil kingdom of water,
          the amazing hillside view —- all makes a deadly combination so
          charming, that you’ll be bound to return to that place whenever you
          get the chance.
        </p>
      </div>
      <div className="related-package">
        <h2 className="heading-2">Sylhet Packages</h2>
        <div className="card-container">
          {packagesListData
            .filter((data) => data.id <= 4)
            .map((data) => (
              <PackageCard key={data.id} data={data} />
            ))}
          <div className="btn-container">
            <Button text="Discover More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceSingle;
