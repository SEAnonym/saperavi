import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import ProductsContextProvider from "./ProductsContextProvider";

import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyled";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </ThemeProvider>
  </BrowserRouter>
);
