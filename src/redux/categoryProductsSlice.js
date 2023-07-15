import { createSlice } from "@reduxjs/toolkit";
import { meals } from "../data/meal";
import { filter } from "lodash";

const initialState = {
   allProducts: meals,
   filteredProducts: [],
   selectedType: "ana yemək",
};

const categoryProductsSlice = createSlice({
   name: "lang",
   initialState,
   reducers: {
      setFilterProduct: (state, action) => {
         state.filteredProducts = filter(
            meals,
            (meal) => meal.category === action.payload,
         );
      },
      setSelected: (state, action) => {
         state.selectedType = action.payload;
         state.filteredProducts = filter(
            meals,
            (meal) => meal.category === action.payload,
         );
      },
   },
});

export const {} = categoryProductsSlice.actions;

export default categoryProductsSlice.reducer;
