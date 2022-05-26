import React from "react";

//styles
import "./AboutSections.scss";
import { AboutCard } from "../../../StyledComponents/Card";

function AboutSections() {
  return (
    <div className="sections-container">
      <div className="section-one">
        <AboutCard className="first-child">
          <img
            src={
              process.env.PUBLIC_URL + "/images/about/icon-access-anywhere.svg"
            }
            alt="Access your files, anywhere"
          />
          <h1>Access your files, anywhere</h1>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </AboutCard>
        <AboutCard>
          <img
            src={process.env.PUBLIC_URL + "/images/about/icon-security.svg"}
            alt="Security you can trust"
          />
          <h1>Security you can trust</h1>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </AboutCard>
      </div>
      <div className="section-two">
        <AboutCard>
          <img
            src={
              process.env.PUBLIC_URL + "/images/about/icon-collaboration.svg"
            }
            alt="Real-time collaboration"
          />
          <h1>Real-time collaboration</h1>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </AboutCard>
        <AboutCard>
          <img
            src={process.env.PUBLIC_URL + "/images/about/icon-any-file.svg"}
            alt="Store any type of file"
          />
          <h1>Store any type of file</h1>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </AboutCard>
      </div>
    </div>
  );
}

export default AboutSections;
