import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100vw;
  height: 10rem;
  border: 1px solid white;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  .navbar-list {
    width: 20rem;
    height: 100%;
    font-size: 2rem;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .logo-container {
    &__icon {
      width: 5rem;
      height: 5rem;
    }
  }
`;
