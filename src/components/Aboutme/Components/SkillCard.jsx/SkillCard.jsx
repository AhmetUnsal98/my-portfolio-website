import React from "react";
import "./skillcard.scss";

const SkillCard = ({ photo, title }) => {
  return (
    <div className="skill-card">
      <div className="skill-img-container">
        <img src={photo}></img>
      </div>
      <div className="skill-infos">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SkillCard;
