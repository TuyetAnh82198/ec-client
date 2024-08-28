import { Box } from "@mui/material";
import { useState, useCallback, useEffect } from "react";

import Banner from "../../components/banner/SubBanner";
import Category from "./category/Category";
import PageSize from "../../components/pageSize/PageSize";
import fetchProduct from "../../utils/fetchProducts";
import { API } from "../../utils/constants";
import ProductList from "../../components/productList/ProductList";
import Pagination from "../../components/pagination/Pagination";
import CircularProgress from "../../components/circularProgress/CircularProgress";
import Search from "../../components/search/Search";
import {
  StyledContainer,
  StyledCategory,
  StyledProducts,
  StyledSearchSort,
  StyledSearch,
  StyledSort,
} from "./styled";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [endpoint, setEndpoint] = useState(
    API.PRODUCTS.GET.DETAIL + "all" + "/1"
  );
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [search, setSearch] = useState("");
  const [picked, setPicked] = useState("ALL");

  const categories = ["ALL", "ST", "ST25"];

  const handlePicked = (category) => {
    setPicked(category);
  };

  const fetchPd = useCallback(() => {
    return fetchProduct(endpoint, setIsLoading);
  }, [endpoint]);

  const handleCategory = (category) => {
    setEndpoint(
      API.PRODUCTS.GET.DETAIL +
        category.toLowerCase() +
        "/" +
        page +
        "/" +
        search
    );
  };

  useEffect(() => {
    setIsLoading(true);
    setIsErr(false);
    fetchPd()
      .then((data) => {
        console.log(data);
        setProducts(data.relatedProducts);
        setTotalPage(data.totalPage);
      })
      .catch((err) => {
        setIsErr(true);
        console.log(err);
      });
  }, [endpoint]);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
    }
  };

  let searchTimeout;
  const handleSearch = (e) => {
    setSearch(e.target.value);
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      setEndpoint(
        API.PRODUCTS.GET.DETAIL + picked.toLowerCase() + "/1/" + e.target.value
      );
    }, 500);
  };

  const hanleClear = () => {
    setSearch("");
    setEndpoint(API.PRODUCTS.GET.DETAIL + picked.toLowerCase() + "/1");
  };

  return (
    <>
      <Banner />
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <PageSize>
          <StyledContainer container spacing={2}>
            <StyledCategory item xs={3}>
              <Category
                categories={categories}
                handleCategory={handleCategory}
                handlePicked={handlePicked}
                picked={picked}
              />
            </StyledCategory>
            <StyledProducts item xs={9}>
              <StyledSearchSort container>
                <StyledSearch item xs={6}>
                  <Search
                    handleSearch={handleSearch}
                    value={search}
                    hanleClear={hanleClear}
                  />
                </StyledSearch>
                <StyledSort item xs={6}>
                  <select>
                    <option>Select</option>
                  </select>
                </StyledSort>
              </StyledSearchSort>

              {isLoading && !isErr && <CircularProgress />}
              {products.length > 0 ? (
                <ProductList products={products} />
              ) : (
                <Box>Found no products.</Box>
              )}
              {products && (
                <Pagination
                  page={page}
                  totalPage={totalPage}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                />
              )}
            </StyledProducts>
          </StyledContainer>
        </PageSize>
      </Box>
    </>
  );
};

export default Shop;