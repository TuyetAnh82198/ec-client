import PropTypes from "prop-types";
import { Box } from "@mui/material";

import ProductList from "../../../components/productList/ProductList";

const RelatedProducts = ({ products }) => {
  return (
    <Box sx={{ padding: "1rem" }}>
      <h4>RELATED PRODUCTS</h4>
      <ProductList products={products} />
    </Box>
  );
};

RelatedProducts.propTypes = {
  products: PropTypes.array,
};
export default RelatedProducts;
