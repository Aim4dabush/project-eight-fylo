import React from "react";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

//styles
import "./SocialMedia.scss";

function SocialMedia() {
  return (
    <div className="social-media-container">
      <a href="/">
        <FontAwesomeIcon className="brand" icon={faFacebookF} />
      </a>
      <a href="/">
        <FontAwesomeIcon className="brand" icon={faTwitter} />
      </a>
      <a href="/">
        <FontAwesomeIcon className="brand" icon={faInstagram} />
      </a>
    </div>
  );
}

export default SocialMedia;
