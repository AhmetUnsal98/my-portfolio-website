import React, { useState } from "react";
import "./navbar.scss";
import {
  IoClose,
  IoCloseCircle,
  IoCloseCircleOutline,
  IoMenuOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";
const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sidebar);
  };
  console.log(sidebar);
  return (
    <div className="navbar">
      <div className="half-side">
        <motion.div
          initial={{ y: -40 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.75 }}
          className="logo"
        >
          <span className="name">Ahmet</span>
          <span className="dev">The Developer</span>
        </motion.div>
        <div className="menu">
          <ul>
            <motion.li
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <a href="#hero">Home</a>
            </motion.li>
            <motion.li
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <a href="#aboutme">About</a>
            </motion.li>
            <motion.li
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4 }}
            >
              <a href="#works">Works</a>
            </motion.li>
            <motion.li
              initial={{ y: -40 }}
              animate={{ y: 0 }}
              transition={{ duration: 1.6 }}
            >
              <a href="#contact">Contact</a>
            </motion.li>
          </ul>
        </div>
      </div>
      <motion.div
        className="half-side"
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className={`mobile-menu ${sidebar === true ? "active" : ""}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <IoClose
            onClick={() => {
              showSideBar();
            }}
            color="white"
            size={30}
            style={{ margin: "1rem" }}
          />
          <div className="mobile-menu-list">
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#aboutme">About</a>
              </li>
              <li>
                <a href="#works">Works</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </motion.div>
        <div
          className="menu-outline-mobile"
          onClick={() => {
            showSideBar();
          }}
        >
          <IoMenuOutline size={35} color="#f1a100" />
        </div>
        <div className="search-outline">
          <IoSearchOutline color="white" size={25} />
        </div>
        <button className="button">Hire now</button>
      </motion.div>
    </div>
  );
};

export default Navbar;
