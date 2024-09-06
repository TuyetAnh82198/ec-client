import { Grid, Box, Button } from "@mui/material";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";

import SubBanner from "../../components/banner/SubBanner";
import PickedProducts from "./pickedProducts/PickedProducts";
import PageSize from "../../components/pageSize/PageSize";
import { API, LOCAL_STORAGE } from "../../utils/constants";
import fetchCart from "../../utils/fetchCart";
import handleResponse from "../../utils/handleResponse";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import handleAddToCart from "../../utils/handleAddToCart";
import { socket } from "../../socket";
import {
  handleSocketConnect,
  handleSocketAction,
} from "../../utils/handleSocket";
import handleQuanErr from "../../utils/handleQuanErr";
import CirProgress from "../../components/circularProgress/CircularProgress";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [endpoint, setEndpoint] = useState(API.CART.GET);
  const [subEndpoint, setSubEndpoint] = useState(API.CART.ADD);

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
      })
      .catch((err) => {
        setIsErr(true);
      });
  }, []);

  const handleNavigate = (dir) => {
    if (dir === "checkout") {
      navigate("/checkout");
    } else {
      navigate("/shop");
    }
  };

  const handleQuan = ({ action, id, quan, stock }) => {
    if (action === "inc") {
      if (quan >= stock) {
        return handleQuanErr();
      }
      handleAddToCart({ id, quan: quan + 1, navigate, endpoint: subEndpoint });
    } else {
      if (quan <= 1) {
        return handleQuanErr();
      }
      handleAddToCart({ id, quan: quan - 1, navigate, endpoint: subEndpoint });
    }
  };

  useEffect(() => handleSocketConnect(socket), []);
  useEffect(() => handleSocketAction.cart.get(socket, setCart), []);

  return (
    <>
      <SubBanner />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <PageSize>
          <h3>SHOPPING CART</h3>
          <Grid container spacing={3} sx={{ marginBottom: "1rem" }}>
            <Grid item xs={8}>
              {!isLoading && !cart && (
                <Box>
                  <ShoppingCartIcon />
                  Cart is empty.
                </Box>
              )}
              {isLoading && !isErr && <CirProgress />}
              {cart && (
                <PickedProducts
                  products={cart.products}
                  isLoading={isLoading}
                  isErr={isErr}
                  handleQuan={handleQuan}
                />
              )}
              <Box
                sx={{ margin: "1rem 0" }}
                display="flex"
                justifyContent="space-between"
              >
                <Box
                  onClick={() => handleNavigate("shop")}
                  sx={{ cursor: "pointer" }}
                  display="flex"
                  alignItems="center"
                >
                  <ArrowBack sx={{ marginRight: "0.5rem" }} />
                  <p>Continue shopping</p>
                </Box>
                <Box
                  onClick={() => handleNavigate("checkout")}
                  sx={{ cursor: "pointer" }}
                  display="flex"
                  alignItems="center"
                >
                  <Button sx={{ textTransform: "none" }} variant="outlined">
                    Proceed to checkout{" "}
                    <ArrowForwardIcon sx={{ marginLeft: "0.5rem" }} />
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </PageSize>
      </Box>
    </>
  );
};

export default Cart;
