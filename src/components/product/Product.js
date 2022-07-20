import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  CardContent,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

import useStyles from "./productStyles";

export default function Product({ product, onAddToCart }) {
  const classes = useStyles();

  const productDescription = () => {
    return { __html: product.description };
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={productDescription()}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
