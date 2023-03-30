import React from "react";
import CTAButton from "../atoms/CTAButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text">
        <h2 className="text--xxxl">Modern Antiques in Sandusky, OH</h2>
        <p className="text--xl">
          Mantiques Studio began before it truly existed. It is the
          manifestation of the shared dream of creators Kim and Mark, who have a
          mutual passion for creating where vintage and modern intersect.
          Located in the quaint artisan community of Patina Creek, on beautiful
          Mills Creek on the west end of Sandusky.
        </p>
        <CTAButton text="Contact" url="$" />
      </div>
    </div>
  );
};

export default Hero;
