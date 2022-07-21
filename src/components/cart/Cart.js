import { useEffect} from 'react';
import { Container, Typography } from "@mui/material";
import EmptyCart from '../emptycart/EmptyCart'
import FilledCart from "../filledcart/FilledCart";
import useStyles from "./cartStyles";

export default function Cart({ commerce, cart, setCart, updateCartQuantity, removeFromCart, emptyCart }) {
  const classes = useStyles();

  const getCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  useEffect(() => {
    getCart();
  });

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
