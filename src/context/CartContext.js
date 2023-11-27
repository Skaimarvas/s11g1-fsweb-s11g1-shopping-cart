import { createContext, useState } from "react";

export const CartContextObject = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart((prevProd) => [...prevProd, item]);
  };
  const contextCartObject = {
    cart,
    setCart,
    addItem,
  };

  return (
    <CartContextObject.Provider value={contextCartObject}>
      {children}
    </CartContextObject.Provider>
  );
};
