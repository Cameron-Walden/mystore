import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Product from "../product/Product";
import useStyles from "./productsStyles";
 
export default function Products({ commerce, onAddToCart }) {
  const [products, setProducts] = useState([]);
  const classes = useStyles();

  const getProducts = async () => {
    const response = await commerce.products.list();
    const commerceProducts = response.data;
    setProducts(commerceProducts);
  };

  useEffect(() => {
    getProducts()
  });

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacig={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
