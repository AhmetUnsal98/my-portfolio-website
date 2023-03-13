import React from "react";
import "./hero.scss";
import Navbar from "./Components/Navbar/Navbar";
import {
  IoArrowDown,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
} from "react-icons/io5";
import foto from "../../assets/foto.jpeg";
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <Navbar />
      <div className="hero-wrapper">
        <div className="hero-container-left">
          <div className="info-container">
            <div className="social">
              <IoLogoGithub color="#f1a100" size={35} />
              <IoLogoLinkedin color="#f1a100" size={35} />
              <IoLogoInstagram color="#f1a100" size={35} />
              <IoLogoMedium color="#f1a100" size={35} />
            </div>
            <div className="infos">
              <h1>
                THİNK. MAKE.
                <br /> SOLVE.
              </h1>
              <span>----- Who Am I</span>
              <p>My Name is Ahmet Ünsal The dev.</p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
        <div className="hero-container-right">
          <div className="photo-container glow">
            <img src={foto}></img>
          </div>
        </div>
      </div>
      <div className="scroll-button">
        <IoArrowDown color="#f1a100" size={40} />
      </div>
    </div>
  );
};

export default Hero;
