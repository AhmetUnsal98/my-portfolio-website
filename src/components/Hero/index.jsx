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
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <Navbar />
      <div className="hero-wrapper">
        <div className="hero-container-left">
          <motion.div
            className="info-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="social">
              <a href="https://github.com/AhmetUnsal98">
                {" "}
                <IoLogoGithub color="#f1a100" size={35} />
              </a>
              <a href="https://www.linkedin.com/in/ahmet-unsal-js/">
                <IoLogoLinkedin color="#f1a100" size={35} />
              </a>
              <a href="https://www.instagram.com/ahmetunsal.js/">
                <IoLogoInstagram color="#f1a100" size={35} />
              </a>
              <a href="https://medium.com/@ahmet.unsal.1998">
                <IoLogoMedium color="#f1a100" size={35} />
              </a>
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
          </motion.div>
        </div>
        <motion.div
          className="hero-container-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="photo-container glow">
            <img src={foto}></img>
          </div>
        </motion.div>
      </div>
      <div className="scroll-button">
        <IoArrowDown color="#f1a100" size={40} />
      </div>
    </div>
  );
};

export default Hero;
