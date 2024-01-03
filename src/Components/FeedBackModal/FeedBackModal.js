import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "5px",
  boxShadow: 24,
  p: 1.5,
};

const headingStyle = {
  width: "95%",
  fontSize: "1rem",
  textAlign: "center",
};

const inputBoxStyle = {
  border: `1px solid #34C94B`,
  borderRadius: "5px",
  padding: "0.5rem",
  outline: "none",
  color: "#9DBFAF",
  width: "100%",
  height: "35px",
  fontFamily: "Poppins",
  marginBottom: 20,
};

const textAreaStyle = {
  border: `1px solid #34C94B`,
  borderRadius: "5px",
  padding: "0.5rem",
  outline: "none",
  color: "#9DBFAF",
  fontFamily: "Poppins",
  width: "100%",
  height: "200px",
  marginBottom: 20,
};

const btnStyle = {
  backgroundColor: "#34C94B",
  color: "#FFF",
  fontSize: "1rem",
  borderRadius: "10px",
  border: "none",
  cursor: "pointer",
  width: "10rem",
  padding: "7px",
  fontWeight: "500",
  fontFamily: "Poppins",
};

export default function FeedBackModal({ show, handleClose }) {
  return (
    <Modal
      open={show}
      disableScrollLock
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" alignItems="center" mb={3}>
          <h2 style={headingStyle}>Feedback</h2>
          <Close sx={{ cursor: "pointer" }} onClick={handleClose} />
        </Box>
        <input type="text" style={inputBoxStyle} placeholder="Full Name" />
        <input type="text" style={inputBoxStyle} placeholder="Email Id" />
        <input type="text" style={inputBoxStyle} placeholder="Subject" />
        <textarea style={textAreaStyle} placeholder="Description" />
        <Box display="flex" justifyContent="center" alignItems="center">
          <button style={btnStyle}>Submit Feedback</button>
        </Box>
      </Box>
    </Modal>
  );
}
