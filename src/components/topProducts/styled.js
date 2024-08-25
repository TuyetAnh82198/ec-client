import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { COLOR } from "../../utils/constants";

export const StyledTopPds = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
});

export const StyledTitleContainer = styled(Box)({
  textAlign: "center",
});

export const StyledTitle = styled("h2")({});

export const StyledLogo = styled("img")({});

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

export const StyledName = styled("h4")({
  marginBottom: "0",
});

export const StyledPrice = styled("h4")({
  color: COLOR.MAIN_GREEN,
});
