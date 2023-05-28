import { createContext, useContext, useState } from "react";
import data from "./lib/products.json";

const ProductsContext = createContext({
  products: [],
  findProduct: (productId) => {},
  activeProduct: null,
  resetActiveProduct: () => {},
});

export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState(data || []);
  const [activeProduct, setActiveProduct] = useState(null);

  function findProduct(productId) {
    if (!productId) return;

    const activePr = products.find((product) => product.id === productId);

    if (!activePr) return;

    setActiveProduct(activePr);
  }

  function resetActiveProduct() {
    setActiveProduct(null);
  }

  return (
    <ProductsContext.Provider
      value={{ products, findProduct, activeProduct, resetActiveProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => useContext(ProductsContext);
