import { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import EmptyCart from "../emptycart/EmptyCart";
import FilledCart from "../filledcart/FilledCart";
import useStyles from "./cartStyles";

export default function Cart({ commerce, cart, setCart }) {
  const classes = useStyles();

  const getCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  const updateCartQuantity = async (id, quantity) => {
    const response = await commerce.cart.update(id, { quantity });
    setCart(response.cart);
  };

  const removeFromCart = async (id) => {
    const response = await commerce.cart.remove(id);
    setCart(response.cart);
  };

  const emptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
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
      {/* {!cart.line_items.length ? (
        <EmptyCart cart={cart} />
      ) : (
        <FilledCart
          cart={cart}
          emptyCart={emptyCart}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
        />
      )} */}
      <FilledCart
          cart={cart}
          emptyCart={emptyCart}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
        />
      {/* {cart.line_items.length > 0 ? (
        <FilledCart
          cart={cart}
          emptyCart={emptyCart}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
        />
      ) : (
        <EmptyCart cart={cart} />
      )} */}
    </Container>
  );
}
