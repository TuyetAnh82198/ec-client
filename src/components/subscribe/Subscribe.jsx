import { Box, TextField, InputAdornment, Button } from "@mui/material";
import { COLOR } from "../../utils/constants";

const Subscribe = () => {
  const bntStyle = {
    backgroundColor: COLOR.MAIN_GREEN,
    border: "none",
    padding: "1rem 1.2rem",
    marginRight: "-1rem",
  };
  const inputStyle = {
    backgroundColor: "#E9E8E2",
    borderRadius: "25px",
    width: { sm: "40%", md: "50%", lg: "35%" },
    "& fieldset": { border: "none" },
  };
  return (
    <Box sx={{ textAlign: "center", padding: "1rem 0" }}>
      <h2>Subscribe to our newsletter</h2>
      <TextField
        sx={inputStyle}
        type="email"
        placeholder="Subscribe to our newsletter..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                sx={{ borderRadius: "25px" }}
                variant="contained"
                style={bntStyle}
              >
                Submit
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Subscribe;
