import { Grid, Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledContainer = styled(Grid)({
  marginBottom: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
});

export const StyledContent = styled(Grid)({});

export const StyledTotal = styled(Box)({
  backgroundColor: "#f8f9fa",
  padding: "1.5rem",
});

export const StyledTitle = styled("p")({
  fontSize: "1.2rem",
  fontWeight: "490",
  margin: "0 0 1rem 0",
});
