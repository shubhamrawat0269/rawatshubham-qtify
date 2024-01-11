import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div>
        <img className={styles.heroImg} src="assets/hero.png" alt="heroImg" />
      </div>
    </div>
  );
};

export default HeroSection;
