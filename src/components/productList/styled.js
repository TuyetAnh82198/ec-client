import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { COLOR } from "../../utils/constants";

export const StyledProducts = styled(Grid)({});

export const StyledProduct = styled(Grid)({
  textAlign: "center",
  cursor: "pointer",
});

export const StyledImgContainer = styled(Box)({
  overflow: "hidden",
});

export const StyledImg = styled("img")({
  width: "100%",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const StyledName = styled(Box)({
  height: "4rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const StyledPrice = styled("h4")({
  color: COLOR.MAIN_GREEN,
  marginTop: "0.5rem",
});
