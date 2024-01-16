import React from "react";
import { useParams } from "react-router-dom";

const AlbumComp = () => {
  let { album_name } = useParams();
  console.log(album_name);
  return <div style={{ color: "white" }}>{album_name}</div>;
};

export default AlbumComp;
