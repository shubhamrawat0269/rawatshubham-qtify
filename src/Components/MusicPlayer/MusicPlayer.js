import React from "react";
import styles from "./MusicPlayer.module.css";
import SongDetails from "./SongDetails";
import ProgressBar from "./ProgressBar";

const MusicPlayer = () => {
  return (
    <div className={styles.musicPlayerStyles}>
      <SongDetails />
      <ProgressBar />
    </div>
  );
};

export default MusicPlayer;
