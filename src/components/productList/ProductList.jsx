import PropTypes from "prop-types";

import {
  StyledProducts,
  StyledProduct,
  StyledImgContainer,
  StyledImg,
  StyledName,
  StyledPrice,
} from "./styled";

const ProductList = ({ products, handleOpen }) => {
  return (
    <StyledProducts container spacing={2}>
      {products.map((pd) => (
        <StyledProduct
          onClick={() => {
            if (handleOpen) {
              handleOpen(pd);
            }
          }}
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
          <StyledName>
            <h4>{pd.name}</h4>
          </StyledName>
          <StyledPrice>{`${pd.price.toLocaleString("en-US")}đ`}</StyledPrice>
        </StyledProduct>
      ))}
    </StyledProducts>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  handleOpen: PropTypes.func,
};

export default ProductList;
