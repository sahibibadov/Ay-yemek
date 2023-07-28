import { createSlice } from "@reduxjs/toolkit";
import { meals } from "../data/meal";
import { filter } from "lodash";


const initialState = {
   allProducts: meals,
   filteredProducts: [],
   selectedType: "ana yemək",
};


const categoryProductsSlice = createSlice({
   name: "categoryProductsSlice",
   initialState,
   reducers: {

      setFilterProduct: (state, action) => {
         state.filteredProducts = filter(
            state.allProducts,
            (meal) => meal.category === action.payload,
         );
      },

      setSelected: (state, action) => {
         state.selectedType = action.payload;
         state.filteredProducts = filter(
            state.filteredProducts,
            (meal) => meal.type === action.payload,
         );
      },
   },
});

export const { setFilterProduct, setSelected } = categoryProductsSlice.actions;

export default categoryProductsSlice.reducer;
