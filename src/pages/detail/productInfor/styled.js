import { Grid, Box, TextField, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";

import { COLOR } from "../../../utils/constants";

export const StyledIcon = styled("img")({
  width: "100%",
});

export const StyledComponent = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  padding: "0 0.5rem",
});

export const StyledContainer = styled(Grid)({
  margin: "1rem 0",
  width: "100%",
});

export const StyledImgs = styled(Grid)({
  margin: "1rem 0",
  width: "100%",
});

export const StyledImgList = styled(Grid)({});

export const StyledImgContainer = styled(Box)({});

export const StyledImg = styled("img")(({ cursor }) => ({
  width: "100%",
  cursor: cursor || "auto",
}));

export const StyledImgDisplayed = styled(Grid)({});

export const StyledLogos = styled(Box)({
  margin: "0 0.5rem",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
});

export const StyledLogo = styled(Box)({
  cursor: "pointer",
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.2)",
  },
});

export const StyledInfor = styled(Grid)({});

export const StyledName = styled("h2")({
  fontWeight: "500",
  marginBottom: "0rem",
});

export const StyledRank = styled(Grid)({});

export const StyledCup = styled(Grid)({});

export const StyledContent = styled(Grid)({});

export const StyledBrandStock = styled(Grid)({ fontSize: "0.71rem" });

export const StyledPrice = styled("p")({
  color: COLOR.MAIN_GREEN,
});

export const StyledDesc = styled("div")({
  height: "4rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "gray",
});

export const StyledSubmit = styled(Grid)({});

export const StyledQuan = styled(Grid)({});

export const StyledBtn = styled(Grid)({ marginTop: "0.5rem" });
