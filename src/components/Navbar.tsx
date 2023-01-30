import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="text--xl" id="logo">
        Mantiques
      </p>
      <div className="socials">
        <FaFacebook />
        <FaInstagram />
        <FaTiktok />
        <button>Call Us</button>
      </div>
    </div>
  );
};

export default Navbar;
