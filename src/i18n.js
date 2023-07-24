import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // backendden dil json datasin getirmek
import LanguageDetector from "i18next-browser-languagedetector"; //

/* //backendden data lamayacayiqsa bununla edirik localda
const resources = {
  az: {
    translation: {
      welcome: "xos geldiniz",
    },
  },
  en: {
    translation: {
      welcome: "hello",
    },
  },
}; */

i18n
  .use(initReactI18next) // butun componentleri ucun el catan edir
  .use(Backend) //backend ucun
  .use(LanguageDetector)
  .init({
    //  lng: "az",
    fallbackLng: "az", // userin dili yoxdursa default acilacaq dili gosterir
    //  lng: "az",// LanguageDetector istifade edersek yazilmir, lng yazilanda localdaki dili deyisir lng-dekin edir
    //   resources, //localda etmek ucun
  });

export default i18n;
