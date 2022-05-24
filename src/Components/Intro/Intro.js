import React from "react";

//styles
import "./Intro.scss";
import { IntroButton } from "../../StyledComponents/Button";

function Intro() {
  return (
    <div className="intro-container">
      <img
        className="intro-img"
        src={process.env.PUBLIC_URL + "/images/illustration-intro.png"}
        alt="intro"
      />
      <h1 className="intro-title">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="intro-content">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <IntroButton>Get Started</IntroButton>
    </div>
  );
}

export default Intro;
