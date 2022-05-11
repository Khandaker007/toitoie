import React from "react";

// IMAGES
import image from "../../assets/images/about-us.jpg";

// CSS
import "./about.style.scss";

const About = () => {
  return (
    <div className="about">
      <div className="img-container">
        <img src={image} alt="team image" />
      </div>
      <div className="content">
        <p>
          Our story is not just our symbol. It's something beyond our emblem.
          We're known by the ethics we maintain, the authentic services we
          provide with, the roads we take together, the unique privileges we
          bestow, the colourful song we love, the game we play and the moments
          we create. We're to find by the choices you and we both make.
        </p>
        <p>
          We're the only one-stop digital solution for inbound tourism.
          personalize 'your trip' and we'll provide you with a guide at the
          cheapest cost. We are experts & well capable of implementing offline
          and online touristic services exclusively for Bangladeshi & foreign
          tourist.
        </p>
        <p>
          As the only registered travel company, we're constantly in search of
          travellers and guides like you with exploring zeal and passion for
          adventure. Our story has just started as a multi-national tourism
          facilitator and working with foreign and Bangladeshi tourists through
          demonstration of food, place, culture and illustration of video guide
          documentation. We are currently operating our HQ in Dhaka (Dacca),
          Bangladesh.
        </p>
      </div>
    </div>
  );
};

export default About;
