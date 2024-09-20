import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SubBanner from "../../components/banner/SubBanner";
import PageSize from "../../components/pageSize/PageSize";
import HistoryTable from "./table/HistoryTable";
import fetchCart from "../../utils/fetchCart";
import CirProgress from "../../components/circularProgress/CircularProgress";
import { API, LOCAL_STORAGE, PAGE_PATH } from "../../utils/constants";

const History = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [endpoint, setEndpoint] = useState(API.CART.HISTORY);

  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(PAGE_PATH.HISTORY_DETAIL.slice(0, -3) + id);
  };

  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    const body = { token: localStorage.getItem(LOCAL_STORAGE.TOKEN) };

    setIsLoading(true);
    setIsErr(false);
    fetchCart({ endpoint, method: "POST", headers, body, setIsLoading })
      .then((data) => {
        setItems(data.cart);
      })
      .catch((err) => {
        setIsErr(true);
      });
  }, []);

  return (
    <>
      <SubBanner />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "1rem 0",
        }}
      >
        <PageSize>
          {isLoading && !isErr && <CirProgress />}
          {items.length === 0 && (
            <Box sx={{ textAlign: "center" }}>History is empty.</Box>
          )}
          {items.length > 0 && (
            <HistoryTable items={items} handleView={handleView} />
          )}
        </PageSize>
      </Box>
    </>
  );
};

export default History;
