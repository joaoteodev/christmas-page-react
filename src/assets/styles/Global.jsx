import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  border: none;
  font-weight: 500;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;

}

body {
  font-size: 1.6rem;
  min-height: 100vh;
}

#root {
  min-height: 100vh;
  padding-top: 7.4rem;
}
`;
