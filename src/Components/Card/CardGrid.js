import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import CardUI from "./CardUI";
import Section from "../Section/Section";
import { Grid } from "@mui/material";
// import { fetchTopAlbums } from "../../api/api";
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
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div>
        <Section category="Top Albums" name="Collapse" />

        <Grid
          container
          sx={{
            width: "1376px",
            padding: 2,
            gap: "40px 24px",
            margin: "0.5rem auto",
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cardData.map((card) => (
            <Grid key={card.id}>
              <CardUI data={card} type={"album"} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{ borderTop: `1px solid #34C94B`, paddingTop: 5 }}>
        <Section category="New Albums" name="Show all" />

        <Grid
          container
          sx={{
            width: "1376px",
            padding: 2,
            gap: "40px 24px",
            margin: "0.5rem auto",
          }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {newAlbumData.map((card) => (
            <Grid key={card.id}>
              <CardUI data={card} type={"album"} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CardGrid;
