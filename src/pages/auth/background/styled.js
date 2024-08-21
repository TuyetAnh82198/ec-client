import { Box } from "@mui/material";
import { styled } from "@mui/system";

import backgroundImg from "../../../assets/imgs/background.jpg";

export const StyledBackground = styled(Box)({
  textAlign: "center",
  width: "100%",
  minHeight: "100vh",
  zIndex: "-2",
  backgroundImage: `url(${backgroundImg})`,
  backgroundSize: "cover",
});
