import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaHamburger,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Brand from "../atoms/Brand";
import CTAButton from "../atoms/CTAButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="menu-icon" onClick={toggleNavBar}>
          <FaHamburger />
        </div>
        <div className={`nav-elements ${isOpen && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
