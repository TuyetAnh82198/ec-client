import { Grid, Box, Button, TextField } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SubBanner from "../../components/banner/SubBanner";
import PageSize from "../../components/pageSize/PageSize";
import { API, LOCAL_STORAGE } from "../../utils/constants";
import fetchCart from "../../utils/fetchCart";
import CirProgress from "../../components/circularProgress/CircularProgress";
import handleResponse from "../../utils/handleResponse";
import Select from "../../components/select/Select";
import StyledButton from "../../components/button/GreenBtn";
import CartTotal from "./total/CartTotal";

const Checkout = () => {
  const [endpoint, setEndpoint] = useState(API.CART.GET);
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [inputFields, setInputFields] = useState([
    "Full Name",
    "Email",
    "Phone",
    "Address",
  ]);
  const [inputs, setInputs] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const [selectedValue, setSelectedValue] = useState("PAYMENT METHOD");
  const [options, setOptions] = useState(["Cash", "Credit Card"]);
  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const fetchPd = useCallback(() => {
    const headers = { "Content-Type": "application/json" };
    const body = { token: localStorage.getItem(LOCAL_STORAGE.TOKEN) };
    return fetchCart({ endpoint, method: "POST", headers, body, setIsLoading });
  }, [endpoint]);

  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    setIsErr(false);
    fetchPd()
      .then((data) => {
        handleResponse(data, null, navigate);
        setCart(data.cart);
        const user = data.user;
        setInputs({
          FullName: user.fullName || "",
          Email: user.email,
          Phone: user.phone || "",
          Address: user.address || "",
        });
      })
      .catch((err) => {
        setIsErr(true);
      });
  }, []);

  const styleBox = {
    display: "flex",
    justifyContent: "space-around",
    padding: "0.5rem 1rem",
  };

  const handleInputs = (e, field) => {
    setInputs((prevInputs) => {
      return { ...prevInputs, [field]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SubBanner />
      <Box sx={styleBox}>
        <PageSize>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "490" }}>
            BILLING DETAILS
          </h3>
          <Grid container spacing={3} sx={{ marginBottom: "1rem" }}>
            <Grid item xs={12} md={6}>
              {isLoading && !isErr && <CirProgress />}
              {!isLoading && <CartTotal cart={cart} />}
            </Grid>
            <Grid item xs={12} md={6}>
              <form onSubmit={handleSubmit}>
                {inputFields.map((field, i) => (
                  <TextField
                    fullWidth
                    key={i}
                    id={field}
                    type="text"
                    label={field.toUpperCase()}
                    variant="outlined"
                    sx={{
                      marginBottom: "1rem",
                    }}
                    required
                    value={inputs[field]}
                    onChange={(e) => handleInputs(e, field)}
                  />
                ))}
                <Select
                  label={selectedValue}
                  values={options}
                  handleChange={handleChange}
                />
                <StyledButton type="submit" text="Place order" />
              </form>
            </Grid>
          </Grid>
        </PageSize>
      </Box>
    </>
  );
};

export default Checkout;
