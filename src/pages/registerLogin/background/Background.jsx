import { StyledBackground } from "./styled";

const Background = (props) => {
  return (
    <StyledBackground className="d-flex justify-content-around align-items-center">
      {props.children}
    </StyledBackground>
  );
};
export default Background;
