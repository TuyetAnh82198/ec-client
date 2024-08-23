import { Slide, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import banner1 from "../../../assets/imgs/banner1.jpg";
import banner2 from "../../../assets/imgs/banner2.jpg";
import banner3 from "../../../assets/imgs/banner3.jpg";

const Banner = () => {
  const imgs = [banner1, banner2, banner3];
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState("right");

  useEffect(() => {
    const handleIndex = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 3);
      setIndex(randomIndex);
    }, 2000);
    return () => {
      clearInterval(handleIndex);
    };
  }, []);

  const handleNext = () => {
    if (index < imgs.length - 1) {
      setIndex(index + 1);
      setDir("right");
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setDir("left");
    }
  };

  const top = {
    top: {
      xs: "30%",
      sm: "50%",
      lg: "80%",
    },
  };
  return (
    <Box>
      {imgs.map((img, i) => (
        <Slide
          style={{
            display: i === index ? "block" : "none",
            position: "relative",
            top: "0",
            left: "0",
          }}
          key={i}
          direction={dir}
          in={index === i}
        >
          <img src={img} alt="" style={{ width: "100%" }} />
        </Slide>
      ))}
      <Button
        sx={top}
        style={{
          color: "black",
          position: "absolute",
          zIndex: "5",
          left: 0,
          cursor: "pointer",
        }}
        onClick={handlePrev}
      >
        <KeyboardArrowLeftIcon fontSize="large" />
      </Button>
      <Button
        sx={top}
        style={{
          color: "black",
          position: "absolute",
          zIndex: "5",
          right: 0,
          cursor: "pointer",
        }}
        onClick={handleNext}
      >
        <KeyboardArrowRightIcon fontSize="large" />
      </Button>
    </Box>
  );
};

export default Banner;
