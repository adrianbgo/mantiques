import React, { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import CTAButton from "../atoms/CTAButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={`navbar ${isOpen ? ".responsive" : ""}`}>
      <p className="navbar-logo">Mantiques</p>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
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
