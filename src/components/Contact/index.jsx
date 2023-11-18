import React, { useState, useEffect } from "react";
import "./contact.scss";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { IoRefreshCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const checkCaptcha = (captchaNumber1, captchaNumber2, captchaChecker) => {
    var total = captchaNumber1 + captchaNumber2;
    if (total == captchaChecker) {
      return true;
    } else {
      return false;
    }
  };

  //Captcha variables
  const [captchaNumber1, setCaptchaNumber1] = useState();
  const [captchaNumber2, setCaptchaNumber2] = useState();
  const [captchaChecker, setCaptchaChecker] = useState(null);
  //Generate random number for the captcha
  const generateCaptcha = () => {
    setCaptchaNumber1(Math.floor(Math.random() * 20 + 1));
    setCaptchaNumber2(Math.floor(Math.random() * 8 + 1));
    setCaptchaChecker();
  };
  //Generate captcha on mount
  useEffect(() => {
    generateCaptcha();
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    if (checkCaptcha(captchaNumber1, captchaNumber2, captchaChecker)) {
      emailjs
        .send(
          "service_ywvjjpf",
          "template_zs6fbbm",
          { email: email, name: name, message: message },
          "bZx7eZVSMvJSpOf9g"
        )
        .then(alert("Email sent successfully"));
      generateCaptcha();
    } else {
      generateCaptcha();
      alert("Email did not send");
    }
  };
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
        <form onSubmit={sendEmail} className="right-section">
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required="required"
          ></input>
          <span>E-Mail</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required="required"
          ></input>
          <span>Message</span>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required="required"
          ></input>
          <div className="input-container-captcha">
            <label>
              {captchaNumber1}+{captchaNumber2}= {captchaChecker}
            </label>
            <IoRefreshCircle
              onClick={generateCaptcha}
              className="support-refresh"
              size={30}
              color="pink"
            />
          </div>
          <div className="input-container">
            <input
              value={captchaChecker}
              onChange={(e) => setCaptchaChecker(e.target.value)}
              placeholder="Enter Captcha"
            ></input>
          </div>
          <button type="submit">Submit</button>
        </form>
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
