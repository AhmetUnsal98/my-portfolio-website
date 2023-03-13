import React from "react";
import "./aboutme.scss";
import html from "../../assets/html.png";
import css3 from "../../assets/css3.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import SkillCard from "./Components/SkillCard.jsx/SkillCard";
const Aboutme = () => {
  return (
    <div className="aboutme">
      <div className="wrapper">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="progress-container">
            <div className="progress-circle"></div>
            <div className="progress-stick"></div>
          </div>
          <div className="aboutme-info">
            <span>INTRODUCTION</span>
            <h2>Overview.</h2>
            <p>
              Lorem dolar ipsum dolar ipsum samet <br />
              il samet kelar selam semeat solar sosa dolar samet il dir samet
              Lorem dolar ipsum dolar ipsum samet il samet kelar selam semeat
              solar
              <br /> sosa dolar samet il dir samet Lorem dolar ipsum dolar ipsum
              samet il samet kelar
              <br /> selam semeat solar sosa dolar samet il dir samet
            </p>
            <button>Download Cv</button>
          </div>
        </div>
      </div>
      <div className="skill-container">
        <SkillCard title="HTML" photo={html} />
        <SkillCard title="CSS" photo={css3} />
        <SkillCard title="JAVASCRIPT" photo={javascript} />
        <SkillCard title="REACT" photo={react} />
        <SkillCard title="REDUX" photo={redux} />
      </div>
    </div>
  );
};

export default Aboutme;
