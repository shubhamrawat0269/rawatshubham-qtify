import React from "react";
import styles from "./Card.module.css";
import { Tooltip } from "@mui/material";
import { Card, CardActionArea, CardContent, Chip } from "@mui/material";

const CardUI = ({ data, type }) => {
  const getCardBasedType = (type) => {
    // const { follows, image, title, id, songs } = data;
    switch (type) {
      case "songs": {
        const { follows, image, title, id, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow="true">
            <div style={{ height: "232px" }}>
              <Card
                sx={{ maxWidth: "159px", height: "205px", borderRadius: 3 }}
              >
                <CardActionArea>
                  <figure>
                    <img
                      src={image}
                      alt={id}
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
          </Tooltip>
        );
      }

      case "album": {
        const { follows, image, title, id, songs, slug } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow="true">
            <a href={`/album/${slug}`}>
              <div style={{ height: "232px" }}>
                <Card
                  sx={{ maxWidth: "159px", height: "205px", borderRadius: 3 }}
                >
                  <CardActionArea>
                    <figure>
                      <img
                        src={image}
                        alt={id}
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
            </a>
          </Tooltip>
        );
      }

      default:
        return <></>;
    }
  };

  return getCardBasedType(type);
};

export default CardUI;
