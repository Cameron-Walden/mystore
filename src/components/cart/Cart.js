import { Container, Typography } from "@mui/material";
import EmptyCart from '../emptycart/EmptyCart'
import FilledCart from "../filledcart/FilledCart";
import useStyles from "./cartStyles";

export default function Cart({ cart, updateCartQuantity, removeFromCart, emptyCart }) {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3">
        Shopping Cart
      </Typography>
      {!cart.line_items.length ? (
        <EmptyCart cart={cart} />
      ) : (
        <FilledCart
          cart={cart}
          emptyCart={emptyCart}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
        />
      )}
      {/* <FilledCart
          cart={cart}
          emptyCart={emptyCart}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
        /> */}
    </Container>
  );
}
