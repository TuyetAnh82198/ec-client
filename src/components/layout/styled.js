import { Grid, Slide, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import { NavLink } from "react-router-dom";

import { COLOR } from "../../utils/constants";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export const StyledChatIcon = styled(QuestionAnswerIcon)({
  fontSize: "3rem",
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  color: COLOR.PINK,
  cursor: "pointer",
  zIndex: "10",
});

export const StyledNavLink = styled(NavLink)({
  textDecoration: "none",
  fontWeight: "550",
  color: "black",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    color: COLOR.MAIN_GREEN,
  },
});

export const StyledPromotionContainer = styled(Grid)({
  alignItems: "center",
  backgroundColor: COLOR.MAIN_GREEN,
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

export const StyledNavbarContainer = styled(Grid)({});

export const StyledNavbar = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
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

export const StyledIcon = styled(Box)({
  margin: "0.25rem 0.25rem 0 0",
});

export const StyledSlide = styled(Slide)({
  position: "relative",
  top: "0",
  left: "0",
});

export const StyledSideBtn = styled(Button)({
  color: "black",
  position: "absolute",
  zIndex: "5",
  cursor: "pointer",
});

export const StyledFooter = styled(Box)({
  backgroundColor: "#F6F5F1",
});

export const StyledHr = styled("hr")({
  borderTop: "1px solid #E9E8E2",
});

export const StyledContents = styled(Grid)({
  display: "flex",
  justifyContent: "space-around",
});

export const StyledLogoFt = styled("img")({
  borderRadius: "50%",
  width: "100%",
});

export const StyledContentFt = styled(Grid)({
  display: "flex",
  justifyContent: "space-around",
});
