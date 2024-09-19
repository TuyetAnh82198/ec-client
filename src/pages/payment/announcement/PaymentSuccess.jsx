import { useState, useEffect } from "react";

import Announcement from "../../../components/announcement/Announcement";
import { CONTENT, API, LOCAL_STORAGE } from "../../../utils/constants";
import fetchCart from "../../../utils/fetchCart";

const PaymentSuccess = () => {
  const [endpoint, setEndpoint] = useState(API.CART.CHECK_PAYMENT);

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    const body = { token: localStorage.getItem(LOCAL_STORAGE.TOKEN) };
    fetchCart({ endpoint, method: "POST", headers, body })
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Announcement
      title={CONTENT.PAYMENT.SUCCESS.TITLE}
      content={CONTENT.PAYMENT.SUCCESS.CONTENT}
    />
  );
};

export default PaymentSuccess;
