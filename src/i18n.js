import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector"; //

i18n
  .use(initReactI18next) // butun componentleri ucun el catan edir
  .use(Backend) //backend ucun
  .use(LanguageDetector)
  .init({
    //  lng: "az",
    fallbackLng: "az", // userin dili yoxdursa default acilacaq dili gosterir
  });

export default i18n;
