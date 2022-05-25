import React from "react";

//components
import Contact from "./Contact/Contact";
import Links from "./Links/Links";
import SocialMedia from "./SocialMedia/SocialMedia";

//styles
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-container">
      <img
        className="footer-img"
        src={process.env.PUBLIC_URL + "/images/logo.svg"}
        alt="logo"
      />
      <Contact />
      <Links />
      <SocialMedia />
    </div>
  );
}

export default Footer;
