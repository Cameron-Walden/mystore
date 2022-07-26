import {
  Card,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
  CardContent,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import './Product.css';

export default function Product({ product, addToCart }) {
  const productDescription = () => {
    return { __html: product.description };
  };

  return (
    <Card className='card'>
      <CardMedia
        className='cardMedia'
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className="cardContent">
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
      <CardActions disableSpacing className="cardActions">
        <IconButton
          aria-label="Add to Cart"
          onClick={() => addToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
