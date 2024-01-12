import React from "react";
import styles from "./Navbar.module.css";

const NoSuggestionBox = () => (
  <div className={styles.noSuggestionBox}>No Result Found ...</div>
);

const SuggestionBar = ({ data }) => {
  return (
    <>
      {data.map((songdetail, id) => {
        return (
          <div className={styles.suggestionInnerBox} key={id}>
            <div>
              <img
                className={styles.songImg}
                src={songdetail.image}
                alt="song"
              />
            </div>
            <div className={styles.songdetailBox}>
              <div>
                <h3 className={styles.songTitle}>{songdetail.title}</h3>
                {songdetail.artists.map((artist) => (
                  <span className={styles.artistName}>{artist}</span>
                ))}
              </div>
              <div className={styles.likeCount}>{songdetail.likes} likes</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const SuggestionBox = ({ data }) => {
  return (
    <div className={styles.suggestionBox}>
      {!data.length ? <NoSuggestionBox /> : <SuggestionBar data={data} />}
    </div>
  );
};

export default SuggestionBox;
