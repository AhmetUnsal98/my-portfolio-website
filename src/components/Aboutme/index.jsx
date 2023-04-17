import React from "react";
import "./aboutme.scss";
import html from "../../assets/html.png";
import css3 from "../../assets/css3.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import sass from "../../assets/sass.png";
import typescript from "../../assets/typescript.png";
import webpack from "../../assets/webpack.png";
import style from "../../assets/style.jpg";
import bootsrap from "../../assets/bootstrap.png";
import git from "../../assets/git.png";
import SkillCard from "./Components/SkillCard.jsx/SkillCard";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <div className="aboutme" id="aboutme">
      <motion.div
        className="wrapper"
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="progress-container">
            <div className="progress-circle"></div>
            <div className="progress-stick"></div>
          </div>
          <div className="aboutme-info">
            <h2>INTRODUCTION</h2>
            <h1>Overview.</h1>
            <p>
              Hi, there My name is Ahmet , i am 24 years old. I am a Computer
              Engineer who loves his job. <br />
              I am actively developing projects in the Frontend side for 2
              years.
              <br /> I am hungry to learn new techonologies and programming
              languages so i am constantly improving my coding skills.
              <br />
              You can see my active skill set below also download my resume and
              contact with me.
            </p>
            <a href="cv.pdf" download="cv.pdf">
              Download Cv
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="skill-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <SkillCard title="HTML" photo={html} />
        <SkillCard title="CSS" photo={css3} />
        <SkillCard title="BOOTSTRAP" photo={bootsrap} />
        <SkillCard title="SASS" photo={sass} />
        <SkillCard title="STYLED-COMPONENTS" photo={style} />
        <SkillCard title="JAVASCRIPT" photo={javascript} />
        <SkillCard title="TYPESCRIPT" photo={typescript} />
        <SkillCard title="REACT" photo={react} />
        <SkillCard title="REDUX" photo={redux} />
        <SkillCard title="WEBPACK" photo={webpack} />
        <SkillCard title="GIT" photo={git} />
      </motion.div>
    </div>
  );
};

export default Aboutme;
