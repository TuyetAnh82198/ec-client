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
import handlePrice from "../../../utils/handlePrice";

const PickedProducts = ({
  products,
  handleQuan,
  handleDelete,
  ids,
  handleCheck,
}) => {
  const titles = [
    "SELECT",
    "IMAGE",
    "PRODUCT",
    "PRICE",
    "QUANTITY",
    "TOTAL",
    "REMOVE",
  ];

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
            {titles.map((t, i) => (
              <StyledCell key={i}>{t}</StyledCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((p) => (
            <TableRow key={p._id}>
              <StyledCell>
                <Checkbox onClick={() => handleCheck(p.productId?._id)} />
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
              <StyledCell>{handlePrice(p.productId?.price)}đ</StyledCell>
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
                {handlePrice(p.productId?.price * p.quan)}đ
              </StyledCell>
              <StyledCell sx={styledDeleteBtn}>
                <DeleteIcon
                  onClick={() => handleDelete({ id: p.productId?._id })}
                />
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
  handleDelete: PropTypes.func,
  ids: PropTypes.array,
  handleCheck: PropTypes.func,
};
export default PickedProducts;
