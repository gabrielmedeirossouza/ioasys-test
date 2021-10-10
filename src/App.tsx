import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";
import { AuthProvider } from "@/contexts";

import { light } from "@/styles/themes";
import { i18next } from "@/i18n";
import { Routes } from "@/routes";

import { GlobalStyle } from "@/styles/shared/main";

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
