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

/*
can pass props or destructure the products we're mapping over from Products.js. 
makjes things a but cleaner
*/

export default function Product({ product, onAddToCart }) {
  const classes = useStyles();

  const productDescription = () => {
    return { __html: product.description };
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://i5.walmartimages.com/asr/6777fc37-0fe4-42e0-8b0d-77a6a90e6b47_1.d799309552c5d283fff87e326c02d4cb.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        /*image={product.media.source}*/ 
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
