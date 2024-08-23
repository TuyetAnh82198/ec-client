import { Box } from "@mui/material";

import { PAGE_SIZE } from "../../utils/constants";

const PageSize = (props) => {
  return (
    <Box sx={{ width: { sm: PAGE_SIZE.SM, md: PAGE_SIZE.MD } }}>
      {props.children}
    </Box>
  );
};

export default PageSize;
