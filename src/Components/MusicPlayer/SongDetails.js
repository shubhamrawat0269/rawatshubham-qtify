import React from "react";
import styles from "./MusicPlayer.module.css";

const SongDetails = () => {
  return (
    <div className={styles.songDetails}>
      <img className={styles.songImg} src="assets/radio.png" alt="radio.png" />

      <div className={styles.songInfo}>
        <h4 className={styles.name}>Cult of Personality</h4>
        <p className={styles.year}>Vivid - 1978</p>
      </div>
    </div>
  );
};

export default SongDetails;
