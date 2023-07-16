import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  cartOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    openCart: (state, action) => {
      state.cartOpen = true;
    },
    closeCart: (state, action) => {
      state.cartOpen = false;
    },
  },
});

export const { closeModal, openModal, closeCart, openCart } = modalSlice.actions;

export default modalSlice.reducer;
