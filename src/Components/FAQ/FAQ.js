import React, { useEffect, useState } from "react";
import styles from "./FAQ.module.css";

import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import axios from "axios";

export function FAQAccordion() {
  const [accordionData, setAccordionData] = useState([]);
  const endpoint = `https://qtify-backend-labs.crio.do`;

  const getAccordionData = async () => {
    try {
      let accordionData = await axios.get(`${endpoint}/faq`);
      console.log(accordionData);
      setAccordionData(accordionData.data.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getAccordionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      sx={{
        width: "60vw",
        margin: "0.35rem auto",
      }}
    >
      {accordionData.map((data, id) => {
        return (
          <Accordion
            sx={{
              marginBottom: "1rem",
            }}
            key={id}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "#34C94B" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#121212",
                border: "1.5px solid #FFFFFF",
                borderRadius: "5px",
              }}
            >
              <Typography sx={{ color: "#FFF" }}>{data.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}

const FAQ = () => {
  return (
    <section>
      <h2 className={styles.heading}>FAQ</h2>
      <FAQAccordion />
    </section>
  );
};

export default FAQ;
