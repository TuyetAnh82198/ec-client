import { MenuItem, TextField } from "@mui/material";
import PropTypes from "prop-types";

const Select = ({ label, values, handleChange }) => {
  return (
    <TextField
      fullWidth
      sx={{ margin: "0.5rem 0 1rem" }}
      onChange={handleChange}
      id="select"
      label={label}
      value={values[0]}
      select
    >
      {values.map((v, i) => (
        <MenuItem key={i} value={v}>
          {v}
        </MenuItem>
      ))}
    </TextField>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  values: PropTypes.array,
  handleChange: PropTypes.func,
};
export default Select;
