import PropTypes from "prop-types";

import Total from "../../../components/bill/Total";
import { StyledContainer, StyledContent } from "./styled";
import handlePrice from "../../../utils/handlePrice";
import handleHrStyle from "../../../utils/hanldeHrStyle";

const CartTotal = ({ cart }) => {
  const handleTotalAmount = (cart) => {
    return cart?.totalAmount || 0;
  };

  return (
    <Total title="YOUR ORDER" cart={cart}>
      <StyledContainer container spacing={1}>
        {cart.products.map((p) => (
          <>
            <StyledContent item xs={5} sx={{ fontWeight: "bold" }}>
              {p.productId.name}
            </StyledContent>
            <StyledContent
              item
              xs={7}
              sx={{ color: "gray", textAlign: "right" }}
            >
              {handlePrice(handleTotalAmount(cart))}đ x {p.quan}
            </StyledContent>
          </>
        ))}
      </StyledContainer>
    </Total>
  );
};

CartTotal.propTypes = {
  cart: PropTypes.object,
};

export default CartTotal;
