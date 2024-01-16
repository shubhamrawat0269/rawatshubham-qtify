import React from "react";
import styles from "./Card.module.css";
import { Tooltip } from "@mui/material";
import { Card, CardActionArea, CardContent, Chip } from "@mui/material";
import { Link } from "react-router-dom";

const CardUI = ({ data, type }) => {
  const getCardBasedType = (type) => {
    switch (type) {
      case "songs": {
        const { image, title, id, likes } = data;
        return (
          <div style={{ height: "232px" }}>
            <Card sx={{ maxWidth: "159px", height: "205px", borderRadius: 3 }}>
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
                    label={`${likes} likes`}
                    style={{ background: "#121212", color: "#FFF" }}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
            <h4 className={styles.cardName}>{title}</h4>
          </div>
        );
      }

      case "album": {
        const { follows, image, title, id, songs, slug } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow="true">
            <Link to={`/album/${slug}`}>
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
            </Link>
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
