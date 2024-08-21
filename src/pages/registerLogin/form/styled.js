import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledContainer = styled(Box)({
  padding: "1rem",
  display: "flex",
  justifyContent: "space-around",
});
export const StyledForm = styled(Box)({});
export const StyledFormHeader = styled(Box)({
  marginBottom: "1.5rem",
});
export const StyledTitle = styled("h3")({
  marginBottom: "0.25rem",
});
export const StyledToggleContainer = styled(Box)({
  color: "gray",
});
export const StyledToggle = styled("span")({
  color: "black",
  cursor: "pointer",
});
export const StyledFormFooter = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export const StyledForgotPass = styled("div")({
  marginBottom: "1rem",
  textAlign: "right",
  color: "#007bff",
  fontWeight: "450",
  cursor: "pointer",
});
export const StyledButton = styled(Box)({
  width: "100%",
  paddingLeft: "1rem",
});
