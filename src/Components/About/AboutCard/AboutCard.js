import React from "react";

//data
import { AboutData } from "../../../Data/AboutData";

//styles
import { Card } from "../../../StyledComponents/Card";

function AboutCard() {
  return (
    <div>
      {AboutData.map((data) => {
        return (
          <Card key={data.title}>
            <img src={data.image} alt={data.title} />
            <h1>{data.title}</h1>
            <p>{data.info}</p>
          </Card>
        );
      })}
    </div>
  );
}

export default AboutCard;
