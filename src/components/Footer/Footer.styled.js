import styled from "styled-components";

export const Footer = styled.footer`
  margin-top: auto;
  border-top: 0.1rem solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .logo-container {
    .logo-icon {
      width: 10rem;
      height: 10rem;
    }
  }

  .additional-links-container {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.biggest};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
  }
`;
