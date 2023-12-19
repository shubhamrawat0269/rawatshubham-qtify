import React from "react";
import styles from "./Navbar.module.css";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.searchTerm}
        placeholder="Search a song of your choice..."
      />
      <button type="submit" class={styles.searchButton}>
        <Search fontSize="small" />
      </button>
    </div>
  );
};

export default SearchBar;
