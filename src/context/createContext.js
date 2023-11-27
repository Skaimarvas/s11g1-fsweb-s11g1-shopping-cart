import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContextObject = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const contextObject = { products, setProducts, cart, setCart };

  return (
    <ProductContextObject.Provider value={contextObject}>
      {children}
    </ProductContextObject.Provider>
  );
};
