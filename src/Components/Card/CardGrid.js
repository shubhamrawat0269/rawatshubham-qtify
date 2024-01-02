import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import Section from "../Section/Section";
import axios from "axios";
const CardGrid = () => {
  const [cardData, setCardData] = useState([]);
  const [originalSongsList, setOriginalPlaylist] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [tabTitle, setTabTitle] = useState("all");
  const [newAlbumData, setNewAlbumData] = useState([]);

  const endpoint = `https://qtify-backend-labs.crio.do`;

  // fetching Card Data
  // follows, image, id, title, description, slug, songs : [array] ..

  const getTopAlbumData = async () => {
    try {
      const response = await axios.get(`${endpoint}/albums/top`);
      let songsResponse = await axios.get(`${endpoint}/songs`);
      setCardData(response.data);
      setSongsData(songsResponse.data);
      setOriginalPlaylist(songsResponse.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getNewAlbumData = async () => {
    try {
      const response = await axios.get(`${endpoint}/albums/new`);
      let songsResponse = await axios.get(`${endpoint}/songs`);
      setNewAlbumData(response.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const filterSongsDataBasedTab = (tab) => {
    let songsList = originalSongsList.filter((lib) => lib.genre.key === tab);
    setSongsData(songsList);
  };
  
  useEffect(() => {
    getTopAlbumData();
    getNewAlbumData();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  useEffect(() => {
    if (tabTitle !== "all") filterSongsDataBasedTab(tabTitle);
    else setSongsData(originalSongsList);
  }, [tabTitle]);

  return (
    <div className={styles.cardContainer}>
      <Section category="Top Albums" data={cardData} />
      <Section category="New Albums" data={newAlbumData} />
      <Section
        category="Songs"
        data={songsData}
        tabTitle={tabTitle}
        setTabTitle={setTabTitle}
      />
    </div>
  );
};

export default CardGrid;
