import React from "react";
import styles from "./Section.module.css";
const Section = ({ category, name }) => {
  return (
    <div className={styles.section}>
      <h3>{category}</h3>
      <button>{name}</button>
    </div>
  );
};

export default Section;
