import React from "react";
import Page from "../HOCs/Page";

const AboutUs = () => {
  return (
    <Page title="About Us">
      <section id="introduction">
        <h1>About Us</h1>
        <p>
          Welcome to Upcycled Antiques Sandusky, where we specialize in
          transforming old, discarded items into unique and beautiful pieces
          that will add character to any space.
        </p>
        <p>
          Our mission is to provide sustainable and eco-friendly products that
          will delight our customers and support our local community.
        </p>
      </section>
      <section id="history">
        <h2>Our Story</h2>
        <p>
          Founded in 2021 by Kimberly Go, Mantiques started as a passion project
          in her garage, transforming old furniture and decor into something new
          and beautiful.
        </p>
        <p>
          After receiving a lot of interest and positive feedback from friends
          and family, Kim decided to turn her hobby into a business. Since
          then, the business has grown and expanded, providing unique upcycled
          antiques to customers across the country.
        </p>
        <p>
          We pride ourselves on our commitment to sustainability and our passion
          for creating beautiful pieces that will last a lifetime.
        </p>
      </section>
    </Page>
  );
};

export default AboutUs;
