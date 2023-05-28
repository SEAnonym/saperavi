import * as Styled from "./ProductCard.styled";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
export default function ProductCard(props) {
  const itteration = [1, 2, 3, 4, 5];

  return (
    <Styled.ProductCard>
      <figure className="product-image-container">
        <img src="assets/images/wine-bottle.jpg" alt="" />
      </figure>
      <div className="product-description-container">
        <span className="product__name">
          Product Name - Year
          <AiOutlineHeart className="save-icon" />
        </span>
        <div className="product__raiting">
          {itteration.map((el) => (
            <AiOutlineStar />
          ))}
        </div>
        <span className="product__price"> 99.0 GEL</span>
      </div>
    </Styled.ProductCard>
  );
}
