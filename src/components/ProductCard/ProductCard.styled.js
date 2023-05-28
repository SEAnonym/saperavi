import styled from "styled-components";

export const ProductCard = styled.div`
  width: fit-content;
  padding: 0.5rem;
  box-shadow: 5px 10px 15px 0 rgb(0, 0, 0, 50);
  border-radius: 1rem;
  overflow: hidden;

  a {
    background: red;
  }

  .product-image-container {
    img {
      object-fit: cover;
      max-width: 15rem;
      max-height: 25rem;
      border-radius: 1rem 1rem 0 0;
    }
  }

  .product-description-container {
    font-size: ${({ theme }) => theme.fontSize.base};
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
