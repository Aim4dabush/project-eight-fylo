import React from "react";

//styles
import "./Links.scss";

function Links() {
  return (
    <div className="links-container">
      <ul>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Jobs</a>
        </li>
        <li>
          <a href="/">Press</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Terms</a>
        </li>
        <li>
          <a href="/">Privacy</a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
