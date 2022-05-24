import React from "react";

//styles
import "./Header.scss";

function Header() {
  return (
    <div className="header-container">
      <div className="nav-logo">
        <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo" />
      </div>
      <ul>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Team</a>
        </li>
        <li>
          <a href="/">Sign In</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
