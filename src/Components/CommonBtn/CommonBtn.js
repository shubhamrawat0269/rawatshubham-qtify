import React from "react";
import styles from "./CommonBtn.module.css";
const CommonBtn = ({ name, dispatch }) => {
  return <button className={styles.btn} onClick={dispatch}>{name}</button>;
};

export default CommonBtn;
