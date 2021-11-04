import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter/Inter-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter-Medium";
    src: url("/fonts/Inter/Inter-Medium.ttf");
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "Inter-Bold";
    src: url("/fonts/Inter/Inter-Bold.ttf");
    font-style: bold;
    font-weight: 600;
    font-display: swap;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif, -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  }
`;

export default GlobalStyle;
