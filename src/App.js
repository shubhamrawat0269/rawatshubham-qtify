import React from "react";
import "./_global.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardGrid from "./Components/Card/CardGrid";
import FAQ from "./Components/FAQ/FAQ";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardGrid />
      <FAQ />
    </div>
  );
};

export default App;
