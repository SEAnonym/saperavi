import styled from "styled-components";

export const ProductCard = styled.div`
  width: fit-content;
  padding: 0.5rem;
  border: 1px solid white;
  border-radius: 1rem;
  overflow: hidden;

  .product-image-container {
    img {
      width: 15rem;
      height: 25rem;
      border-radius: 1rem 1rem 0 0;
    }
  }
  .product-description-container {
    font-size: ${({ theme }) => theme.fontSize.xl};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.7rem;
  }

  .product__name {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .product__price {
    font-size: ${({ theme }) => theme.fontSize.ul};
  }
`;
// rgb(255,255,255)
