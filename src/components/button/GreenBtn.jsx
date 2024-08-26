import PropTypes from "prop-types";

import { StyledButton } from "./styled";

const GreenButton = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

GreenButton.propTypes = {
  text: PropTypes.string,
};

export default GreenButton;
