import { Grid, Box } from "@mui/material";

import Subscribe from "../../subscribe/Subscribe";
import logo from "../../../assets/imgs/logo_ft.jpg";
import {
  StyledFooter,
  StyledHr,
  StyledContents,
  StyledLogoFt,
  StyledContentFt,
} from "../styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Subscribe />
      <StyledHr />
      <StyledContents>
        <Grid container spacing={2} sx={{ width: "85%" }}>
          <Grid item xs={4}>
            <Box sx={{ width: { xs: "75%", sm: "50%", md: "25%" } }}>
              <StyledLogoFt src={logo} alt="" />
            </Box>
            <p style={{ width: "90%" }}>
              The ST25 rice varieties have won numerous international and
              domestic awards, contributing to increasing income for farmers,
              boosting rice productivity and export value of fragrant Vietnamese
              rice, as well as elevating the brand of fragrant Vietnamese rice
              in the global market.
            </p>
          </Grid>

          <StyledContentFt item xs={4}>
            <div>
              <h3>About us</h3>
              <p>Company information</p>
              <p>Company history</p>
              <p>Product and service information</p>
            </div>
          </StyledContentFt>

          <StyledContentFt item xs={4}>
            <div>
              <h3>Policies</h3>
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
              <p>Shipping Policy</p>
            </div>
          </StyledContentFt>
        </Grid>
      </StyledContents>
    </StyledFooter>
  );
};
export default Footer;
