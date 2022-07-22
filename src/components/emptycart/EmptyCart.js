import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './EmptyCart.css'

export default function EmptyCart() {
  return (
    <Typography variant="subtitle1">
     Your cart is empty. <Link to="/" className="emptyCartLink">Head home to continue shopping.</Link>
    </Typography>
  );
}
