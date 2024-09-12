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
  handleSocketConnect2,
  handleSocketAction,
} from "../../utils/handleSocket";
import handleQuanErr from "../../utils/handleQuanErr";
import CirProgress from "../../components/circularProgress/CircularProgress";
import CartTotal from "./total/CartTotal";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [endpoint, setEndpoint] = useState(API.CART.GET);
  const [subEndpoint, setSubEndpoint] = useState(API.CART.ADD);
  const [deleteEnpoint, setDeleteEndpoint] = useState(API.CART.DELETE);
  const [ids, setIds] = useState([]);

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

  useEffect(() => handleSocketConnect2(socket), []);
  useEffect(() => handleSocketAction.cart.get(socket, setCart), []);

  const styledNavigateBtns = {
    margin: "1rem 0",
    display: "flex",
    justifyContent: "space-between",
  };
  const styledNavigateBtn = {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  const handleDelete = ({ ids, id }) => {
    const isConfirm = window.confirm("Are you sure?");
    if (!isConfirm) {
      return;
    }
    const headers = { "Content-Type": "application/json" };
    const productId = ids ? ids : [id];
    const products = cart.products.filter((pd) =>
      productId.includes(pd.productId._id)
    );
    const amount = products.reduce(
      (acc, p) => acc + p.productId.price * p.quan,
      0
    );
    const body = {
      productId,
      amount,
      token: localStorage.getItem(LOCAL_STORAGE.TOKEN),
    };
    fetchCart({ endpoint: deleteEnpoint, method: "POST", headers, body })
      .then((data) => {
        handleResponse(data, null, navigate);
      })
      .catch((err) => {
        console.log(err);
      });
    setIds([]);
  };

  const handleCheck = (productId) => {
    const index = ids.findIndex((id) => id === productId);
    let subArr;
    if (index !== -1) {
      subArr = [...ids];
      subArr.splice(index, 1);
      setIds(subArr);
    } else {
      if (ids.length > 0) {
        subArr = [...ids, productId];
        setIds(subArr);
      } else {
        subArr = [productId];
        setIds(subArr);
      }
    }
  };

  const styledTitle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <>
      <SubBanner />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "0.5rem",
        }}
      >
        <PageSize>
          <Grid container>
            <Grid item sx={styledTitle} xs={12} md={8}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "490" }}>
                SHOPPING CART
              </h3>
              {ids.length > 0 && (
                <Button
                  onClick={() => {
                    handleDelete({ ids });
                  }}
                  sx={{ textTransform: "none", height: "2rem" }}
                  variant="contained"
                  color="error"
                >
                  Delete many
                </Button>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ marginBottom: "1rem" }}>
            <Grid item xs={12} md={8}>
              {!isLoading && cart?.products.length === 0 && (
                <Box>
                  <ShoppingCartIcon />
                  Cart is empty.
                </Box>
              )}
              {isLoading && !isErr && <CirProgress />}
              {cart?.products.length > 0 && (
                <PickedProducts
                  products={cart.products}
                  isLoading={isLoading}
                  isErr={isErr}
                  handleQuan={handleQuan}
                  handleDelete={handleDelete}
                  handleCheck={handleCheck}
                />
              )}
              <Box sx={styledNavigateBtns}>
                <Box
                  onClick={() => handleNavigate("shop")}
                  sx={styledNavigateBtn}
                >
                  <ArrowBack />
                  <span> Continue shopping</span>
                </Box>
                <Box
                  onClick={() => handleNavigate("checkout")}
                  sx={styledNavigateBtn}
                >
                  <Button sx={{ textTransform: "none" }} variant="outlined">
                    <span>Proceed to checkout </span>
                    <ArrowForwardIcon />
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <CartTotal cart={cart} />
            </Grid>
          </Grid>
        </PageSize>
      </Box>
    </>
  );
};

export default Cart;
