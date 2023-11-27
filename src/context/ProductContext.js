import { createContext, useState } from "react";
import { data } from "../data";

export const ProductContextObject = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const contextProductObject = {
    products,
    setProducts,
  };

  return (
    <ProductContextObject.Provider value={contextProductObject}>
      {children}
    </ProductContextObject.Provider>
  );
};
