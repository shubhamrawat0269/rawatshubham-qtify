import axios from "axios";

const endpoint = `https://qtify-backend-labs.crio.do`;

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
}