import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import styles from "./Navbar.module.css";
import { endpoint } from "../../utils/Namespaces";

import SearchBar from "./SearchBar";
import CommonBtn from "../CommonBtn/CommonBtn";
import FeedBackModal from "../FeedBackModal/FeedBackModal";
import SuggestionBox from "./SuggestionBox";
import axios from "axios";
const Navbar = () => {
  const [openFeedBackModal, setOpenFeedBackModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [songsData, setSongsData] = useState([]);

  const handleOpen = () => setOpenFeedBackModal(true);
  const handleClose = () => setOpenFeedBackModal(false);

  const getSongsData = async (searchInput) => {
    try {
      let songsResponse = await axios.get(`${endpoint}/songs`);
      const responseData = songsResponse.data;
      const filterSearchInputList = responseData.filter((songDetail) => {
        return songDetail.title
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setSongsData(filterSearchInputList);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    if (searchInput) {
      getSongsData(searchInput);
    }
  }, [searchInput]);

  return (
    <section id={styles.navtool}>
      <Logo />
      <SearchBar searchInput={searchInput} dispatchEvent={setSearchInput} />
      <CommonBtn name="Give Feedback" dispatch={handleOpen} />
      <FeedBackModal show={openFeedBackModal} handleClose={handleClose} />
      {searchInput && <SuggestionBox data={songsData} />}
    </section>
  );
};

export default Navbar;
