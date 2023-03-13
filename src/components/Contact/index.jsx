import React from "react";
import "./contact.scss";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left-section">
        <h2>Title</h2>
        <h1>Get Contact.</h1>
        <p>
          lorem dolar ipsum samet lir.Lorem solar dolar mundo sip samet aler
          mando.
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
    </div>
  );
};

export default Contact;
