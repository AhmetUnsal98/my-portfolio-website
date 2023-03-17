import React, { useState } from "react";
import "./works.scss";
import Testimonial from "./Components/Testimonial";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";

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
        <motion.div
          className="works-upper-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <h2>MY WORKS</h2>
          <h1>Projects.</h1>
          <p>
            You can review my own projects. You can ask what you want to add or
            what you want to learn.
          </p>
        </motion.div>
        <motion.div
          className="works-bottom-section"
          initial={{ opacity: 0.5 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
