import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { StyledSlide, StyledImg, StyledSideBtn } from "../styled";
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
    }, 2500);
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

  const handlePosition = (side) => {
    const position = {
      top: {
        xs: "30%",
        sm: "50%",
        lg: "80%",
      },
    };
    position[side] = 0;
    return position;
  };

  return (
    <Box>
      {imgs.map((img, i) => (
        <StyledSlide
          sx={{ display: i === index ? "block" : "none" }}
          key={i}
          direction={dir}
          in={index === i}
        >
          <StyledImg src={img} alt="" />
        </StyledSlide>
      ))}
      <StyledSideBtn sx={handlePosition("left")} onClick={handlePrev}>
        <KeyboardArrowLeftIcon fontSize="large" />
      </StyledSideBtn>
      <StyledSideBtn sx={handlePosition("right")} onClick={handleNext}>
        <KeyboardArrowRightIcon fontSize="large" />
      </StyledSideBtn>
    </Box>
  );
};

export default Banner;
