// import useAppContext from "";
import { Link } from "react-router-dom";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import * as Styled from "./ProductCard.styled";

export default function ProductCard({ product }) {
  const itteration = [1, 2, 3, 4, 5];
  return (
    <Styled.ProductCard>
      <Link to={`/products/${product.id}`}>
        <figure className="product-image-container">
          <img src="assets/images/wine-bottle.jpg" alt="" />
        </figure>
        <div className="product-description-container">
          <span className="product__name">
            {product.name} - {product.year}
            <AiOutlineHeart className="save-icon" />
          </span>
          <div className="product__raiting">
            {itteration.map((el) => (
              <AiOutlineStar />
            ))}
          </div>
          <span className="product__price"> {product.price} GEL</span>
        </div>
      </Link>
    </Styled.ProductCard>
  );
}
