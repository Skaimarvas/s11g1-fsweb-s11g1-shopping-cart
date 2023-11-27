import React, { useContext, useState } from "react";
import { Route } from "react-router-dom";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContextObject } from "./context/createContext";

function App() {
  const { products, setProducts, cart, setCart } =
    useContext(ProductContextObject);

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/cart">
          <ShoppingCart cart={cart} />
        </Route>
      </main>
    </div>
  );
}

export default App;
