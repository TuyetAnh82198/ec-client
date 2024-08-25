import { Divider, Box } from "@mui/material";
import { useState, useEffect, useCallback } from "react";

import logo from "../../assets/imgs/icon_border.jpg";
import fetchProducts from "../../utils/fetchProducts";
import { API } from "../../utils/constants";
import CirProgress from "../circularProgress/CircularProgress";
import {
  StyledTopPds,
  StyledTitleContainer,
  StyledTitle,
  StyledLogo,
  StyledProducts,
  StyledProduct,
  StyledImgContainer,
  StyledImg,
  StyledName,
  StyledPrice,
} from "./styled";
import ModalComponent from "../modal/Modal";

const TopProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [endpoint, setEndpoint] = useState(API.PRODUCTS.GET.TOP6);
  const [open, setOpen] = useState(false);

  const handleOpen = (pd) => {
    setOpen(true);
    setProduct(pd);
  };
  const handleClose = () => setOpen(false);

  const fetchPds = useCallback(() => fetchProducts(endpoint, setIsLoading), []);

  useEffect(() => {
    setIsLoading(true);
    fetchPds()
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {open && (
        <ModalComponent open={open} handleClose={handleClose} pd={product} />
      )}
      <StyledTopPds>
        <Box sx={{ width: "75%" }}>
          <StyledTitleContainer>
            <StyledTitle>TOP PRODUCTS</StyledTitle>
            <Divider>
              <StyledLogo src={logo} alt="" />
            </Divider>
          </StyledTitleContainer>
          {isLoading && <CirProgress />}
          <StyledProducts container spacing={2}>
            {products.map((pd, i) => (
              <StyledProduct
                onClick={() => handleOpen(pd)}
                key={pd._id}
                item
                xs={4}
              >
                <StyledImgContainer>
                  <StyledImg
                    src={process.env.REACT_APP_SERVER + "/" + pd.imgs[0]}
                    alt=""
                  />
                </StyledImgContainer>
                <StyledName>{pd.name}</StyledName>
                <StyledPrice>
                  {`${pd.price.toLocaleString("en-US")}đ`}
                </StyledPrice>
              </StyledProduct>
            ))}
          </StyledProducts>
        </Box>
      </StyledTopPds>
    </>
  );
};

export default TopProducts;
