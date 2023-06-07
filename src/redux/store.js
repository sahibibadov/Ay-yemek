import { configureStore } from "@reduxjs/toolkit";
import lang from "./languageSlice";

const store = configureStore({
  reducer: {
    lang,
  },
});
export default store;
