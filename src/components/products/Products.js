import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Product from "../product/Product";
import useStyles from "./productsStyles";
 
export default function Products({ commerce, setCart }) {
  const [products, setProducts] = useState([]);
  const classes = useStyles();

  const getProducts = async () => {
    const response = await commerce.products.list();
    const commerceProducts = response.data;
    setProducts(commerceProducts);
  };
  
  const addToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
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
            <Product product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
