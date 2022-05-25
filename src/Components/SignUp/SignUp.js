import React from "react";

//styles
import "./SignUp.scss";
import { SignUpButton } from "../../StyledComponents/Button";

function SignUp() {
  return (
    <div className="signup-container">
      <div className="form">
        <h1 className="form-title">Get early access today</h1>
        <p className="form-content">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions , our support team would
          be happy to help you.
        </p>
        <input type="email" placeholder="email@example.com" />
        <SignUpButton>Get Started For Free</SignUpButton>
      </div>
    </div>
  );
}

export default SignUp;
