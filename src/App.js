import React from "react";
import "./_global.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import CardGrid from "./Components/Card/CardGrid";
import FAQ from "./Components/FAQ/FAQ";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardGrid />
      <FAQ />
      <MusicPlayer />
    </div>
  );
};

export default App;
