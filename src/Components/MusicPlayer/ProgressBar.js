import React, { useEffect, useState } from "react";
import { Box, LinearProgress } from "@mui/material";
import { PlayCircleRounded } from "@mui/icons-material";

export default function LinearDeterminate() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "50%" }}>
      <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
        <PlayCircleRounded fontSize="large" sx={{ color: "#FFF" }} />
      </Box>
      <Box>
        <LinearProgress
          color="success"
          variant="determinate"
          value={progress}
        />
      </Box>
    </Box>
  );
}
