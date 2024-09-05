import { Grid, Box, TextField, InputAdornment } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  XIcon,
  TwitterShareButton,
} from "react-share";
import { useNavigate } from "react-router-dom";

import CircularProgress from "../../../components/circularProgress/CircularProgress";
import cup from "../../../assets/imgs/cup.jpg";
import GreenButton from "../../../components/button/GreenBtn";
import {
  StyledIcon,
  StyledContainer,
  StyledComponent,
  StyledImgs,
  StyledImgList,
  StyledImgContainer,
  StyledImg,
  StyledImgDisplayed,
  StyledLogos,
  StyledLogo,
  StyledInfor,
  StyledName,
  StyledRank,
  StyledContent,
  StyledCup,
  StyledBrandStock,
  StyledPrice,
  StyledDesc,
  StyledSubmit,
  StyledQuan,
  StyledBtn,
} from "./styled";
import { API } from "../../../utils/constants";
import handleAddToCart from "../../../utils/handleAddToCart";

const ProductInfor = ({ product, isLoading, isErr }) => {
  const [img, setImg] = useState("");
  const [pickedImg, setPickedImg] = useState("");
  const [quan, setQuan] = useState(1);
  const [endpoint, setEndpoint] = useState(API.CART.ADD);

  const handleSrc = (src) => {
    return process.env.REACT_APP_SERVER + "/" + src;
  };

  useEffect(() => {
    if (product) {
      setImg(handleSrc(product.imgs[0]));
      setPickedImg(product.imgs[0]);
    }
  }, [product]);

  const handleCompareSrc = (img) => {
    const arr = img?.split("/");
    setPickedImg(arr[arr.length - 1]);
  };
  const styleImgList = {
    display: "flex",
    flexDirection: { xs: "row", sm: "column" },
    justifyContent: "space-around",
  };
  const styleImgs = { display: { sm: "flex" } };
  const styleImgContainer = (src) => {
    return { border: src === pickedImg ? "1px #007FF1 solid" : "none" };
  };
  const handleImg = (src) => {
    const pickedImg = handleSrc(src);
    setImg(pickedImg);
  };
  const styleImgDisplayed = {
    marginTop: { xs: "1rem", sm: "0" },
    display: "flex",
    alignItems: "center",
  };

  const logos = (
    <StyledLogos>
      <StyledLogo>
        <FacebookShareButton url="https://www.facebook.com">
          <FacebookIcon size={20} round="true" />
        </FacebookShareButton>
      </StyledLogo>
      <StyledLogo>
        <TelegramShareButton url="https://web.telegram.org">
          <TelegramIcon size={20} round="true" />
        </TelegramShareButton>
      </StyledLogo>
      <StyledLogo>
        <PinterestShareButton
          url="https://www.pinterest.com"
          media={`${process.env.REACT_APP_SERVER}/${product?.imgs[0]}`}
        >
          <PinterestIcon size={20} round="true" />
        </PinterestShareButton>
      </StyledLogo>
      <StyledLogo>
        <TwitterShareButton url="https://twitter.com/?lang=vi">
          <XIcon size={20} round="true" />
        </TwitterShareButton>
      </StyledLogo>
    </StyledLogos>
  );
  const styleInfor = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  };
  const styleCup = {
    display: "flex",
    alignItems: "center",
  };
  const content = {
    rank: (
      <p>
        Ranked {product?.rank}nd in the Top 7 best-selling products this month.
      </p>
    ),
    brand: (
      <p>
        <span style={{ color: "black" }}>BRAND:</span> {product?.brand}
      </p>
    ),
    stock: (
      <p>
        <span style={{ color: "black" }}>AVAILABLE STOCK:</span>{" "}
        {product?.stock}
      </p>
    ),
  };
  const hr = (size) => {
    return (
      <div>
        <hr
          style={{
            borderTop: "1px solid #E9E8E2",
            marginBottom: size || "0",
          }}
        />
      </div>
    );
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (!inputValue) {
      setQuan(1);
    } else {
      setQuan(inputValue);
    }
  };
  const handleQuanErr = () => {
    return alert("The quantity is not available!");
  };
  const handleQuan = (action) => {
    if (action === "inc") {
      if (quan === product.stock) {
        return handleQuanErr();
      }
      setQuan((prev) => (prev += 1));
    } else {
      if (quan <= 1) {
        return handleQuanErr();
      }
      setQuan((prev) => (prev -= 1));
    }
  };

  const navigate = useNavigate();

  return (
    <StyledComponent>
      <StyledContainer container spacing={3}>
        {isLoading && !isErr && CircularProgress}
        <StyledImgs sx={styleImgs} item xs={7}>
          <StyledImgList sx={styleImgList} item xs={4} sm={3}>
            {product &&
              product.imgs.map((src) => (
                <StyledImgContainer
                  key={src}
                  onClick={() => handleCompareSrc(src)}
                  sx={styleImgContainer(src)}
                >
                  <StyledImg
                    cursor="pointer"
                    onClick={() => handleImg(src)}
                    src={handleSrc(src)}
                    alt=""
                  />
                </StyledImgContainer>
              ))}
          </StyledImgList>
          <StyledImgDisplayed sx={styleImgDisplayed} item xs={0} sm={9}>
            <Box>
              <StyledImg src={img} alt="" />
              {logos}
            </Box>
          </StyledImgDisplayed>
        </StyledImgs>
        <StyledInfor item xs={5}>
          <Box sx={styleInfor}>
            <StyledName>{product?.name}</StyledName>
            <StyledRank container spacing={1}>
              <StyledCup sx={styleCup} item xs={3} sm={2} lg={1}>
                <StyledIcon src={cup} alt="" />
              </StyledCup>
              <StyledContent
                sx={{ color: "#007FF1" }}
                item
                xs={9}
                sm={10}
                lg={11}
              >
                {content.rank}
              </StyledContent>
            </StyledRank>
            <Grid sx={{ color: "gray" }} container>
              <StyledBrandStock item xs={12} lg={6}>
                {content.brand}
              </StyledBrandStock>
              <StyledBrandStock item xs={12} lg={6}>
                {content.stock}
              </StyledBrandStock>
            </Grid>
            {hr()}
            <StyledPrice>{`${product?.price.toLocaleString(
              "en-US"
            )}đ`}</StyledPrice>
            {hr()}
            <StyledDesc>{product?.desc}</StyledDesc>
            {hr("1rem")}
            <StyledSubmit container spacing={2}>
              <StyledQuan item xs={12} lg={7}>
                <TextField
                  value={quan}
                  onChange={handleInput}
                  placeholder="QUANTITY"
                  sx={{ width: "100%" }}
                  type="number"
                  InputProps={{
                    inputProps: { min: 1 },
                    endAdornment: (
                      <InputAdornment position="end">
                        <ArrowLeftIcon
                          onClick={() => handleQuan("desc")}
                          sx={{ cursor: "pointer" }}
                        />
                        <Box>{quan}</Box>
                        <ArrowRightIcon
                          onClick={() => handleQuan("inc")}
                          sx={{ cursor: "pointer" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </StyledQuan>
              <StyledBtn
                onClick={() =>
                  handleAddToCart({ id: product._id, quan, navigate, endpoint })
                }
                item
                xs={12}
                lg={5}
              >
                <GreenButton text="Add to cart" />
              </StyledBtn>
            </StyledSubmit>
          </Box>
        </StyledInfor>
      </StyledContainer>
    </StyledComponent>
  );
};

ProductInfor.propTypes = {
  product: PropTypes.object,
  isLoading: PropTypes.bool,
  isErr: PropTypes.bool,
};

export default ProductInfor;
