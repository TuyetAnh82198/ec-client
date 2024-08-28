import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { InputAdornment } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const Search = ({ handleSearch, value, hanleClear }) => {
  return (
    <TextField
      value={value}
      onChange={handleSearch}
      sx={{ marginBottom: "1rem" }}
      type="text"
      placeholder="Search..."
      inputProps={{
        style: { padding: "0.5rem 1rem", fontSize: "1rem" },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <CancelIcon
              onClick={hanleClear}
              sx={{
                cursor: "pointer",
                fontSize: "medium",
                display: !value && "none",
              }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func,
  value: PropTypes.string,
  hanleClear: PropTypes.func,
};
export default Search;
