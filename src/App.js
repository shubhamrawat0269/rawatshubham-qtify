import React from "react";

import "./_global.css";
import FAQ from "./Components/FAQ/FAQ";
import CardGrid from "./Components/Card/CardGrid";
import HeroSection from "./Components/HeroSection/HeroSection";

const App = () => {
  return (
    <>
      <HeroSection />
      <CardGrid />
      <FAQ />
    </>
  );
};

export default App;
