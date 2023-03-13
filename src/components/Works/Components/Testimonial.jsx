import React from "react";
import "./testimonial.scss";
import { IoLogoGithub } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

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
              <span>#react</span> <span>#react</span> <span>#react</span>
            </div>
          </div>

          <div className="github-icon">
            <IoLogoGithub color="white" size={25} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
