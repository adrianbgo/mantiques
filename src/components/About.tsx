import React from "react";
import { Link } from "react-router-dom";
import CTAButton from "../atoms/CTAButton";

const About = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        Mantiques Gallery is an ever-changing landscape of unique creations. We
        strive for the best in cutting-edge, one-of-a-kind custom furniture.
      </p>
      <p>Discover our full story and meet our team on the About Page.</p>
      <CTAButton text="Learn More" url="./about-us" />
    </div>
  );
};

export default About;
