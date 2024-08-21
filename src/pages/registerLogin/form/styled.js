import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledContainer = styled(Box)({
  padding: "1rem",
  display: "flex",
  justifyContent: "space-around",
});
export const StyledForm = styled(Box)({});
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
