import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    font-family: monospace;
}
* {
  box-sizing: content-box;
  margin: 0;
  padding: 0;
}
`;

export default GlobalStyle;
