import React from "react";

// IMAGE
import packageImage from "../../assets/images/package-image.png";

import data from "../package-list/data";

import "./package-single.style.scss";

export default function PackageSingle({ packageId }) {
  return (
    <div className="package-single">
      <div className="package-info">
        <h1>Tanguar TOITOIe – The most luxurious house boat at Tanguar haor</h1>
        <div className="image-container">
          <img src={packageImage} alt="package image" />
        </div>
        <div className="overview-container">
          <h3>Overview</h3>
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
        <div className="highlights-container">
          <h3>Heighlight</h3>
          <ul className="highlights-container__list">
            <li className="highlights-container__item">
              Stay at Gol Kanon Eco Resort at Sundarban
            </li>
            <li className="highlights-container__item">
              Stay in the midst of Sundarban with a local family. We have a
              security protocol for you!
            </li>
            <li className="highlights-container__item">
              Exotic local food and cultural programs will surely amaze you.
            </li>
            <li className="highlights-container__item">
              Food is at its best with 7-8 items per meal
            </li>
            <li className="highlights-container__item">
              Experience 3 Day inside the Largest Mangrove
            </li>
            <li className="highlights-container__item">
              Wildlife Expedition by the Forest
            </li>
            <li className="highlights-container__item">
              Silent Boat Ride Inside the Forest
            </li>
            <li className="highlights-container__item">
              Experience Guide & Security
            </li>
            <li className="highlights-container__item">
              Luxurious Ship & Cabin Facilities
            </li>
            <li className="highlights-container__item">
              Explore Creeks & Canals on a Silent Boat Ride
            </li>
            <li className="highlights-container__item">
              Watch Wildlife from the Watch Towers
            </li>
            <li className="highlights-container__item">
              Premium Food with Exotic Local Dishes
            </li>
          </ul>
        </div>
      </div>
      <div className="booking-container">
        <div className="booking-box">
          <div className="booking-box__price">
            <h3>from ৳ 16500</h3>
          </div>
          <div className="booking-box__date">
            <span>Date</span>
            <input type="date" />
          </div>
          <div className="booking-box__clients">
            <div className="box">
              <span>Adults</span>
              <span className="age-range">Age 18+</span>
            </div>
            <div className="increment">
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
          </div>
          <div className="booking-box__clients">
            <div className="box">
              <span>Children</span>
              <span className="age-range">Age 6-17</span>
            </div>
            <div className="increment">
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
          </div>
          <div className="booking-box__btn-container">
            <button>book now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
