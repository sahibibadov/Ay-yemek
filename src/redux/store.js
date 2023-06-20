import { configureStore } from "@reduxjs/toolkit";
import lang from "./languageSlice";
import modal from "./modalSlice";

const store = configureStore({
  reducer: {
    lang,
    modal,
  },
});
export default store;
