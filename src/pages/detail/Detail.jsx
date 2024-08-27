import { useParams } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";

import SubBanner from "../../components/banner/SubBanner";
import ProductInfor from "./productInfor/ProductInfor";
import fetchProduct from "../../utils/fetchProducts";
import { API } from "../../utils/constants";

const Detail = () => {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [endpoint, setEndpoint] = useState(API.PRODUCTS.GET.DETAIL + id);

  const fetchPd = useCallback(() => {
    return fetchProduct(endpoint, setIsLoading);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchPd()
      .then((data) => {
        setProduct(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  //   const fetchPd = useCallback(() => {
  //     return fetchProduct(endpoint, setIsLoading);
  //   }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetchPd()
  //     .then((data) => {
  //       setProduct(data.products);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      <SubBanner />
      <ProductInfor
        product={product}
        isLoading={isLoading}
        products={products}
      />
    </>
  );
};

export default Detail;
