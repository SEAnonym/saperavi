import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100vw;
  border: 1px solid white;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  .burger-menu {
    &__icon {
      width: 3.5rem;
      height: 3.5rem;
    }
  }

  .logo-container {
    &__icon {
      width: 5rem;
      height: 5rem;
    }
  }
`;
