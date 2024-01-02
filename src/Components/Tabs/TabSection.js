import { Tab, Tabs, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Tabs.module.css";
import axios from "axios";

const TabSection = ({ title, dispatch }) => {
  const [tabs, setTabs] = useState([]);
  const endpoint = `https://qtify-backend-labs.crio.do`;

  const handleChangeTabEvent = (e, newValue) => {
    // console.log(newValue);
    dispatch(newValue);
  };

  const getTabList = async () => {
    try {
      let response = await axios.get(`${endpoint}/genres`);
      setTabs(response.data.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getTabList();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={title}
        onChange={handleChangeTabEvent}
        className={styles.tabsContainer}
        TabIndicatorProps={{ style: { background: "#34C94B" } }}
      >
        <Tab value={"all"} label={"all"} />;
        {tabs.map((tab) => {
          return <Tab value={tab.key} label={tab.label} />;
        })}
      </Tabs>
    </Box>
  );
};

export default TabSection;
