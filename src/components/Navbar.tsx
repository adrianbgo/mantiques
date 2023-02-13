import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import CTAButton from "../atoms/CTAButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="text--xl" id="logo">
        Mantiques
      </p>
      <a href="/home">Home</a>
      <a href="/about">About Us</a>
      <a href="/products">Products</a>
      <a href="/contact">Contact Us</a>
      <a href="/blog">Blog</a>
      <div className="socials">
        <FaFacebook />
        <FaInstagram />
        <FaTiktok />
        <CTAButton text="Call Us" url="#" />
      </div>
    </div>
  );
};

export default Navbar;
