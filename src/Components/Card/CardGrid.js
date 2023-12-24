import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import Section from "../Section/Section";
import axios from "axios";
const CardGrid = () => {
  const [cardData, setCardData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const endpoint = `https://qtify-backend-labs.crio.do`;

  // fetching Card Data
  // follows, image, id, title, description, slug, songs : [array] ..

  const getTopAlbumData = async () => {
    try {
      const response = await axios.get(`${endpoint}/albums/top`);
      setCardData(response.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getNewAlbumData = async () => {
    try {
      const response = await axios.get(`${endpoint}/albums/new`);
      setNewAlbumData(response.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getTopAlbumData();
    getNewAlbumData();
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <div className={styles.cardContainer}>
      <Section category="Top Albums" data={cardData} />
      <Section category="New Albums" data={newAlbumData} />
    </div>
  );
};

export default CardGrid;
