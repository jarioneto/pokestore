import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #F5F5F5;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    backface-visibility: hidden;
  }
  

  button,
  input {
    outline: none;
    background: none;
  }

  img {
    pointer-events: none;
    max-width: 100%;
  }
`;
