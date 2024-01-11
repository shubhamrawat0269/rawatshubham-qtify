import { ExpandMore } from "@mui/icons-material";
import { getAccordionData } from "../../utils/functions";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import { withFetchData } from "../../utils/HigherOrderComponent/withFetchData";

function FAQAccordion({ data }) {
  return (
    <Box
      sx={{
        width: "60vw",
        margin: "0.35rem auto",
      }}
    >
      {data.map((data, id) => {
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

export default withFetchData(FAQAccordion, getAccordionData);
