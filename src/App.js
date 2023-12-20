import React from "react";
import "./_global.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardGrid from "./Components/Card/CardGrid";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardGrid />
    </div>
  );
};

export default App;
