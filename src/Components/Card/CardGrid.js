import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import CardUI from "./CardUI";
import Section from "../Section/Section";
import axios from "axios";
import { Grid } from "@mui/material";
const CardGrid = () => {
  const [cardData, setCardData] = useState([]);

  // fetching Card Data
  // follows, image, id, title, description, slug, songs : [array] ..

  const getCardData = async (url) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      setCardData(response.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getCardData("https://qtify-backend-labs.crio.do/albums/top");
  }, []);

  return (
    <div className={styles.cardContainer}>
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
  );
};

export default CardGrid;
