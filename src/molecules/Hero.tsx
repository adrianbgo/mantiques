import React from "react";
import CTAButton from "../atoms/CTAButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text">
        <h2 className="text--xxxl">Modern Antiques in Sandusky, OH</h2>
        <p className="text--xl">
          Mantiques in Sandusky, OH is a local business that specializes in
          custom-made furniture and home decor. With years of experience, they
          craft high-quality, unique pieces that are sure to add a touch of
          personality to your home.
        </p>
        <CTAButton text="Contact" url="$" />
      </div>
    </div>
  );
};

export default Hero;
