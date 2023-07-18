import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const daylocalPackage =
  localStorage.getItem("daylocalPackage") !== null
    ? JSON.parse(localStorage.getItem("daylocalPackage"))
    : "";

const categoryLocal =
  localStorage.getItem("categoryLocal") !== null
    ? JSON.parse(localStorage.getItem("categoryLocal"))
    : "";

// her actiondan sonra local storage yazma
const setItemFunc = (item, daylocalPackage, totalQuantity, categoryLocal) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("daylocalPackage", JSON.stringify(daylocalPackage));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
  localStorage.setItem("categoryLocal", JSON.stringify(categoryLocal));
};
const initialState = {
  cart: items,
  totalPrice: totalQuantity,
  dayPackage: daylocalPackage,
  category: categoryLocal,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // butona klikdeki id ile datadan itemi tapib,carta push,yada varsa sayini artiririq
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (!itemInCart) {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = state.cart.reduce((total, item) => total + item.price, 0);

      setItemFunc(state.cart, state.dayPackage, state.totalPrice, state.category);
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
      state.totalPrice = state.cart.reduce((total, item) => total + item.price, 0);

      setItemFunc(state.cart, state.dayPackage, state.totalPrice, state.category);
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.dayPackage = "";
      state.category = "";

      setItemFunc(state.cart, state.dayPackage, state.totalPrice, state.category);
    },
    addToPackage: (state, action) => {
      state.dayPackage = action.payload;

      setItemFunc(state.cart, state.dayPackage, state.totalPrice, state.category);
    },
    addToCategory: (state, action) => {
      state.category = action.payload;

      setItemFunc(state.cart, state.dayPackage, state.totalPrice, state.category);
    },
  },
});
export const selectCartItemsByType = (state, type) => {
  return state.cart.cart.filter((item) => item.type === type);
};
export const { addToCart, removeItem, addToPackage, addToCategory, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
