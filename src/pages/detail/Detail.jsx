import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect, lazy, Suspense } from "react";
import { Box } from "@mui/material";

import SubBanner from "../../components/banner/SubBanner";
import ProductInfor from "./productInfor/ProductInfor";
import fetchProduct from "../../utils/fetchProducts";
import { API } from "../../utils/constants";
import PageSize from "../../components/pageSize/PageSize";
const Desc = lazy(() => import("./desc/Desc"));
const RelatedProducts = lazy(() => import("./relatedProducts/RelatedProducts"));

const Detail = () => {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [endpoint, setEndpoint] = useState(API.PRODUCTS.GET.DETAIL + id + "/1");

  const fetchPd = useCallback(() => {
    return fetchProduct(endpoint, setIsLoading);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    setIsErr(false);
    fetchPd()
      .then((data) => {
        setProduct(data.products);
        setProducts(data.relatedProducts);
      })
      .catch((err) => {
        console.log(err);
        setIsErr(true);
      });
  }, []);

  const fallback = <div>Loading...</div>;
  return (
    <>
      <SubBanner />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <PageSize>
          <ProductInfor product={product} isLoading={isLoading} isErr={isErr} />
          <Suspense fallback={fallback}>
            <Desc content={product?.desc} />
            <RelatedProducts products={products} />
          </Suspense>
        </PageSize>
      </Box>
    </>
  );
};

export default Detail;
