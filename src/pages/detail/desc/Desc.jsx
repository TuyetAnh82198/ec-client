import PropTypes from "prop-types";

import logo from "../../../assets/imgs/greenLogo.jpg";

const Desc = ({ content }) => {
  return (
    <div style={{ padding: "0 1rem" }}>
      <h4>DESCRIPTION</h4>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img style={{ width: "20%" }} src={logo} alt="" />
      </div>
      <p>{content}</p>
    </div>
  );
};

Desc.propTypes = {
  content: PropTypes.string,
};
export default Desc;
