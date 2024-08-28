import { MenuItem, TextField } from "@mui/material";
import PropTypes from "prop-types";

const Sort = ({ sort, handleSort }) => {
  return (
    <TextField
      onChange={handleSort}
      id="select"
      label="Sort price"
      value={sort}
      select
    >
      <MenuItem value="inc">Lowest</MenuItem>
      <MenuItem value="desc">Highest</MenuItem>
    </TextField>
  );
};

Sort.propTypes = {
  sort: PropTypes.string,
  handleSort: PropTypes.func,
};
export default Sort;
