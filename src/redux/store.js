import { configureStore } from "@reduxjs/toolkit";
import lang from "./languageSlice";
import modal from "./modalSlice";
import users from "./userSlice";

const store = configureStore({
  reducer: {
    lang,
    modal,
    users,
  },
});
export default store;
