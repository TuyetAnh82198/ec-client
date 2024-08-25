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

const TopProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [endpoint, setEndpoint] = useState(API.PRODUCTS.GET.TOP6);

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
            <StyledProduct key={i} item xs={4}>
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
  );
};

export default TopProducts;
