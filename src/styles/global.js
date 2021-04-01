import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body { 
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }
`;

export { GlobalStyle };
