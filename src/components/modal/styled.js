import { Box, Modal, Grid, Button } from "@mui/material";
import { styled } from "@mui/system";

import { COLOR } from "../../utils/constants";

export const Container = styled(Modal)({});

export const StyledIcon = styled(Box)({
  cursor: "pointer",
  textAlign: "right",
});

export const StyledImg = styled("img")({
  width: "100%",
});

export const StyledInfor = styled(Grid)({});

export const StyledImgContainer = styled(Grid)({});

export const StyledContent = styled(Grid)({});

export const StyledName = styled("h4")({});

export const StyledPrice = styled("p")({});

export const StyledDesc = styled("p")({
  height: "4rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const StyledBtnContainer = styled(Box)({
  textAlign: "right",
});

export const StyledButton = styled(Button)({
  backgroundColor: COLOR.MAIN_GREEN,
  "&:hover": {
    backgroundColor: COLOR.DARK_GREEN,
  },
});
