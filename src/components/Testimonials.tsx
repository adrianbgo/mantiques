import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <figure className="testimonial">
        <blockquote>
          Mantiques did an amazing job at my home and I could not have asked for
          better results. Their craftsmanship is one of a kind.
          <div className="arrow"></div>
        </blockquote>
        <img src="src\assets\pexels-max-vakhtbovych-7745930.jpg" alt="" />
        <div className="author">
          <h5>
            Pelican Steve <span>- Sandusky, OH</span>
          </h5>
        </div>
      </figure>
      <figure className="testimonial">
        <blockquote>
          Mantiques made it easy for me to find phenomenal art without having to
          compromise on price or beauty. Truly an excellent business.
          <div className="arrow"></div>
        </blockquote>
        <img
          src="src\assets\pexels-the-shaan-photography-11592504.jpg"
          alt=""
        />
        <div className="author">
          <h5>
            Max Conversion <span>- Twinsburg, OH</span>
          </h5>
        </div>
      </figure>
      <figure className="testimonial">
        <blockquote>
          Mantiques is a one of a kind business that really puts a premium on
          the needs of their clients. I highly recommend it to everyone I meet.
          <div className="arrow"></div>
        </blockquote>
        <img
          src="src\assets\pexels-the-shaan-photography-11592516.jpg"
          alt=""
        />
        <div className="author">
          <h5>
            Eleanor Faint <span>- Detroit, MI</span>
          </h5>
        </div>
      </figure>
    </div>
  );
};

export default Testimonials;
