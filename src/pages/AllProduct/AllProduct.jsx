import * as Styled from "./AllProduct.styled";
import { Navigation, ProductCardsContainer } from "../../components";

export default function AllProduct(props) {
  return (
    <Styled.AllProduct>
      <Navigation />
      <ProductCardsContainer />
    </Styled.AllProduct>
  );
}
