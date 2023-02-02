import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Gallery from "./molecules/Gallery";
import Hero from "./molecules/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Testimonials />
    </div>
  );
}

export default App;
