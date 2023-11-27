import { createContext, useEffect, useState } from "react";

export const CartContextObject = createContext();

const storage = JSON.parse(localStorage.getItem("cart"));

export const CartContextProvider = ({ children, deneme = storage }) => {
  const [cart, setCart] = useState(deneme || []);
  const addItem = (item) => {
    // verilen itemi sepete ekleyin

    const isInclude = cart.some((prod) => prod.id === item.id);

    console.log("ISINCLUDE", isInclude);

    const addProduct = !isInclude ? [...cart, item] : [...cart];

    setCart(addProduct);
    localStorage.setItem("cart", JSON.stringify(addProduct));
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

  return (
    <CartContextObject.Provider value={contextCartObject}>
      {children}
    </CartContextObject.Provider>
  );
};
