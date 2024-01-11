import React from "react";
import styles from "./FAQ.module.css";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <section>
      <h2 className={styles.heading}>FAQ</h2>
      <FAQAccordion />
    </section>
  );
};

export default FAQ;
