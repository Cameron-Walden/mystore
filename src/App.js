import { useState } from "react";
import { commerce } from "./commerce/commerce";
import NavBar from "./components/navbar/NavBar";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [cart, setCart] = useState({});

  return (
    <Router>
      <div>
        <NavBar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={<Products commerce={commerce} setCart={setCart} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart commerce={commerce} cart={cart} setCart={setCart} />}
          ></Route>
          <Route path="/checkout" 
                 element={<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
