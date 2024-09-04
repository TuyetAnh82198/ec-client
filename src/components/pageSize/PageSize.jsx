import { Box } from "@mui/material";
import PropTypes from "prop-types";

import { PAGE_SIZE } from "../../utils/constants";

const PageSize = (props) => {
  return (
    <Box sx={{ width: { sm: PAGE_SIZE.SM, md: PAGE_SIZE.MD } }}>
      {props.children}
    </Box>
  );
};

PageSize.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageSize;
