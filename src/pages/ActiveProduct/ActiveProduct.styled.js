import styled from "styled-components";

export const ActiveProduct = styled.div`
  height: 100vh;
  .image-container img {
    width: 100%;
  }

  .product-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 2rem;

    .product-name {
      font-size: 2.5rem;
    }

    .product-story {
      font-size: 1.9rem;
      text-align: center;
    }
  }
`;
