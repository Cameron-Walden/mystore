import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import "./CartItem.css";

export default function CartItem({ cartItem, updateCartQuantity,removeFromCart }) {

  return (
    <Card>
      <CardMedia
        className="cardMedia"
        image={cartItem.image.url}
        alt={cartItem.name}
      />
      <CardContent className="cardContent">
        <Typography variant="h5">{cartItem.name}</Typography>
        <Typography variant="h6">
          {cartItem.line_total.formatted_with_symbol}
        </Typography>
        <CardActions className="cartCardActions">
          <div className="buttons">
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
