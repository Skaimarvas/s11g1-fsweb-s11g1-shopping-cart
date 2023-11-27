import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContextObject = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart((prevProd) => [...prevProd, item]);
  };

  const contextObject = { products, setProducts, cart, setCart, addItem };

  return (
    <ProductContextObject.Provider value={contextObject}>
      {children}
    </ProductContextObject.Provider>
  );
};
