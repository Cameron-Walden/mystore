import { useEffect } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import EmptyCart from "../emptycart/EmptyCart";
import FilledCart from "../filledcart/FilledCart";
import "./Cart.css";

export default function Cart({ commerce, cart, setCart }) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cart.line_items) return <CircularProgress />;

  return (
    <Container>
      <Typography className="title" variant="h3">
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
    </Container>
  );
}
