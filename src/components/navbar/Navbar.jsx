import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import { Link } from "react-router-dom";
import Model from "react-modal";
import Signup from "./Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const [visible, setVisible] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const setActiveMenu = (menuItem) => {
    setMenu(menuItem);
  };

  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
    const navLinksContainer = document.querySelector(".nav_links_container");
    navLinksContainer.classList.toggle("active");
  };

  const openSignupModal = () => {
    setVisible(true);
  };

  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar_links">
          <div className="menu_icons" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuClicked ? faTimesCircle : faBars} />
          </div>
          <div className="nav_links_container">
            <Link
              to="/"
              className={menu === "Home" ? "active" : ""}
              onClick={() => setActiveMenu("Home")}
            >
              Home
            </Link>
            <Link
              to="/Jobs"
              className={menu === "Jobs" ? "active" : ""}
              onClick={() => setActiveMenu("Jobs")}
            >
              Jobs
            </Link>
            <Link
              to="/Companies"
              className={menu === "Companies" ? "active" : ""}
              onClick={() => setActiveMenu("Companies")}
            >
              Companies
            </Link>
            <Link
              to="/About_us"
              className={menu === "About_us" ? "active" : ""}
              onClick={() => setActiveMenu("About_us")}
            >
              About us
            </Link>
          </div>

          <div className="nav_button">
            <button className="sign_up" onClick={openSignupModal}>
              Sign Up
            </button>
            <Model
              isOpen={visible}
              onRequestClose={() => setVisible(false)}
              style={{ overlay: { zIndex: 9 }, content: { zIndex: 9 } }}
            >
              <Signup />
            </Model>
            <button className="post_ajob">Post a Job</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
