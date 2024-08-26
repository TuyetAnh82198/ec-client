import { Box } from "@mui/material";
import img from "../../assets/imgs/banner4.jpg";

const SubBanner = () => {
  const style = { width: "100%", height: "100%" };
  const sx = {
    height: { xs: "10rem", sm: "16rem", md: "21rem", lg: "26rem" },
    filter: "brightness(70%)",
  };
  return (
    <Box sx={sx}>
      <img style={style} src={img} alt="" />
    </Box>
  );
};

export default SubBanner;
