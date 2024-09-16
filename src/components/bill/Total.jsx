import PropTypes from "prop-types";

import {
  StyledContainer,
  StyledContent,
  StyledTotal,
  StyledTitle,
} from "./styled";
import { CONTENT } from "../../utils/constants";
import handlePrice from "../../utils/handlePrice";
import handleHrStyle from "../../utils/hanldeHrStyle";

const Total = ({ cart, title, children }) => {
  const styleHr = {
    borderTop: handleHrStyle(),
  };

  const handleTotalAmount = (cart) => {
    return cart?.totalAmount || 0;
  };

  return (
    <StyledTotal>
      <StyledTitle>{title}</StyledTitle>
      {children}
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
    </StyledTotal>
  );
};

Total.propTypes = {
  cart: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Total;
