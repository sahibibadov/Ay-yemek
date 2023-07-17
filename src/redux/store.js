import { configureStore } from "@reduxjs/toolkit";
import lang from "./languageSlice";
import modal from "./modalSlice";
import users from "./userSlice";
import categoryProductsSlice from "./categoryProductsSlice";
import cart from "./cartSlice";

const store = configureStore({
  reducer: {
    lang,
    modal,
    users,
    categoryProductsSlice,
    cart,
  },
});
export default store;
