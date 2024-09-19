import PropTypes from "prop-types";

import Total from "../../../components/bill/Total";
import { StyledContainer, StyledContent, StyledItem } from "./styled";
import handlePrice from "../../../utils/handlePrice";

const CartTotal = ({ cart }) => {
  const handleTotalAmount = (cart) => {
    return cart?.totalAmount || 0;
  };

  return (
    <Total title="YOUR ORDER" cart={cart}>
      {cart?.products.map((p) => (
        <StyledContainer key={p.productId._id} container spacing={1}>
          <StyledContent item xs={5} sx={{ fontWeight: "bold" }}>
            {p.productId.name}
          </StyledContent>
          <StyledContent item xs={7} sx={{ color: "gray", textAlign: "right" }}>
            {handlePrice(p.productId.price)}đ x {p.quan}
          </StyledContent>
        </StyledContainer>
      ))}
    </Total>
  );
};

CartTotal.propTypes = {
  cart: PropTypes.object,
};

export default CartTotal;
