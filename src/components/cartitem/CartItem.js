import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import useStyles from "./cartItemStyles";

export default function CartItem({
  cartItem,
  updateCartQuantity,
  removeFromCart,
}) {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        className={classes.media}
        //   image={cartItem.media.source}
        image="https://i5.walmartimages.com/asr/6777fc37-0fe4-42e0-8b0d-77a6a90e6b47_1.d799309552c5d283fff87e326c02d4cb.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        alt={cartItem.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{cartItem.name}</Typography>
        <Typography variant="h5">
          {cartItem.line_total.formatted_with_symbol}
        </Typography>
        <CardActions className={classes.cartActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="small"
              onClick={() =>
                updateCartQuantity(cartItem.id, cartItem.quantity - 1)
              }
            >
              -
            </Button>
            <Typography>{cartItem.quantity}</Typography>
            <Button
              type="button"
              size="small"
              onClick={() =>
                updateCartQuantity(cartItem.id, cartItem.quantity + 1)
              }
            >
              +
            </Button>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => removeFromCart(cartItem.id)}
          >
            Remove
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
