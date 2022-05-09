import React from "react";

// IMAGE
import amex from "../../assets/images/payment-method/amex.svg";
import bkash from "../../assets/images/payment-method/bkash.svg";
import dbbl from "../../assets/images/payment-method/dbbl.svg";
import mastercard from "../../assets/images/payment-method/mastercard.svg";
import nagad from "../../assets/images/payment-method/nagad.svg";
import visa from "../../assets/images/payment-method/visa.svg";

import "./footer.style.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="discover">
        <h1>Discover</h1>
        <div className="links-container">
          <a href="#">Home</a>
          <a href="#">Terms</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="payment-methods">
        <h1>Payment Methods</h1>
        <div className="img-container">
          <img src={amex} alt="amex" />
          <img src={bkash} alt="bkash" />
          <img src={dbbl} alt="dbbl" />
          <img src={mastercard} alt="mastercard" />
          <img src={nagad} alt="nagad" />
          <img src={visa} alt="visa" />
        </div>
      </div>
      <div className="need-help">
        <h1>Need Help ?</h1>
        <p>
          We are Always here for you! Knock us on Messenger anytime or Call our
          Hotline (10AM - 10PM).
        </p>
      </div>
      <div className="contact">
        <h1>Contact</h1>
        <span>info@toitoie.com</span>
        <span>+88 01999037483</span>
        <div className="social-media"></div>
      </div>
    </div>
  );
}
