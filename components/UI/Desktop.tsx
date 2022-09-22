import { Box, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export const Desktop = () => {
  const [idAdvice, setIdAdvice] = useState(0);
  const [advice, setAdvice] = useState("Roll for an advice");
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setIdAdvice(response.data.slip.id);
      setAdvice(response.data.slip.advice);
    });
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  return (
    <Box
      width={539}
      height={332}
      sx={{
        backgroundColor: "hsl(217, 19%, 38%)",
        borderRadius: "10px",
        position: "relative",
      }}
      alignSelf="center"
      justifyContent="center"
      display="flex"
      flexDirection="column"
    >
      <Typography
        fontSize={11}
        fontWeight={700}
        sx={{
          letterSpacing: ".1rem",
          textTransform: "uppercase",
          color: "hsl(150, 100%, 66%)",
        }}
        paddingBottom={3}
      >
        Advice #{idAdvice}
      </Typography>
      <Typography
        paddingBottom={3}
        fontWeight={700}
        sx={{ color: "hsl(193, 38%, 86%)" }}
      >
        &quot;{advice}&quot;
      </Typography>
      <Box>
        <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="hsl(193, 38%, 86%)" fillRule="evenodd">
            <path fill="#CEE3E9" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
      </Box>
      <IconButton
        onClick={handleClick}
        disabled={disabled}
        sx={{
          backgroundColor: "hsl(150, 100%, 66%)",
          width: "64px",
          height: "64px",
          position: "absolute",
          top: "300px",
          left: "237px",
          transition: "0.5s",

          "&:hover": {
            transition: "0.5s",
            backgroundColor: "hsl(150, 100%, 66%)",
            boxShadow: "0 0 40px 0 hsl(150, 100%, 66%)",
          },
          "&:disabled": {
            backgroundColor: "hsl(193, 38%, 86%)",
          },
        }}
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </IconButton>
    </Box>
  );
};
