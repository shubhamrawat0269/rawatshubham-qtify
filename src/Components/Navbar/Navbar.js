import React from "react";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

import SearchBar from "./SearchBar";
import CommonBtn from "../CommonBtn/CommonBtn";
const Navbar = () => {
  return (
    <section id={styles.navtool}>
      <Logo />
      <SearchBar />
      {/* <FeedbackBtn /> */}
      <CommonBtn name="Give Feedback" />
    </section>
  );
};

export default Navbar;
