import axios from "axios";
import { endpoint } from "../Namespaces";
export const getAccordionData = async () => {
  try {
    let data = await axios.get(`${endpoint}/faq`);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};