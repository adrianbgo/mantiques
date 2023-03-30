import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt />
            2434 W. Monroe Street, Sandusky, OH 44870
          </p>
          <p>
            <FaPhone />
            (444) 123-4567
          </p>
          <p>
            <FaEnvelope />
            info@mantiques.com
          </p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaPinterest />
              </a>
            </li>
          </ul>
        </div>
        <div className="newsletter">
          <h3>Join Our Newsletter</h3>
          <form action="#">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
