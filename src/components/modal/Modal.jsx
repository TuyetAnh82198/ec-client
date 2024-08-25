import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import {
  Container,
  StyledIcon,
  StyledImg,
  StyledInfor,
  StyledImgContainer,
  StyledContent,
  StyledName,
  StyledPrice,
  StyledDesc,
  StyledBtnContainer,
  StyledButton,
} from "./styled";

const ModalComponent = ({ open, handleClose, pd }) => {
  const muiStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Container open={open} onClose={handleClose}>
      <Box sx={muiStyle}>
        <StyledIcon>
          <CloseIcon onClick={handleClose} />
        </StyledIcon>
        <StyledInfor container spacing={1}>
          <StyledImgContainer item xs={5}>
            <StyledImg
              src={process.env.REACT_APP_SERVER + "/" + pd.imgs[0]}
              alt=""
            />
          </StyledImgContainer>
          <StyledContent item xs={7}>
            <StyledName>{pd.name}</StyledName>
            <StyledPrice>{`${pd.price.toLocaleString("en-US")}đ`}</StyledPrice>
            <StyledDesc>{pd.desc}</StyledDesc>
            <StyledBtnContainer>
              <StyledButton variant="contained">View detail</StyledButton>
            </StyledBtnContainer>
          </StyledContent>
        </StyledInfor>
      </Box>
    </Container>
  );
};

ModalComponent.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  pd: PropTypes.object,
};
export default ModalComponent;
