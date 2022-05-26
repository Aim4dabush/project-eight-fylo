import React, { useState } from "react";

//styles
import "./SignUp.scss";
import { SignUpButton } from "../../StyledComponents/Button";

function SignUp() {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnClick = (e) => {
    e.preventDefault();

    if (email === "") {
      setValid(false);
    } else {
      setValid(true);
      setEmail("");
    }
  };

  return (
    <div className="signup-container">
      <div className="form">
        <h1 className="form-title">Get early access today</h1>
        <p className="form-content">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions , our support team would
          be happy to help you.
        </p>
        <div className="submit-container">
          <div className="input-container">
            <input
              placeholder="email@example.com"
              type="email"
              value={email}
              onChange={handleOnChange}
            />
            {valid ? null : (
              <p className="error">Error, please check your email</p>
            )}
          </div>
          <SignUpButton onClick={handleOnClick}>
            Get Started For Free
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
