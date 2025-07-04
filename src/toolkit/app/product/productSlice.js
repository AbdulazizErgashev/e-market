import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../../data/db";

const initialState = {
  allProducts: productsData,
  filteredProducts: productsData,
  searchQuery: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;

      state.filteredProducts = state.allProducts.filter((product) => {
        const query = action.payload.toLowerCase();
        return (
          product.title.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      });
    },
  },
});

export const { setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
