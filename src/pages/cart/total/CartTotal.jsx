import PropTypes from "prop-types";

import {
  StyledContainer,
  StyledContent,
  StyledTotal,
  StyledTitle,
} from "./styled";
import { CONTENT } from "../../../utils/constants";
import handlePrice from "../../../utils/handlePrice";
import handleHrStyle from "../../../utils/hanldeHrStyle";

const CartTotal = ({ cart }) => {
  const styleHr = {
    borderTop: handleHrStyle(),
  };

  const handleTotalAmount = (cart) => {
    return cart?.totalAmount || 0;
  };

  return (
    <StyledTotal>
      <StyledTitle>CART TOTAL</StyledTitle>
      <StyledContainer container spacing={1}>
        <StyledContent item>SUBTOTAL</StyledContent>
        <StyledContent item sx={{ color: "gray" }}>
          {handlePrice(handleTotalAmount(cart))}đ
        </StyledContent>
      </StyledContainer>
      <hr style={styleHr} />
      <StyledContainer container spacing={1}>
        <StyledContent item>Ship</StyledContent>
        <StyledContent item>
          {handleTotalAmount(cart) < 499000 && handleTotalAmount(cart) !== 0
            ? handlePrice(CONTENT.SHIP)
            : 0}
          đ
        </StyledContent>
      </StyledContainer>
      <StyledContainer container spacing={1}>
        <StyledContent item>TOTAL</StyledContent>
        {handleTotalAmount(cart) !== 0 && (
          <StyledContent item>
            {handleTotalAmount(cart) < 499000 && handleTotalAmount(cart) !== 0
              ? handlePrice(cart?.totalAmount + CONTENT.SHIP)
              : handlePrice(cart?.totalAmount - CONTENT.SHIP)}
            đ
          </StyledContent>
        )}
      </StyledContainer>
      {/* <StyledContainer></StyledContainer> */}
    </StyledTotal>
  );
};

CartTotal.propTypes = {
  cart: PropTypes.object,
};

export default CartTotal;
