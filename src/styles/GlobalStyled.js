import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
  all: unset;
  display: revert;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
body {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
}

table {
  border-collapse: collapse;
}

textarea {
  white-space: revert;
}

`;

export default GlobalStyle;
