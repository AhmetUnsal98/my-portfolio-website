import React from "react";
import "./contact.scss";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <div className="left-section">
          <h2>STAY IN TOUCH</h2>
          <h1>Contact.</h1>
          <p>
            Contact me on my social media accounts or fill out the form and send
            it to me
          </p>
        </div>
        <div className="right-section">
          <span>Name</span>
          <input></input>
          <span>E-Mail</span>
          <input></input>
          <span>Message</span>
          <input></input>
          <button>Submit</button>
        </div>
      </motion.div>
      <div className="scrolltop">
        <a style={{ textDecoration: "none", color: "white" }} href="#hero">
          <IoArrowUpCircleOutline size={40} />
        </a>
        <span>Go Up</span>
      </div>
      <div className="footer">
        <span>ahmetunsal.online Tüm Hakları Saklıdır.</span>
      </div>
    </div>
  );
};

export default Contact;
