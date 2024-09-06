import fetchCart from "./fetchCart";
import { LOCAL_STORAGE } from "./constants";

const handleAddToCart = ({ id, quan, navigate, endpoint, handleResponse }) => {
  const headers = { "Content-Type": "application/json" };
  const body = {
    productId: id,
    quan,
    token: localStorage.getItem(LOCAL_STORAGE.TOKEN),
  };

  fetchCart({ endpoint, method: "POST", headers, body })
    .then((data) => {
      handleResponse && handleResponse(data, null, navigate);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default handleAddToCart;
