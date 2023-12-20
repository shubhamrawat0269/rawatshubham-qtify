import React from "react";
import styles from "./Card.module.css";
import { Card, CardActionArea, CardContent, Chip } from "@mui/material";

const CardUI = ({ data }) => {
  const { follows, image, title } = data;
  return (
    <div style={{ height: "232px" }}>
      <Card sx={{ maxWidth: "159px", borderRadius: 3 }}>
        <CardActionArea>
          <figure>
            <img
              src={image}
              alt="album"
              style={{ width: "100%", aspectRatio: 1 }}
            />
          </figure>
          <CardContent style={{ padding: "0.3rem" }}>
            <Chip
              label={`${follows} Follows`}
              style={{ background: "#121212", color: "#FFF" }}
            />
          </CardContent>
        </CardActionArea>
      </Card>
      <h4 className={styles.cardName}>{title}</h4>
    </div>
  );
};

export default CardUI;
