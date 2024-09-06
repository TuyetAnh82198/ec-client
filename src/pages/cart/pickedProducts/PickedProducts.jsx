import PropTypes from "prop-types";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Paper,
  Checkbox,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { StyledCell } from "./styled";

const PickedProducts = ({ products, handleQuan }) => {
  const titles = ["IMAGE", "PRODUCT", "PRICE", "QUANTITY", "TOTAL", "REMOVE"];

  const styledDeleteBtn = {
    cursor: "pointer",
    color: "gray",
    textAlign: "center",
  };

  const cursor = { cursor: "pointer" };
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledCell>
              <Checkbox disabled />
            </StyledCell>
            {titles.map((t, i) => (
              <StyledCell key={i}>{t}</StyledCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((p) => (
            <TableRow key={p._id}>
              <StyledCell>
                <Checkbox />
              </StyledCell>
              <StyledCell>
                <img
                  style={{ width: "100%" }}
                  src={`${process.env.REACT_APP_SERVER}/${p.productId?.imgs[0]}`}
                  alt=""
                />
              </StyledCell>
              <StyledCell theme={{ textAlign: "left" }}>
                {p.productId?.name}
              </StyledCell>
              <StyledCell>
                {p.productId?.price.toLocaleString("en-US")}đ
              </StyledCell>
              <StyledCell>
                <Box sx={{ display: "flex" }}>
                  <ArrowLeftIcon
                    onClick={() =>
                      handleQuan({
                        action: "desc",
                        id: p.productId?._id,
                        quan: p.quan,
                        stock: p.productId?.stock,
                      })
                    }
                    sx={cursor}
                  />
                  {p.quan}
                  <ArrowRightIcon
                    onClick={() =>
                      handleQuan({
                        action: "inc",
                        id: p.productId?._id,
                        quan: p.quan,
                        stock: p.productId?.stock,
                      })
                    }
                    sx={cursor}
                  />
                </Box>
              </StyledCell>
              <StyledCell>
                {(p.productId?.price * p.quan).toLocaleString("en-US")}đ
              </StyledCell>
              <StyledCell sx={styledDeleteBtn}>
                <DeleteIcon />
              </StyledCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

PickedProducts.propTypes = {
  products: PropTypes.array,
  handleQuan: PropTypes.func,
};
export default PickedProducts;
