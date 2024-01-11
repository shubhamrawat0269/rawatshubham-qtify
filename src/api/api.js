import axios from "axios";
import { endpoint } from "../utils/Namespaces";

export const getTopAlbums = async () => {
  try {
    const response = await axios.get(`${endpoint}/albums/top`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getNewAlbums = async () => {
  try {
    const response = await axios.get(`${endpoint}/albums/new`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
