import { createContext, useEffect, useState } from "react";

export const CartContextObject = createContext();

const storage = JSON.parse(localStorage.getItem("cart"));

export const CartContextProvider = ({ children, local = storage }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart((prevProd) =>
      !cart.includes(item) ? [...prevProd, item] : [...prevProd]
    );
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const remItem = (id) => {
    const updatedCarts = cart.filter((prd) => id !== prd.id);
    setCart(updatedCarts);
    localStorage.setItem("cart", JSON.stringify(updatedCarts));
  };
  const contextCartObject = {
    cart,
    setCart,
    addItem,
    remItem,
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //   useEffect(() => {
  //     local && setCart(local);
  //   }, []);

  return (
    <CartContextObject.Provider value={contextCartObject}>
      {children}
    </CartContextObject.Provider>
  );
};
