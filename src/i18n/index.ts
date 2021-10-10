// Por conta do layout proposto, não implementei um switcher de idioma. i18n.changeLanguage(<lang>)
// import LanguageDetector from "i18next-browser-languagedetector";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./locales";

const i18nConfig = {
  debug: true,
  resources: translations,
  fallbackLng: "pt-BR", // Altere para en-US para traduzir automaticamente toda a aplicação
  defaultNS: "path",
};

i18n.use(initReactI18next).init(i18nConfig);

export const i18next = i18n;
