import ProductCard from "../ProductCard/ProductCard";
import * as Styled from "./ProductCardsContainer.styled";

export default function ProductCardsContainer(props) {
  return (
    <Styled.ProductCardsContainer>
      <ProductCard />
      <ProductCard />
    </Styled.ProductCardsContainer>
  );
}
