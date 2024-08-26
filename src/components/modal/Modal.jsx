import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
} from "./styled";
import { PAGE_PATH } from "../../utils/constants";
import GreenButton from "../button/GreenBtn";

const ModalComponent = ({ open, handleClose, pd }) => {
  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(PAGE_PATH.DETAIL.slice(0, -3) + id);
  };

  const muiStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "80%", sm: 400 },
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
            <StyledBtnContainer onClick={() => handleView(pd._id)}>
              <GreenButton text="View detail"></GreenButton>
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
