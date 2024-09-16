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
    <Total title="CART TOTAL" cart={cart}>
      <StyledContainer container spacing={1}>
        <StyledContent item>SUBTOTAL</StyledContent>
        <StyledContent item sx={{ color: "gray" }}>
          {handlePrice(handleTotalAmount(cart))}đ
        </StyledContent>
      </StyledContainer>
    </Total>
  );
};

CartTotal.propTypes = {
  cart: PropTypes.object,
};

export default CartTotal;
