import React from "react";
import { Link } from "react-router-dom";

// COMPONENT
import Button from "../../components/button/button.component";
import OfferCard from "../../components/offer-card/offer-card.component";
import PackageSlider from "../../components/slider/package-slider.component";
import PackageCard from "../../components/package-card/package-card.component";

// IMAGE
import heroImageMain from "../../assets/images/hero-img.png";
import heroImageSmall from "../../assets/images/hero-img-sm.png";

// Data
import packagesData from "./data";

import "./home.style.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero--container-left">
          <h1 className="heading">
            <span className="heading-2 clr-gradient">We are ToiToie.</span>
            <span className="heading-1 clr-primary">
              We <span className="heading-1 clr-gradient">Take Care</span> of
              your Trip.
            </span>
          </h1>
          <div className="box">
            <p>
              ToiToiE (Ex- Exploit) is a digital travel company & a one-stop
              service platform for hassle-free travel. We share the most
              authentic travel stories through video documentation and immerse
              you into this meaningful kaleidoscope. Let's travel without
              trouble!
            </p>
          </div>
          <div className="btn-container">
            <Link to="/package-list" className="btn-link">
              <Button text="Book a trip!" />
            </Link>
          </div>
        </div>
        <div className="home__hero--container-right">
          <div className="img-container">
            <img src={heroImageMain} alt="hero image" />
          </div>
          <div className="img-container-sm">
            <img src={heroImageSmall} alt="hero image" />
          </div>
        </div>
      </div>
      <div className="home__offer">
        <h1 className="home__offer--heading heading-1 mb-4">
          What we <span className="clr-gradient">Offer</span>
        </h1>
        <div className="home__offer--card-container">
          <OfferCard text="Various Destinations" number="1" />
          <OfferCard text="Everything is Included" number="2" />
          <OfferCard text="Affordable Prices" number="3" />
        </div>
      </div>
      <div className="home__packages">
        <div className="home__packages--container-text">
          <h1 className="heading-1">
            <span className="heading-part-1">Choose your</span>
            <span className="heading-part-2">Package</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit tortor
            nec tristique erat massa, fringilla libero volutpat. Elementum eget
            mi sit dolor, lorem quam mauris. Ornare amet, sit urna pellentesque
            nunc vestibulum pulvinar.
          </p>
        </div>
        <div className="home__packages--container-slider">
          <PackageSlider />
        </div>
      </div>
      <h1 className="heading-1 heading-best">Best: Experiences</h1>
      <div className="home__best-experience">
        {packagesData.map((data) => (
          <PackageCard key={data.id} data={data} />
        ))}
        <div className="btn-container">
          <Button text="View More" />
        </div>
      </div>
    </div>
  );
}
