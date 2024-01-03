import React, { useState } from "react";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

import SearchBar from "./SearchBar";
import CommonBtn from "../CommonBtn/CommonBtn";
import FeedBackModal from "../FeedBackModal/FeedBackModal";
const Navbar = () => {
  const [openFeedBackModal, setOpenFeedBackModal] = useState(false);
  const handleOpen = () => setOpenFeedBackModal(true);
  const handleClose = () => setOpenFeedBackModal(false);

  return (
    <section id={styles.navtool}>
      <Logo />
      <SearchBar />
      <CommonBtn name="Give Feedback" dispatch={handleOpen} />
      <FeedBackModal show={openFeedBackModal} handleClose={handleClose} />
    </section>
  );
};

export default Navbar;
