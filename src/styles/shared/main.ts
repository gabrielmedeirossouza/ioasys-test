import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.default};

    background-color: ${({ theme }) => theme.colors.background};
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Heebo', sans-serif;
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text.contrast};
    -webkit-box-shadow: 0 0 0px 0px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
