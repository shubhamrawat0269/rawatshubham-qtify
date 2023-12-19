import React from "react";
import styles from "./CommonBtn.module.css";
const CommonBtn = ({ name }) => {
  return <button className={styles.btn}>{name}</button>;
};

export default CommonBtn;
