import { Button } from "@mui/material";
import { styled } from "@mui/system";

import { COLOR } from "../../utils/constants";

export const StyledButton = styled(Button)({
  color: "white",
  backgroundColor: COLOR.MAIN_GREEN,
  "&:hover": {
    backgroundColor: COLOR.DARK_GREEN,
  },
});
