import { useProductsContext } from "../../ProductsContextProvider";

import ProductCard from "../ProductCard/ProductCard";
import * as Styled from "./ProductCardsContainer.styled";

export default function ProductCardsContainer({ limit }) {
  const { products } = useProductsContext();
  const showLimit = limit ? limit : products.length;

  return (
    <Styled.ProductCardsContainer>
      {products.slice(0, showLimit).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Styled.ProductCardsContainer>
  );
}
