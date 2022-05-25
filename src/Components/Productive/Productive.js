import React from "react";

//styles
import "./Productive.scss";

function Productive() {
  return (
    <div className="productive-container">
      <img
        className="productive-img"
        src={
          process.env.PUBLIC_URL + "/images/illustration-stay-productive.png"
        }
        alt="stay productive"
      />
      <h1 className="productive-title">Stay productive, wherever you are</h1>
      <p className="productive-content">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p className="productive-content">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <div className="productive-link">
        <a href="/">
          See how Fylo works{" "}
          <img
            src={process.env.PUBLIC_URL + "/images/icon-arrow.svg"}
            alt="arrow"
          />
        </a>
      </div>
    </div>
  );
}

export default Productive;
