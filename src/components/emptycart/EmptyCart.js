import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from './emptyCartStyles'

export default function EmptyCart() {
  const classes = useStyles()
  return (
    <Typography variant="subtitle1">
     Your cart is empty. <Link  className={classes.link}to="/">Head home to continue shopping.</Link>
    </Typography>
  );
}
