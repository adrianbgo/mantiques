import React from "react";
import About from "../components/About";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Gallery from "../molecules/Gallery";
import Hero from "../molecules/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Gallery />
      <Testimonials />
      <Featured />
      <About />
    </>
  );
};

export default Home;
