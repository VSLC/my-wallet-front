import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
    h1{
      font-family: 'Arial';
    }
  }`;

export default GlobalStyle;
