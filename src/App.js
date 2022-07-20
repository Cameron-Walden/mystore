import { useState, useEffect } from "react";
import { commerce } from "./commerce/commerce";
import NavBar from "./components/navbar/NavBar";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [cart, setCart] = useState({});

  const getCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };

  const addToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCart(response.cart);
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
  }, []);
  
  return (
    <Router>
      <div>
        <NavBar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<Products commerce={commerce} onAddToCart={addToCart} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                updateCartQuantity={updateCartQuantity}
                removeFromCart={removeFromCart}
                emptyCart={emptyCart}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
