import React from "react";

//styles
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-container">
      <div className="location">
        <img
          src={process.env.PUBLIC_URL + "/images/footer/icon-location.svg"}
          alt="location"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil
          culpa, doloribus id deleniti tempora!
        </p>
      </div>
      <div className="phone">
        <img
          src={process.env.PUBLIC_URL + "/images/footer/icon-phone.svg"}
          alt="phone"
        />
        <p>+1-543-123-4567</p>
      </div>
      <div className="email">
        <img
          src={process.env.PUBLIC_URL + "/images/footer/icon-email.svg"}
          alt="email"
        />
        <p>example@fylo.com</p>
      </div>
    </div>
  );
}

export default Contact;
