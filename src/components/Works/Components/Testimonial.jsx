import React from "react";
import "./testimonial.scss";
import {
  IoLogoGithub,
  IoSearchCircle,
  IoSearchOutline,
  IoServerOutline,
} from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../../../assets/proje1.png";
import ecommerce from "../../../assets/ecommerce.png";
import getir from "../../../assets/getir.png";
const testimonials = [
  {
    id: "1",
    title: "Clothing E-Commerce Shop",
    link: "https://github.com/AhmetUnsal98/mern-stack-ecommerce",
    project: "https://ecommerce-ahmet-clothing.netlify.app/",
    img: ecommerce,
    desc: "Fullstack e-commerce application with payment system a fully completed project is ready for use",
    tags: [
      "html",
      "css",
      "styled-component",
      "react.js",
      "redux",
      "node.js",
      "mongodb",
      "iyzico",
    ],
  },
  {
    id: "2",
    title: "Resume Creator",
    link: "https://github.com/AhmetUnsal98/make-your-cv",
    project: "https://your-resume-creator.netlify.app/",
    img: resume,
    desc: "This is an application for creating resume. It has progress to creating resume.",
    tags: ["html", "css", "scss", "react", "redux", "typescript"],
  },
  {
    id: "3",
    title: "Getir Clone",
    link: "https://github.com/AhmetUnsal98/getirclonescss",
    project: "https://getir-clone-ahmet.netlify.app",
    img: getir,
    desc: "Getir clone with pixel perfect",
    tags: ["html", "css", "scss", "react"],
  },
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 250 : -250,
      opacity: 0,
      duration: 3.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    duration: 3.5,
  },
};
const Testimonial = ({ index, direction }) => {
  return (
    <div className="testimonial">
      <AnimatePresence initial={false}>
        <motion.div
          variants={variants}
          animate="animate"
          initial="initial"
          exit="exit"
          key={testimonials[index].img}
          custom={direction}
          className="testimonial-wrapper"
        >
          <div className="testimonial-image-container">
            <img src={testimonials[index].img} />
          </div>
          <div className="testimonial-infos">
            <h3>{testimonials[index].title}</h3>
            <p>{testimonials[index].desc}</p>
            <div className="testimonial-tags">
              {testimonials[index].tags.map((tag) => (
                <span>#{tag},</span>
              ))}
            </div>
          </div>

          <div className="github-icon">
            <a href={testimonials[index].link}>
              <IoLogoGithub color="white" size={25} />
            </a>
          </div>

          <div className="search-icon">
            <a href={testimonials[index].project}>Live Demo</a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
