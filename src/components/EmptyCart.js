import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <Typography variant="subtitle1">
     Your cart is empty. <Link to="/">Head home to continue shopping.</Link>
    </Typography>
  );
}
