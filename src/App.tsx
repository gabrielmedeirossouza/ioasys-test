import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";

// import { Login } from "@/pages";
import { AuthProvider } from "@/contexts";
import { Routes } from "@/routes";

import { light } from "@/styles/themes";
import { GlobalStyle } from "@/styles/shared/main";

import { i18next } from "@/i18n";

export const App = () => (
  <ThemeProvider theme={light}>
    <I18nextProvider i18n={i18next}>
      <GlobalStyle />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </I18nextProvider>
  </ThemeProvider>
);
