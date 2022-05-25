import React from "react";

//data
import { AboutData } from "../../../Data/AboutData";

//styles
import { AboutCard } from "../../../StyledComponents/Card";

function AboutSections() {
  return (
    <div>
      {AboutData.map((data) => {
        return (
          <AboutCard key={data.title}>
            <img src={data.image} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.info}</p>
          </AboutCard>
        );
      })}
    </div>
  );
}

export default AboutSections;
