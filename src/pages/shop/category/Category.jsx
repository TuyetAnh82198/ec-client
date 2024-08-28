import { Box } from "@mui/material";
import PropTypes from "prop-types";

import { COLOR } from "../../../utils/constants";

const Category = ({ handleCategory, categories, handlePicked, picked }) => {
  const styleContainer = {
    backgroundColor: COLOR.MAIN_GREEN,
    color: "white",
    fontSize: { xs: "0.9rem", sm: "1.4rem" },
  };
  const styleHeader = { fontWeight: "550", padding: "0.25rem 0.5rem" };
  const styleCategories = { fontSize: { xs: "0.9rem", sm: "1rem" } };
  const handleStyleCategory = (c) => {
    return {
      color: c == picked ? "black" : "gray",
      padding: "0.25rem 0.5rem",
      cursor: "pointer",
    };
  };
  return (
    <>
      <Box sx={styleContainer}>
        <p style={styleHeader}>BRANDS</p>
      </Box>
      {categories.map((c, i) => (
        <Box key={i} sx={styleCategories}>
          <p
            onClick={() => {
              handleCategory(c);
              handlePicked(c);
            }}
            style={handleStyleCategory(c)}
          >
            {c}
          </p>
        </Box>
      ))}
    </>
  );
};

Category.propTypes = {
  handleCategory: PropTypes.func,
  categories: PropTypes.array,
  handlePicked: PropTypes.func,
  picked: PropTypes.string,
};
export default Category;
