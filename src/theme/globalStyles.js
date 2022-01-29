import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text.subtitle};
    font-family: "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all 0.5s linear;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  .icon-darkmode {
    fill: white;
  }

  .icon-darkmode .st0 {
    stroke: white;
  }

  .icon-darkmode.fill-path path {
    fill: white;
  }

  .svg {
    transition: all 0.5s linear;
  }

  .svg .st0 {
    transition: all 0.5s linear;
  }

  .svg.fill-path path {
    transition: all 0.5s linear;
  }

  .link {
    text-decoration: none;
    color: inherit;
  }
`;
