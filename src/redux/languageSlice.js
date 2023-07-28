import { createSlice } from "@reduxjs/toolkit";

const tapActiveLocal = localStorage.getItem("tapActive") || 1;
const selectedLocal = localStorage.getItem("selected") || "Az";


const setLocal = (tapactivelocal, selectedlocal) => {
  localStorage.setItem("tapActive", tapactivelocal);
  localStorage.setItem("selected", selectedlocal);
};


const initialState = {
  tapActive: tapActiveLocal,
  selected: selectedLocal,
  open: false,
  langButton: [
    {
      id: 1,
      lang: "az",
    },
    {
      id: 2,
      lang: "en",
    },
  ],
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {

    toggleOpen: (state, action) => {
      state.open = !state.open;
      setLocal(state.tapActive, state.selected);
    },

    close: (state, action) => {
      state.open = false;
      setLocal(state.tapActive, state.selected);
    },

    setTapActive: (state, action) => {
      state.tapActive = action.payload;
      setLocal(state.tapActive, state.selected);
    },

    setSelected: (state, action) => {
      state.selected = action.payload;
      setLocal(state.tapActive, state.selected);
    },
  },
});

export const { toggleOpen, close, setSelected, setTapActive } = langSlice.actions;

export default langSlice.reducer;
