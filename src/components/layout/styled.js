import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  fontWeight: "550",
  color: "black",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    color: "#469E02",
  },
});

export const StyledPromotionContainer = styled(Grid)({
  alignItems: "center",
  backgroundColor: "#469E02",
});

export const StyledContentContainer = styled(Grid)({});

export const StyledContent = styled("h3")({
  textAlign: "center",
  fontStyle: "italic",
  color: "white",
  margin: "0.5rem 0",
});

export const StyledCloseBtn = styled(Grid)({
  textAlign: "right",
  paddingRight: "0.7rem",
});

export const StyledNavbar = styled(Grid)({
  margin: "0.5rem 0",
});

export const StyledImgContainer = styled(Grid)({});

export const StyledImg = styled("img")({
  width: "100%",
});

export const StyledItemsContainer = styled(Grid)({});

export const StyledItems = styled(Grid)({});

export const StyledItem = styled(Grid)({
  textAlign: "center",
});

export const StyledIcon = styled("span")({
  margin: "0.25rem 0.1rem 0 0",
});