import React, { useState } from "react";
import styles from "./Section.module.css";
import { Grid } from "@mui/material";
import CardUI from "../Card/CardUI";
import Carousel from "../Carousel/Carousel";
import TabSection from "../Tabs/TabSection";
import ShimmerComp from "../ShimmerComp/ShimmerComp";
const Section = ({ category, data, tabTitle, setTabTitle }) => {
  const [isTopAlbumCollapse, setTopAlbumCollapse] = useState(true);
  const [isNewAlbumCollapse, setNewAlbumCollapse] = useState(true);

  const getSectionBasedCategory = (type) => {
    switch (type) {
      case "Top Albums": {
        return (
          <div>
            <div className={styles.section}>
              <h3>{category}</h3>
              {isTopAlbumCollapse ? (
                <button
                  className="btn"
                  onClick={() => setTopAlbumCollapse(!isTopAlbumCollapse)}
                >
                  Show All
                </button>
              ) : (
                <button
                  className="btn"
                  onClick={() => setTopAlbumCollapse(!isTopAlbumCollapse)}
                >
                  Collapse
                </button>
              )}
            </div>

            {isTopAlbumCollapse ? (
              !data.length ? (
                <ShimmerComp />
              ) : (
                <Carousel data={data} type={"album"} auto />
              )
            ) : (
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
                {data.map((card) => (
                  <Grid key={card.id}>
                    <CardUI data={card} type={"album"} />
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
        );
      }

      case "New Albums": {
        return (
          <div style={{ borderTop: `1px solid #34C94B`, paddingTop: 5 }}>
            <div className={styles.section}>
              <h3>{category}</h3>
              {isNewAlbumCollapse ? (
                <button
                  className="btn"
                  onClick={() => setNewAlbumCollapse(!isNewAlbumCollapse)}
                >
                  Show All
                </button>
              ) : (
                <button
                  className="btn"
                  onClick={() => setNewAlbumCollapse(!isNewAlbumCollapse)}
                >
                  Collapse
                </button>
              )}
            </div>
            {isNewAlbumCollapse ? (
              !data.length ? (
                <ShimmerComp />
              ) : (
                <Carousel data={data} type={"album"} auto />
              )
            ) : (
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
                {data.map((card) => (
                  <Grid key={card.id}>
                    <CardUI data={card} type={"album"} />
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
        );
      }

      case "Songs": {
        return (
          <div style={{ borderTop: `1px solid #34C94B`, paddingTop: 5 }}>
            <div className={styles.section}>
              <h3>{category}</h3>
            </div>
            <TabSection title={tabTitle} dispatch={setTabTitle} />
            {!data.length ? (
              <ShimmerComp />
            ) : (
              <Carousel data={data} type={"songs"} />
            )}
          </div>
        );
      }

      default:
        return <></>;
    }
  };

  return getSectionBasedCategory(category);
};

export default Section;
