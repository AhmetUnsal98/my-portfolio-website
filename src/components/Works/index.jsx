import React, { useState } from "react";
import "./works.scss";
import Testimonial from "./Components/Testimonial";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const testimonials = [
  {
    id: "1",
    title: "Project 1",
    img: " https://images.unsplash.com/photo-1658730335794-c5edd544ccbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    desc: "lorem ipsum dolor sit amet lorem in reprehenderit in voluptate velit esse cillum dolore magna",
    tags: ["react", "redux", "scss"],
  },
  {
    id: "2",
    title: "Project 2",
    img: "https://images.unsplash.com/photo-1642320009030-ff80041e25ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",

    desc: "lorem ipsum dolor sit amet lorem in reprehenderit in voluptate velit esse cillum dolore magna",
    tags: ["react", "redux", "scss"],
  },
  {
    id: "3",
    title: "Project 3",
    img: "https://images.unsplash.com/photo-1572816703439-d8b34c4dc93f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
    desc: "lorem ipsum dolor sit amet lorem in reprehenderit in voluptate velit esse cillum dolore magna",
    tags: ["react", "redux", "scss"],
  },
];
const Works = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(testimonials.length - 1);
      return;
    }
    setIndex(index - 1);
  }
  function nextStep() {
    setDirection(1);
    if (index === testimonials.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }
  return (
    <div className="works" id="works">
      <div className="works-wrapper">
        <div className="works-upper-section">
          <h2>Title</h2>
          <h1>Projects.</h1>
          <p>
            lorem dolar ipsum dolar samet it lorem saten salet minsu dolay yaser
            dolar sum ipsum samet gul sit.lorem dolar ipsum dolar samet it lorem
            saten salet minsu dolay yaser dolar sum ipsum samet gul sit.
          </p>
        </div>
        <div className="works-bottom-section">
          <div className="arrow">
            <IoArrowBack
              onClick={() => {
                prevStep();
              }}
            />
          </div>
          <Testimonial index={index} direction={direction} />
          <div className="arrow">
            <IoArrowForward
              onClick={() => {
                nextStep();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
