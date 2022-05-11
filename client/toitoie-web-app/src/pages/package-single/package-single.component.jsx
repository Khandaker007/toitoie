import React from "react";
import { Link } from "react-router-dom";

// COMPONENT
import Button from "../../components/button/button.component";
import PackageCard from "../../components/package-card/package-card.component";

// IMAGE
import packageImage from "../../assets/images/package-image.png";

import packagesListData from "../package-list/data";

import "./package-single.style.scss";

export default function PackageSingle({ packageId, data}) {
  let data1 = data.filter((dataSingle) => dataSingle.id === packageId);
  console.log(`package data${data1}`)
  return (
    <div className="package-single">
      <div className="package-info">
        <h1>{data1[0].title}</h1>
        <div className="image-container">
          <img src={data1[0].image} alt="package image" />
        </div>
        <div className="overview-container">
          <h3>Overview</h3>
          <p>{data1[0].overview1}</p>
          <br/>
          <p>{data1[0].overview2}</p>
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
        <div className="related-package">
          <h2 className="heading-2">Popular Packages</h2>
          <div className="card-container1">
            {packagesListData
              .filter((data) => data.id <= 4)
              .map((data) => (
                <PackageCard key={data.id} data={data} />
              ))}
            <div className="btn-container">
              <Link to='/package-list' className="link-btn">
                <Button text="Discover More" />
              </Link>
            </div>
          </div>
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
