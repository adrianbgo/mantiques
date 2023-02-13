import React from "react";
import { Link } from "react-router-dom";
import CTAButton from "../atoms/CTAButton";

const About = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>
        At Mantiques, we believe that every piece of scrap has a story to tell.
        That's why were dedicated to rescuing vintage and antique pieces from
        being forgotten and giving them a new life through careful upcycling and
        repurposing.
      </p>
      <p>Discover our full story and meet our team on the About Page.</p>
      <CTAButton text="Learn More" url="./about" />
    </div>
  );
};

export default About;
