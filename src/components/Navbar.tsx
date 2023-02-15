import React, { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import CTAButton from "../atoms/CTAButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`navbar ${isOpen ? ".responsive" : ""}`}>
      <p className="navbar-logo">Mantiques</p>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"/about-us"}>About Us</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
      </ul>
      <div className="navbar-social">
        <a href="">
          <FaFacebook />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaInstagram />
        </a>
      </div>
      <a href="#" className="navbar-cta">
        Call Us
      </a>
      <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
