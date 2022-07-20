import { Grid, Typography, Button, CircularProgress } from "@mui/material";
import CartItem from "../cartitem/CartItem";
import useStyles from "./filledCartStyles";

export default function FilledCart({ cart, updateCartQuantity, removeFromCart, emptyCart }) {
  const classes = useStyles();

  return (
    <>
      {!cart.line_items ? (
        <CircularProgress />
      ) : (
        <>
          <Grid container spacing={3}>
            {cart.line_items.map((cartItem) => (
              <Grid item={true} sm={8} md={6} lg={4} key={cartItem.id}>
                <CartItem
                  cartItem={cartItem}
                  updateCartQuantity={updateCartQuantity}
                  removeFromCart={removeFromCart}
                />
              </Grid>
            ))}
          </Grid>
          <div className={classes.cardDetails}>
            <Typography variant="h4">
              Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
              <Button
                className={classes.emptyCartButton}
                size="large"
                type="button"
                variant="contained"
                color="secondary"
                onClick={emptyCart}
              >
                Empty Cart
              </Button>
              <Button
                className={classes.checkoutButton}
                size="large"
                type="button"
                variant="contained"
                color="primary"
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
