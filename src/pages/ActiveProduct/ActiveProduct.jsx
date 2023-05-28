import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../ProductsContextProvider";
import { Navigation } from "../../components";
import * as Styled from "./ActiveProduct.styled";

function ActiveProduct(props) {
  const { findProduct, resetActiveProduct, activeProduct } =
    useProductsContext();
  const { productId } = useParams();

  useEffect(() => {
    if (!productId) return;
    findProduct(productId);

    return () => {
      resetActiveProduct();
    };
  }, []);
  return (
    activeProduct && (
      <Styled.ActiveProduct>
        <Navigation />
        <figure className="image-container">
          <img src={`${activeProduct.image}`} alt="wine bottle" />
        </figure>
        <div className="product-description">
          <h1 className="product-name">{activeProduct.name}</h1>
          <p className="product-year">Year {activeProduct.year}</p>
          <p className="product-price">Price: {activeProduct.price}</p>
          <p className="product-story">{activeProduct.description}</p>
        </div>
      </Styled.ActiveProduct>
    )
  );
}

export default ActiveProduct;
