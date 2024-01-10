import React from "react";
import { Card, CardActionArea, CardContent } from "@mui/material";
import {
  cardStyle,
  cardImgStyle,
  contentStyle,
  titleStyle,
  shimmerContainer,
} from "./ShimmerCompStyle";

const ShimmerComp = () => {
  const shimmerUIList = Array.from({ length: 7 }).map((card, id) => {
    return (
      <div style={{ height: "232px" }} key={id}>
        <Card sx={cardStyle}>
          <CardActionArea>
            <div style={cardImgStyle}></div>
            <CardContent style={contentStyle}></CardContent>
          </CardActionArea>
        </Card>
        <div style={titleStyle}></div>
      </div>
    );
  });
  return <div style={shimmerContainer}>{shimmerUIList}</div>;
};

export default ShimmerComp;
