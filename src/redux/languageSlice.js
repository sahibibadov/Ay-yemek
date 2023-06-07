import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tapActive: 0,
  selected: "Az",
  open: false,
  langButton: [
    {
      lang: "Az",
      id: 1,
    },
    {
      lang: "En",
      id: 2,
    },
  ],
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleOpen: (state, action) => {
      state.open = !state.open;
    },
    close: (state, action) => {
      state.open = false;
    },
    setTapActive: (state, action) => {
      state.tapActive = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { toggleOpen, close, setSelected, setTapActive } =
  langSlice.actions;

export default langSlice.reducer;
