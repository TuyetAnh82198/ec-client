import { Box } from "@mui/material";
import Propstypes from "prop-types";

import SubBanner from "../banner/SubBanner";
import PageSize from "../pageSize/PageSize";

const Announcement = ({ title, content }) => {
  return (
    <>
      <SubBanner />
      <Box display="flex" justifyContent="space-around">
        <PageSize>
          <Box sx={{ textAlign: "center" }}>
            <h2>{title}</h2>
            {content && <h1>{content}</h1>}
          </Box>
        </PageSize>
      </Box>
    </>
  );
};

Announcement.propstypes = {
  content: Propstypes.string,
  title: Propstypes.string,
};
export default Announcement;
