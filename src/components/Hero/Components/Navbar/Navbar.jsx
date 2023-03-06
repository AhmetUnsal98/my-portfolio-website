import React, { useState } from "react";
import "./navbar.scss";
import { IoCloseCircle, IoMenuOutline, IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sidebar);
  };
  console.log(sidebar);
  return (
    <div className="navbar">
      <div className="half-side">
        <div className="logo">
          <span className="name">Ahmet</span>
          <span className="dev">The Developer</span>
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="half-side">
        <div className={`mobile-menu ${sidebar === true ? "active" : ""}`}>
          <IoCloseCircle
            onClick={() => {
              showSideBar();
            }}
            color="white"
            size={30}
          />
          <div className="mobile-menu-list">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Works</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Navbar;
